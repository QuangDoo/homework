import {ApolloProvider} from '@apollo/client';
import React from 'react';
import client from './apolloClient';
import {HomeScreen} from './screen/HomeScreen';

const App = (): JSX.Element => {
  return (
    <ApolloProvider client={client}>
      <HomeScreen />
    </ApolloProvider>
  );
};

export default App;
