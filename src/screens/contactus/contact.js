import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <div className="contact-header">
          <h2>Contact Us</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.
          </p>
        </div>

        <form className="contact-form">
          <div className="form-left">
            <input type="text" placeholder="Your Name" />
            <input type="email" placeholder="Your Email Address" />
            <input type="tel" placeholder="Phone" />
          </div>
          <div className="form-right">
            <textarea placeholder="Your Message..." rows="6"></textarea>
            <button type="submit">Submit Now</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
