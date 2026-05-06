import Banner from "@/components/Banner";
import Marquee from "@/components/Marquee";
import FeaturedBooks from "@/components/FeaturedBooks";
import CategorySection from "@/components/CategorySection";
import AuthorFeatured from "@/components/AuthorFeatured";
import CallToAction from "@/components/CallToAction";

export default function Home() {
  return (
    <div className="flex flex-col gap-8 pb-20">
      <Marquee />
      
      <div className="container mx-auto px-4 md:px-8">
        <Banner />
        
        <FeaturedBooks />
        
        <CategorySection />
        
        <AuthorFeatured />

        <CallToAction />
      </div>
    </div>
  );
}
