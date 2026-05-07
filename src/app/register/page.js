"use client";

import { useState } from "react";
import { useAuth } from "@/context/AuthContext";
import Link from "next/link";
import { toast } from "react-hot-toast";

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    photoUrl: "",
    password: "",
  });
  
  const { register, googleLogin } = useAuth();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, photoUrl, password } = formData;
    
    if (!name || !email || !password) {
      toast.error("Please fill in required fields");
      return;
    }
    
    register(name, email, photoUrl, password);
  };

  return (
    <div className="min-h-[90vh] flex items-center justify-center px-4 py-12 bg-base-100 text-base-content">
      <div className="max-w-md w-full space-y-8 p-10 bg-base-200 rounded-[3rem] border border-base-300 shadow-2xl">
        <div className="text-center">
          <h2 className="text-4xl font-black text-base-content tracking-tight mb-2">Registration</h2>
          <p className="text-base-content/60 font-medium">Join our community of book lovers!</p>
        </div>
        
        <form className="mt-8 space-y-4" onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold">Full Name</span>
              </label>
              <input
                name="name"
                type="text"
                placeholder="John Doe"
                className="input input-bordered w-full rounded-2xl bg-base-100 focus:ring-4 focus:ring-primary/10 transition-all"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold">Email Address</span>
              </label>
              <input
                name="email"
                type="email"
                placeholder="email@example.com"
                className="input input-bordered w-full rounded-2xl bg-base-100 focus:ring-4 focus:ring-primary/10 transition-all"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold">Photo URL (Optional)</span>
              </label>
              <input
                name="photoUrl"
                type="url"
                placeholder="https://example.com/photo.jpg"
                className="input input-bordered w-full rounded-2xl bg-base-100 focus:ring-4 focus:ring-primary/10 transition-all"
                value={formData.photoUrl}
                onChange={handleChange}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold">Password</span>
              </label>
              <input
                name="password"
                type="password"
                placeholder="••••••••"
                className="input input-bordered w-full rounded-2xl bg-base-100 focus:ring-4 focus:ring-primary/10 transition-all"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="pt-4">
            <button
              type="submit"
              className="btn btn-primary btn-block rounded-2xl text-lg font-bold shadow-lg shadow-primary/20 hover:scale-[1.02] transition-all"
            >
              Register
            </button>
          </div>
        </form>

        <div className="divider text-base-content/30 text-xs font-bold uppercase tracking-widest">Or Join With</div>

        <button
          onClick={googleLogin}
          className="btn btn-outline btn-block rounded-2xl border-base-300 hover:bg-base-200 transition-all font-bold flex items-center justify-center gap-3"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
            />
            <path
              fill="currentColor"
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
            />
            <path
              fill="currentColor"
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
            />
            <path
              fill="currentColor"
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
            />
          </svg>
          Register with Google
        </button>

        <p className="text-center text-base-content/60 font-medium">
          Already have an account?{" "}
          <Link href="/login" className="text-primary hover:underline font-bold">
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
}
