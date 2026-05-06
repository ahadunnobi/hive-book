import AllBooksContainer from "@/components/AllBooksContainer";
import { fetchBooks, fetchCategories } from "@/lib/dataFetcher";
import { Suspense } from "react";

export const metadata = {
  title: "All Books | BookHive",
  description: "Explore our extensive collection of books across all genres.",
};

export default async function AllBooksPage() {
  const [books, categories] = await Promise.all([
    fetchBooks(),
    fetchCategories()
  ]);

  return (
    <div className="container mx-auto px-4 md:px-8 py-12">
      <div className="mb-12">
        <h1 className="text-4xl md:text-6xl font-black text-primary mb-4 tracking-tight">
          Explore Our <span className="italic">Library</span>
        </h1>
        <p className="text-xl text-base-content font-medium max-w-2xl">
          Search through thousands of titles and find your next masterpiece.
        </p>
      </div>

      <Suspense fallback={<div>Loading books...</div>}>
        <AllBooksContainer initialBooks={books} categories={categories} />
      </Suspense>
    </div>
  );
}
