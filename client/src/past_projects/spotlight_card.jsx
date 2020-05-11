import React from 'react';
import spotlightScreenshotOne
  from '../static/images/screenshots/spotlight_screenshot_1.webp';
import spotlightScreenshotTwo
  from '../static/images/screenshots/spotlight_screenshot_2.webp';
import WebIcon from '@material-ui/icons/Web';
import {
  Typography,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  IconButton,
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
    maxWidth: '300px',
  },
};

class SpotlightCard extends React.Component {
  render() {
    const {classes} = this.props;
    const spotlightLink = `https://www.spotlight-app.com/`;

    return (
      <div>
        <Card raised={true} className="card">
          <CardHeader
            title="Spotlight"
            subheader="Lead Android developer and CTO"
          />
          <CardContent>
            <Typography variant="body1">
              We worked on Android and iOS applications to help streamline the sorority recruitment process.
              Both applications were built using Firebase, and the Android application is built using Android Jetpack,
              architecture components and Google Maps APIs. I built a successful POC for the Android application and
              successfully onboarded another developer to maintain the project.
            </Typography>
            <img
              className={classes.screenshot}
              src={spotlightScreenshotOne}
              title="Spotlight screenshot 1"
              alt="Spotlight screenshot 1"
            />
            <img
              className={classes.screenshot}
              src={spotlightScreenshotTwo}
              title="Spotlight screenshot 2"
              alt="Spotlight screenshot 2"
            />
          </CardContent>
          <CardActions>
            <IconButton aria-label="Go to website" href={spotlightLink}>
              <WebIcon />
            </IconButton>
          </CardActions>
        </Card>
      </div>
    );
  }
}

SpotlightCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SpotlightCard);
