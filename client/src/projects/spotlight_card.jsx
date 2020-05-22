import React from 'react';
import spotlightScreenshotOne
  from '../static/images/screenshots/spotlight_screenshot_1.webp';
import spotlightScreenshotOneFallback
  from '../static/images/screenshots/spotlight_screenshot_1.png';

import spotlightScreenshotTwo
  from '../static/images/screenshots/spotlight_screenshot_2.webp';
import spotlightScreenshotTwoFallback
  from '../static/images/screenshots/spotlight_screenshot_2.png';

import {
  Typography,
  Card,
  CardContent,
  CardHeader,
  withStyles,
} from '@material-ui/core';
import PropTypes from 'prop-types';

const styles = {
  screenshot: {
    marginTop: '12px',
    marginBottom: '12px',
    marginLeft: '4px',
    marginRight: '4px',
    height: 'auto',
    width: '100%',
    maxWidth: '280px',
  },
};

class SpotlightCard extends React.Component {
  render() {
    const {classes} = this.props;
    return (
      <Card raised={true} className="card">
        <CardHeader
          title="Spotlight"
          subheader="Lead Android developer"
        />
        <CardContent>
          <Typography variant="body1">
              We worked on Android and iOS applications to help streamline the sorority recruitment process.
              Both applications were built using Firebase, and the Android application is built using Android Jetpack,
              architecture components and Google Maps APIs. I built a successful POC for the Android application and
              successfully onboarded another developer to maintain the project.
          </Typography>
          <picture>
            <source srcSet={spotlightScreenshotOne} type="image/webp"/>
            <source srcSet={spotlightScreenshotOneFallback} type="image/png"/>
            <img
              srcSet={[spotlightScreenshotOne, spotlightScreenshotOneFallback]}
              className={classes.screenshot}
              alt="Spotlight screenshot 1"
            />
          </picture>
          <picture>
            <source srcSet={spotlightScreenshotTwo} type="image/webp"/>
            <source srcSet={spotlightScreenshotTwoFallback} type="image/png"/>
            <img
              srcSet={[spotlightScreenshotTwo, spotlightScreenshotTwoFallback]}
              className={classes.screenshot}
              alt="Spotlight screenshot 2"
            />
          </picture>
        </CardContent>
      </Card>
    );
  }
}

SpotlightCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SpotlightCard);
