import React from 'react';
import walklensScreenshotOne
  from '../static/images/screenshots/walklens_screenshot_1.webp';
import walklensScreenshotTwo
  from '../static/images/screenshots/walklens_screenshot_2.webp';
import walklensScreenshotThree
  from '../static/images/screenshots/walklens_screenshot_3.webp';
import walklensLogo
  from '../static/images/logos/walklens_logo.svg';
import {
  Typography,
  Card,
  CardContent,
  CardHeader,
  withStyles,
  Link,
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
  logo: {
    maxHeight: '200px',
    maxWidth: '50%',
  },
};

class WalklensCard extends React.Component {
  render() {
    const {classes} = this.props;
    const walklensGooglePlayLink = `https://play.google.com/store/apps/details?id=fonte.com.walklens&hl=en_US`;
    const walklensGithubLink = `https://github.com/markfonte/WalkLens`;
    const eecs441Link = `https://art.ai.umich.edu/course/EECS%20441/`;
    const okHttpLink = `https://square.github.io/okhttp/`;
    const mapsSdkForAndroidLink = `https://developers.google.com/maps/documentation/android-sdk/intro`;
    const roadsAPILink = `https://developers.google.com/maps/documentation/roads/intro`;
    const navigationArchitectureComponentLink = `https://developer.android.com/guide/navigation`;
    const liveDataLink = `https://developer.android.com/topic/libraries/architecture/livedata`;

    return (
      <div>
        <Card raised={true} className="card">
          <CardHeader
            title="WalkLens"
            subheader="Android application"
          />
          <CardContent>
            {/* TODO: move to CardMedia */}
            <img
              src={walklensLogo}
              className={classes.logo}
              title="WalkLens logo"
              alt="WalkLens logo"
            />
            <Typography variant="body1">
              This project was built in my
              {' '}
              <Link color="secondary" href={eecs441Link}>
                EECS 441: Mobile App Development for Entrepreneurs
              </Link>
              {' '}
              class during senior year.
              The idea is that users give permission to the application to periodically poll their location
              to see if they are approaching a crosswalk. If the app determines that a user is approaching
              a road, they receive a pop-up notification.
              This alerts the user to look up from their phone to help ensure that they are not wandering into
              the street and putting themselves in danger. The application comes from the idea that pedestrian
              safety is an issue that can be addressed by encouraging smartphone users to look up while they
              are walking. A more perfect solution would be for people to simply look while they are walking,
              but this does not always happen so we tried to combat it from the technology side.
              <br/> <br/>
              WalkLens is able to do all of the work it needs inside the logic of the Android application; it
              does not require a custom backend database. It uses the
              {' '}
              <Link color="secondary" href={mapsSdkForAndroidLink}>
                Google Maps SDK for Android
              </Link>
              {' '}
              to display the map UI when opening the application, and the
              {' '}
              <Link color="secondary" href={roadsAPILink}>
                Google Roads API
              </Link>
              {' '}
              to find the nearest road to a
              user. It runs as a background process that wakes up in set intervals (between 5 and 30 seconds),
              then determines the user&apos;s current latitude/longitude and calculates if it is near a road. If
              it is close to the nearest road (between 30-70 feet) then it sends a notification to the
              user. Additionally, as an implementation of dead reckoning, if a user is approaching a crosswalk
              it delays sending the notification until they have almost reached it. WalkLens uses
              {' '}
              <Link color="secondary" href={liveDataLink}>
                LiveData
              </Link>
              , the
              {' '}
              <Link color="secondary" href={navigationArchitectureComponentLink}>
                Navigation Architecture component
              </Link>
              , data binding, coroutines, ViewModels,
              {' '}
              <Link color="secondary" href={okHttpLink}>
                OkHttp
              </Link>
              {' '}
              and much more. At the time of writing, it is available on the Google Play Store.
              There are no plans to make an iOS version of WalkLens.
              <br /> < br/>
              View it on
              {' '}
              <Link color="secondary" href={walklensGithubLink}>
                Github
              </Link>
              {' '}
              or the
              {' '}
              <Link color="secondary" href={walklensGooglePlayLink}>
                Google Play Store
              </Link>
            </Typography>
            <img
              className={classes.screenshot}
              src={walklensScreenshotOne}
              title="WalkLens screenshot 1"
              alt="WalkLens screenshot 1"
            />
            <img
              className={classes.screenshot}
              src={walklensScreenshotTwo}
              title="WalkLens screenshot 2"
              alt="WalkLens screenshot 2"
            />
            <img
              className={classes.screenshot}
              src={walklensScreenshotThree}
              title="WalkLens screenshot 3"
              alt="WalkLens screenshot 3"
            />
          </CardContent>
        </Card>
      </div>
    );
  }
}

WalklensCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(WalklensCard);
