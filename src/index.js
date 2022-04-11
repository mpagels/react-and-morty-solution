import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'

import GlobalStyle from './globalStyles'

const client = new ApolloClient({
  uri: 'https://rickandmortyapi.com/graphql',

  cache: new InMemoryCache(),
})

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalStyle />
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
