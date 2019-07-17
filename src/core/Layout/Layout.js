// @flow strict
import React from 'react';
import type { Node } from 'react';

import './Layout.scss';

type PropTypes = {
  children: Node,
};

const Layout = ({ children }: PropTypes) => (
  <main>
    { children }
  </main>
);

export default Layout;
