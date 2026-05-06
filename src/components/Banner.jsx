import Link from 'next/link';

const Banner = () => {
  return (
    <div className="hero min-h-[60vh] bg-base-200 rounded-2xl overflow-hidden my-8 shadow-xl relative">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20"></div>
      <div className="hero-content text-center relative z-10">
        <div className="max-w-2xl">
          <h1 className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Find Your Next Read
          </h1>
          <p className="text-lg md:text-xl mb-10 text-base-content/80 font-medium">
            Discover a world of stories, knowledge, and inspiration. Your perfect book is just a click away in our extensive collection.
          </p>
          <Link href="/all-books" className="btn btn-primary btn-lg px-12 rounded-full hover:scale-105 transition-transform shadow-lg">
            Browse Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
