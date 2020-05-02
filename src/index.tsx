import React from 'react';
import ReactDOM from 'react-dom';
import App from 'Components/App';
import GlobalStyles from "Components/globalStyles"
import {ApolloProvider} from "react-apollo"
import client from "apollo";

ReactDOM.render(
  <ApolloProvider client={client}>
    <GlobalStyles />
    <App />
  </ApolloProvider>,
  document.getElementById('root')
);