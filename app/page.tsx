
import CategoryWrapper from "@/components/category/CategoryWrapper";
import HeroSection from "@/components/heroSection/HeroSection";
import ProductsCategory from "@/components/products/products_category/ProductsCategory";
import RecentProduct from "@/components/products/recent_products/RecentProduct";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <CategoryWrapper />
      <RecentProduct />,
      <ProductsCategory />
    </div>
  );
}
