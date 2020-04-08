import { gql } from '@apollo/client'
export default {
  Mutation: {
    addFilter: (_root, {id}, {cache}) => {

      const FILTERED = gql`
        query Filtered {
          filtered @client
        }
      `

      const list = cache.readQuery({query: FILTERED})
      console.log('this is the list', list)
      const filtered = [...list.filtered, {
        __typename: 'Filtered',
        id: id
      }]
      cache.writeQuery({
        query: FILTERED,
        data: {
          filtered
        }
      })

      return null
    }
  }
}