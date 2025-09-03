import Button from "../src/components/Button"
import ButtonGradient from "./assets/svg/ButtonGradient"
import Header from "./components/Header";
import Contact from "./components/Contact";
import Section from "./components/Section";
import Hero from "./components/Hero";
import Benefits from "./components/Benefits";
import Collaboration from "./components/Collaboration";
import Services from "./components/Services";
import Prices from "./components/Prices";
import Roadmap from "./components/Roadmap";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header/>
        <Hero/>
        <Benefits/>
        <Collaboration/>
        <Services/>
        <Prices/>
        <Roadmap/>
        <Footer/>
      </div>
      <ButtonGradient/>
    </>
  );
};

export default App;
