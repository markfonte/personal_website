import React from 'react';
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
  CardMedia,
  withStyles,
  //   Link,
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  Chip,
  IconButton,
  Tooltip,
} from '@material-ui/core';
import DateRangeIcon from '@material-ui/icons/DateRange';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import PropTypes from 'prop-types';

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

class ClippCard extends React.Component {
  render() {
    const {classes} = this.props;

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

    return (
      <Card raised={true} className="card">
        <ExpansionPanel
          TransitionProps={{unmountOnExit: true}}>
          <ExpansionPanelSummary
            aria-label="Learning A-Z"
            aria-controls="learningaz-content"
            id="learningaz-header"
            expandIcon={
              <Tooltip
                title="Expand/collapse card"
                arrow>
                <IconButton style={{padding: 0}}>
                  <ExpandMoreIcon />
                </IconButton>
              </Tooltip>
            }>
            <a name="clipp_card" href="#clipp_card" className="gone">
            Clipp Card
            </a>
            <div className={classes.expansionHeaderContainer}>
              <CardHeader
                className="cardHeader"
                title="Clipp"
                subheader="Full Stack Developer"
              />
              <CardMedia
                className={classes.clippLogo}
                image="/images/clipp_logo.svg"
                title="Clipp logo"
                alt="Clipp logo"
                component="img"
              />
              <div>
                {tags.map((tag) => (
                  <Chip
                    className={classes.tags}
                    key={tag.label}
                    icon={tag.icon ? tag.icon : <div/>}
                    label={tag.label}
                    variant={tag.variant ? tag.variant : 'outlined'}
                    color={tag.color ? tag.color : 'secondary'}
                    clickable />
                ))}
              </div>
            </div>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <CardContent>
              <Typography variant="body1" paragraph>
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
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </Card>
    );
  }
}

ClippCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ClippCard);
