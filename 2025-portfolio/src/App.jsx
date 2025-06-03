import React from "react";
import Footer from "../sections/Footer";
import LayoutGrid from "../sections/LayoutGrid";
import Title from "../sections/PageLayout/Title";
import Navbar from "../sections/Navbar";

function App() {
  return (
    <div>
      <Navbar />
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
