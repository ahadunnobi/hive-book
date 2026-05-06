import AllBooksContainer from "@/components/AllBooksContainer";
import { fetchBooks } from "@/lib/dataFetcher";

export const metadata = {
  title: "All Books | BookHive",
  description: "Explore our extensive collection of books across all genres.",
};

export default async function AllBooksPage() {
  const books = await fetchBooks();

  return (
    <div className="container mx-auto px-4 md:px-8 py-12">
      <div className="mb-12">
        <h1 className="text-4xl md:text-6xl font-black text-base-content mb-4 tracking-tight">
          Explore Our <span className="text-primary italic">Library</span>
        </h1>
        <p className="text-xl text-base-content/60 max-w-2xl font-medium">
          Search through thousands of titles and find your next masterpiece.
        </p>
      </div>

      <AllBooksContainer initialBooks={books} />
    </div>
  );
}
