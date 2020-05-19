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
import MHacks12Card from './mhacks12_card';
import WalklensCard from './walklens_card.jsx';
import MetaTags from 'react-meta-tags';

const styles = {
  title: {
    margin: '16px',
  },
};

class Projects extends React.Component {
  render() {
    const {classes} = this.props;
    return (
      <div>
        <MetaTags>
          <title>Projects</title>
          <meta name="description" content="Internships, side projects and hackathon projects I have worked on"/>
        </MetaTags>
        <Typography className={classes.title} variant="h6">
          Internships, side projects and hackathon projects I have worked on
        </Typography>
        <JPMorganCard />
        <LAZCard />
        <CompletedCourseworkCard />
        <MHacks12Card />
        <WalklensCard />
        <Spartahack5Card />
        <RevolutionUC8Card />
        <Grizzhacks3Card />
        <SpotlightCard />
        <DoggieDoodlesCard />
        <InteractionCard pagename="projects" />
      </div>
    );
  }
}

Projects.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Projects);
