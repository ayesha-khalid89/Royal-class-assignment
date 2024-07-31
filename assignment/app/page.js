import FeaturesSection from "@/components/FeaturesSection";
import Footer from "../components/Footer";
import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import CategorySection from "@/components/CategorySection";
import NewArrivals from "@/components/NewArrivals";
import ProductsSection from "@/components/ProductsSection";
export default function Home() {
  return (
    <>
      <Header />
      <Navbar />
      <CategorySection />
      <ProductsSection/>
      <NewArrivals />
      <FeaturesSection />
      <Footer />
    </>
  );
}
