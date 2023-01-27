import React from 'react';
import './Box.css';
import { useGameContext } from '../../Context/GameContext.js';

export default function Box({ space, value }) {
  const { handleClick } = useGameContext();
  return (
    <div className="box" onClick={() => handleClick(space)}>
      {value}
    </div>
  );
}
