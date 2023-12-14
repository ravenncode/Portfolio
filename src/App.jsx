import React from "react";
import Navbar from "./components/NavBar";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Footer from "./pages/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
