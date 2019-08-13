import React from 'react';
import './spotlight_card.css';
import spotlightScreenshotOne
  from '../static/images/screenshots/spotlight_screenshot_1.PNG';
import spotlightScreenshotTwo
  from '../static/images/screenshots/spotlight_screenshot_2.PNG';
import WebIcon from '@material-ui/icons/Web';
import {
  Typography,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  IconButton,
} from '@material-ui/core';

class SpotlightCard extends React.Component {
  render() {
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
              className="spotlight-screenshot"
              src={spotlightScreenshotOne}
              width="240"
              height="500"
              title="Spotlight screenshot 1"
              alt="Spotlight screenshot 1"
            />
            <img
              className="spotlight-screenshot"
              src={spotlightScreenshotTwo}
              width="240"
              height="500"
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

export default SpotlightCard;
