'useClient'
import Herosection from "@/components/Herosection";
import PromotionSection from "@/components/PromotionSection";
import ProductsSection from "@/components/ProductsSection";
import NewsletterSection from "@/components/NewsletterSection";
import DesignSection from "@/components/DesignSection";


export default function Home() {
  return (
   <div className=" min-h-screen">
    <Herosection />
    <PromotionSection />
    <ProductsSection/>
    <DesignSection/>
    <NewsletterSection/>
   </div>
  );
}
