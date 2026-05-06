import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-base-100 flex flex-col items-center justify-center text-center px-4 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse delay-700"></div>
      
      <div className="relative z-10">
        <h1 className="text-[12rem] md:text-[18rem] font-black text-base-content/5 leading-none select-none">
          404
        </h1>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <div className="w-24 h-24 mb-8 bg-primary/10 rounded-full flex items-center justify-center animate-bounce">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-base-content mb-4 tracking-tight">
            Oops! Page Lost in the Stacks.
          </h2>
          <p className="text-xl text-base-content/60 max-w-md mx-auto mb-12">
            The book you're looking for has been misplaced or never existed. Let's get you back to the main library.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/" className="btn btn-primary btn-lg rounded-full px-12 shadow-xl shadow-primary/20 hover:scale-105 transition-all">
              Back to Home
            </Link>
            <Link href="/all-books" className="btn btn-outline btn-lg rounded-full px-12 bg-secondary">
              Browse All Books
            </Link>
          </div>
        </div>
      </div>

      {/* Decorative Floating Icons */}
      <div className="absolute top-20 right-[10%] animate-bounce delay-100 opacity-20">
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24"><path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3z"/></svg>
      </div>
      <div className="absolute bottom-20 left-[10%] animate-bounce delay-500 opacity-20">
        <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24"><path d="M21 5c-1.11-.35-2.33-.5-3.5-.5-1.95 0-4.05.4-5.5 1.5-1.45-1.1-3.55-1.5-5.5-1.5S2.45 5.4 1 6.5V19c1.45-1.1 3.55-1.5 5.5-1.5s4.05.4 5.5 1.5c1.45-1.1 3.55-1.5 5.5-1.5 1.17 0 2.39.15 3.5.5V5z"/></svg>
      </div>
    </div>
  );
}
