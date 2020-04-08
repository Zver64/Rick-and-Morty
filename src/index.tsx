import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'
import { ApolloClient, HttpLink, InMemoryCache, ApolloProvider, gql } from '@apollo/client'
import resolvers from './apollo/resolvers'

const cache = new InMemoryCache()
const client = new ApolloClient({
  cache,
  link: new HttpLink({
    uri: 'https://rickandmortyapi.com/graphql',
  }),
  resolvers
})
cache.writeQuery({
  query: gql`{search}`,
  data: {
    search: ''
  }
})
cache.writeQuery({
  query: gql`{filtered}`,
  data: {
    filtered: []
  }
})

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
