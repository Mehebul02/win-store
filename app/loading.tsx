import ProductCardSkeleton from "@/components/shared/ProductCardSkeleton";

export default function Loading() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-6 gap-3">
      {[...Array(10)].map((_, i) => (
        <ProductCardSkeleton key={i} />
      ))}
    </div>
  );
}