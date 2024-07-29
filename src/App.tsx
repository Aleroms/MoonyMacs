import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";

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
  const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

    return null;
  };
  return (
    <>
      <Navbar />
      <ScrollToTop />
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
