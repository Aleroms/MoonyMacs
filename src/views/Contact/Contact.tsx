import React from "react";
import Banner from "../../components/Banner/Banner";
import "./Contact.css";
import ContactForm from "../../components/Form/ContactForm";
import SocialMedia from "../../components/SocialMedia/SocialMedia";
const Contact: React.FC = () => {
  return (
    <main>
      <Banner page="contact" title="Contact" />
      <section className="contact-container">
        <div className="contact-item">
          <h2 style={{ display: "inline-block" }}>Contact Form</h2>
          <ContactForm />
        </div>
        <div className="contact-item">
          <h2>For a quicker response please DM me</h2>
          <SocialMedia type="decorative" size="md" />
          <h3>Service Area</h3>
          <p>Currently servicing the High Desert and surround areas.</p>
        </div>
      </section>
    </main>
  );
};

export default Contact;
