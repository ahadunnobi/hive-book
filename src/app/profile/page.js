"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useAuth } from "@/context/AuthContext";
import toast from "react-hot-toast";

const ProfilePage = () => {
  const { user, loading, logout } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      toast.error("Please login to access your profile");
      router.push("/login");
    }
  }, [user, loading, router]);

  if (loading || !user) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center">
        <span className="loading loading-spinner loading-lg text-primary"></span>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12 md:py-20 max-w-4xl">
      <div className="bg-base-100 rounded-[2.5rem] shadow-2xl overflow-hidden border border-base-200">
        {/* Profile Header Background */}
        <div className="h-48 bg-gradient-to-r from-primary to-secondary relative">
          <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>
        </div>
        
        {/* Profile Info Section */}
        <div className="px-8 pb-12 relative">
          {/* Avatar */}
          <div className="flex flex-col md:flex-row md:items-end gap-6 -mt-16 mb-8">
            <div className="avatar">
              <div className="w-32 md:w-40 rounded-full ring ring-base-100 ring-offset-base-100 ring-offset-4 shadow-2xl">
                <img src={user.photoUrl || `https://ui-avatars.com/api/?name=${user.name}&background=random&size=200`} alt={user.name} />
              </div>
            </div>
            <div className="pb-2">
              <h1 className="text-3xl md:text-4xl font-black text-base-content tracking-tight">{user.name}</h1>
              <p className="text-base-content/50 font-medium">{user.email}</p>
            </div>
            <div className="md:ml-auto pb-2 flex flex-col sm:flex-row gap-3">
              <Link href="/profile/update" className="btn btn-primary rounded-2xl px-8 font-bold shadow-lg shadow-primary/20">
                Update Information
              </Link>
              <button onClick={logout} className="btn btn-error btn-outline rounded-2xl px-8 font-bold">
                Logout Session
              </button>
            </div>
          </div>

          {/* User Details Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            <div className="bg-base-200/50 p-6 rounded-3xl border border-base-200">
              <h3 className="text-xs uppercase tracking-widest font-black text-base-content/30 mb-4">Account Type</h3>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <span className="text-xl font-bold">Premium Member</span>
              </div>
            </div>

            <div className="bg-base-200/50 p-6 rounded-3xl border border-base-200">
              <h3 className="text-xs uppercase tracking-widest font-black text-base-content/30 mb-4">Books Borrowed</h3>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <span className="text-xl font-bold">12 Books</span>
              </div>
            </div>

            <div className="bg-base-200/50 p-6 rounded-3xl border border-base-200">
              <h3 className="text-xs uppercase tracking-widest font-black text-base-content/30 mb-4">Member Since</h3>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center text-accent">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <span className="text-xl font-bold">May 2024</span>
              </div>
            </div>

            <div className="bg-base-200/50 p-6 rounded-3xl border border-base-200">
              <h3 className="text-xs uppercase tracking-widest font-black text-base-content/30 mb-4">Email Status</h3>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-success/10 flex items-center justify-center text-success">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <span className="text-xl font-bold">Verified</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
