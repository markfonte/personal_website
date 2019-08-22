import React from 'react';
import LAZCard from './laz_card.jsx';
import RevolutionUC8Card from './revolutionuc8_card.jsx';
import Spartahack5Card from './spartahack5_card.jsx';
import Grizzhacks3Card from './grizzhacks3_card.jsx';
import CompletedCourseworkCard from './completed_coursework_card.jsx';
import {Typography} from '@material-ui/core';
import InteractionCard from '../shared/interaction_card';
import SpotlightCard from './spotlight_card';
import DoggieDoodlesCard from './doggie_doodles_card';
import JPMorganCard from './jpmorgan_card';
import {withStyles} from '@material-ui/styles';
import PropTypes from 'prop-types';

const styles = {
  title: {
    margin: '16px',
  },
};

class PastProjects extends React.Component {
  render() {
    const {classes} = this.props;
    return (
      <div>
        <Typography className={classes.title} variant="h6">
          Past internships, side projects and hackathon projects I have worked on
        </Typography>
        <JPMorganCard />
        <LAZCard />
        <CompletedCourseworkCard />
        <Spartahack5Card />
        <RevolutionUC8Card />
        <Grizzhacks3Card />
        <SpotlightCard />
        <DoggieDoodlesCard />
        <InteractionCard pagename="past_projects" />
      </div>
    );
  }
}

PastProjects.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PastProjects);
