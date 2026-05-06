import { Suspense } from "react";
import Banner from "@/components/Banner";
import Marquee from "@/components/Marquee";
import FeaturedBooks from "@/components/FeaturedBooks";
import CategorySection from "@/components/CategorySection";
import AuthorFeatured from "@/components/AuthorFeatured";
import CallToAction from "@/components/CallToAction";
import SkeletonBookCard from "@/components/SkeletonBookCard";
import SkeletonCategory from "@/components/SkeletonCategory";

export default function Home() {
  return (
    <div className="flex flex-col gap-8 pb-20">
      <Marquee />
      
      <div className="container mx-auto px-4 md:px-8">
        <Banner />
        
        <Suspense fallback={
          <section className="my-16">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
              <div className="space-y-2">
                <div className="skeleton h-10 w-64"></div>
                <div className="skeleton h-6 w-80"></div>
              </div>
              <div className="skeleton h-12 w-40 rounded-full"></div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[...Array(4)].map((_, i) => <SkeletonBookCard key={i} />)}
            </div>
          </section>
        }>
          <FeaturedBooks />
        </Suspense>
        
        <Suspense fallback={
          <section className="my-24 py-16 px-4 md:px-8 bg-base-200/30 rounded-[4rem] border border-base-300 shadow-xl">
             <div className="text-center mb-16">
                <div className="skeleton h-12 w-72 mx-auto mb-4"></div>
                <div className="skeleton h-6 w-96 mx-auto"></div>
             </div>
             <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 md:gap-6">
                {[...Array(7)].map((_, i) => <SkeletonCategory key={i} />)}
             </div>
          </section>
        }>
          <CategorySection />
        </Suspense>
        
        <AuthorFeatured />

        <CallToAction />
      </div>
    </div>
  );
}
