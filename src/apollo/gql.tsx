import { gql } from '@apollo/client'
export const GET_FILTERED = gql`
  query GetFiltered {
    filtered @client
  }
`