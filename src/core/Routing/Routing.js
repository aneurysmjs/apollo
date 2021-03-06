// @flow strict
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { Navbar } from '@/core/Navbar';
import { Footer } from '@/core/Footer';
import { Home } from '@/pages/Home';
import { Layout } from '@/core/Layout';

const Routing = () => (
  <Router>
    <div>
      <Navbar />
      <Layout>
        <Route path="/" exact component={Home} />
      </Layout>
      <Footer />
    </div>
  </Router>
);

export default Routing;
