import React from 'react';
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
  margin: 0 auto;
  height: 100vh;
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
`
function App() {
  const { loading, data } = useQuery(GET_PARTY)
  return (
    <AppContainer>
      <div className="main">
        <SearchBox />
      </div>
      <div className="pair">
        <ElSlot imgUrl={data.party.rick} />
        <ElSlot imgUrl={data.party.morty} />
      </div>
    </AppContainer>
  );
}

export default App;
