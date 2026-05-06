const AuthorFeatured = () => {
  return (
    <section className="my-16 relative overflow-hidden rounded-[4rem] bg-neutral text-neutral-content p-8 md:p-12 border border-neutral-focus shadow-2xl min-h-[60vh] flex items-center">
      {/* Dynamic Spotlight Effect */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_50%_50%,rgba(var(--p),0.15),transparent_70%)] animate-pulse"></div>
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-[100px] -mr-32 -mt-32"></div>
      
      <div className="flex flex-col lg:flex-row items-center gap-12 relative z-10 w-full">
        <div className="w-full lg:w-1/2 space-y-6 text-center lg:text-left">
          <div className="badge badge-primary font-bold px-6 py-4 uppercase tracking-widest shadow-lg shadow-primary/20">Author Spotlight</div>
          <h2 className="text-4xl md:text-6xl font-black leading-tight text-white drop-shadow-md">
            Rabindranath <span className="text-primary italic">Tagore</span>
          </h2>
          <p className="text-lg opacity-80 leading-relaxed max-w-xl mx-auto lg:mx-0 font-medium">
            Discover the profound wisdom and lyrical beauty of the first non-European to win the Nobel Prize in Literature.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button className="btn btn-primary rounded-full px-10 hover:scale-105 transition-all shadow-lg shadow-primary/20">
              Explore Works
            </button>
            <button className="btn btn-outline rounded-full px-10 border-white/20 text-white hover:bg-white/10 transition-all">
              Biography
            </button>
          </div>
        </div>

        <div className="w-full lg:w-1/2 grid grid-cols-2 gap-4">
          <div className="space-y-4">
            <div className="aspect-video lg:aspect-[3/2] bg-white/5 rounded-2xl p-6 border border-white/10 flex flex-col justify-end hover:bg-white/10 transition-all cursor-pointer group hover:border-primary/50 relative overflow-hidden">
               <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/20 transition-colors"></div>
              <h4 className="font-bold text-lg mb-1 group-hover:text-primary relative z-10">Gitanjali</h4>
              <p className="text-xs opacity-60 relative z-10">Poetry Collection</p>
            </div>
            <div className="aspect-video lg:aspect-[3/2] bg-white/5 rounded-2xl p-6 border border-white/10 flex flex-col justify-end hover:bg-white/10 transition-all cursor-pointer group hover:border-primary/50 relative overflow-hidden">
               <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/20 transition-colors"></div>
              <h4 className="font-bold text-lg mb-1 group-hover:text-primary relative z-10">Gora</h4>
              <p className="text-xs opacity-60 relative z-10">Classic Novel</p>
            </div>
          </div>
          <div className="space-y-4 pt-8">
            <div className="aspect-video lg:aspect-[3/2] bg-white/5 rounded-2xl p-6 border border-white/10 flex flex-col justify-end hover:bg-white/10 transition-all cursor-pointer group hover:border-primary/50 relative overflow-hidden">
               <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/20 transition-colors"></div>
              <h4 className="font-bold text-lg mb-1 group-hover:text-primary relative z-10">Chokher Bali</h4>
              <p className="text-xs opacity-60 relative z-10">Romantic Drama</p>
            </div>
            <div className="aspect-video lg:aspect-[3/2] bg-white/5 rounded-2xl p-6 border border-white/10 flex flex-col justify-end hover:bg-white/10 transition-all cursor-pointer group hover:border-primary/50 relative overflow-hidden">
               <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/20 transition-colors"></div>
              <h4 className="font-bold text-lg mb-1 group-hover:text-primary relative z-10">Shesher Kobita</h4>
              <p className="text-xs opacity-60 relative z-10">Lyrical Novel</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthorFeatured;
