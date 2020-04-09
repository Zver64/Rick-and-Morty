import React from 'react'
import styled from 'styled-components'
import './styles.css'
import ElSlot from './components/ElSlot'
import SearchBox from './components/SearchBox'
import { GET_PARTY } from './apollo/gql'
import { useQuery } from '@apollo/client'

const AppContainer = styled.div`
  padding: 15px;
  width: 810px;
  max-width: 100%;
  margin: 0 auto 50px;
  .pair {
    display: flex;
    justify-content: center;
    & > * {
      margin-right: 30px;
      &:last-child {
        margin: 0;
      }
    }
  }
  .party {
    font-style: normal;
    font-weight: bold;
    font-size: 30px;
    line-height: 35px;
    text-align: center;
  }
`
function App() {
  const { data } = useQuery(GET_PARTY)
  return (
    <AppContainer>
      <div data-testId='test' className='main'>
        <SearchBox />
      </div>
      <h3 className='party'>Party</h3>
      <div className='pair'>
        <ElSlot imgUrl={data.party.rick} />
        <ElSlot imgUrl={data.party.morty} />
      </div>
    </AppContainer>
  )
}

export default App
