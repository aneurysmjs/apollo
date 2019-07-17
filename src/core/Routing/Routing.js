// @flow strict
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { Navbar } from '@/core/Navbar';
import { Footer } from '@/core/Footer';
import { Home } from '@/pages/Home';

const Routing = () => (
  <Router>
    <div>
      <Navbar />
      <Route path="/" exact component={Home} />
      <Footer />
    </div>
  </Router>
);

export default Routing;
