import React from 'react';
import './past_projects.css';
import {Typography} from '@material-ui/core';
import LAZCard from './laz_card.jsx';
import RevolutionUC8Card from './revolutionuc8_card.jsx';
import Spartahack5Card from './spartahack5_card.jsx';
import Grizzhacks3Card from './grizzhacks3_card.jsx';
import CompletedCourseworkCard from './completed_coursework_card.jsx';

class PastProjects extends React.Component {
  render() {
    return (
      <div>
        <Typography style={{margin: 16}} variant="h6">
          Past internships, side projects and hackathon projects I have worked on
        </Typography>
        <LAZCard />
        <CompletedCourseworkCard />
        <Spartahack5Card />
        <RevolutionUC8Card />
        <Grizzhacks3Card />
      </div>
    );
  }
}

export default PastProjects;
