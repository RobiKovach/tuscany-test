import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "./firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const isAuthenticated = !!user; // Якщо user існує, значить користувач залогінений

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("✅ User logged in:", user);
        setUser(user); // Оновлюємо глобальний стан
      } else {
        console.log("🔴 User logged out");
        setUser(null);
      }
    });

    return () => unsubscribe(); // Очищення підписки при розмонтуванні
  }, []);

  const logout = async () => {
    try {
      await signOut(auth);
      setUser(null);
      console.log("🔴 User successfully logged out");
    } catch (error) {
      console.error("❌ Logout error:", error);
    }
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, setUser, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
