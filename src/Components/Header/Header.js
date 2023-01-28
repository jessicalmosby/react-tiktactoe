import React from 'react';
import { useGameContext } from '../../Context/GameContext.js';

export default function Header() {
  const { gameMessage, setGameMessage, setBoard, setCurrentPlayer, setActive } = useGameContext();

  function newGame() {
    setActive(true);
    setBoard([
      { space: 0, content: '' },
      { space: 1, content: '' },
      { space: 2, content: '' },
      { space: 3, content: '' },
      { space: 4, content: '' },
      { space: 5, content: '' },
      { space: 6, content: '' },
      { space: 7, content: '' },
      { space: 8, content: '' },
    ]);
    setCurrentPlayer('x');
    setGameMessage('');
  }

  return (
    <div className="header">
      <p>{gameMessage}</p>
      <button onClick={newGame}>New Game!</button>
    </div>
  );
}
