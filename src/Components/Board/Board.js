import React from 'react';
import Box from '../Box/Box.js';
import './Board.css';
import { useGameContext } from '../../Context/GameContext.js';

export default function Board() {
  const { board } = useGameContext();
  return (
    <div className="board">
      {board.map((data) => (
        <Box key={data.space} value={data.content} space={data.space} />
      ))}
    </div>
  );
}
