import React from "react";
import Banner from "../../components/Banner/Banner";
import "./Contact.css";
import ContactForm from "../../components/Form/ContactForm";
const Contact: React.FC = () => {
  return (
    <main>
      <Banner page="contact" title="Contact" />
      <section className="contact-container">
        <div className="contact-item">
          <h2 style={{ display: "inline-block" }}>Contact Form</h2>
          <ContactForm />
        </div>
        <div>
          <h2>For a quicker response please DM me on Instagram or Facebook</h2>
          {/* insert social media container here  */}
          <h3>Service Area</h3>
          <p>Currently servicing the High Desert and surround areas.</p>
        </div>
      </section>
    </main>
  );
};

export default Contact;
