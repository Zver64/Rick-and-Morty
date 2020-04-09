import { gql } from '@apollo/client'
import { GET_FILTERED as FILTERED, GET_PARTY } from './gql'
export default {
  Mutation: {
    addFilter: (_: any, {id}:{id:string}, {cache}:{cache: any}) => {

      const list = cache.readQuery({query: FILTERED})
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
    },
    addParty(_:any, variables: any, client: any) {
      const {party} = client.cache.readQuery({query: GET_PARTY})
      const data = Object.assign({}, party, {[variables.person]: variables.link})
      client.cache.writeQuery({
        query: GET_PARTY,
        data: {
          party: data
        }
      })
    }
  },
}