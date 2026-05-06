const CallToAction = () => {
  return (
    <section className="bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20 rounded-[3rem] p-8 md:p-16 my-20 flex flex-col md:flex-row items-center justify-between gap-12 relative overflow-hidden shadow-2xl">
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl -mr-32 -mt-32"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/20 rounded-full blur-3xl -ml-32 -mb-32"></div>
      
      <div className="max-w-xl text-center md:text-left z-10">
        <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight text-base-content text-secondary">
          Start Your <span className="text-primary italic">Reading Journey</span> Today
        </h2>
        <p className="text-xl text-warning text-base-content/70 leading-relaxed font-medium">
          Create a profile to save your favorite books, track your progress, and get personalized recommendations.
        </p>
      </div>
      <button className="btn btn-primary btn-lg rounded-full px-12 shadow-xl shadow-primary/30 hover:scale-105 transition-all z-10 font-bold uppercase tracking-widest">
        Get Started For Free
      </button>
    </section>
  );
};

export default CallToAction;
