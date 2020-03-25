import React from 'react';
import styled from 'styled-components'
import './styles.css'
import ElInput from './components/ElInput'
import ElCard from './components/ElCard'
import ElSlot from './components/ElSlot'

const AppContainer = styled.div`
  padding: 15px;
  width: 810px;
  max-width: 100%;
  height: 100vh;
  .input {
    margin-bottom: 50px;
  }
  .results {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
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
  let items:any[] = []
  for(let i = 0; i < 10; i++) {
    items.push((<ElCard key={i.toString()} imgUrl="https://rickandmortyapi.com/api/character/avatar/1.jpeg" onClose={() => {}} />))
  }
  return (
    <AppContainer>
      <div className="input">
        <ElInput placeholder="Type your query here..."/>
      </div>
      <div className="results">
        {items}
      </div>
      <div className="pair">
        <ElSlot />
        <ElSlot />
      </div>
    </AppContainer>
  );
}

export default App;
