import React from 'react';
import Box from '../Box/Box.js';
import boardData from '../../boardData.js';

export default function Board() {
  return (
    <div className="board">
      {boardData.map((data) => (
        <Box key={data.space} />
      ))}
    </div>
  );
}
