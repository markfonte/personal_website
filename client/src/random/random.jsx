import React from 'react';
import './random.css';
import {Typography} from '@material-ui/core';
import TicTacToeCard from './tic_tac_toe_card.jsx';
import GimbleCard from './gimble_card.jsx';

class Random extends React.Component {
  render () {
    return (
      <div>
        <Typography variant="h6">
          My sandbox for trying random stuff - enjoy!
        </Typography>
        <GimbleCard />
        <TicTacToeCard />
      </div>
    );
  }
}

export default Random;
