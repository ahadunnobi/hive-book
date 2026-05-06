const AuthorFeatured = () => {
  const featBook =[
    "https://cdn.exoticindia.com/images/products/original/books-2019-003/bae398.webp",
    "https://media-cache.cinematerial.com/p/500x/4ikme4is/chokher-bali-german-dvd-movie-cover.jpg?v=1456292954",
    "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1182381908i/1268541.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR64fVqgy9cPVvUF_Vwc5uBdGknIA3j4Hey-A&s"
  ]
  return (
    <section className="my-16 relative overflow-hidden rounded-[4rem] bg-neutral text-neutral-content p-8 md:p-12 border border-neutral-focus shadow-2xl min-h-screen lg:min-h-[70vh] flex items-center">
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

        <div className="w-full lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {[
            { title: "Gitanjali", type: "Poetry Collection", img: featBook[0] },
            { title: "Gora", type: "Classic Novel", img: featBook[1] },
            { title: "Chokher Bali", type: "Romantic Drama", img: featBook[2] },
            { title: "Shesher Kobita", type: "Lyrical Novel", img: featBook[3] }
          ].map((book, idx) => (
            <div 
              key={idx} 
              className={`aspect-[3/4] relative rounded-2xl overflow-hidden border border-white/10 group cursor-pointer hover:border-primary/50 transition-all ${idx % 2 === 1 ? 'sm:mt-8' : ''}`}
            >
              <img src={book.img} alt={book.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80"></div>
              <div className="absolute inset-0 p-6 flex flex-col justify-end z-10">
                <div className="absolute top-0 right-0 w-20 h-20 bg-primary/10 rounded-full blur-2xl group-hover:bg-primary/30 transition-colors"></div>
                <h4 className="font-bold text-lg mb-1 group-hover:text-primary transition-colors text-white">{book.title}</h4>
                <p className="text-xs opacity-70 text-white font-medium">{book.type}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AuthorFeatured;
