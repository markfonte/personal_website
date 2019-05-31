import React from 'react';
import './current_work.css';
import {Typography} from '@material-ui/core';
import SpotlightCard from './spotlight_card.jsx';
import DoggieDoodlesCard from './doggie_doodles_card.jsx';
import JPMorganCard from './jpmorgan_card.jsx';

class CurrentWork extends React.Component {
  render () {
    return (
      <div>
        <Typography variant="h6">What is currently on my plate...</Typography>
        <JPMorganCard />
        <SpotlightCard />
        <DoggieDoodlesCard />
      </div>
    );
  }
}

export default CurrentWork;
