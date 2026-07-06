import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Packages from "@/components/Packages";
import Testimonials from "@/components/Testimonials";
import HowToOrder from "@/components/HowToOrder";
import Contact from "@/components/Contact";
import FloatingWA from "@/components/FloatingWA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Packages />
        <HowToOrder />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <FloatingWA />
    </>
  );
}
