import React from 'react';
import Contact from './screens/contactus/contact';
import Footer from './screens/footer/footer';
import HomeScreen from './screens/homeScreen/HomeScreen';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Portfolio from './screens/Portfolio/portfolio';

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
    </Router>
    </div>
  );
}

export default App;
