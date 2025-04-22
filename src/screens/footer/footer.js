import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4>Phone & E-Mail</h4>
          <p>+91 800-123456</p>
          <p>office@example.com</p>
        </div>

        <div className="footer-section">
          <h4>Address</h4>
          <p>#8901 Marmora Road</p>
          <p>Chi Minh City, Vietnam</p>
        </div>

        <div className="footer-section">
          <h4>Opening Times</h4>
          <p>+91 800-123456</p>
          <p>office@example.com</p>
        </div>

        <div className="footer-button">
          <button>Book Now</button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
