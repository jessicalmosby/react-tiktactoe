import { createContext, useState, useContext } from 'react';
import boardData from '../boardData.js';

const GameContext = createContext();
const GameProvider = ({ children }) => {
  const [board, setBoard] = useState(boardData);
  const [currentPlayer, setCurrentPlayer] = useState('x');
  const [gameMessage, setGameMessage] = useState('');
  const [active, setActive] = useState(true);

  const handleClick = (space) => {
    board[space] = { space: space, content: currentPlayer };
    setCurrentPlayer(currentPlayer === 'x' ? 'o' : 'x');
  };

  return (
    <GameContext.Provider
      value={{
        board,
        setBoard,
        currentPlayer,
        setCurrentPlayer,
        gameMessage,
        setGameMessage,
        active,
        setActive,
        handleClick,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

const useGameContext = () => {
  const gameContext = useContext(GameContext);
  return gameContext;
};
export { GameProvider, useGameContext };
