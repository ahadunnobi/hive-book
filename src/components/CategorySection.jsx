import Link from "next/link";
import { fetchCategories } from "@/lib/dataFetcher";

const CategorySection = async () => {
  const categoriesData = await fetchCategories();
  return (
    <section className="my-24 py-16 px-4 md:px-8 bg-gradient-to-br from-primary/10 via-base-100 to-secondary/10 rounded-[4rem] border border-base-300 shadow-xl relative overflow-hidden">
      <div className="absolute -top-24 -left-24 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-secondary/10 rounded-full blur-3xl animate-pulse"></div>
      
      <div className="text-center mb-16 relative z-10">
        <h2 className="text-4xl md:text-5xl font-black mb-4 text-primary drop-shadow-sm">Explore by Category</h2>
        <p className="text-lg text-base-content/70 max-w-2xl mx-auto font-medium italic">
          Find your favorite books by browsing through our wide range of categories. From poetry to philosophy, we have it all.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 md:gap-6">
        {categoriesData.map((cat) => (
          <Link 
            href={`/all-books?category=${cat.name}`}
            key={cat.id} 
            className="group p-6 bg-base-100 rounded-3xl border border-base-200 hover:border-primary hover:bg-primary/5 hover:scale-105 transition-all cursor-pointer text-center flex flex-col items-center justify-center shadow-sm hover:shadow-xl"
          >
            <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-4 group-hover:scale-110 transition-transform">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h3 className="font-bold text-sm md:text-base text-base-content group-hover:text-primary transition-colors">{cat.name}</h3>
            <span className="text-[10px] uppercase tracking-widest text-base-content/40 mt-1 font-semibold group-hover:text-primary/60">Collection</span>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default CategorySection;
