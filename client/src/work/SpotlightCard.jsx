import React from 'react';
import spotlightScreenshotOne
  from '../static/screenshots/spotlight_screenshot_1.webp';
import spotlightScreenshotOneFallback
  from '../static/screenshots/spotlight_screenshot_1.jpg';

import spotlightScreenshotTwo
  from '../static/screenshots/spotlight_screenshot_2.webp';
import spotlightScreenshotTwoFallback
  from '../static/screenshots/spotlight_screenshot_2.jpg';


import spotlightScreenshotThree
  from '../static/screenshots/spotlight_screenshot_3.webp';
import spotlightScreenshotThreeFallback
  from '../static/screenshots/spotlight_screenshot_3.jpg';

import {
  Typography,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Chip,
  IconButton,
  Tooltip,
  Link,
} from '@mui/material';
import DateRangeIcon from '@mui/icons-material/DateRange';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

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
  spotlightLogo: {
    width: '100%',
    marginBottom: '16px',
    marginTop: '16px',
    marginLeft: '0px',
    marginRight: '0px',
    maxWidth: '500px',
  },
};

const androidLink = `https://developer.android.com/`;
const kotlinLink = `https://kotlinlang.org/`;
const androidJetpackLink = `https://developer.android.com/jetpack`;
const psych223Link = `https://atlas.ai.umich.edu/course/PSYCH%20223/`;
const iOSLink = `https://developer.apple.com/`;
const firebaseLink = `https://firebase.google.com/`;
const googleMapsApiLink = `https://developers.google.com/maps/documentation`;
const architectureComponentsLink = `https://developer.android.com/topic/libraries/architecture`;
const snapshotListenersLink = `https://firebase.google.com/docs/firestore/query-data/listen`;
const spotlightGithubLink = `https://github.com/markfonte/Spotlight_Android`;

const tags = [
  {
    label: 'September 2018 → July 2019',
    color: 'default',
    variant: 'default',
    icon: <DateRangeIcon />,
  },
  {
    label: 'Startup',
    color: 'primary',
    variant: 'default',
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
    label: 'Firebase',
  },
  {
    label: 'Kotlin',
  },
];


export default function SpotlightCard() {
  return (
    <Card raised={true} className="large-card">
      <Accordion slotProps={{ transition: { unmountOnExit: true } }}>
        <AccordionSummary
          aria-label="Spotlight"
          aria-controls="spotlight-content"
          id="spotlight-header"
          expandIcon={
            <Tooltip
              title="Expand/collapse card"
              arrow>
              <IconButton size="large">
                <ExpandMoreIcon />
              </IconButton>
            </Tooltip>
          }>
          <a name="spotlight_card" href="#spotlight_card" className="gone">
            Spotlight Card
          </a>
          <div style={styles.expansionHeaderContainer}>
            <CardHeader
              className="card-header"
              title="Spotlight"
              subheader="Dev Lead & Android Developer"
            />
            <CardMedia
              sx={styles.spotlightLogo}
              image="/media/spotlight_logo.png"
              title="Spotlight logo"
              alt="Spotlight logo"
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
              This startup came from a

              {' '}
              <Link color="secondary" href={psych223Link}>
                class project
              </Link>
              {' '}

              during junior year of college. Since one of our group members was in
              a sorority at school, she saw a need for a mobile application that would streamline
              the &quot;recruitment&quot; process for sorority girls as they were trying to
              find which sorority they wanted to join.
            </Typography>
            <Typography variant="body1" paragraph>
              We built an

              {' '}
              <Link color="secondary" href={androidLink}>
                Android
              </Link>
              {' '}

              and an

              {' '}
              <Link color="secondary" href={iOSLink}>
                iOS
              </Link>
              {' '}

              application. I was the dev lead, so I was in charge of development and
              primarily just developed the Android app. Both applications were built using


              {' '}
              <Link color="secondary" href={firebaseLink}>
                Firebase
              </Link>
              {' '}

              for authentication, static storage, a NoSQL database, analytics, etc.
              The Android application was built in

              {' '}
              <Link color="secondary" href={kotlinLink}>
                Kotlin
              </Link>
              {' '}

              using

              {' '}
              <Link color="secondary" href={androidJetpackLink}>
                Android Jetpack
              </Link>

              ,

              {' '}
              <Link color="secondary" href={architectureComponentsLink}>
                architecture components
              </Link>
              {' '}

              and

              {' '}
              <Link color="secondary" href={googleMapsApiLink}>
                Google Maps APIs
              </Link>

              .
            </Typography>
            <Typography variant="body1" paragraph>
              There were lots of fun technical challenges in this project, like
              using

              {' '}
              <Link color="secondary" href={snapshotListenersLink}>
                Firebase snapshot listeners
              </Link>
              {' '}

              to get realtime database updates, and getting items in the &quot;Ranking&quot;
              list to reorder correctly when moving items around. Even though I am not
              an iOS developer, getting to work closely with the iOS app was also
              so much fun.
            </Typography>
            <picture>
              <source srcSet={spotlightScreenshotOne} type="image/webp" />
              <source srcSet={spotlightScreenshotOneFallback} type="image/jpg" />
              <img
                srcSet={[spotlightScreenshotOne, spotlightScreenshotOneFallback]}
                style={styles.screenshot}
                alt="Spotlight screenshot 1"
              />
            </picture>
            <picture>
              <source srcSet={spotlightScreenshotTwo} type="image/webp" />
              <source srcSet={spotlightScreenshotTwoFallback} type="image/jpg" />
              <img
                srcSet={[spotlightScreenshotTwo, spotlightScreenshotTwoFallback]}
                style={styles.screenshot}
                alt="Spotlight screenshot 2"
              />
            </picture>
            <picture>
              <source srcSet={spotlightScreenshotThree} type="image/webp" />
              <source srcSet={spotlightScreenshotThreeFallback} type="image/jpg" />
              <img
                srcSet={[spotlightScreenshotThree, spotlightScreenshotThreeFallback]}
                style={styles.screenshot}
                alt="Spotlight screenshot 3"
              />
            </picture>
            <Typography variant="body1" paragraph>
              We worked on this project for a long time and built a successful MVP
              (minimum viable product) and more. Unfortunately, we were never able to
              get it off the ground on more than a trial basis because we were unable
              to find an appropriate monetization model for the product. The learning
              experience of building a full-fledged Android application from scratch
              can never be taken away!
            </Typography>
            <Typography variant="body1" paragraph>
              View it on

              {' '}
              <Link color="secondary" href={spotlightGithubLink}>
                GitHub
              </Link>
            </Typography>
          </CardContent>
        </AccordionDetails>
      </Accordion>
    </Card>
  );
};
