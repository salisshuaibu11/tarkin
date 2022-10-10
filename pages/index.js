import HeroSection from "../components/HeroSection.jsx";
import FoodSupply from "../components/FoodSupply.jsx";
import FarmInventory from "../components/FarmInventory.jsx";
import WhyTarkin from "../components/WhyTarkin.jsx";
import Partners from "../components/Partners.jsx";
import Faqs from "../components/Faq.jsx";
import Newsletter from "../components/Newsletter.jsx";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      
      <HeroSection />
      <FoodSupply />
      <FarmInventory />
      <WhyTarkin />
      <Partners />
      <Faqs />
      <Newsletter />
      <Footer />
    </>
  )
}