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
import LayoutGrid from "../sections/LayoutGrid";
function App() {
  return (
    <div>
      <SlideNav />
      <SwipeCards />
      <LayoutGrid />
      <Footer />
    </div>
  );
}

export default App;
