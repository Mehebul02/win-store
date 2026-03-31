// app/components/RecentProductWrapper.tsx
import React, { Suspense } from "react";
import RecentProduct from "./RecentProduct";
import ProductCardSkeleton from "../../shared/ProductCardSkeleton";

export default function RecentProductWrapper() {
  return (
    <section className="w-full py-12 px-4 md:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold mb-6">
          <span className="text-blue-600">New</span> Arrivals
        </h2>

        <Suspense
          fallback={
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
              {Array.from({ length: 10 }).map((_, i) => (
                <ProductCardSkeleton key={i} />
              ))}
            </div>
          }
        >
         
          <RecentProduct />
        </Suspense>
      </div>
    </section>
  );
}