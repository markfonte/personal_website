import React, {lazy, Suspense} from 'react';
import PropTypes from 'prop-types';
const BuiltWithTableCard = lazy(() => import('./built_with_table_card.jsx'));
const WelcomeCard = lazy(() => import('./welcome_card.jsx'));
import {Typography, Link, CircularProgress} from '@material-ui/core';
import {withStyles} from '@material-ui/styles';
import MetaTags from 'react-meta-tags';
const GlossaryCard = lazy(() => import('../shared/glossary_card.jsx'));

const renderLoader = () => <CircularProgress color="secondary" />;

const getCookie = require('../shared/util/cookies.js').getCookie;

const styles = {
  title: {
    margin: '16px',
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
};

class Home extends React.Component {
  render() {
    const {classes} = this.props;

    const justlightLink = 'https://www.justlight.com/about';
    const amazonLink = 'https://www.amazon.com/';
    const umichLink = 'https://umich.edu/';
    const entrepreneurshipLink = 'https://innovateblue.umich.edu/academics/minor-in-entrepreneurship/';
    const webDevLink = 'https://en.wikipedia.org/wiki/Web_development';
    const androidDevLink = 'https://developer.android.com/';
    const awsLink = `https://aws.amazon.com/`;

    const lightTheme = getCookie('app_theme') === 'light_theme';
    const justlightColor = lightTheme ? 'justlight-color-dark' : 'justlight-color-light';
    const amazonColor = lightTheme ? 'amazon-color-dark' : 'amazon-color-light';
    const michiganColor = lightTheme ? 'michigan-color-dark' : 'michigan-color-light';
    const webColor = lightTheme ? 'web-color-dark' : 'web-color-light';
    const androidColor = lightTheme ? 'android-color-dark' : 'android-color-light';

    return (
      <div>
        <MetaTags>
          <title>Home</title>
          <meta
            name="description"
            content="Software Lead at JustLight · Former Amazon / Amazon Web Services · University of Michigan"/>
        </MetaTags>
        <Typography className={classes.title} variant="h6">
          Software Lead at{' '}

          <Link href={justlightLink} className={justlightColor}>
            <i>JustLight</i>
          </Link>

          {' '}· Former{' '}

          <Link href={amazonLink} className={amazonColor}>
            <i>Amazon</i>
          </Link>

          {' '}and{' '}
          <Link href={awsLink} className={amazonColor}>
            <i>Amazon Web Services</i>
          </Link>
          {' '}Software Engineer · <i>Computer Science Engineering</i> degree from the{' '}

          <Link href={umichLink} className={michiganColor}>
            <i>University of Michigan</i>
          </Link>

          {' '}· Minor in{' '}

          <Link color="textSecondary" href={entrepreneurshipLink}>
            <i>Entrepreneurship</i>
          </Link>

          {' '}·{' '}

          <Link href={webDevLink} className={webColor}>
            <i>Web</i>
          </Link>{' '}

          &amp;{' '}

          <Link href={androidDevLink} className={androidColor}>
            <i>Android</i>
          </Link>

          {' '}development
        </Typography>
        <Suspense fallback={renderLoader()}>
          <WelcomeCard />
          <BuiltWithTableCard />
          <GlossaryCard />
        </Suspense>
      </div>
    );
  }
}

Home.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Home);
