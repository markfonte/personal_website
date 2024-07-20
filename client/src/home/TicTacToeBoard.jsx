import React from 'react';
import PropTypes from 'prop-types';
import TicTacToeSquare from './TicTacToeSquare.jsx';
import { Box } from '@mui/material';

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
    <Box>
      <Box>
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </Box>
      <Box>
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </Box>
      <Box>
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </Box>
    </Box>
  );
};

TicTacToeBoard.propTypes = {
  squares: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired,
};
