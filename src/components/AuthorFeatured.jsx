const AuthorFeatured = () => {
  return (
    <section className="my-24 relative overflow-hidden rounded-[2rem] bg-neutral text-neutral-content p-8 md:p-20 border border-neutral-focus shadow-2xl">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-[100px] -mr-48 -mt-48"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/10 rounded-full blur-[100px] -ml-32 -mb-32"></div>
      
      <div className="flex flex-col lg:flex-row items-center gap-12 relative z-10">
        <div className="w-full lg:w-1/2 space-y-8 text-center lg:text-left">
          <div className="badge badge-primary font-bold px-6 py-4 uppercase tracking-widest">Author Spotlight</div>
          <h2 className="text-5xl md:text-7xl font-black leading-tight text-white">
            Rabindranath <span className="text-primary italic text-6xl md:text-8xl">Tagore</span>
          </h2>
          <p className="text-xl opacity-80 leading-relaxed max-w-xl mx-auto lg:mx-0">
            Discover the profound wisdom and lyrical beauty of the first non-European to win the Nobel Prize in Literature. His works continue to inspire millions across the globe.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button className="btn btn-primary btn-lg rounded-full px-12 hover:scale-105 transition-all shadow-lg shadow-primary/20">
              Explore His Works
            </button>
            <button className="btn btn-outline btn-lg rounded-full px-12 border-white/20 text-white hover:bg-white/10 transition-all">
              Read Biography
            </button>
          </div>
        </div>

        <div className="w-full lg:w-1/2 grid grid-cols-2 gap-4">
          <div className="space-y-4">
            <div className="aspect-[3/4] bg-white/5 rounded-3xl p-6 border border-white/10 flex flex-col justify-end hover:bg-white/10 transition-all cursor-pointer group">
              <h4 className="font-bold text-xl mb-1 group-hover:text-primary">Gitanjali</h4>
              <p className="text-sm opacity-60">Poetry Collection</p>
            </div>
            <div className="aspect-[3/4] bg-white/5 rounded-3xl p-6 border border-white/10 flex flex-col justify-end hover:bg-white/10 transition-all cursor-pointer group">
              <h4 className="font-bold text-xl mb-1 group-hover:text-primary">Gora</h4>
              <p className="text-sm opacity-60">Classic Novel</p>
            </div>
          </div>
          <div className="space-y-4 pt-12">
            <div className="aspect-[3/4] bg-white/5 rounded-3xl p-6 border border-white/10 flex flex-col justify-end hover:bg-white/10 transition-all cursor-pointer group">
              <h4 className="font-bold text-xl mb-1 group-hover:text-primary">Chokher Bali</h4>
              <p className="text-sm opacity-60">Romantic Drama</p>
            </div>
            <div className="aspect-[3/4] bg-white/5 rounded-3xl p-6 border border-white/10 flex flex-col justify-end hover:bg-white/10 transition-all cursor-pointer group">
              <h4 className="font-bold text-xl mb-1 group-hover:text-primary">Shesher Kobita</h4>
              <p className="text-sm opacity-60">Lyrical Novel</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthorFeatured;
