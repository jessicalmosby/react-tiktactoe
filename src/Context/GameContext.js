import { createContext, useState, useContext, useEffect } from 'react';
import boardData from '../boardData.js';

const GameContext = createContext();
const GameProvider = ({ children }) => {
  const [board, setBoard] = useState(boardData);
  const [currentPlayer, setCurrentPlayer] = useState('x');
  const [gameMessage, setGameMessage] = useState('');
  const [active, setActive] = useState(true);

  const handleClick = (space) => {
    if (!active) return;
    if (!board[space].content) {
      board[space] = { space: space, content: currentPlayer };
      setCurrentPlayer(currentPlayer === 'x' ? 'o' : 'x');
      checkWinner(board);
      setBoard(board);
    }
  };

  const boardContent = [];
  for (let box of board) {
    boardContent.push(box.content);
  }

  const checkGameStatus = (board) => {
    if (!active) return;
    const winner = checkWinner(board);
    if (winner) {
      setGameMessage(`You win ${winner}!`);
      setActive(false);
    } else if (!boardContent.some((i) => i === '')) {
      setGameMessage('Oop, Cats game!');
      setActive(false);
    }
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
        checkGameStatus,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

const checkMatch = (a, b, c) => {
  if (!a || !b || !c) return false;
  if (a === b && b === c) return true;
};

const checkWinner = (board) => {
  if (checkMatch(board[0].content, board[1].content, board[2].content)) return board[0].content;
  if (checkMatch(board[3].content, board[4].content, board[5].content)) return board[3].content;
  if (checkMatch(board[6].content, board[7].content, board[8].content)) return board[6].content;
  if (checkMatch(board[0].content, board[3].content, board[6].content)) return board[0].content;
  if (checkMatch(board[1].content, board[4].content, board[7].content)) return board[1].content;
  if (checkMatch(board[2].content, board[5].content, board[8].content)) return board[2].content;
  if (checkMatch(board[0].content, board[4].content, board[8].content)) return board[0].content;
  if (checkMatch(board[2].content, board[4].content, board[6].content)) return board[2].content;
};

const useGameContext = () => {
  const context = useContext(GameContext);
  useEffect(() => {
    context.checkGameStatus(context.board);
  }, [context]);
  return context;
};
export { GameProvider, useGameContext };
