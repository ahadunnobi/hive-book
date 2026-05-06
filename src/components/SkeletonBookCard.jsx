
const SkeletonBookCard = () => {
  return (
    <div className="card bg-base-100 shadow-lg border border-base-200 flex flex-col h-full overflow-hidden">
      {/* Book Cover Skeleton */}
      <div className="aspect-[4/5] skeleton rounded-none w-full"></div>

      {/* Book Info Skeleton */}
      <div className="card-body p-4 flex flex-col flex-grow gap-3">
        <div className="flex justify-between items-center">
          <div className="skeleton h-4 w-16 rounded-full"></div>
          <div className="skeleton h-4 w-10 rounded-full"></div>
        </div>
        
        <div className="space-y-2">
          <div className="skeleton h-5 w-full"></div>
          <div className="skeleton h-3 w-2/3"></div>
        </div>

        <div className="space-y-1">
          <div className="skeleton h-3 w-full"></div>
          <div className="skeleton h-3 w-full"></div>
        </div>
        
        <div className="card-actions flex-col gap-3 mt-auto pt-4">
          <div className="flex items-center justify-between w-full">
            <div className="skeleton h-6 w-12"></div>
            <div className="skeleton h-3 w-16"></div>
          </div>
          <div className="skeleton h-10 w-full rounded-lg"></div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonBookCard;
