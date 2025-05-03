import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div>
        
      </div>
      <div className="footer-content">
        
        <div className="footer-section">
          <h4>Phone & E-Mail</h4>
          <p>+91 8279373678</p>
          <p>priyapratapmakeup@gmail.com</p>
        </div>

        <div className="footer-section">
          <h4>Address</h4>
          <p>#8901 Marmora Road</p>
          <p>Chi Minh City, Vietnam</p>
        </div>

        <div className="footer-section">
          <h4>Opening Times</h4>
          {/* <p>+91 918279373678</p>
          <p>office@example.com</p> */}
          <p>Monday 9:00 AM - 10:00 PM</p>
          <p>Tuesday 9:00 AM - 10:00 PM</p>
          <p>Wednesday 9:00 AM - 10:00 PM</p>
          <p>Thursday 9:00 AM - 10:00 PM</p>
          <p>Friday 9:00 AM - 10:00 PM</p>
          <p>Saturday 9:00 AM - 10:00 PM</p>
          <p>Sunday 9:00 AM - 10:00 PM</p>
        </div>

        <div className="footer-button">
          <button>Book Now</button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
