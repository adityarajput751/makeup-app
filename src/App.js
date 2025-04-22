import React from 'react';

import Navbar from './screens/navbar/navbar';
import Hero from './screens/hero/hero';
import Services from './screens/services/services';
import Pricing from './screens/pricing/pricing';
import Contact from './screens/contactus/contact';
import Footer from './screens/footer/footer';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Services />
      <Pricing />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
