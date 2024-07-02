import React from "react";
import { Routes, Route } from "react-router-dom";

// Your Components
import Home from "./views/Home/Home";
import About from "./views/About/About";
import Navbar from "./components/Navbar/Navbar";

import "./App.css";

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
};

export default App;
