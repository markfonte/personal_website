import React from 'react';
import './tic_tac_toe.css';
import PropTypes from 'prop-types';
import {Typography, Button} from '@material-ui/core';

function TicTacToeSquare (props) {
  return (
    <Button variant="outlined" className="square" onClick={props.onClick}>
      <Typography variant="h5">
        {props.value}
      </Typography>
    </Button>
  );
}

TicTacToeSquare.propTypes = {
  value: PropTypes.string,
  onClick: PropTypes.func,
};

class TicTacToeBoard extends React.Component {
  static propTypes = {
    squares: PropTypes.array,
    onClick: PropTypes.func,
  };
  renderSquare (i) {
    return (
      <TicTacToeSquare
        value={this.props.squares[i]}
        onClick={() => this.props.onClick (i)}
      />
    );
  }

  render () {
    return (
      <div>
        <div className="board-row">
          {this.renderSquare (0)}
          {this.renderSquare (1)}
          {this.renderSquare (2)}
        </div>
        <div className="board-row">
          {this.renderSquare (3)}
          {this.renderSquare (4)}
          {this.renderSquare (5)}
        </div>
        <div className="board-row">
          {this.renderSquare (6)}
          {this.renderSquare (7)}
          {this.renderSquare (8)}
        </div>
      </div>
    );
  }
}

export default TicTacToeBoard;
