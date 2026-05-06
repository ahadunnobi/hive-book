import Banner from "@/components/Banner";
import FeaturedBooks from "@/components/FeaturedBooks";

export default function Home() {
  return (
    <div className="container mx-auto px-4 md:px-8 py-8">
      <Banner />
      
      <FeaturedBooks />

      <section className="bg-gradient-to-br from-primary/5 to-secondary/5 border border-primary/10 rounded-[3rem] p-8 md:p-16 my-20 flex flex-col md:flex-row items-center justify-between gap-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
        <div className="max-w-xl text-center md:text-left z-10">
          <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight text-base-content">Start Your Reading Journey Today</h2>
          <p className="text-xl text-base-content/70 leading-relaxed">Create a profile to save your favorite books, track your progress, and get personalized recommendations.</p>
        </div>
        <button className="btn btn-primary btn-lg rounded-full px-12 shadow-xl shadow-primary/20 hover:scale-105 transition-all z-10">
          Get Started For Free
        </button>
      </section>
    </div>
  );
}
