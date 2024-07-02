import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

import Banner from "../../components/Banner/Banner";
const Home: React.FC = () => {
  return (
    <main>
      <Banner page="home"/>
      <h1>Welcome to the Home Page</h1>
      <Link to="/about">Go to About Page</Link>
    </main>
  );
};

export default Home;
