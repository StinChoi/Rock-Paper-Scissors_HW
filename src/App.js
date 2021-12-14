import './App.css';
import { CenterDiv } from './components/Styles';
import PlayerOne from './pages/PlayerOne';

function App() {
  return (
    <CenterDiv>
      <h1>Rock, Paper, Scissors</h1>
      <PlayerOne />
    </CenterDiv>
  );
}

export default App;
