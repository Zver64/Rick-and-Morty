import React from 'react'
import ElCard from './ElCard'
import { useQuery, gql } from '@apollo/client'
import { GET_FILTERED } from '../apollo/gql'

const GET_IMAGES = gql`
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

function CardList({ search = '' }: { search?: string }) {
  const { loading, error, data } = useQuery(GET_IMAGES, {
    variables: {
      page: 1,
      name: search,
    },
  })
  const { data: filtered, loading: filterLoading } = useQuery(GET_FILTERED)
  const list = (data: any) => {
    if (loading || filterLoading) return <p>Loading...</p>
    if (error) {
      return <p>Not found...</p>
    }
    return data.characters.results
      .filter((val: any) => {
        const test = filtered.filtered.filter((item: any) => item.id === val.id)
        return !test.length
      })
      .map((val: any) => {
      return <ElCard imgUrl={val.image} key={val.id} name={val.name} id={val.id} />
    })
  }
  return <>{list(data)}</>
}

export default CardList
