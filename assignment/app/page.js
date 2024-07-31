import Navbar from "@/components/navbar/Navbar";
import Header from "@/components/header/Header";
import CategorySection from "@/components/category/CategorySection";
import FeaturesSection from "@/components/features/FeaturesSection";
import FlashSalesSection from "@/components/flashSales/FlashSalesSection";
import Footer from "@/components/footer/Footer";
import ImageDisplay from "@/components/imageDisplay/ImageDisplay";
import NewArrivals from "@/components/newArrivals/NewArrivals";
import ProductsSection from "@/components/products/ProductsSection";
import BestSellingProducts from "@/components/bestSellingProducts/BestSellingProducts";
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
