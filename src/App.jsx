import useTheme from "./hooks/useTheme";
import Nav from "./components/layout/Nav";
import Footer from "./components/layout/Footer";
import BackToTop from "./components/layout/BackToTop";
import Hero from "./components/sections/Hero";
import Ticker from "./components/sections/Ticker";
import Services from "./components/sections/Services";
import About from "./components/sections/About";
import Process from "./components/sections/Process";
import StatsBand from "./components/sections/StatsBand";
import Tools from "./components/sections/Tools";
import Testimonials from "./components/sections/Testimonials";
import Pricing from "./components/sections/Pricing";
import Faq from "./components/sections/Faq";
import Contact from "./components/sections/Contact";
import Work from "./components/sections/Work";

export default function App() {
  const { theme, toggle } = useTheme();

  return (
    <div className="app">
      <div className="noise" aria-hidden="true" />
      <Nav theme={theme} onToggleTheme={toggle} />
      <Hero />
      <Ticker />
      <main>
        <Services />
        <Work />
        <About />
        <Process />
        <StatsBand />
        <Tools />
        <Testimonials />
        <Pricing />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}