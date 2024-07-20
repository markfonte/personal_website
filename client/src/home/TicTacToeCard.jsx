import React from 'react';
import TicTacToeGame from './TicTacToeGame.jsx';
import {
  Typography,
  Card,
  CardContent,
  CardHeader,
  CardActions,
  Box,
} from '@mui/material';
import LikeButton from '../shared/LikeButton.jsx';

const styles = {
  root: {
    display: 'grid',
    placeItems: "center",
  },
  cardContent: {
    padding: '0px',
  },
};

export default function TicTacToeCard() {
  return (
    <Box sx={styles.root}>
      <Card raised className="small-card" style={{ minWidth: '300px', paddingTop: '16px' }} >
        <a name="tic_tac_toe_card" href="#tic_tac_toe_card" className="gone">
          Tic Tac Toe Card
        </a>
        <CardHeader
          className="card-header"
          title="Tic Tac Toe"
          subheader="" />
        <CardContent sx={styles.cardContent}>
          <Typography variant="subtitle1" />
          <TicTacToeGame />
        </CardContent>
        <hr />
        <CardActions sx={{ justifyContent: 'flex-end' }}>
          <LikeButton likeType='card' likeName='tic_tac_toe_card' />
        </CardActions>
      </Card>
    </Box>
  );
};