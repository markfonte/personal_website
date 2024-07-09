import React, { useState } from 'react';
import TicTacToeBoard from './TicTacToeBoard';
import { Typography, Button, Grid, Tooltip } from '@mui/material';

const styles = {
  moveList: {
    paddingLeft: '0',
    paddingRight: '0',
    paddingInlineEnd: '0',
    paddingInlineStart: '0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  moveListItem: {
    justifyContent: 'center',
  },
  gameBoard: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
  },
  game: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    minWidth: '189px',
    marginTop: '8px',
  },
  gameInfo: {
    margin: '0px',
  },
};

function calculateTicTacToeWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

export default function TicTacToeGame() {
  const [history, setHistory] = useState([
    {
      squares: Array(9).fill(null),
    },
  ]);
  const [stepNumber, setStepNumber] = useState(0);
  const [xIsNext, setXIsNext] = useState(true);

  const handleClick = (i) => {
    const currentHistory = history.slice(0, stepNumber + 1);
    const current = currentHistory[currentHistory.length - 1];
    const squares = current.squares.slice();
    if (calculateTicTacToeWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = xIsNext ? 'X' : 'O';
    setHistory(currentHistory.concat([{ squares }]));
    setStepNumber(currentHistory.length);
    setXIsNext(!xIsNext);
  };

  const jumpTo = (step) => {
    setStepNumber(step);
    setXIsNext(step % 2 === 0);
  };

  const current = history[stepNumber];
  const winner = calculateTicTacToeWinner(current.squares);
  const stepNum = stepNumber;

  let status;
  if (winner) {
    status = 'Winner: ' + winner;
  } else if (stepNum === 9) {
    status = "Cat's game!";
  } else {
    status = (xIsNext ? 'X' : 'O') + "'s turn";
  }

  return (
    <Grid sx={styles.game}>
      <Grid sx={styles.gameBoard}>
        <TicTacToeBoard squares={current.squares} onClick={handleClick} />
      </Grid>
      <Grid sx={styles.gameInfo}>
        <div>
          <Typography variant="subtitle1" color={xIsNext ? 'secondary' : 'primary'}>
            {' '}
            {status}
          </Typography>
        </div>
        <br />
        <div className={winner ? 'firework' : ''} />
        {stepNum !== 0 ? (
          <Tooltip placement="right" arrow title="Restart">
            <Button variant="outlined" onClick={() => jumpTo(0)}>
              Restart
            </Button>
          </Tooltip>
        ) : (
          <p />
        )}
      </Grid>
    </Grid>
  );
};
