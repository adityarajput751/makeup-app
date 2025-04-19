// import React, { useEffect, useState } from 'react';
// import './Navbar.css';

// function Navbar() {
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       const isScrolled = window.scrollY > 50;
//       setScrolled(isScrolled);
//     };

//     window.addEventListener('scroll', handleScroll);

//     // Cleanup on unmount
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   return (
//     <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
//       <div className="logo">MySite</div>
//       <ul className="nav-links">
//         <li><a href="#home">Home</a></li>
//         <li><a href="#features">Features</a></li>
//         <li><a href="#about">About</a></li>
//         <li><a href="#contact">Contact</a></li>
//       </ul>
//     </nav>
//   );
// }

// export default Navbar;

import React, { useEffect, useState } from 'react';
import './Navbar.css';
import { Link } from 'react-scroll';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="logo">Makeup by Priya</div>

      {/* Open Menu Button */}
      <button className="open-menu-btn" onClick={toggleMenu}>
        Menu
      </button>

      {/* Hamburger */}
      <div className="hamburger" onClick={toggleMenu}>
        <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
        <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
        <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
      </div>

      <ul className={`nav-links ${menuOpen ? 'mobile-open' : ''}`}>
        <li><a href="#home" onClick={() => setMenuOpen(false)}>Home</a></li>
        {/* <li><a href="#services" onClick={() => setMenuOpen(false)}>Services</a></li> */}

<li>
  <Link
  to="services"
  smooth={true}
  duration={500}
  offset={-50} // Optional: adjust based on fixed header height
>
  <a href="#services" onClick={() => setMenuOpen(false)}>Services</a>
</Link>
</li>
        <li><a href="#about" onClick={() => setMenuOpen(false)}>About</a></li>
        <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
