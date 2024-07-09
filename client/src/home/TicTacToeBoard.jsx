import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import TicTacToeSquare from './TicTacToeSquare.jsx';

export default function TicTacToeBoard({ squares, onClick }) {
  const renderSquare = (i) => {
    return (
      <TicTacToeSquare
        value={squares[i]}
        onClick={() => onClick(i)}
      />
    );
  };

  return (
    <div>
      <div>
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div>
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div>
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
};

TicTacToeBoard.propTypes = {
  squares: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired,
};
