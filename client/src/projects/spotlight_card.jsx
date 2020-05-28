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

class SpotlightCard extends React.Component {
  render() {
    const {classes} = this.props;

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
        label: 'Android',
      },
    ];

    return (
      <Card raised={true} className="card">
        <ExpansionPanel
          TransitionProps={{unmountOnExit: true}}>
          <ExpansionPanelSummary
            aria-label="Spotlight"
            aria-controls="spotlight-content"
            id="spotlight-header"
            expandIcon={
              <Tooltip
                title="Expand/collapse card"
                arrow>
                <IconButton style={{padding: 0}}>
                  <ExpandMoreIcon />
                </IconButton>
              </Tooltip>
            }>
            <a name="spotlight_card" href="#spotlight_card" className="gone">
            Spotlight Card
            </a>
            <div className={classes.expansionHeaderContainer}>
              <CardHeader
                className="cardHeader"
                title="Spotlight"
                subheader="Lead Android developer"
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
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </Card>
    );
  }
}

SpotlightCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SpotlightCard);
