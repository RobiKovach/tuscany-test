import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDQtsSqlDudH3xQrPs-PgaEdGH_7g8s4BE",
  authDomain: "tuscana-test.firebaseapp.com",
  projectId: "tuscana-test",
  storageBucket: "tuscana-test.firebasestorage.app",
  messagingSenderId: "814351390391",
  appId: "1:814351390391:web:ab05bef598e2e5dc9b1f32",
  measurementId: "G-GZ06YT5BYZ",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
