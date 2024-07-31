<<<<<<< Updated upstream
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div>
     <Header />
    <Navbar />
    <Footer />
    </div>
=======
import FeaturesSection from "@/components/FeaturesSection";
import Footer from "../components/Footer";
export default function Home() {
  return (
    <>
      <FeaturesSection />
      <Footer />
    </>
>>>>>>> Stashed changes
  );
}
