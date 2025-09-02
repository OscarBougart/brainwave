import Button from "../src/components/Button"
import ButtonGradient from "./assets/svg/ButtonGradient"
import Header from "./components/Header";
import Contact from "./components/Contact";
import Pricing from "./components/Pricing";
import Section from "./components/Section";
import Hero from "./components/Hero";
import Benefits from "./components/Benefits";

const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header/>
        <Hero/>
        <Benefits/>
      </div>
      <ButtonGradient/>
    </>
  );
};

export default App;
