import React from 'react';
import './tic_tac_toe.css';
import TicTacToeGame from './tic_tac_toe_game.jsx';
import {Description} from '@material-ui/icons/Description';
import {
  Typography,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  IconButton,
} from '@material-ui/core';

class TicTacToeCard extends React.Component {
  render () {
    const reactTutorialLink = `https://reactjs.org/tutorial/tutorial.html#overview`;

    return (
      <Card raised={true} className="card">
        <CardHeader title="Tic Tac Toe" subheader="because why not?" />
        <CardContent>
          <Typography variant="subtitle1" />
          <TicTacToeGame />
        </CardContent>
        <CardActions>
          <IconButton
            aria-label="credit: reactjs tutorial"
            href={reactTutorialLink}
          >
            <Description />
          </IconButton>
        </CardActions>
      </Card>
    );
  }
}

export default TicTacToeCard;
