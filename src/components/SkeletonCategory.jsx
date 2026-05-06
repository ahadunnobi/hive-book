
const SkeletonCategory = () => {
  return (
    <div className="p-6 bg-base-100 rounded-3xl border border-base-200 flex flex-col items-center justify-center shadow-sm">
      <div className="skeleton w-12 h-12 rounded-2xl mb-4"></div>
      <div className="skeleton h-4 w-16 mb-2"></div>
      <div className="skeleton h-3 w-12"></div>
    </div>
  );
};

export default SkeletonCategory;
