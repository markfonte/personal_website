import React from 'react';
import LAZCard from './laz_card.jsx';
import RevolutionUC8Card from './revolutionuc8_card.jsx';
import Spartahack5Card from './spartahack5_card.jsx';
import Grizzhacks3Card from './grizzhacks3_card.jsx';
import CompletedCourseworkCard from './completed_coursework_card.jsx';
import {Typography} from '@material-ui/core';
import InteractionCard from '../shared/interaction_card.jsx';
import SpotlightCard from './spotlight_card.jsx';
import DoggieDoodlesCard from './doggie_doodles_card.jsx';
import JPMorganCard from './jpmorgan_card.jsx';
import RoadMapper from './road_mapper_card.jsx';
import MISymptomsCard from './mi_symptoms_card.jsx';
import AmazonCard from './amazon_card.jsx';
import {withStyles} from '@material-ui/styles';
import PropTypes from 'prop-types';
import MHacks12Card from './mhacks12_card.jsx';
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
          <meta
            name="description"
            content="My work experiences, internships, side projects and hackathon projects"
          />
        </MetaTags>
        <Typography className={classes.title} variant="h6"paragraph>
          My work experiences, internships, side projects and hackathon projects
        </Typography>
        <Typography variant="body1" color="secondary">
          <b>
              Click to expand/collapse cards
          </b>
        </Typography>
        <AmazonCard />
        <JPMorganCard />
        <LAZCard />
        <CompletedCourseworkCard />
        <MISymptomsCard />
        <MHacks12Card />
        <WalklensCard />
        <Spartahack5Card />
        <RoadMapper />
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
