import React from "react";
import RevealLinks from "../components/links";
import VelocityText from "../components/TextScroll";
import SlideNav from "../components/SlideNavbar";
import Card from "../components/Card";
import Projects from "../sections/Projects";
import Hero from "../sections/Heros";
import Footer from "../sections/Footer";
import SwipeCards from "../components/SwipeCards";
import CaseStudyCard from "../sections/CaseStudyCard";

function App() {
  return (
    <div>
      <SlideNav />
      <SwipeCards />
      <CaseStudyCard />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
