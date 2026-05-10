"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import toast from "react-hot-toast";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const { data: session, isPending, error } = authClient.useSession();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    if (!isPending) {
      if (session?.user) {
        setUser({ ...session.user, photoUrl: session.user.image });
      } else {
        setUser(null);
      }
      setLoading(false);
    }
  }, [session, isPending]);

  const login = async (email, password) => {
    setLoading(true);
    const { data, error } = await authClient.signIn.email({
      email,
      password,
    }, {
      onSuccess: () => {
        toast.success("Login successful!");
        router.push("/");
      },
      onError: (ctx) => {
        toast.error(ctx.error.message || "Invalid email or password");
      }
    });
    setLoading(false);
    return !error;
  };

  const register = async (name, email, photoUrl, password) => {
    setLoading(true);
    const { data, error } = await authClient.signUp.email({
      email,
      password,
      name,
      image: photoUrl,
    }, {
      onSuccess: async () => {
        await authClient.signOut();
        setUser(null);
        toast.success("Registration successful! Please login.");
        router.push("/login");
      },
      onError: (ctx) => {
        toast.error(ctx.error.message || "Failed to register");
      }
    });
    setLoading(false);
    return !error;
  };

  const googleLogin = async () => {
    setLoading(true);
    try {
      await authClient.signIn.social({
        provider: "google",
        callbackURL: "/",
      });
    } catch (error) {
      setLoading(false);
      console.error("Google login error:", error);
    }
  };

  const logout = async () => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          setUser(null);
          toast.success("Logged out successfully");
          router.push("/");
        },
      },
    });
  };

  const updateUser = async ({ name, image }) => {
    setLoading(true);
    try {
      const { error } = await authClient.updateUser({ name, image });
      if (error) {
        toast.error(error.message || "Failed to update profile");
        return false;
      }
      toast.success("Profile updated successfully!");
      router.push("/profile");
      return true;
    } catch (err) {
      toast.error("An unexpected error occurred");
      return false;
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthContext.Provider value={{ user, loading: loading || isPending, login, register, googleLogin, logout, updateUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
