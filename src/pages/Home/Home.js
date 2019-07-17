// @flow strict
import React from 'react';
import { Query } from 'react-apollo';
// $FlowIgnore
import ggl from 'graphql-tag';

import './Home.scss';

const Home = () => (
  <section className="home">
    <Query
      query={ggl`
        {
          recipes {
            id
            title
          }
        }
      `}
    >
      {({data, loading, error }) => {
        if (loading) return <p>Loading...</p>;
        if (error) return <p className="error">Something went wrong</p>;

        return (
          <div className="d-flex justify-content-center">
            <div style={ { width: '24rem' }}>
              <ul className="list-group">
                {data.recipes.map(({ id, title }) =>
                  <li
                    className="list-group-item"
                    key={id}
                  >
                    {title}
                  </li>
                )}
              </ul>
            </div>
          </div>
          
        );
      }}
    </Query>
  </section>
);

export default Home;
