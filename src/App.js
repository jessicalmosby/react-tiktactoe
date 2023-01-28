import './App.css';
import Header from './Components/Header/Header.js';
import Board from './Components/Board/Board.js';

function App() {
  return (
    <div className="App">
      <h1>TicTacToe</h1>
      <Header />
      <Board />
    </div>
  );
}

export default App;
