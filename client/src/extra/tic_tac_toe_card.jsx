import React from 'react';
import TicTacToeGame from './tic_tac_toe_game.jsx';
import {Description} from '@mui/icons-material';
import {
  Typography,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  IconButton,
  Tooltip,
} from '@mui/material';
import {withStyles} from '@mui/styles';
import PropTypes from 'prop-types';

const styles = {
  cardContent: {
    padding: '0px',
  },
};

class TicTacToeCard extends React.Component {
  render() {
    const {classes} = this.props;
    const reactTutorialLink = `https://reactjs.org/tutorial/tutorial.html#overview`;

    return (
      <Card raised={true} className="card">
        <a name="tic_tac_toe_card" href="#tic_tac_toe_card" className="gone">
            Tic Tac Toe Card
        </a>
        <CardHeader
          className="card-header"
          title="Tic Tac Toe"
          subheader="just for fun!" />
        <CardContent className={classes.cardContent}>
          <Typography variant="subtitle1" />
          <TicTacToeGame />
        </CardContent>
        <CardActions>
          <Tooltip
            arrow
            title="Go to React Tutorial (where I got most of this code)">
            <IconButton
              aria-label="credit: reactjs tutorial"
              href={reactTutorialLink}
              size="large">
              <Description />
            </IconButton>
          </Tooltip>
        </CardActions>
      </Card>
    );
  }
}

TicTacToeCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TicTacToeCard);
