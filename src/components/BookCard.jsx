"use client";

import Link from "next/link";

const BookCard = ({ book }) => {
  return (
    <div className="card bg-base-100 shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer group border border-base-200 flex flex-col h-full overflow-hidden">
      {/* Book Cover */}
      <figure className="aspect-[4/3] bg-gradient-to-br from-primary/5 to-secondary/5 relative overflow-hidden group-hover:scale-105 transition-transform duration-500">
        {book.image_url ? (
          <img 
            src={book.image_url} 
            alt={book.title} 
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.onerror = null; 
              e.target.style.display = 'none';
              e.target.parentNode.classList.add('flex', 'items-center', 'justify-center');
              e.target.parentNode.innerHTML = `<div class="text-primary/20 font-black text-2xl uppercase tracking-tighter -rotate-12 select-none">${book.category}</div>`;
            }}
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-primary/20 font-black text-2xl uppercase tracking-tighter -rotate-12 select-none">
            {book.category}
          </div>
        )}
        <div className="absolute top-2 right-2 badge badge-primary badge-xs font-bold shadow-md">Top Rated</div>
      </figure>

      {/* Book Info */}
      <div className="card-body p-3 flex flex-col flex-grow gap-1">
        <div className="flex-grow">
          <div className="flex justify-between items-start mb-0.5">
            <div className="badge badge-secondary badge-outline text-[8px] font-bold uppercase tracking-wider h-4">
              {book.category}
            </div>
            <div className="flex items-center gap-0.5">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-orange-400 fill-current" viewBox="0 0 24 24">
                <path d="M12 .587l3.668 7.431 8.332 1.21-6.001 5.85 1.416 8.293L12 18.897l-7.417 3.901 1.416-8.293-6.001-5.85 8.332-1.21L12 .587z"/>
              </svg>
              <span className="text-[10px] font-bold text-base-content/80">{book.rating || "4.5"}</span>
            </div>
          </div>
          <h3 className="text-sm font-bold line-clamp-1 group-hover:text-primary transition-colors leading-tight text-base-content">
            {book.title}
          </h3>
          <p className="text-[10px] text-base-content/50 font-medium italic mb-1">by {book.author}</p>
          <p className="text-[10px] text-base-content/70 line-clamp-2 leading-tight mb-1">
            {book.description}
          </p>
        </div>
        
        <div className="card-actions flex-col gap-1.5 mt-auto">
          <div className="flex items-center justify-between w-full">
            <span className="text-base font-black text-primary">${book.price || "19.99"}</span>
            <span className="text-[9px] font-medium text-base-content/40 uppercase tracking-tighter">{book.available_quantity} left</span>
          </div>
          <Link href={`/book/${book.id}`} className="w-full">
            <button className="btn btn-primary btn-xs btn-block rounded-md group-hover:shadow-lg group-hover:shadow-primary/20 transition-all font-bold">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
