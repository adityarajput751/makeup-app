import React from 'react';
import './HomePage.css';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const HomePage = () => {
const navigate = useNavigate()

    const handleWhatsAppClick = () => {
        window.open('https://wa.me/918279373678', '_blank');
      };

      const goToPortfolio = () => {
        navigate('/portfolio');
      };
  return (
    <div className="homepage">
      <header className="header">
        {/* <div className="social-icons">
          <a href="facebook"><i className="fab fa-facebook-f"></i></a>
          <a target='_blank' rel="noopener noreferrer" href="https://www.instagram.com/makeup_by_priyapratap?igsh=cHZiY2t2djh4eGds"><i className="fab fa-instagram"></i></a>
          <a href="youtube"><i className="fab fa-youtube"></i></a>
        </div> */}
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
          <button onClick={goToPortfolio}>Portfolio</button>
          <button onClick={()=>toast.info('Coming Soon')}>Academy</button>
          <button onClick={()=>toast.info('Coming Soon')}>Products</button>
          <button onClick={()=>toast.info('Coming Soon')}>Studio</button>
          <button onClick={()=>toast.info('Coming Soon')}>Prices</button>
          <button onClick={()=>toast.info('Coming Soon')}>About</button>
        </div>
        <div className="whatsapp-chat">
        {/* <div className="social-icons">
          <a target='_blank' rel="noopener noreferrer" href="https://www.instagram.com/makeup_by_priyapratap?igsh=cHZiY2t2djh4eGds"><i className="fab fa-instagram"></i></a>
        </div> */}
          <button onClick={handleWhatsAppClick}>Chat with us</button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
