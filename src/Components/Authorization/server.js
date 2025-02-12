import express from "express";
import mongoose from "mongoose";
import cors from "cors";

import path from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";

// Отримуємо правильний шлях до `.env`
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Завантажуємо `.env` з кореневої папки
dotenv.config({ path: path.resolve(__dirname, "../../../.env") });

const app = express();
app.use(express.json());
app.use(cors());

app.use((req, res, next) => {
  res.setHeader("Cross-Origin-Opener-Policy", "same-origin-allow-popups");
  res.setHeader("Cross-Origin-Embedder-Policy", "require-corp");
  next();
});

// Підключення до MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Схема користувача
const UserSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  uid: { type: String, required: true },
});

const User = mongoose.model("User", UserSchema);

// Реєстрація користувача
app.post("/register", async (req, res) => {
  const { email, uid } = req.body;
  try {
    let user = await User.findOne({ email });
    if (!user) {
      user = new User({ email, uid });
      await user.save();
    }
    res.status(201).json({ message: "User registered successfully!" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Запуск сервера
app.get("/", (req, res) => {
  res.send("Server is running! 🚀");
});
app.listen(5000, () => console.log("Server running on port 5000"));
