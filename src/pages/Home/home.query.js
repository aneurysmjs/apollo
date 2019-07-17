// @flow strict
// $FlowIgnore
import ggl from 'graphql-tag';

const Home_Query = ggl`
    {
      recipes {
        id
        title
      }
    }
  `;

export default Home_Query;