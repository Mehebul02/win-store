// import { Suspense } from "react";
// import ProductDetailsSkeleton from "../shared/ProductDetailsSkeleton";
// import ProductDetailsPage from "@/app/product/[id]/page";

// const Page = ({ params }: { params: { id: string } }) => {
//   return (
//     <Suspense fallback={<ProductDetailsSkeleton />}>
//       <ProductDetailsPage id={params.id} />
//     </Suspense>
//   );
// };

// export default Page;


/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";
import { notFound } from "next/navigation";
import { getSingleProduct } from "@/lib/api/product";
import { StarIcon } from "lucide-react";
interface Props {
    params: Promise<{ id: string }>;
}
const ProductDetailsPage = async ({ id }: { id: string }) => {
    // const { id } = await params;
    if (!id) return notFound();
    console.log("Product ID:", id);
    const product: any = await getSingleProduct(id);
    if (!product) return notFound();
    return (

        <div className="max-w-7xl mx-auto py-12 px-4 md:px-8 lg:px-12">
            <div className="flex flex-col lg:flex-row gap-8">
                <div className="w-full lg:w-1/2 flex justify-center items-center">
                    <Image
                        src={product?.image}
                        alt={product?.title}
                        width={400}
                        height={400}
                        priority
                        className="rounded-md"
                    />
                </div>
                <div className="w-full lg:w-1/2 flex flex-col gap-4">
                    <h1 className="text-3xl font-bold text-primary">{product?.title}</h1>
                    <p className="text-xl text-cyan-600 font-semibold">RS {product.price}</p>
                    <p className="text-gray-700">{product?.description}</p>
                    <p className="text-sm text-gray-800 capitalize">
                        <span className="font-semibold text-black"> Category:</span> {product?.category}
                    </p>
                    <p className="text-sm text-gray-800 flex items-center gap-2">
                        <span className="font-semibold text-black">Rating:</span>
                        {Array.from({ length: 5 }).map((_, i) => {
                            const rating = product?.rating?.rate || 0;

                            return (
                                <span key={i} className={i < Math.round(rating) ? "text-yellow-400" : "text-gray-300"}>
                                    <StarIcon size={16} />
                                </span>
                            );
                        })}
                        <span className="ml-2 text-gray-500">({product?.rating?.count} reviews)</span>
                    </p>
                    <button className="mt-6 bg-cyan-600 text-white py-2 cursor-pointer px-6 rounded-md font-bold hover:bg-cyan-700 transition">
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>

    );
};

export default ProductDetailsPage;