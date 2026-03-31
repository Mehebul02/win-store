"use client";

import { useState } from "react";
import ProductCard from "@/components/shared/ProductCard";

import { products } from "@/lib/product";
import SectionTitle from "@/components/shared/SectionTitle ";
import Container from "@/components/shared/Container";
import { BiSolidLeftArrow, BiSolidRightArrow } from "react-icons/bi";

const categories = [
    "Kitchen Appliances",
    "Consoles",
    "TV & Videos",
    "Cell Phones",
    "Grocery",
];

const ProductsCategory = () => {
    const [activeCategory, setActiveCategory] = useState(categories[0]);

    // Filter products based on active category
    const filteredProducts = products.filter(
        (product) => product.category === activeCategory
    );

    return (
        <Container>

            {/* Header */}
            <div className="flex flex-col lg:flex-row  justify-between mb-4">
                <SectionTitle highlightText="Best" normalText="Deals" />

                {/* Tabs */}
                <div className="flex items-center flex-wrap gap-4 text-xs uppercase overflow-x-auto no-scrollbar">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`pb-1 whitespace-nowrap border-b-2 transition font-bold cursor-pointer ${activeCategory === cat
                                ? "text-cyan-600 border-cyan-600"
                                : "text-gray-600 border-transparent"
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                    <div className="  flex justify-between gap-3">
                        <BiSolidLeftArrow className="hidden lg:block text-black" />
                        <BiSolidRightArrow className="hidden lg:block text-[#A0A0A0]" />
                    </div>
                </div>
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
                {filteredProducts.length > 0 ? (
                    filteredProducts.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))
                ) : (
                    <p className="col-span-full text-center text-gray-500 text-sm">
                        No products found
                    </p>
                )}
            </div>
        </Container>
    );
};

export default ProductsCategory;