// /* eslint-disable @typescript-eslint/no-explicit-any */
// "use client";
// import { useState, useTransition } from "react";
// import ProductCard from "@/components/shared/ProductCard";
// import { BiSolidLeftArrow, BiSolidRightArrow } from "react-icons/bi";
// import { getProductsByCategory } from "@/lib/api/product";
// import { Product } from "@/types/product";
// import SectionTitle from "@/components/shared/SectionTitle ";

// const ProductsCategoryWrapper = ({
//     categories,
//     initialProducts,
//     initialCategory,
// }: any) => {
//     const [activeCategory, setActiveCategory] = useState(initialCategory);
//     const [products, setProducts] = useState(initialProducts);
//     const [isPending, startTransition] = useTransition();

//     const handleCategoryChange = (category: string) => {
//         setActiveCategory(category);
//         startTransition(async () => {
//             const data = await getProductsByCategory(category);
//             setProducts(data);
//         });
//     };

//     return (
//         <>
//             <div className="flex flex-col lg:flex-row justify-between mb-4">
//                 <SectionTitle highlightText="Best" normalText="Deals" />

//                 <div className="flex items-center flex-wrap gap-4 text-xs uppercase overflow-x-auto no-scrollbar mb-4">
//                     {categories.map((cat: any) => (
//                         <button
//                             key={cat.id}
//                             onClick={() => handleCategoryChange(cat.name)}
//                             className={`pb-1 whitespace-nowrap border-b-2 transition font-bold cursor-pointer capitalize ${activeCategory === cat.name
//                                 ? "text-cyan-600 border-cyan-600"
//                                 : "text-gray-600 border-transparent"
//                                 }`}
//                         >
//                             {cat.name}
//                         </button>
//                     ))}

//                     <div className="flex justify-between gap-3">
//                         <BiSolidLeftArrow className="hidden lg:block text-black" />
//                         <BiSolidRightArrow className="hidden lg:block text-[#A0A0A0]" />
//                     </div>
//                 </div>
//             </div>
//             <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
//                 {isPending ? (
//                     <p className="col-span-full text-center text-sm">Loading...</p>
//                 ) : products.length > 0 ? (
//                     products.map((product: Product) => (
//                         <ProductCard key={product.id} product={product} />
//                     ))
//                 ) : (
//                     <p className="col-span-full text-center text-gray-500 text-sm">
//                         No products found
//                     </p>
//                 )}
//             </div>
//         </>
//     );
// };

// export default ProductsCategoryWrapper;


/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useState, useTransition } from "react";
import ProductCard from "@/components/shared/ProductCard";
import ProductCardSkeleton from "@/components/shared/ProductCardSkeleton";
import { BiSolidLeftArrow, BiSolidRightArrow } from "react-icons/bi";
import { getProductsByCategory } from "@/lib/api/product";
import { Product } from "@/types/product";
import SectionTitle from "@/components/shared/SectionTitle ";

const ProductsCategoryWrapper = ({
    categories,
    initialProducts,
    initialCategory,
}: any) => {
    const [activeCategory, setActiveCategory] = useState(initialCategory);
    const [products, setProducts] = useState(initialProducts);
    const [isPending, startTransition] = useTransition();

    const handleCategoryChange = (category: string) => {
        setActiveCategory(category);
        startTransition(async () => {
            const data = await getProductsByCategory(category);
            setProducts(data);
        });
    };

    return (
        <>
            <div className="flex flex-col lg:flex-row justify-between mb-4">
                <SectionTitle highlightText="Best" normalText="Deals" />

                <div className="flex items-center flex-wrap gap-4 text-xs uppercase overflow-x-auto no-scrollbar mb-4">
                    {categories.map((cat: any) => (
                        <button
                            key={cat.id}
                            onClick={() => handleCategoryChange(cat.name)}
                            className={`pb-1 whitespace-nowrap border-b-2 transition font-bold cursor-pointer capitalize ${
                                activeCategory === cat.name
                                    ? "text-cyan-600 border-cyan-600"
                                    : "text-gray-600 border-transparent"
                            }`}
                        >
                            {cat.name}
                        </button>
                    ))}

                    <div className="flex justify-between gap-3">
                        <BiSolidLeftArrow className="hidden lg:block text-black" />
                        <BiSolidRightArrow className="hidden lg:block text-[#A0A0A0]" />
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
                {isPending ? (
                    // Show skeletons instead of "Loading..."
                    Array.from({ length: 6 }).map((_, i) => (
                        <ProductCardSkeleton key={i} />
                    ))
                ) : products.length > 0 ? (
                    products.map((product: Product) => (
                        <ProductCard key={product.id} product={product} />
                    ))
                ) : (
                    <p className="col-span-full text-center text-gray-500 text-sm">
                        No products found
                    </p>
                )}
            </div>
        </>
    );
};

export default ProductsCategoryWrapper;