import React from 'react';
import './spotlight_card.css';
import spotlightScreenshotOne
  from '../static/images/spotlight_screenshot_1.PNG';
import spotlightScreenshotTwo
  from '../static/images/spotlight_screenshot_2.PNG';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import IconButton from '@material-ui/core/IconButton';
import WebIcon from '@material-ui/icons/Web';
import {Typography} from '@material-ui/core';

class SpotlightCard extends React.Component {
  render () {
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
              We are working on Android and iOS applications to help streamline the sorority recruitment process.
              Both applications are built using Firebase, and the Android application is built using Android Jetpack,
              architecture components and Google Maps APIs. We plan to beta test the app in Fall 2019 with a smaller
              recruitment at U of M and start expanding upon the successful beta. The source code is not available to
              the public at the moment but I am happy to share with anyone upon request!
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
