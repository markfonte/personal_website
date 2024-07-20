import React from 'react';
import PropTypes from 'prop-types';
import { Typography, Button } from '@mui/material';

const styles = {
  square: {
    border: '1px solid #999',
    float: 'left',
    fontSize: '1.75rem',
    fontWeight: 'bold',
    lineHeight: '50px',
    height: '64px',
    padding: '0px',
    textAlign: 'center',
    width: '10%',
  },
};

export default function TicTacToeSquare({ value, onClick }) {
  return (
    <Button variant="outlined" sx={styles.square} onClick={onClick} key={value + " square"}>
      <Typography variant="h5" color={value === 'X' ? 'secondary' : 'primary'} >
        {value}
      </Typography>
    </Button>
  );
};

TicTacToeSquare.propTypes = {
  value: PropTypes.string, // "null" when neither 'X' nor 'O'
  onClick: PropTypes.func.isRequired,
};