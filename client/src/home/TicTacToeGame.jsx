import React from 'react';
import TicTacToeBoard from './TicTacToeBoard';
import {Typography, Button, Grid, Tooltip} from '@mui/material';
import PropTypes from 'prop-types';
import {withStyles} from '@mui/styles';

const styles = {
  moveList: {
    paddingLeft: '0',
    paddingRight: '0',
    paddingInlineEnd: '0',
    paddingInlineStart: '0',
    display: 'flex', /* NEW, Spec - Firefox, Chrome, Opera */
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  moveListItem: {
    justifyContent: 'center',
  },
  gameBoard: {
    display: 'flex', /* NEW, Spec - Firefox, Chrome, Opera */
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

class TicTacToeGame extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [
        {
          squares: Array(9).fill(null),
        },
      ],
      stepNumber: 0,
      xIsNext: true,
    };
  }

  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    if (calculateTicTacToeWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      history: history.concat([
        {
          squares: squares,
        },
      ]),
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext,
    });
  }

  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: step % 2 === 0,
    });
  }

  render() {
    const {classes} = this.props;
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = calculateTicTacToeWinner(current.squares);
    const stepNum = this.state.stepNumber;

    let status;

    if (winner) {
      status = 'Winner: ' + winner;
    } else if (stepNum === 9) {
      status = 'Cat\'s game!';
    } else {
      status = (this.state.xIsNext ? 'X' : 'O') + '\'s turn';
    }

    return (
      <Grid className={classes.game}>
        <Grid className={classes.gameBoard}>
          <TicTacToeBoard
            squares={current.squares}
            onClick={(i) => this.handleClick(i)}
          />
        </Grid>
        <Grid className={classes.gameInfo}>
          <div>
            <Typography variant="subtitle1" color={this.state.xIsNext ? 'secondary' : 'primary'}>
              {' '}{status}
            </Typography>
          </div>
          <br/>
          <div className={winner ? 'firework' : ''} />
          {stepNum !== 0 ?
          <Tooltip
            placement="right"
            arrow
            title="Restart">
            <Button variant="outlined" onClick={() => this.jumpTo(0)}>
                  Restart
            </Button>
          </Tooltip> : <p />}
        </Grid>
      </Grid>
    );
  }
}

TicTacToeGame.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TicTacToeGame);
