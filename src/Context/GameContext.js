import { createContext, useState, useContext } from 'react';

const GameContext = createContext();
const GameProvider = ({ children }) => {
  const [board, setBoard] = useState(boardData);

  return <GameContext.Provider value={{ board, setBoard }}>{children}</GameContext.Provider>;
};

const useGameContext = () => {
  const gameContext = useContext(GameContext);
  return gameContext;
};
export { GameProvider, useGameContext };
