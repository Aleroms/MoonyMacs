import React from "react";
import "./Testimonials.css";
import { quotes } from "../../data/carouselData.json";
import Quotes from "../Quotes/Quotes";

const Testimonials: React.FC = () => {
  return (
    <section className="testimonials">
      <div>
        <h2>Quotes from customers</h2>
        <Quotes quotes={quotes} />
      </div>
    </section>
  );
};
export default Testimonials;
