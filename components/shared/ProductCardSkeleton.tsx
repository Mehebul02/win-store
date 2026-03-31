const ProductCardSkeleton = () => {
  return (
    <div className="bg-white border border-gray-200 rounded-md p-3 flex flex-col items-center animate-pulse">
      <div className="h-3 w-16 bg-gray-200 rounded mb-2" />
      <div className="h-4 w-32 bg-gray-200 rounded mb-3" />
      <div className="w-full h-[110px] bg-gray-200 rounded mb-3" />
      <div className="flex gap-2 mb-3">
        <div className="h-3 w-12 bg-gray-200 rounded" />
        <div className="h-4 w-16 bg-gray-300 rounded" />
      </div>
      <div className="h-8 w-full bg-gray-200 rounded" />
    </div>
  );
};

export default ProductCardSkeleton;