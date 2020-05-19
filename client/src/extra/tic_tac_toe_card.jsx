import React from 'react';
import TicTacToeGame from './tic_tac_toe_game.jsx';
import {Description} from '@material-ui/icons';
import {
  Typography,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  IconButton,
} from '@material-ui/core';
import {withStyles} from '@material-ui/styles';
import PropTypes from 'prop-types';

const styles = {};

class TicTacToeCard extends React.Component {
  render() {
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

TicTacToeCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TicTacToeCard);
