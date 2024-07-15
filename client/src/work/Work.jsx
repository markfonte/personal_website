import React, { lazy, Suspense, useEffect } from 'react';
import { Typography, CircularProgress, Box } from '@mui/material';
import PropTypes from 'prop-types';
import { Masonry } from '@mui/lab';
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
  root: {
    justifyContent: 'start',
  },
  title: {
    marginBottom: '16px',
  },
  masonryContainer: {
    margin: 'auto',
  },
};

export default function Work({ isDarkTheme }) {
  useEffect(() => {
    document.title = 'Work | Mark Fonte';
  }, []);

  return (
    <Box sx={styles.root}>
      <Typography sx={styles.title} variant="h6" paragraph>
        My work experiences, internships, side projects and hackathon projects
      </Typography>
      <Suspense fallback={renderLoader()}>
        <Masonry columns={{ sm: 1, md: 2 }}
          spacing={3}
          sx={styles.masonryContainer}>
          <TeslaCard />
          <JustlightCard isDarkTheme={isDarkTheme} />
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
        </Masonry>
        <GlossaryCard />
        <InteractionCard pagename="work" />
      </Suspense>
    </Box>
  );
};

Work.propTypes = {
  isDarkTheme: PropTypes.bool.isRequired,
};