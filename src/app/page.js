import Image from "next/image";
import Header from "./components/shared/Header";
import Banner from "./components/home/Banner";
import Services from "./components/services/Services";
import Pricing from "./components/pricing/Pricing";
import AboutUs from "./components/about/About-us";
import Testimonial from "./components/testimonial/Testimonial";
import Projects from "./components/clients/Projects";
import Contact from "./components/contact/Contact";
import Footer from "./components/shared/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Banner />
      {/* <Services /> */}
      <Pricing />
      <Testimonial />
      <AboutUs />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}
