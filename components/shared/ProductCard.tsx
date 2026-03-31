import CustomButton from "@/components/shared/CustomButton";
import { Product } from "@/types/product";
import Image from "next/image";
import Link from "next/link";

interface ProductCardProps {
    product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
    return (
        <Link href={`/products/${product.id}`} >
        <div className="group bg-white border border-gray-200 rounded-md p-3 flex flex-col items-center 
               hover:shadow-lg hover:-translate-y-1 transition-all duration-300 ease-in-out cursor-pointer">
            <p className="text-[12px] text-[#000000] mb-1 capitalize">
                {product?.category}
            </p>
            <h3 className="text-[15px] font-medium text-[#034E53] line-clamp-1 mb-2">
                {product?.title}
            </h3>
            <div className="w-full h-[110px] flex items-center justify-center mb-3 overflow-hidden">
                <Image
                    src={product?.image}
                    alt={product?.title}
                    width={140}
                    height={110}
                     priority
                    className=" h-full transition-transform duration-300 group-hover:scale-105"
                />
            </div>
            <div className="flex items-center gap-2 mb-3">
                <span className="text-[11px] text-[#697475] line-through">
                    RS {product?.price.toLocaleString()}
                </span>
                <span className="text-[14px] font-medium text-[#0AAEB9]">
                    RS {product?.price.toLocaleString()}
                </span>
            </div>
            <CustomButton text="Add to Cart" href="#" />

        </div>
        </Link>
    );
};

export default ProductCard;