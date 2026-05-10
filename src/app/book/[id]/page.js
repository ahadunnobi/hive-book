"use client";

import { useEffect, useState, use } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import { fetchBookById } from "@/lib/dataFetcher";
import toast from "react-hot-toast";
import Image from "next/image";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const BookDetailsPage = ({ params }) => {
  const unwrappedParams = use(params);
  const { id } = unwrappedParams;
  const { user, loading: authLoading } = useAuth();
  const router = useRouter();
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!authLoading && !user) {
      toast.error("Please login to view book details");
      router.push("/login");
      return;
    }

    const getBook = async () => {
      try {
        const data = await fetchBookById(id);
        setBook(data);
      } catch (error) {
        console.error("Error fetching book:", error);
      } finally {
        setLoading(false);
      }
    };

    if (user) {
      getBook();
    }
  }, [id, user, authLoading, router]);

  const handleBorrow = () => {
    toast.success(`You have successfully borrowed "${book.title}"!`);
  };

  if (authLoading || (loading && !book)) {
    return (
      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="flex flex-col md:flex-row gap-12 max-w-6xl mx-auto">
          <div className="w-full md:w-1/2">
            <Skeleton height={600} className="rounded-3xl shadow-2xl" />
          </div>
          <div className="w-full md:w-1/2 space-y-6">
            <Skeleton width={100} height={24} />
            <Skeleton width="80%" height={48} />
            <Skeleton width="40%" height={32} />
            <div className="py-8 border-y border-base-200">
              <Skeleton count={4} />
            </div>
            <Skeleton width={150} height={30} />
            <Skeleton width="100%" height={56} className="rounded-2xl" />
          </div>
        </div>
      </div>
    );
  }

  if (!book) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
        <div className="text-9xl font-black text-primary/10 mb-4 select-none">404</div>
        <h2 className="text-3xl font-bold mb-2">Book Not Found</h2>
        <p className="text-base-content/60 mb-8 max-w-md">
          The book you are looking for doesn't exist or has been removed from our catalog.
        </p>
        <button onClick={() => router.push("/all-books")} className="btn btn-primary rounded-full px-8">
          Back to Catalog
        </button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12 md:py-20">
      <div className="flex flex-col md:flex-row gap-12 max-w-6xl mx-auto items-center md:items-start">
        {/* Left: Large Book Cover */}
        <div className="w-full md:w-1/2">
          <div className="relative aspect-[3/4] w-full max-w-md mx-auto group">
            <div className="absolute inset-0 bg-primary/20 rounded-3xl blur-3xl group-hover:bg-primary/30 transition-all duration-500 -z-10 transform scale-95 translate-y-4"></div>
            <div className="w-full h-full rounded-3xl overflow-hidden shadow-2xl border-4 border-white dark:border-gray-800 bg-base-200 relative">
              {book.image_url ? (
                <img
                  src={book.image_url}
                  alt={book.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.style.display = 'none';
                    e.target.parentNode.classList.add('flex', 'items-center', 'justify-center');
                    e.target.parentNode.innerHTML = `<div class="text-primary/10 font-black text-6xl uppercase tracking-tighter -rotate-12 select-none">${book.category}</div>`;
                  }}
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center text-primary/10 font-black text-6xl uppercase tracking-tighter -rotate-12 select-none">
                  {book.category}
                </div>
              )}
              <div className="absolute top-6 right-6 badge badge-primary font-bold shadow-xl px-4 py-3 scale-110">
                ⭐ {book.rating || "4.8"}
              </div>
            </div>
          </div>
        </div>

        {/* Right: Book Details */}
        <div className="w-full md:w-1/2 space-y-6">
          <div>
            <div className="badge badge-secondary badge-outline font-bold uppercase tracking-widest px-4 py-3 mb-4">
              {book.category}
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight text-base-content tracking-tight">
              {book.title}
            </h1>
            <p className="text-xl md:text-2xl text-base-content/60 font-medium italic mt-2">
              by <span className="text-primary not-italic font-bold">{book.author}</span>
            </p>
          </div>

          <div className="py-8 border-y border-base-200">
            <h3 className="text-sm uppercase tracking-widest font-black text-base-content/40 mb-4">About the book</h3>
            <p className="text-lg text-base-content/70 leading-relaxed font-medium">
              {book.description}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-8 py-2">
            <div className="flex flex-col">
              <span className="text-xs uppercase tracking-widest font-bold text-base-content/40 mb-1">Price</span>
              <span className="text-3xl font-black text-primary">${book.price || "19.99"}</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xs uppercase tracking-widest font-bold text-base-content/40 mb-1">Availability</span>
              <span className={`text-xl font-bold ${book.available_quantity > 0 ? 'text-success' : 'text-error'}`}>
                {book.available_quantity} copies left
              </span>
            </div>
          </div>

          <div className="pt-6">
            <button
              onClick={handleBorrow}
              disabled={book.available_quantity === 0}
              className="btn btn-primary btn-lg btn-block rounded-2xl shadow-xl shadow-primary/20 hover:shadow-primary/40 transition-all duration-300 font-black text-lg h-16"
            >
              {book.available_quantity > 0 ? "Borrow This Book" : "Out of Stock"}
            </button>
            <p className="text-center text-xs text-base-content/40 mt-4 font-medium uppercase tracking-widest">
              Standard borrowing period: 14 days
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetailsPage;
