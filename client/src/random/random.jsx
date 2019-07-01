import React from 'react';
import './random.css';
import TicTacToeCard from './tic_tac_toe_card.jsx';
import GimbleCard from './gimble_card.jsx';
import CurrentBooksCard from './current_books_card.jsx';
import CompletedBooksCard from './completed_books_card.jsx';
import RecommendedSitesTable from './recommended_sites.jsx';
import {Typography} from '@material-ui/core';
//import InteractionCard from '../shared/interaction_card.jsx';

class Random extends React.Component {
  render () {
    return (
      <div>
        <Typography style={{margin: 16}} variant="h6">
          My sandbox for trying random stuff - enjoy!
        </Typography>
        <GimbleCard />
        <TicTacToeCard />
        <RecommendedSitesTable />
        <CurrentBooksCard />
        <CompletedBooksCard />
        {/* <InteractionCard /> */}
      </div>
    );
  }
}

export default Random;
