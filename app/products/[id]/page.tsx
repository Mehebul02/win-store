import ProductDetailsPage from "@/components/products/ProductDetails";
import ProductDetailsSkeleton from "@/components/shared/ProductDetailsSkeleton";
import { Suspense } from "react";

const Page =async ({ params }: { params: { id: string } }) => {
    const { id } = await params;
  return (
    <Suspense fallback={<ProductDetailsSkeleton />}>
      <ProductDetailsPage id={id} />
    </Suspense>
  );
};

export default Page;