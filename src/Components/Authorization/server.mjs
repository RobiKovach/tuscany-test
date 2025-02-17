import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import Stripe from "stripe";

// Отримуємо правильний шлях до `.env`
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Завантажуємо `.env`
dotenv.config();

const app = express();
app.use(express.json());
app.use(cors({ origin: "*" })); // 🔹 Дозволяє запити з будь-якого домену

// Підключення до MongoDB
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.error("❌ MongoDB Connection Error:", err));

// Схема користувача
const UserSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  uid: { type: String, required: true },
});

const User = mongoose.model("User", UserSchema);

// Stripe ініціалізація
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// ✅ Реєстрація користувача
app.post("/register", async (req, res) => {
  const { email, uid } = req.body;
  try {
    let user = await User.findOne({ email });
    if (!user) {
      user = new User({ email, uid });
      await user.save();
    }
    res.status(201).json({ message: "User registered successfully!", user });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// ✅ Створення платежу у Stripe
app.post("/api/create-payment-intent", async (req, res) => {
  const { amount } = req.body;

  if (!amount) {
    return res.status(400).json({ error: "Amount is required" });
  }

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount * 100, // 🔥 Stripe працює у центах
      currency: "eur",
    });

    res.json({ clientSecret: paymentIntent.client_secret });
  } catch (error) {
    console.error("❌ Stripe Error:", error);
    res.status(500).json({ error: error.message });
  }
});

// ✅ Головна сторінка API
app.get("/", (req, res) => {
  res.send("✅ Server is running! 🚀");
});

// Запуск сервера
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
