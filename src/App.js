import React from "react";
import Header from "./pages/Header";
import Hero from "./pages/Hero";
import Know from "./pages/Know";
import Events from "./pages/event";
import Technologies from "./pages/technologies";
import FAQ from "./pages/faq";
import Footer from "./pages/footer";

function App() {
  return (
    <div className="font-poppins">
      <Header />
      <Hero />
      <Know />
      <Events />
      <Technologies />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
