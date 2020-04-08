import React from 'react';
import styled from 'styled-components'
import './styles.css'
import ElSlot from './components/ElSlot'
import SearchBox from './components/SearchBox'

const AppContainer = styled.div`
  padding: 15px;
  width: 810px;
  max-width: 100%;
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
  return (
    <AppContainer>
      <div className="main">
        <SearchBox />
      </div>
      <div className="pair">
        <ElSlot />
        <ElSlot />
      </div>
    </AppContainer>
  );
}

export default App;
