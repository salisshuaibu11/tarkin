import Hero from "../components/about/Hero"
import Mission from "../components/about/Mission"
import Solutions from "../components/about/Solutions";
import OurValues from "../components/about/OurValues";
import WeNeedAChange from "../components/about/WeNeedChange";

import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

export default function About() {
  return (
    <>
      <Hero />
      <Mission />
      <Solutions />
      <OurValues />
      <WeNeedAChange />
      <Newsletter />
      <Footer />
    </>
  )
}