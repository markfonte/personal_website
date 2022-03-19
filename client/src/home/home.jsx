import React, {lazy, Suspense} from 'react';
import PropTypes from 'prop-types';
const BuiltWithTableCard = lazy(() => import('./built_with_table_card.jsx'));
const WelcomeCard = lazy(() => import('./welcome_card.jsx'));
import {Typography, Link, Tooltip, CircularProgress} from '@material-ui/core';
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

    const sdeAmazonLink = 'https://amazon.jobs/en/job_categories/software-development';
    const amazonLink = 'https://www.amazon.com/';
    const compSciEnginUmichLink = 'https://majors.engin.umich.edu/program/computer-science/';
    const umichLink = 'https://umich.edu/';
    const entrepreneurshipLink = 'https://innovateblue.umich.edu/academics/minor-in-entrepreneurship/';
    const webDevLink = 'https://en.wikipedia.org/wiki/Web_development';
    const androidDevLink = 'https://developer.android.com/';

    const lightTheme = getCookie('app_theme') === 'light_theme';
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
            content="Incoming Software Development Engineer at Amazon · Student at the University of Michigan"/>
        </MetaTags>
        <Typography className={classes.title} variant="h6">
          <Tooltip arrow placement="top" title="Go to Amazon Software Jobs page">
            <Link color="textSecondary" href={sdeAmazonLink}>
              <i>Software Development Engineer</i>
            </Link></Tooltip>{' '}

          at

          {' '}<Tooltip arrow placement="top" title="Go to Amazon.com">
            <Link href={amazonLink} className={amazonColor}>
              <i>Amazon</i>
            </Link></Tooltip>{' '}

          ·

          {' '}<Tooltip arrow placement="top" title="Go to U of M computer science page">
            <Link color="textSecondary" href={compSciEnginUmichLink}>
              <i>Computer Science in Engineering</i>
            </Link></Tooltip>{' '}

          degree from the

          {' '}<Tooltip arrow placement="bottom" title="Go to U of M website">
            <Link href={umichLink} className={michiganColor}>
              <i>University of Michigan</i>
            </Link></Tooltip>{' '}

          · Minor in

          {' '}<Tooltip arrow placement="bottom" title="Go to U of M Entrepreneurship page">
            <Link color="textSecondary" href={entrepreneurshipLink}>
              <i>Entrepreneurship</i>
            </Link></Tooltip>{' '}

          · Focus on

          {' '}<Tooltip arrow placement="bottom" title="Go to web development page">
            <Link href={webDevLink} className={webColor}>
              <i>Web</i>
            </Link></Tooltip>{' '}

          &amp;

          {' '}<Tooltip arrow placement="bottom" title="Go to Android Developers page">
            <Link href={androidDevLink} className={androidColor}>
              <i>Android</i>
            </Link></Tooltip>{' '}

          development
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
