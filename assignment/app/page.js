import FeaturesSection from "@/components/FeaturesSection";
import Footer from "../components/Footer";
import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import CategorySection from "@/components/CategorySection";
import NewArrivals from "@/components/NewArrivals";
import ProductsSection from "@/components/ProductsSection";
import FlashSalesSection from "@/components/FlashSalesSection";
import BestSellingProducts from "@/components/BestSellingProducts";
export default function Home() {
  return (
    <>
      <Header />
      <Navbar />
      <FlashSalesSection/>
      <CategorySection />
      <BestSellingProducts/>
      <ProductsSection/>
      <NewArrivals />
      <FeaturesSection />
      <Footer />
    </>
  );
}
