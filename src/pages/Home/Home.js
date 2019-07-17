// @flow strict
import React from 'react';
import { ApolloConsumer } from 'react-apollo';
// $FlowIgnore
import ggl from 'graphql-tag';

const Home = () => (
  <section className="home">
    <ApolloConsumer>
      {client => {
        client
          .query({
            query: ggl`
              {
                recipes {
                  id
                  title
                }
              }
            `
          })
          .then(result => {
            console.log('result', result);
          });
      }}
    </ApolloConsumer>
    Apollo
  </section>
);

export default Home;
