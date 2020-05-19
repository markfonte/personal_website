import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/styles';
import TicTacToeSquare from './tic_tac_toe_square.jsx';

const styles = {};

class TicTacToeBoard extends React.Component {
  renderSquare(i) {
    return (
      <TicTacToeSquare
        value={this.props.squares[i]}
        onClick={() => this.props.onClick(i)}
      />
    );
  }

  render() {
    return (
      <div>
        <div>
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div>
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div>
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

TicTacToeBoard.propTypes = {
  classes: PropTypes.object.isRequired,
  squares: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default withStyles(styles)(TicTacToeBoard);
