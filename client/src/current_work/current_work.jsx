import React from 'react';
import './current_work.css';
import {Typography} from '@material-ui/core';
import SpotlightCard from './spotlight_card.jsx';
import DoggieDoodlesCard from './doggie_doodles_card.jsx';
import JPMorganCard from './jpmorgan_card.jsx';
import CurrentCourseworkCard from './current_coursework_card.jsx';
import InteractionCard from '../shared/interaction_card';

class CurrentWork extends React.Component {
  render() {
    return (
      <div>
        <Typography style={{margin: 16}} variant="h6">
          Current projects and businesses I am working on
        </Typography>
        <JPMorganCard />
        <CurrentCourseworkCard />
        <SpotlightCard />
        <DoggieDoodlesCard />
        <InteractionCard pagename="current_work" />
      </div>
    );
  }
}

export default CurrentWork;
