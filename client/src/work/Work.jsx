import React, {lazy, Suspense} from 'react';
import {Typography, CircularProgress} from '@mui/material';
import {withStyles} from '@mui/styles';
import PropTypes from 'prop-types';
const LAZCard = lazy(() => import('./LazCard.jsx'));
const RevolutionUC8Card = lazy(() => import('./Revolutionuc8Card.jsx'));
const Spartahack5Card = lazy(() => import('./Spartahack5Card.jsx'));
const Grizzhacks3Card = lazy(() => import('./Grizzhacks3Card.jsx'));
const CompletedCourseworkCard = lazy(() => import('./CompletedCourseworkCard.jsx'));
const InteractionCard = lazy(() => import('../shared/InteractionCard.jsx'));
const SpotlightCard = lazy(() => import('./SpotlightCard.jsx'));
const DoggieDoodlesCard = lazy(() => import('./DoggieDoodlesCard.jsx'));
const JPMorganCard = lazy(() => import('./JpmorganCard.jsx'));
const RoadMapperCard = lazy(() => import('./RoadMapperCard.jsx'));
const MISymptomsCard = lazy(() => import('./MiSymptomsCard.jsx'));
const AmazonCard = lazy(() => import('./AmazonCard.jsx'));
const MHacks12Card = lazy(() => import('./Mhacks12Card.jsx'));
const WalklensCard = lazy(() => import('./WalklensCard.jsx'));
const ClippCard = lazy(() => import('./ClippCard.jsx'));
const JustlightCard = lazy(() => import('./JustlightCard.jsx'));
const TeslaCard = lazy(() => import('./TeslaCard.jsx'));
const GlossaryCard = lazy(() => import('../shared/GlossaryCard.jsx'));

const renderLoader = () => <CircularProgress color="secondary" />;

const styles = {
  title: {
    margin: '16px',
  },
  twoColumnContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
};

class Work extends React.Component {
  render() {
    const {classes} = this.props;

    document.title = 'Work | Mark Fonte';

    return (
      <div>
        <Typography className={classes.title} variant="h6" paragraph>
          My work experiences, internships, side projects and hackathon projects
        </Typography>
        <Suspense fallback={renderLoader()}>
          <div className={classes.twoColumnContainer}>
            <TeslaCard/>
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
          </div>
          <GlossaryCard />
          <InteractionCard pagename="work" />
        </Suspense>
      </div>
    );
  }
}

Work.propTypes = {
  classes: PropTypes.object.isRequired,
  isDarkTheme: PropTypes.bool.isRequired,
};

export default withStyles(styles)(Work);
