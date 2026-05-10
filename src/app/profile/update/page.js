"use client";

import { useState, useEffect } from "react";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const UpdateProfilePage = () => {
  const { user, loading, updateUser } = useAuth();
  const router = useRouter();
  const [name, setName] = useState("");
  const [image, setImage] = useState("");

  useEffect(() => {
    if (!loading && !user) {
      router.push("/login");
    } else if (user) {
      setName(user.name || "");
      setImage(user.photoUrl || "");
    }
  }, [user, loading, router]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name) {
      toast.error("Name is required");
      return;
    }
    await updateUser({ name, image });
  };

  if (loading || !user) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center">
        <span className="loading loading-spinner loading-lg text-primary"></span>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12 md:py-20 max-w-2xl">
      <div className="bg-base-200 p-8 md:p-12 rounded-[3rem] border border-base-300 shadow-2xl">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-black text-base-content tracking-tight mb-2">Update Information</h2>
          <p className="text-base-content/60 font-medium">Keep your profile fresh and up to date!</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold">Full Name</span>
            </label>
            <input
              type="text"
              placeholder="Your name"
              className="input input-bordered w-full rounded-2xl bg-base-100 focus:ring-4 focus:ring-primary/10 transition-all"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold">Profile Image URL</span>
            </label>
            <input
              type="url"
              placeholder="https://example.com/photo.jpg"
              className="input input-bordered w-full rounded-2xl bg-base-100 focus:ring-4 focus:ring-primary/10 transition-all"
              value={image}
              onChange={(e) => setImage(e.target.value)}
            />
          </div>

          <div className="pt-6 flex flex-col gap-4">
            <button
              type="submit"
              className="btn btn-primary btn-block rounded-2xl text-lg font-bold shadow-lg shadow-primary/20 hover:scale-[1.02] transition-all"
            >
              Update Information
            </button>
            <button
              type="button"
              onClick={() => router.push("/profile")}
              className="btn btn-ghost btn-block rounded-2xl font-bold"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateProfilePage;
