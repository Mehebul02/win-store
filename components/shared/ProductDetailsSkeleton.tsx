import React from 'react';

const ProductDetailsSkeleton = () => {
  return (
       <div className="max-w-7xl mx-auto py-12 px-4 md:px-8 lg:px-12 animate-pulse">
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="w-full lg:w-1/2 h-[400px] bg-gray-200 rounded-md"></div>
        <div className="w-full lg:w-1/2 flex flex-col gap-4">
          <div className="h-6 bg-gray-200 w-3/4 rounded"></div>
          <div className="h-6 bg-gray-200 w-1/4 rounded"></div>
          <div className="h-32 bg-gray-200 rounded"></div>
          <div className="h-6 bg-gray-200 w-1/2 rounded"></div>
          <div className="h-12 bg-gray-200 w-1/3 rounded"></div>
          <div className="h-10 bg-gray-300 w-2/3 rounded mt-4"></div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsSkeleton;