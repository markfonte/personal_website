import React from 'react';
import clippLogo
  from '../static/images/logos/clipp_logo.svg';
import clippWireframeScreenshotOne
  from '../static/images/screenshots/clipp_wireframe_screenshot_1.webp';
import clippWireframeScreenshotOneFallback
  from '../static/images/screenshots/clipp_wireframe_screenshot_1.png';

import clippWireframeScreenshotTwo
  from '../static/images/screenshots/clipp_wireframe_screenshot_2.webp';
import clippWireframeScreenshotTwoFallback
  from '../static/images/screenshots/clipp_wireframe_screenshot_2.png';

import clippWireframeScreenshotThree
  from '../static/images/screenshots/clipp_wireframe_screenshot_3.webp';
import clippWireframeScreenshotThreeFallback
  from '../static/images/screenshots/clipp_wireframe_screenshot_3.png';
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
    margin: '16px',
  },
  logo: {
    width: '20%', height: 'auto',
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

};

class ClippCard extends React.Component {
  render() {
    const {classes} = this.props;

    return (
      <Card raised={true} className="card">
        <a name="clipp_card" href="#clipp_card" style={{visibility: 'hidden'}}>
            Clipp Card
        </a>
        <CardHeader
          title="Clipp"
          subheader="Full Stack Software Developer (Part Time)"
        />
        <CardContent>
          <Typography variant="body1">
            <img
              src={clippLogo}
              className={classes.logo}
              title="Clipp logo"
              alt="Clipp logo"
            />
            <br /> <br />
              Clipp, a startup at Michigan, is a mobile application for trading pre-owned items without
              monetary exchange. Our 6-person development team started building the React Native application
              in September 2019, and started beta testing on December 5th, 2019. Users can upload items that
              they would like to trade, then &quot;swipe&quot; on items they would trade each item for. If two people
              &quot;swipe right&quot; on each other&apos;s items, they get matched in a custom messenger where they can
              coordinate a meeting to exchange items. No money involved! Right now, it is only limited to
              University of Michigan students.
            <br /> <br />
              The project requires full-stack work, from the front-end development of the Javascript
              mobile applications to the back-end development of the MongoDB and Firebase databases. Each
              developer contributes to different parts of the project at different times, working on
              any task that is currently critical to development progress. This gives all of us full-stack
              awareness and requires teamwork and communication. Until this point, we were working to build
              a Minimum Viable Product that would allow us to validate our value proposition. Once we are
              sure that people will use this product, we will begin building fully-fledged native mobile
              Android and iOS applications. We are very excited to share Clipp with the world!
          </Typography>
          <Typography variant="caption">
            <br />
            <picture>
              <source srcSet={clippWireframeScreenshotOne} type="image/webp"/>
              <source srcSet={clippWireframeScreenshotOneFallback} type="image/png"/>
              <img
                srcSet={[clippWireframeScreenshotOne, clippWireframeScreenshotOneFallback]}
                className={classes.mobileScreenshot}
                alt="Clipp wireframe screenshot 1"
              />
            </picture>
            <picture>
              <source srcSet={clippWireframeScreenshotTwo} type="image/webp"/>
              <source srcSet={clippWireframeScreenshotTwoFallback} type="image/png"/>
              <img
                srcSet={[clippWireframeScreenshotTwo, clippWireframeScreenshotTwoFallback]}
                className={classes.mobileScreenshot}
                alt="Clipp wireframe screenshot 2"
              />
            </picture>
            <picture>
              <source srcSet={clippWireframeScreenshotThree} type="image/webp"/>
              <source srcSet={clippWireframeScreenshotThreeFallback} type="image/png"/>
              <img
                srcSet={[clippWireframeScreenshotThree, clippWireframeScreenshotThreeFallback]}
                className={classes.mobileScreenshot}
                alt="Clipp wireframe screenshot 3"
              />
            </picture>
            < br/>
              (note: these are just wireframes, not actual screenshots from the mobile application)
          </Typography>
        </CardContent>
      </Card>
    );
  }
}

ClippCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ClippCard);
