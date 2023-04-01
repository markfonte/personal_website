import React, {lazy, Suspense} from 'react';
import {Typography, CircularProgress} from '@mui/material';
import {withStyles} from '@mui/styles';
import PropTypes from 'prop-types';
const LAZCard = lazy(() => import('./laz_card.jsx'));
const RevolutionUC8Card = lazy(() => import('./revolutionuc8_card.jsx'));
const Spartahack5Card = lazy(() => import('./spartahack5_card.jsx'));
const Grizzhacks3Card = lazy(() => import('./grizzhacks3_card.jsx'));
const CompletedCourseworkCard = lazy(() => import('./completed_coursework_card.jsx'));
const InteractionCard = lazy(() => import('../shared/interaction_card.jsx'));
const SpotlightCard = lazy(() => import('./spotlight_card.jsx'));
const DoggieDoodlesCard = lazy(() => import('./doggie_doodles_card.jsx'));
const JPMorganCard = lazy(() => import('./jpmorgan_card.jsx'));
const RoadMapperCard = lazy(() => import('./road_mapper_card.jsx'));
const MISymptomsCard = lazy(() => import('./mi_symptoms_card.jsx'));
const AmazonCard = lazy(() => import('./amazon_card.jsx'));
const MHacks12Card = lazy(() => import('./mhacks12_card.jsx'));
const WalklensCard = lazy(() => import('./walklens_card.jsx'));
const ClippCard = lazy(() => import('./clipp_card.jsx'));
const JustlightCard = lazy(() => import('./justlight_card.jsx'));
const GlossaryCard = lazy(() => import('../shared/glossary_card.jsx'));

const renderLoader = () => <CircularProgress color="secondary" />;

const styles = {
  title: {
    margin: '16px',
  },
};

class Projects extends React.Component {
  render() {
    const {classes} = this.props;

    document.title = 'Projects | Mark Fonte';

    return (
      <div>
        <Typography className={classes.title} variant="h6"paragraph>
          My work experiences, internships, side projects and hackathon projects
        </Typography>
        <Suspense fallback={renderLoader()}>
          <JustlightCard isDarkTheme={this.props.isDarkTheme} />
          <AmazonCard />
          <JPMorganCard />
          <LAZCard />
          <CompletedCourseworkCard />
          <MISymptomsCard />
          <MHacks12Card />
          <WalklensCard />
          <Spartahack5Card />
          <ClippCard />
          <RoadMapperCard />
          <RevolutionUC8Card />
          <Grizzhacks3Card />
          <SpotlightCard />
          <DoggieDoodlesCard />
          <GlossaryCard />
          <InteractionCard pagename="projects" />
        </Suspense>
      </div>
    );
  }
}

Projects.propTypes = {
  classes: PropTypes.object.isRequired,
  isDarkTheme: PropTypes.bool.isRequired,
};

export default withStyles(styles)(Projects);
