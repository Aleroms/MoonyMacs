import React from "react";
import { Routes, Route } from "react-router-dom";

// routes
import Home from "./views/Home/Home";
import About from "./views/About/About";
import Contact from "./views/Contact/Contact";
import Gallery from "./views/Gallery/Gallery";
import Menu from "./views/Menu/Menu";

//components
import Navbar from "./components/Navbar/Navbar";

import "./App.css";
import Footer from "./components/Footer/Footer";

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/menu" element={<Menu />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
