import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import "./App.css";
import Portfolio from "./components/Portfolio";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Services from "./components/Services";
import About from "./components/About";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <Stats />
      <Services />
      <Portfolio />
      <About />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
