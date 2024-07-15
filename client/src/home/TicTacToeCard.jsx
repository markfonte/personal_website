import React from 'react';
import TicTacToeGame from './TicTacToeGame.jsx';
import {
  Typography,
  Card,
  CardContent,
  CardHeader,
} from '@mui/material';

const styles = {
  cardContent: {
    padding: '0px',
  },
};

export default function TicTacToeCard() {
  return (
    <Card raised={true} className="card" style={{ maxWidth: 420, minWidth: 300 }}>
      <a name="tic_tac_toe_card" href="#tic_tac_toe_card" className="gone">
        Tic Tac Toe Card
      </a>
      <CardHeader
        className="card-header"
        title="Tic Tac Toe"
        subheader="just for fun!" />
      <CardContent sx={styles.cardContent}>
        <Typography variant="subtitle1" />
        <TicTacToeGame />
      </CardContent>
    </Card>
  );
};