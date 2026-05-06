"use client";

import Link from "next/link";
import BookCard from "./BookCard";
import { fetchBooks } from "@/lib/dataFetcher";
import { useEffect, useState } from "react";

// Swiper imports
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const FeaturedBooks = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getBooks = async () => {
      const data = await fetchBooks();
      setBooks(data.slice(0, 8)); // Get more for the slider
      setLoading(false);
    };
    getBooks();
  }, []);

  if (loading) return <div className="py-20 text-center">Loading Featured Books...</div>;

  return (
    <section className="my-16">
      <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
        <div>
          <h2 className="text-4xl font-black mb-3 text-primary">Top Featured Books</h2>
          <p className="text-base-content text-lg font-semibold italic">Discover our most popular and highly-rated reads.</p>
        </div>
        <Link href="/all-books" className="btn btn-outline btn-primary rounded-full px-8 hover:scale-105 transition-transform">
          View All Books →
        </Link>
      </div>
      
      <Swiper
        spaceBetween={30}
        centeredSlides={false}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper !pb-14"
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 4 },
        }}
      >
        {books.map((book) => (
          <SwiperSlide key={book.id}>
            <BookCard book={book} />
          </SwiperSlide>
        ))}
      </Swiper>

      <style jsx global>{`
        .swiper-button-next, .swiper-button-prev {
          color: var(--p) !important;
          background: white;
          width: 50px !important;
          height: 50px !important;
          border-radius: 50%;
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
          transform: scale(0.7);
        }
        .swiper-button-next:after, .swiper-button-prev:after {
          font-size: 20px !important;
          font-weight: bold;
        }
        .swiper-pagination-bullet-active {
          background: var(--p) !important;
        }
      `}</style>
    </section>
  );
};

export default FeaturedBooks;
