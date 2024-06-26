import React from 'react';
import PropTypes from 'prop-types';
import {Typography, Button} from '@mui/material';
import {withStyles} from '@mui/styles';

const styles = {
  square: {
    border: '1px solid #999',
    float: 'left',
    fontSize: '1.75rem',
    fontWeight: 'bold',
    lineHeight: '50px',
    height: '64px',
    marginRight: '-1px',
    marginTop: '-1px',
    padding: '0',
    textAlign: 'center',
    width: '10%',
  },
};

class TicTacToeSquare extends React.Component {
  render() {
    const {classes} = this.props;

    return (
      <Button variant="outlined" className={classes.square} onClick={this.props.onClick}>
        <Typography variant="h5" color={this.props.value === 'X' ? 'secondary' : 'primary'} >
          {this.props.value}
        </Typography>
      </Button>
    );
  }
}

TicTacToeSquare.propTypes = {
  classes: PropTypes.object.isRequired,
  value: PropTypes.string, // "null" when neither 'X' nor 'O'
  onClick: PropTypes.func.isRequired,
};

export default withStyles(styles)(TicTacToeSquare);
