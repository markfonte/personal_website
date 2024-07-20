import React from 'react';

import walklensScreenshotOne
  from '../static/screenshots/walklens_screenshot_1.webp';
import walklensScreenshotTwo
  from '../static/screenshots/walklens_screenshot_2.webp';
import walklensScreenshotThree
  from '../static/screenshots/walklens_screenshot_3.webp';

import {
  Typography,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Link,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Chip,
  IconButton,
  Tooltip,
} from '@mui/material';
import DateRangeIcon from '@mui/icons-material/DateRange';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import LikeButton from '../shared/LikeButton';

const walklensGooglePlayLink = `https://play.google.com/store/apps/details?id=fonte.com.walklens&hl=en_US`;
const walklensGithubLink = `https://github.com/markfonte/WalkLens`;
const eecs441Link = `https://art.ai.umich.edu/course/EECS%20441/`;
const okHttpLink = `https://square.github.io/okhttp/`;
const mapsSdkForAndroidLink = `https://developers.google.com/maps/documentation/android-sdk/intro`;
const roadsAPILink = `https://developers.google.com/maps/documentation/roads/intro`;
const navigationArchitectureComponentLink = `https://developer.android.com/guide/navigation`;
const liveDataLink = `https://developer.android.com/topic/libraries/architecture/livedata`;
const kotlinLink = `https://kotlinlang.org/`;
const androidJetpackLink = `https://developer.android.com/jetpack`;

const tags = [
  {
    label: 'September 2019 → December 2019',
    color: 'default',
    variant: 'default',
    icon: <DateRangeIcon />,
  },
  {
    label: 'Class Project',
    color: 'primary',
    variant: 'default',
  },
  {
    label: 'Android',
  },
  {
    label: 'Android Jetpack',
  },
  {
    label: 'Kotlin',
  },
];

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
  walklensLogo: {
    width: '100%',
    maxWidth: '200px',
    marginBottom: '16px',
    marginTop: '16px',
    marginLeft: '0px',
    marginRight: '0px',
  },
  tags: {
    margin: '4px',
  },
  expansionHeaderContainer: {
    display: 'flex',
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
};

export default function WalklensCard() {
  return (
    <Card raised={true} className="large-card">
      <Accordion slotProps={{ transition: { unmountOnExit: true } }}>
        <AccordionSummary
          aria-label="WalkLens"
          aria-controls="walklens-content"
          id="walklens-header"
          expandIcon={
            <Tooltip
              title="expand/collapse card"
              arrow>
              <IconButton size="small">
                <ExpandMoreIcon />
              </IconButton>
            </Tooltip>
          }>
          <a name="walklens_card" href="#walklens_card" className="gone">
            WalkLens Card
          </a>
          <div style={styles.expansionHeaderContainer}>
            <CardHeader
              className="card-header"
              title="WalkLens"
              subheader="Android Developer"
            />
            <CardMedia
              image="/media/walklens_logo.svg"
              sx={styles.walklensLogo}
              title="WalkLens logo"
              alt="WalkLens logo"
              component="img"
            />
            <div>
              {tags.map((tag) => (
                <Chip
                  sx={styles.tags}
                  key={tag.label}
                  icon={tag.icon ? tag.icon : <div />}
                  label={tag.label}
                  variant={tag.variant ? tag.variant : 'outlined'}
                  color={tag.color ? tag.color : 'secondary'}
                  clickable />
              ))}
            </div>
          </div>
        </AccordionSummary>
        <AccordionDetails>
          <CardContent>
            <Typography variant="body1" paragraph>
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
            </Typography>
            <Typography variant="body1" paragraph>
              WalkLens is able to do all of the work it needs inside the logic of the Android application; it
              does not require a custom backend database.
              Built in

              {' '}
              <Link color="secondary" href={kotlinLink}>
                Kotlin
              </Link>
              {' '}

              and

              {' '}
              <Link color="secondary" href={androidJetpackLink}>
                Android Jetpack
              </Link>

              , it uses the

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

              to find the nearest road to a user. It runs as a background process that wakes up in set intervals (between 5 and 30 seconds),
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

              and much more.
            </Typography>
            <Typography variant="body1" paragraph>
              At the time of writing, it is available on the Google Play Store.
              There are no plans to make an iOS version of WalkLens.
            </Typography>
            <img
              src={walklensScreenshotOne}
              style={styles.screenshot}
              alt="WalkLens screenshot 1"
            />
            <img
              src={walklensScreenshotTwo}
              style={styles.screenshot}
              alt="WalkLens screenshot 2"
            />
            <img
              src={walklensScreenshotThree}
              style={styles.screenshot}
              alt="WalkLens screenshot 3"
            />
            <Typography variant="body1" paragraph>
              View it on
              <Link color="secondary" href={walklensGithubLink}>
                {' '}Github{' '}
              </Link>
              or the
              <Link color="secondary" href={walklensGooglePlayLink}>
                {' '}Google Play Store
              </Link>
            </Typography>
            <LikeButton likeType='card' likeName='walklens_card' />
          </CardContent>
        </AccordionDetails>
      </Accordion>
    </Card>
  );
};
