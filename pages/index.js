import Navbar from "../components/Navbar.jsx";
import HeroSection from "../components/HeroSection.jsx";
import SupportFarmers from "../components/SupportFarmers.jsx";
import Blog from "../components/Blog.jsx";
import Footer from "../components/Footer.jsx";
import Model from "../components/Model.jsx";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <SupportFarmers />
      <Model />
      <Blog />
      <Footer />
    </>
  )
}