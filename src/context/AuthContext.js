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
      onSuccess: () => {
        toast.success("Registration successful!");
        router.push("/");
      },
      onError: (ctx) => {
        toast.error(ctx.error.message || "Failed to register");
      }
    });
    setLoading(false);
    return !error;
  };

  const googleLogin = async () => {
    await authClient.signIn.social({
      provider: "google",
      callbackURL: "/",
    });
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

  return (
    <AuthContext.Provider value={{ user, loading: loading || isPending, login, register, googleLogin, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
