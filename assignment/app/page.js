import FeaturesSection from "@/components/FeaturesSection";
import Footer from "../components/Footer";
import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import CategorySection from "@/components/CategorySection";
export default function Home() {
  return (
    <>
      <Header/>
      <Navbar />
      <CategorySection />
      <FeaturesSection />
      <Footer />
    </>
  );
}
