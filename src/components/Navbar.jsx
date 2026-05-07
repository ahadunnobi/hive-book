import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  // Mock authentication state for now
  const isLoggedIn = false;
  const userName = "John Doe";

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
        {isLoggedIn ? (
          <div className="flex items-center gap-4">
            <span className="hidden md:inline-block font-semibold text-base-content/70">Hi, {userName}</span>
            <button className="btn btn-error btn-sm btn-outline rounded-full px-6">Logout</button>
          </div>
        ) : (
          <Link href="/login" className="btn btn-primary btn-sm md:btn-md rounded-full px-8 shadow-lg hover:shadow-primary/20 transition-all">
            Login
          </Link>
        )}
        
        {/* Hamburger Menu on the right for small devices */}
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden text-black">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 border border-base-200">
            <li><Link href="/" className="font-medium text-base-content">Home</Link></li>
            <li><Link href="/all-books" className="font-medium text-base-content">All Books</Link></li>
            <li><Link href="/profile" className="font-medium text-base-content">My Profile</Link></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
