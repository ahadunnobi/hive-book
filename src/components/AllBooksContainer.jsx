"use client";

import { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import BookCard from "./BookCard";

const AllBooksContainer = ({ initialBooks, categories }) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get("category") || "All");

  useEffect(() => {
    const cat = searchParams.get("category");
    if (cat) {
      setSelectedCategory(cat);
    } else {
      setSelectedCategory("All");
    }
  }, [searchParams]);

  const filteredBooks = initialBooks.filter((book) => {
    const matchesSearch = book.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || book.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleCategoryChange = (catName) => {
    setSelectedCategory(catName);
    const params = new URLSearchParams(searchParams);
    if (catName === "All") {
      params.delete("category");
    } else {
      params.set("category", catName);
    }
    router.push(`/all-books?${params.toString()}`, { scroll: false });
  };

  return (
    <div className="flex flex-col lg:flex-row gap-8">
      {/* Sidebar */}
      <aside className="w-full lg:w-64 space-y-6">
        <div className="bg-base-200/50 p-6 rounded-3xl border border-base-300">
          <h3 className="text-xl font-bold mb-4 text-base-content px-2">Categories</h3>
          <ul className="menu bg-transparent w-full p-0 gap-1">
            <li>
              <button 
                onClick={() => handleCategoryChange("All")}
                className={`rounded-xl font-bold py-3 ${selectedCategory === "All" ? "bg-primary text-primary-content" : "hover:bg-primary/10"}`}
              >
                All Genres
              </button>
            </li>
            {categories.map((cat) => (
              <li key={cat.id}>
                <button 
                  onClick={() => handleCategoryChange(cat.name)}
                  className={`rounded-xl font-bold py-3 ${selectedCategory === cat.name ? "bg-primary text-primary-content" : "hover:bg-primary/10"}`}
                >
                  {cat.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
        
        {/* Quick Info */}
        <div className="hidden lg:block bg-primary/5 p-6 rounded-3xl border border-primary/20">
          <h4 className="font-bold text-primary mb-2">Member Perk</h4>
          <p className="text-xs text-base-content/60 leading-relaxed font-medium">
            Join the BookHive club to get 20% off on your first 3 purchases in any category!
          </p>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 space-y-8">
        {/* Search Bar Section */}
        <div className="relative w-full">
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
        <div className="flex items-center justify-between border-b border-base-200 pb-4">
          <div className="flex items-center gap-3">
            <span className="badge badge-primary font-bold">{selectedCategory}</span>
            <p className="text-base-content/60 font-semibold">
              Showing {filteredBooks.length} {filteredBooks.length === 1 ? "book" : "books"}
            </p>
          </div>
        </div>

        {/* Grid Section */}
        {filteredBooks.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
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
            <p className="text-base-content/60">Try selecting a different category or refining your search.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AllBooksContainer;
