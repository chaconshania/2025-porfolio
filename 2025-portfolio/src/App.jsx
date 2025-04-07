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
      <Title
        heading="Hello, I'm Shania!"
        subtitle="Creating is sorta my thing."
        description="I am a designer or whatever. I am writing out to test out the layout and see how long should I make it."
        className="whitespace-pre-line"
      />
      <LayoutGrid />
      <Footer />
    </div>
  );
}

export default App;
