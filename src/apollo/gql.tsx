import { gql } from '@apollo/client'

export const GET_FILTERED = gql`
  query GetFiltered {
    filtered @client
  }
`

export const GET_PARTY = gql`
  query GetParty {
    party @client
  }
`

export const ADD_FILTER = gql`
  mutation AddFilter($id: String!) {
    addFilter(id: $id) @client
  }
`

export const ADD_PARTY = gql`
  mutation AddParty($person: String, $link: String) {
    addParty(person: $person, link: $link) @client
  }
`
export const GET_IMAGES = gql`
  query getCharacters($page: Int!, $name: String!) {
    characters(page: $page, filter: { name: $name }) {
      results {
        image
        id
        name
      }
    }
  }
`
