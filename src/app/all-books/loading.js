
import SkeletonBookCard from "@/components/SkeletonBookCard";

export default function Loading() {
  return (
    <div className="container mx-auto px-4 md:px-8 py-12">
      <div className="mb-12 space-y-4">
        <div className="skeleton h-16 w-3/4 md:w-1/2"></div>
        <div className="skeleton h-8 w-2/3 md:w-1/3"></div>
      </div>

      <div className="space-y-12">
        {/* Search Bar Skeleton */}
        <div className="skeleton h-16 w-full max-w-3xl rounded-2xl"></div>

        {/* Results Info Skeleton */}
        <div className="skeleton h-6 w-32"></div>

        {/* Grid Skeleton */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[...Array(8)].map((_, i) => (
            <SkeletonBookCard key={i} />
          ))}
        </div>
      </div>
    </div>
  );
}
