import React from 'react';
import './current_work.css';
import {Typography} from '@material-ui/core';
import CurrentCourseworkCard from './current_coursework_card.jsx';
import InteractionCard from '../shared/interaction_card';

class CurrentWork extends React.Component {
  render() {
    return (
      <div>
        <Typography style={{margin: 16}} variant="h6">
          Current coursework, projects and businesses I am working on
        </Typography>
        <CurrentCourseworkCard />
        <InteractionCard pagename="current_work" />
      </div>
    );
  }
}

export default CurrentWork;
