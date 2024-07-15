import React, { lazy, Suspense, useEffect } from 'react';
const InteractionCard = lazy(() => import('../shared/InteractionCard.jsx'));
const TicTacToeCard = lazy(() => import('./TicTacToeCard.jsx'));
const GimbleCard = lazy(() => import('./GimbleCard.jsx'));
const TechStackCard = lazy(() => import('./TechStackCard.jsx'));
const WelcomeCard = lazy(() => import('./WelcomeCard.jsx'));
const SammyCard = lazy(() => import('./SammyCard.jsx'));
import PropTypes from 'prop-types';
import { Typography, Link, CircularProgress, Box } from '@mui/material';
import { Masonry } from '@mui/lab';

const renderLoader = () => <CircularProgress color="secondary" />;

const justlightLink = 'https://www.justlight.com/about';
const teslaLink = 'https://www.tesla.com/';
const umichLink = 'https://umich.edu/';
const entrepreneurshipLink = 'https://innovateblue.umich.edu/academics/minor-in-entrepreneurship/';
const awsLink = `https://aws.amazon.com/`;

const styles = {
  root: {
    justifyContent: 'start',
  },
  title: {
    margin: 'auto',
    marginBottom: '16px',
    maxWidth: '1200px',
    textAlign: 'center',
    justifyContent: 'center',
  },
  masonryContainer: {
    marginLeft: 'auto',
    marginRight: 'auto',
  },
};

export default function Home({ isDarkTheme }) {
  useEffect(() => {
    document.title = 'Home | Mark Fonte';

    const link = document.createElement('link');
    link.rel = 'canonical';
    link.href = 'https://mark.fonte.com';
    document.head.appendChild(link);

    return () => {
      document.head.removeChild(link);
    };
  }, []);

  const justlightColor = isDarkTheme ? 'justlight-color-light' : 'justlight-color-dark';
  const teslaColor = isDarkTheme ? 'tesla-color-light' : 'tesla-color-dark';
  const amazonColor = isDarkTheme ? 'amazon-color-light' : 'amazon-color-dark';
  const michiganColor = isDarkTheme ? 'michigan-color-light' : 'michigan-color-dark';
  const webColor = isDarkTheme ? 'web-color-light' : 'web-color-dark';
  const androidColor = isDarkTheme ? 'android-color-light' : 'android-color-dark';

  return (
    <Box sx={styles.root}>
      <Typography sx={styles.title} variant="h6">
        Senior software engineer at
        <Link href={teslaLink} className={teslaColor} underline="hover">
          {' '}Tesla{' '}
        </Link>
        · Former software lead at
        <Link href={justlightLink} className={justlightColor} underline="hover">
          {' '}JustLight{' '}
        </Link>
        · Former software engineer at
        <Link href={awsLink} className={amazonColor} underline="hover">
          {' '}Amazon Web Services{' '}
        </Link>
        · computer science in engineering degree from
        <Link href={umichLink} className={michiganColor} underline="hover">
          {' '}University of Michigan{' '}
        </Link>
        · Minor in
        <Link color="textSecondary" href={entrepreneurshipLink} underline="hover">
          {' '}entrepreneurship{' '}
        </Link>
        ·
        <Link href="" className={webColor} underline="hover">
          {' '}Web{' '}
        </Link>
        &amp;
        <Link href="" className={androidColor} underline="hover">
          {' '}Android{' '}
        </Link>
        dev
      </Typography>
      <Suspense fallback={renderLoader()}>
        <Masonry columns={{ sm: 1, md: 2 }} spacing={3} sx={styles.masonryContainer}>
          <WelcomeCard isDarkTheme={isDarkTheme} />
          <GimbleCard />
          <SammyCard />
          <TechStackCard isDarkTheme={isDarkTheme} />
        </Masonry>
        <TicTacToeCard />
        <InteractionCard pagename="home" />
      </Suspense>
    </Box>
  );
};

Home.propTypes = {
  isDarkTheme: PropTypes.bool.isRequired,
};