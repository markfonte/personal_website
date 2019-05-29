import React from 'react';
import './tic_tac_toe.css';
import {Typography} from '@material-ui/core';
import TicTacToeGame from './tic_tac_toe_game.jsx';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import IconButton from '@material-ui/core/IconButton';
import DescriptionIcon from '@material-ui/icons/Description';

class TicTacToeCard extends React.Component {
  render () {
    const reactTutorialLink = `https://reactjs.org/tutorial/tutorial.html#overview`;

    return (
      <Card className="card">
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
            <DescriptionIcon />
          </IconButton>
        </CardActions>
      </Card>
    );
  }
}

export default TicTacToeCard;
