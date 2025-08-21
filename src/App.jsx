import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import LogoMarquee from "./components/LogoMarquee";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <LogoMarquee />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
