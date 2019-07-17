// @flow strict
import React from 'react';
import ReactDom from 'react-dom';
// $FlowIgnore
import ApolloClient from 'apollo-boost';

import { ApolloProvider } from 'react-apollo';
/**
 * @link https://www.npmjs.com/package/intersection-observer
 * Require the polyfill before requiring any other modules. 
 */
import 'intersection-observer';

import { App } from '@/components/App';

// import main CSS styles
import './assets/scss/styles.scss';

const client = new ApolloClient({
  uri: 'http://localhost:4000/',
});

const AppWrapper = () => (
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);

const app = document.querySelector('#app');

if (app !== null) {
  ReactDom.render(<AppWrapper />, app);
}
