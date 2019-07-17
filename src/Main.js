// @flow strict
import React from 'react';
import ReactDom from 'react-dom';
/**
 * @link https://www.npmjs.com/package/intersection-observer
 * Require the polyfill before requiring any other modules. 
 */
import 'intersection-observer';

// import main CSS styles
import './assets/scss/styles.scss';

import { App } from '@/components/App';

const AppWrapper = () => (
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const app = document.querySelector('#app');

if (app !== null) {
  ReactDom.render(<AppWrapper />, app);
}
