import Category from "@/components/category/Category";
import HeroSection from "@/components/heroSection/HeroSection";
import RecentProduct from "@/components/products/recent_products/RecentProduct";

export default function Home() {
  return (
   <div>
    <HeroSection/>
    <Category/>
    <RecentProduct/>
   </div> 
  );
}
