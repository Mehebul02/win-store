import Category from "@/components/category/Category";
import HeroSection from "@/components/heroSection/HeroSection";
import ProductsCategory from "@/components/products/products_category/ProductsCategory";
import RecentProduct from "@/components/products/recent_products/RecentProduct";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <Category />
      <RecentProduct />,
      <ProductsCategory />
    </div>
  );
}
