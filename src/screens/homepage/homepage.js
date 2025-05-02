import React from 'react';
import './HomePage.css';

const HomePage = () => {


    const handleWhatsAppClick = () => {
        window.open('https://wa.me/918XXXXXXX', '_blank');
      };
  return (
    <div className="homepage">
      <header className="header">
        <div className="social-icons">
          <a href="facebook"><i className="fab fa-facebook-f"></i></a>
          <a target='_blank' rel="noopener noreferrer" href="https://www.instagram.com/makeup_by_priyapratap?igsh=cHZiY2t2djh4eGds"><i className="fab fa-instagram"></i></a>
          <a href="youtube"><i className="fab fa-youtube"></i></a>
        </div>
        <h1 className="logo">PRIYA PRATAP</h1>
        {/* <nav className="nav-links">
          <a href="#">Home</a>
          <a href="#">Portfolio</a>
          <a href="#">Academy short courses</a>
          <a href="#">Academy</a>
          <a href="#">Products</a>
          <a href="#">Prices</a>
          <a href="#">Studio</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </nav> */}
      </header>

      <div className="main-content">
        <div className="content-buttons">
          <button>Portfolio</button>
          <button>Academy</button>
          <button>Products</button>
          <button>Studio</button>
          <button>Prices</button>
          <button>About</button>
        </div>
        <div className="whatsapp-chat">
          <button onClick={handleWhatsAppClick}>Chat with us</button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
