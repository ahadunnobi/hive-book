"use client";

import { useState } from "react";
import BookCard from "./BookCard";

const AllBooksContainer = ({ initialBooks }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredBooks = initialBooks.filter((book) =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-12">
      {/* Search Bar Section */}
      <div className="relative max-w-3xl">
        <div className="absolute inset-y-0 left-6 flex items-center pointer-events-none">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-base-content/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
        <input
          type="text"
          placeholder="Search by book title..."
          className="input input-bordered w-full pl-16 py-8 rounded-2xl text-xl shadow-lg focus:ring-4 focus:ring-primary/10 transition-all border-base-300"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        {searchTerm && (
          <button 
            onClick={() => setSearchTerm("")}
            className="absolute inset-y-0 right-6 flex items-center text-base-content/40 hover:text-primary transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        )}
      </div>

      {/* Results Info */}
      <div className="flex items-center justify-between">
        <p className="text-base-content/60 font-semibold">
          Showing {filteredBooks.length} {filteredBooks.length === 1 ? "book" : "books"}
        </p>
      </div>

      {/* Grid Section */}
      {filteredBooks.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredBooks.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      ) : (
        <div className="py-20 text-center bg-base-200/50 rounded-[3rem] border-2 border-dashed border-base-300">
          <div className="w-20 h-20 bg-base-100 rounded-full flex items-center justify-center mx-auto mb-6 text-base-content/20 shadow-inner">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-base-content mb-2">No books found</h3>
          <p className="text-base-content/60">Try searching for a different title or keyword.</p>
        </div>
      )}
    </div>
  );
};

export default AllBooksContainer;
