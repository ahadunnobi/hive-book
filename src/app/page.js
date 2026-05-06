import Banner from "@/components/Banner";

export default function Home() {
  return (
    <div className="container mx-auto px-4 md:px-8 py-8">
      <Banner />
      
      <section className="my-16">
        <div className="flex flex-col md:flex-row justify-between items-end mb-8 gap-4">
          <div>
            <h2 className="text-3xl font-bold mb-2">Featured Books</h2>
            <p className="text-base-content/60">Handpicked selections for you this week.</p>
          </div>
          <button className="btn btn-ghost text-primary hover:bg-primary/10">View All Books →</button>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow cursor-pointer group">
              <figure className="aspect-[3/4] bg-base-200 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center text-base-content/20 font-bold text-4xl group-hover:scale-110 transition-transform">
                  Book {i}
                </div>
                <div className="absolute top-4 right-4 badge badge-primary font-bold">New</div>
              </figure>
              <div className="card-body p-6">
                <h3 className="card-title text-lg group-hover:text-primary transition-colors">The Great Adventure Vol. {i}</h3>
                <p className="text-sm text-base-content/60 mb-4">By Author Name</p>
                <div className="card-actions justify-between items-center">
                  <div className="flex items-center gap-1">
                    <div className="rating rating-xs">
                      <input type="radio" name={`rating-${i}`} className="mask mask-star-2 bg-orange-400" />
                      <input type="radio" name={`rating-${i}`} className="mask mask-star-2 bg-orange-400" />
                      <input type="radio" name={`rating-${i}`} className="mask mask-star-2 bg-orange-400" />
                      <input type="radio" name={`rating-${i}`} className="mask mask-star-2 bg-orange-400" checked readOnly />
                      <input type="radio" name={`rating-${i}`} className="mask mask-star-2 bg-orange-400" />
                    </div>
                    <span className="text-xs font-semibold">4.0</span>
                  </div>
                  <div className="text-primary font-bold">$19.99</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-primary/5 rounded-3xl p-8 md:p-12 my-16 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="max-w-xl text-center md:text-left">
          <h2 className="text-3xl font-black mb-4">Start Your Reading Journey Today</h2>
          <p className="text-lg text-base-content/70">Create a profile to save your favorite books, track your progress, and get personalized recommendations.</p>
        </div>
        <button className="btn btn-primary btn-lg rounded-full px-8">Get Started</button>
      </section>
    </div>
  );
}
