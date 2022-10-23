import './App.css';
import AppHeader from './components/header'
import AppBody from './components/body'
import AppBodyLeft from './components/bodyLeft';
import AppBodyRight from './components/bodyRight';
import styled from 'styled-components';

function App() {
  return (
    <div className="App">
      <AppHeader />
      <Collect>
        <AppBodyLeft />
        <AppBody />
        <AppBodyRight />
      </Collect>
    </div>
  );
}

const Collect = styled.div`
display: flex;
margin: 33%
`
export default App;
