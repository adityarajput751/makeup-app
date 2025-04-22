import React from 'react';

import Navbar from './screens/navbar/navbar';
import Hero from './screens/hero/hero';
import Services from './screens/services/services';
import Pricing from './screens/pricing/pricing';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Services />
      <Pricing />
    </div>
  );
}

export default App;
