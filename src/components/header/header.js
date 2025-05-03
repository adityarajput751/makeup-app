import React from "react";
import "./Header.css";
import { useNavigate } from "react-router-dom";

const Header = () => {
    const navigate = useNavigate()
    const goToHome = () => {
        navigate('/');
      };
  return (
    <header className="header">
      {/* <div className="social-icons">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a
          href="https://www.instagram.com/makeup_by_priyapratap?igsh=cHZiY2t2djh4eGds"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-instagram"></i>
        </a>
        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-youtube"></i>
        </a>
      </div> */}
      <div className="logo">PRIYA PRATAP</div>
      <nav className="nav-links">
        <a onClick={goToHome} href="">Home</a>
        <a href="" className="active">Portfolio</a>
        <a href="">Academy short courses</a>
        <a href="">Academy</a>
        <a href="">Products</a>
        <a href="">Prices</a>
        <a href="">Studio</a>
        <a href="">About</a>
        <a href="">Contact</a>
      </nav>
    </header>
  );
};

export default Header;
