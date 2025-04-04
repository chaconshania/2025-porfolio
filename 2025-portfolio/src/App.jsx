import React from "react";
import RevealLinks from "../components/links";
import VelocityText from "../components/TextScroll";
import SlideNav from "../components/SlideNavbar";
import Footer from "../sections/Footer";
import SwipeCards from "../components/SwipeCards";
import LayoutGrid from "../sections/LayoutGrid";
import Title from "../sections/PageLayout/Title";

function App() {
  return (
    <div>
      <SlideNav />
      <Title
        heading={`Hello, I'm Shania!\n I do a little bit of everything...`}
        description="I am a designer or whatever"
        className="whitespace-pre-line"
      />
      <LayoutGrid />
      <Footer />
    </div>
  );
}

export default App;
