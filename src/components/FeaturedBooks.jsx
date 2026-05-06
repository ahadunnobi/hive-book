import BookCard from "./BookCard";
import booksData from "../../public/data.json";

const FeaturedBooks = () => {
  // Select the top 8 books
  const featuredBooks = booksData.slice(0, 8);

  return (
    <section className="my-16">
      <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
        <div>
          <h2 className="text-4xl font-black mb-3 text-base-content">Top Featured Books</h2>
          <p className="text-base-content/60 text-lg">Discover our most popular and highly-rated reads.</p>
        </div>
        <button className="btn btn-outline btn-primary rounded-full px-8 hover:scale-105 transition-transform">
          View All Books →
        </button>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {featuredBooks.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedBooks;
