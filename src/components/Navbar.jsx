"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useAuth } from '@/context/AuthContext';

const Navbar = () => {
  const { user, loading, logout } = useAuth();

  return (
    <div className="navbar bg-base-100 shadow-md px-4 md:px-8 sticky top-0 z-50">
      <div className="navbar-start">
        <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <Image src="/logo.png" alt="BookHive Logo" width={40} height={40} className="rounded-lg shadow-sm" />
          <span className="text-xl font-bold tracking-tight text-base-content hidden sm:inline-block">
            Book<span className="text-primary"> Hive</span>
          </span>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-4 font-medium text-base-content">
          <li><Link href="/" className="hover:text-primary transition-colors focus:bg-primary/10">Home</Link></li>
          <li><Link href="/all-books" className="hover:text-primary transition-colors focus:bg-primary/10">All Books</Link></li>
          <li><Link href="/profile" className="hover:text-primary transition-colors focus:bg-primary/10">My Profile</Link></li>
        </ul>
      </div>
      <div className="navbar-end gap-2">
        {loading ? (
          <div className="flex items-center gap-3">
            <div className="hidden md:flex flex-col items-end gap-1">
              <div className="skeleton h-3 w-20"></div>
              <div className="skeleton h-2 w-24 opacity-50"></div>
            </div>
            <div className="skeleton w-10 h-10 rounded-full"></div>
          </div>
        ) : user ? (
          <div className="flex items-center gap-4">
            <div className="hidden md:flex flex-col items-end">
              <span className="font-bold text-sm text-base-content">{user.name}</span>
              <span className="text-[10px] text-base-content/50 font-medium">{user.email}</span>
            </div>
            <div className="dropdown dropdown-end">
              <div tabIndex={0} role="button" className="avatar cursor-pointer hover:opacity-80 transition-opacity">
                <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <img src={user.photoUrl || "https://ui-avatars.com/api/?name=" + user.name} alt={user.name} />
                </div>
              </div>
              <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52 border border-base-200">
                <li className="md:hidden p-2 border-b border-base-200 mb-2">
                  <div className="flex flex-col items-start gap-0">
                    <span className="font-bold">{user.name}</span>
                    <span className="text-xs opacity-60">{user.email}</span>
                  </div>
                </li>
                <li><Link href="/profile">My Profile</Link></li>
                <li><button onClick={logout} className="text-error font-bold">Logout</button></li>
              </ul>
            </div>
          </div>
        ) : (
          <Link href="/login" className="btn btn-primary btn-sm md:btn-md rounded-full px-8 shadow-lg hover:shadow-primary/20 transition-all font-bold">
            Login
          </Link>
        )}
        
        {/* Hamburger Menu on the right for small devices */}
        <div className="dropdown dropdown-end lg:hidden">
          <div tabIndex={0} role="button" className="btn btn-ghost text-base-content">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 border border-base-200">
            <li><Link href="/" className="font-medium text-base-content">Home</Link></li>
            <li><Link href="/all-books" className="font-medium text-base-content">All Books</Link></li>
            <li><Link href="/profile" className="font-medium text-base-content">My Profile</Link></li>
            {!user && <li><Link href="/login" className="font-bold text-primary">Login</Link></li>}
        </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
