import React from 'react'
import ElCard from './ElCard'
import { useQuery, gql } from '@apollo/client'

const GET_IMAGES = gql`
  query getCharacters($page: Int!, $name: String!) {
    characters(page: $page, filter: {
    name: $name
  }) {
    results {
      image,
      id,
      name
    }
  }
  }
`
function CardList({ search = '' }: { search?: string }) {
  const { loading, error, data } = useQuery(GET_IMAGES, {
    variables: {
      "page": 1,
      "name": search
    }
  })
  const list = (data: any) => {
    if(loading) return <p>Loading...</p>
    if(error) {
      return <p>Not found...</p>
    }
    return data.characters.results.map((val: any) => {
      return (<ElCard imgUrl={val.image} key={val.image} />)
    })
  }
  return (
    <>
      {list(data)}
    </>
  )
}

export default CardList
