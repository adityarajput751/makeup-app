import React from 'react';
import Contact from './screens/contactus/contact';
import Footer from './screens/footer/footer';
import HomeScreen from './screens/homeScreen/HomeScreen';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Portfolio from './screens/Portfolio/portfolio';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div>
      <Router>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/portfolio" element={<Portfolio />} />

        {/* Add more routes as needed */}
      </Routes>
      <Footer />
      <ToastContainer position="top-right" autoClose={2000} />
    </Router>
    </div>
  );
}

export default App;
