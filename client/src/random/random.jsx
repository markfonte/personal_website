import React from 'react';
import './random.css';
import {Typography} from '@material-ui/core';
import Link from '@material-ui/core/Link';
import TicTacToeGame from './tic_tac_toe_game.jsx';

class Random extends React.Component {
  render () {
    const reactTutorialLink = `https://reactjs.org/tutorial/tutorial.html#overview`;

    return (
      <div>
        <Typography variant="h6">
          My sandbox for trying random stuff - enjoy!
        </Typography>
        <div className="tic-tac-toe-container">
          <Typography variant="subtitle1">Tic Tac Toe</Typography>
          <TicTacToeGame />
          <Typography variant="caption" id="tic-tac-toe-caption">
            <Link color="textPrimary" href={reactTutorialLink}>
              credit: reactjs tutorial
            </Link>
          </Typography>
        </div>
      </div>
    );
  }
}

export default Random;
