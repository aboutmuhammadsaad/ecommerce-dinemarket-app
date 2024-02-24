import Herosection from "@/components/Herosection";
import PromotionSection from "@/components/PromotionSection";
import ProductsSection from "@/components/ProductsSection";

export default function Home() {
  return (
   <div className=" min-h-screen">
    <Herosection />
    <PromotionSection />
    <ProductsSection/>
   </div>
  );
}
