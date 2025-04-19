import React from 'react';
import './Hero.css';
import heroImage from '../../assets/hero.png'; // Right side image

function Hero() {
  return (
    <section className="hero">
      <div className="hero-overlay">
        <div className="hero-content">
          <div className="hero-left">
            <h1>Bridal Makeup</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.</p>
            <div className="hero-buttons">
              <button className="btn-primary">Booking</button>
              <button className="btn-secondary">About us</button>
            </div>
          </div>
          <div className="hero-right">
            <img src={heroImage} alt="Hero" className="hero-image" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
