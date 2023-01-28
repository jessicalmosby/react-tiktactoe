import React from 'react';
import { useGameContext } from '../../Context/GameContext.js';

export default function Header() {
  const { gameMessage } = useGameContext();

  return (
    <div className="header">
      <p>{gameMessage}</p>
    </div>
  );
}
