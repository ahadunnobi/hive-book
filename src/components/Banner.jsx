import Link from 'next/link';
import Image from 'next/image';

const Banner = () => {
  return (
    <div className="hero min-h-[65vh] bg-base-200 rounded-3xl overflow-hidden my-8 shadow-2xl relative border border-base-300">
      <div className="hero-content flex-col lg:flex-row-reverse p-0 gap-0 w-full max-w-none">
        {/* Right Side: Image */}
        <div className="w-full lg:w-1/2 h-[300px] lg:h-[65vh] relative overflow-hidden">
          <Image 
            src="/banner.png" 
            alt="Find Your Next Read" 
            fill
            className="object-cover transition-transform duration-700 hover:scale-105"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-base-200 lg:bg-gradient-to-r lg:from-base-200 to-transparent"></div>
        </div>

        {/* Left Side: Content */}
        <div className="w-full lg:w-1/2 p-8 md:p-16 flex flex-col justify-center items-start text-left z-20">
          <div className="badge badge-primary badge-outline mb-6 font-bold tracking-widest uppercase py-4 px-6">
            Discover Excellence
          </div>
          <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight text-base-content">
            Find Your <span className="text-primary italic">Next</span> Read
          </h1>
          <p className="text-lg md:text-xl mb-10 text-base-content/70 font-medium max-w-lg leading-relaxed">
            Dive into our curated collection of literary masterpieces. From timeless classics to modern gems, your journey starts here.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Link href="/all-books" className="btn btn-primary btn-lg rounded-full px-12 shadow-lg shadow-primary/30 hover:scale-105 transition-all">
              Browse Now
            </Link>
            <Link href="/about" className="btn btn-ghost btn-lg rounded-full px-12 border border-base-300 hover:bg-base-300 transition-all">
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
