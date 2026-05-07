"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  // Load user from localStorage on initial render
  useEffect(() => {
    const storedUser = localStorage.getItem("bookhive_user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  const login = (email, password) => {
    const users = JSON.parse(localStorage.getItem("bookhive_users") || "[]");
    const foundUser = users.find((u) => u.email === email && u.password === password);

    if (foundUser) {
      const { password, ...userWithoutPassword } = foundUser;
      setUser(userWithoutPassword);
      localStorage.setItem("bookhive_user", JSON.stringify(userWithoutPassword));
      toast.success("Login successful!");
      router.push("/");
      return true;
    } else {
      toast.error("Invalid email or password");
      return false;
    }
  };

  const register = (name, email, photoUrl, password) => {
    const users = JSON.parse(localStorage.getItem("bookhive_users") || "[]");
    const userExists = users.some((u) => u.email === email);

    if (userExists) {
      toast.error("User already exists with this email");
      return false;
    }

    const newUser = { name, email, photoUrl, password };
    users.push(newUser);
    localStorage.setItem("bookhive_users", JSON.stringify(users));
    
    toast.success("Registration successful! Please login.");
    router.push("/login");
    return true;
  };

  const googleLogin = () => {
    // Mocking Google Login for now
    const mockUser = {
      name: "Google User",
      email: "googleuser@gmail.com",
      photoUrl: "https://lh3.googleusercontent.com/a/default-user=s96-c",
    };
    setUser(mockUser);
    localStorage.setItem("bookhive_user", JSON.stringify(mockUser));
    toast.success("Logged in with Google!");
    router.push("/");
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("bookhive_user");
    toast.success("Logged out successfully");
    router.push("/");
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, register, googleLogin, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
