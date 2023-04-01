import React from 'react';
import TicTacToeGame from './tic_tac_toe_game.jsx';
import {
  Typography,
  Card,
  CardContent,
  CardHeader,
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

    return (
      <Card raised={true} className="card" style={{maxWidth: 420}}>
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
      </Card>
    );
  }
}

TicTacToeCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TicTacToeCard);
