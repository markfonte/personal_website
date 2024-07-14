import React from 'react';
import clippWireframeScreenshotOne
  from '../static/screenshots/clipp_wireframe_screenshot_1.webp';
import clippWireframeScreenshotOneFallback
  from '../static/screenshots/clipp_wireframe_screenshot_1.png';

import clippWireframeScreenshotTwo
  from '../static/screenshots/clipp_wireframe_screenshot_2.webp';
import clippWireframeScreenshotTwoFallback
  from '../static/screenshots/clipp_wireframe_screenshot_2.png';

import clippWireframeScreenshotThree
  from '../static/screenshots/clipp_wireframe_screenshot_3.webp';
import clippWireframeScreenshotThreeFallback
  from '../static/screenshots/clipp_wireframe_screenshot_3.png';
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

const universityOfMichiganLink = `https://umich.edu`;
const reactNativeLink = `https://reactnative.dev/`;
const firebaseLink = `https://firebase.google.com/`;
const mongoDBLink = `https://www.mongodb.com/`;
const javascriptLink = `https://www.javascript.com/`;
const hybridAppLink = `https://www.mobiloud.com/blog/native-web-or-hybrid-apps/`;

const tags = [
  {
    label: 'September 2019 → January 2020',
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
    label: 'Firebase',
  },
  {
    label: 'JavaScript',
  },
  {
    label: 'React Native',
  },
];

const styles = {
  screenshot: {
    margin: '16px',
  },
  clippLogo: {
    width: '100%',
    marginBottom: '16px',
    marginTop: '16px',
    marginLeft: '0px',
    marginRight: '0px',
    maxWidth: '200px',
  },
  mobileScreenshot: {
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
};

export default function ClippCard() {
  return (
    <Card raised={true} className="large-card">
      <Accordion slotProps={{ transition: { unmountOnExit: true } }}>
        <AccordionSummary
          aria-label="Learning A-Z"
          aria-controls="learningaz-content"
          id="learningaz-header"
          expandIcon={
            <Tooltip
              title="expand/collapse card"
              arrow>
              <IconButton size="large">
                <ExpandMoreIcon />
              </IconButton>
            </Tooltip>
          }>
          <a name="clipp_card" href="#clipp_card" className="gone">
            Clipp Card
          </a>
          <div style={styles.expansionHeaderContainer}>
            <CardHeader
              className="card-header"
              title="Clipp"
              subheader="Full Stack Developer"
            />
            <CardMedia
              sx={styles.clippLogo}
              image="/media/clipp_logo.svg"
              title="Clipp logo"
              alt="Clipp logo"
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
              Clipp is a mobile application startup for trading pre-owned items without any
              monetary exchange. The idea is that you can post items on a virtual market that you would
              would like to exchange, then swipe through items you would be willing to exchange for
              the item. If two people &quot;swipe right&quot; on each other&apos;s items, then they can meet up
              to exchange them without ever spending a dime! For example, I could want to get rid of
              my microwave oven, and somebody else could want to get rid of a ticket to the football game.
              If we both wanted the other item, we could meet up to exchange!
            </Typography>
            <Typography variant="body1" paragraph>
              Users could upload items that they would like to trade,
              then &quot;swipe&quot; on items they would trade each item for.
              If two people &quot;swipe right&quot; on each other&apos;s items,
              they got matched in a custom messenger where they could
              coordinate a meeting to exchange items. No money involved!
            </Typography>
            <Typography variant="body1" paragraph>
              Our 6-person development team from the

              {' '}
              <Link color="secondary" href={universityOfMichiganLink}>
                University of Michigan
              </Link>
              {' '}

              started building the

              {' '}
              <Link color="secondary" href={reactNativeLink}>
                React Native
              </Link>
              {' '}

              application in September 2019, and started beta testing in December 2019.

              The project required full-stack work, from the front-end development of the

              {' '}
              <Link color="secondary" href={javascriptLink}>
                JavaScript
              </Link>
              {' '}

              mobile applications to the back-end development of the

              {' '}
              <Link color="secondary" href={mongoDBLink}>
                MongoDB
              </Link>
              {' '}

              and

              {' '}
              <Link color="secondary" href={firebaseLink}>
                Firebase
              </Link>
              {' '}

              databases. Each developer contributed to different parts of the project at different times,
              working on any task that was critical to development progress.
              This gave all of us full-stack awareness and required teamwork and communication.
            </Typography>
            <picture>
              <source srcSet={clippWireframeScreenshotOne} type="image/webp" />
              <source srcSet={clippWireframeScreenshotOneFallback} type="image/png" />
              <img
                srcSet={[clippWireframeScreenshotOne, clippWireframeScreenshotOneFallback]}
                style={styles.mobileScreenshot}
                alt="Clipp wireframe screenshot 1"
              />
            </picture>
            <picture>
              <source srcSet={clippWireframeScreenshotTwo} type="image/webp" />
              <source srcSet={clippWireframeScreenshotTwoFallback} type="image/png" />
              <img
                srcSet={[clippWireframeScreenshotTwo, clippWireframeScreenshotTwoFallback]}
                style={styles.mobileScreenshot}
                alt="Clipp wireframe screenshot 2"
              />
            </picture>
            <picture>
              <source srcSet={clippWireframeScreenshotThree} type="image/webp" />
              <source srcSet={clippWireframeScreenshotThreeFallback} type="image/png" />
              <img
                srcSet={[clippWireframeScreenshotThree, clippWireframeScreenshotThreeFallback]}
                style={styles.mobileScreenshot}
                alt="Clipp wireframe screenshot 3"
              />
            </picture>
            <br />
            <Typography variant="caption" paragraph>
              (note: these are just wireframes, not actual screenshots from the mobile application)
            </Typography>
            <Typography variant="body1" paragraph>
              After successfully launching the beta application, we found less excitement for
              it than we had hoped for. Since we launched the beta app to University of Michigan
              students, part of the issue may have been launching right before winter break began.
              I believe that our issues were due to the fact that the app was still too buggy at
              the time for people to actually want to use it. Regardless, our project leaders
              shut down the project after a &quot;failed&quot; beta test,
              citing a lack of user interest. I maintain my disagreement with that conclusion.
            </Typography>
            <Typography variant="body2" paragraph>
              For what it&apos;s worth, I think that React Native is still far behind native
              mobile development at this point. We ran into countless issues with JavaScript and
              with different parts of the application working on just Android or just iOS, but not
              both. For those people who have to choose between a

              {' '}
              <Link color="secondary" href={hybridAppLink}>
                hybrid mobile application
              </Link>
              {' '}

              versus two native applications, my official recommendation is that it&apos;s way too
              early for a hybrid mobile application (like React Native) to be a smart choice for
              almost anyone. If you agree or disagree, I would love to discuss this further
              - please reach out!
            </Typography>
          </CardContent>
        </AccordionDetails>
      </Accordion>
    </Card>
  );
};