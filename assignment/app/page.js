import FeaturesSection from "@/components/FeaturesSection";
import Footer from "../components/Footer";
import Navbar from "@/components/navbar/Navbar";
import CategorySection from "@/components/CategorySection";
import NewArrivals from "@/components/NewArrivals";
import ProductsSection from "@/components/ProductsSection";
import FlashSalesSection from "@/components/FlashSalesSection";
import BestSellingProducts from "@/components/BestSellingProducts";
import ImageDisplay from "@/components/ImageDisplay";
import Header from "@/components/header/Header";
export default function Home() {
  return (
    <>
      <Header />
      <Navbar />
      <FlashSalesSection/>
      <CategorySection />
      <BestSellingProducts/>
      <ImageDisplay />
      <ProductsSection/>
      <NewArrivals />
      <FeaturesSection />
      <Footer />
    </>
  );
}
