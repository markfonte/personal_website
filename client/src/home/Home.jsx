import React, {lazy, Suspense} from 'react';
import PropTypes from 'prop-types';
const InteractionCard = lazy(() => import('../shared/InteractionCard.jsx'));
const TicTacToeCard = lazy(() => import('./TicTacToeCard.jsx'));
const GimbleCard = lazy(() => import('./GimbleCard.jsx'));
const TechStackCard = lazy(() => import('./TechStackCard.jsx'));
const WelcomeCard = lazy(() => import('./WelcomeCard.jsx'));
const SammyCard = lazy(() => import('./SammyCard.jsx'));
import {Typography, Link, CircularProgress} from '@mui/material';
import {withStyles} from '@mui/styles';

const renderLoader = () => <CircularProgress color="secondary" />;

const getCookie = require('../shared/util/Cookies.js').getCookie;

const styles = {
  title: {
    margin: 'auto',
    maxWidth: 1200,
    textAlign: 'center',
    justifyContent: 'center',
  },
  subtitle: {
    margin: '16px',
  },
  michiganLogo: {
    margin: '0px',
  },
  web: {
    color: '#61DBFB',
  },
  twoColumnContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
};

class Home extends React.Component {
  componentDidMount() {
    document.title = 'Home | Mark Fonte';
  }

  render() {
    const {classes} = this.props;

    const justlightLink = 'https://www.justlight.com/about';
    const teslaLink = 'https://www.tesla.com/';
    const umichLink = 'https://umich.edu/';
    const entrepreneurshipLink = 'https://innovateblue.umich.edu/academics/minor-in-entrepreneurship/';
    const webDevLink = 'https://en.wikipedia.org/wiki/Web_development';
    const androidDevLink = 'https://developer.android.com/';
    const awsLink = `https://aws.amazon.com/`;

    const lightTheme = getCookie('app_theme') === 'light_theme';
    const justlightColor = lightTheme ? 'justlight-color-dark' : 'justlight-color-light';
    const teslaColor = lightTheme ? 'tesla-color-dark' : 'tesla-color-light';
    const amazonColor = lightTheme ? 'amazon-color-dark' : 'amazon-color-light';
    const michiganColor = lightTheme ? 'michigan-color-dark' : 'michigan-color-light';
    const webColor = lightTheme ? 'web-color-dark' : 'web-color-light';
    const androidColor = lightTheme ? 'android-color-dark' : 'android-color-light';

    return (
      <div>
        <Typography className={classes.title} variant="h6">
          Senior software engineer at {' '}
          <Link href={teslaLink} className={teslaColor} underline="hover">
            Tesla
          </Link>
          {' '}· Former software lead at{' '}

          <Link href={justlightLink} className={justlightColor} underline="hover">
            JustLight
          </Link>

          {' '}· Former software engineer at{' '}
          <Link href={awsLink} className={amazonColor} underline="hover">
            Amazon Web Services
          </Link>
          {' '}· computer science in engineering degree from{' '}

          <Link href={umichLink} className={michiganColor} underline="hover">
            University of Michigan
          </Link>

          {' '}· Minor in{' '}

          <Link color="textSecondary" href={entrepreneurshipLink} underline="hover">
            entrepreneurship
          </Link>

          {' '}·{' '}

          <Link href={webDevLink} className={webColor} underline="hover">
            Web
          </Link>{' '}

          &amp;{' '}

          <Link href={androidDevLink} className={androidColor} underline="hover">
            Android
          </Link>

          {' '}dev
        </Typography>
        <Suspense fallback={renderLoader()}>
          <div className={classes.twoColumnContainer}>
            <WelcomeCard />
            <GimbleCard />
            <SammyCard />
            <TechStackCard />
          </div>
          <TicTacToeCard />
          <InteractionCard pagename="home" />
        </Suspense>
      </div>
    );
  }
}

Home.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Home);
