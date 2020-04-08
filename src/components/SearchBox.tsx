import React, { useState } from 'react'
import styled from 'styled-components'
import CardList from './CardList'
import debounce from 'lodash.debounce'
import { gql, useQuery } from '@apollo/client'

const GET_LOCAL = gql`
  {
    search @client
  }
`

function SearchBox({ className }: { className?: any }) {
  let [search, setSearch] = useState('')

  function getData(name: string) {
    setSearch(name)
  }
  const deb = debounce(getData, 300)
  const mySearch = (search: string) => {
    if (!search) return <p>Waiting for your search</p>
    if (search.length < 3) return <p>Your query is too short</p>
    return <CardList search={search} />
  }
  return (
    <div className={className}>
      <div className='search'>
        <input
          placeholder='type something'
          onChange={(e) => deb(e.target.value)}
        />
      </div>
      <div className='list'>
        {mySearch(search)}
      </div>
    </div>
  )
}

export default styled(SearchBox)`
  .list {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
  .search {
    margin-bottom: 50px;
    input {
      width: 100%;
      padding: 22px 27px;
      background: #ffffff;
      border: 1px solid #a0a0a0;
      font-style: normal;
      font-weight: 300;
      font-size: 30px;
    }
  }
`
