import React from 'react';
import {
  Typography,
  Card,
  CardMedia,
  CardHeader,
  Link,
  CardContent,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Chip,
  IconButton,
  Tooltip,
} from '@mui/material';
import withStyles from '@mui/styles/withStyles';
import DateRangeIcon from '@mui/icons-material/DateRange';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import PropTypes from 'prop-types';
import justlightScreenshotOne
  from '../static/images/screenshots/justlight_screenshot_1.webp';
import justlightScreenshotOneFallback
  from '../static/images/screenshots/justlight_screenshot_1.jpg';
import justlightScreenshotTwo
  from '../static/images/screenshots/justlight_screenshot_2.webp';
import justlightScreenshotTwoFallback
  from '../static/images/screenshots/justlight_screenshot_2.jpg';
import justlightScreenshotThree
  from '../static/images/screenshots/justlight_screenshot_3.webp';
import justlightScreenshotThreeFallback
  from '../static/images/screenshots/justlight_screenshot_3.jpg';
import justlightScreenshotFour
  from '../static/images/screenshots/justlight_screenshot_4.webp';
import justlightScreenshotFourFallback
  from '../static/images/screenshots/justlight_screenshot_4.jpg';
import justlightScreenshotFive
  from '../static/images/screenshots/justlight_screenshot_5.webp';
import justlightScreenshotFiveFallback
  from '../static/images/screenshots/justlight_screenshot_5.jpg';
import justlightScreenshotSix
  from '../static/images/screenshots/justlight_screenshot_6.webp';
import justlightScreenshotSixFallback
  from '../static/images/screenshots/justlight_screenshot_6.jpg';
import justlightScreenshotSeven
  from '../static/images/screenshots/justlight_screenshot_7.webp';
import justlightScreenshotSevenFallback
  from '../static/images/screenshots/justlight_screenshot_7.jpg';
import justlightScreenshotEight
  from '../static/images/screenshots/justlight_screenshot_8.webp';
import justlightScreenshotEightFallback
  from '../static/images/screenshots/justlight_screenshot_8.jpg';
import justlightScreenshotNine
  from '../static/images/screenshots/justlight_screenshot_9.webp';
import justlightScreenshotNineFallback
  from '../static/images/screenshots/justlight_screenshot_9.jpg';
import justlightScreenshotTen
  from '../static/images/screenshots/justlight_screenshot_10.webp';
import justlightScreenshotTenFallback
  from '../static/images/screenshots/justlight_screenshot_10.jpg';
import justlightScreenshotEleven
  from '../static/images/screenshots/justlight_screenshot_11.webp';
import justlightScreenshotElevenFallback
  from '../static/images/screenshots/justlight_screenshot_11.jpg';
import justlightScreenshotTwelve
  from '../static/images/screenshots/justlight_screenshot_12.webp';
import justlightScreenshotTwelveFallback
  from '../static/images/screenshots/justlight_screenshot_12.jpg';
import justlightScreenshotThirteen
  from '../static/images/screenshots/justlight_screenshot_13.webp';
import justlightScreenshotThirteenFallback
  from '../static/images/screenshots/justlight_screenshot_13.jpg';

const styles = {
  justlightLogo: {
    width: '100%',
    marginBottom: '16px',
    marginTop: '16px',
    marginLeft: '0px',
    marginRight: '0px',
    maxWidth: '500px',
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
  cardContent: {
    display: 'flex',
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  androidScreenshot: {
    marginTop: '12px',
    marginBottom: '12px',
    marginLeft: '4px',
    marginRight: '4px',
    width: 'auto',
    height: '100%',
    maxHeight: '340px',
  },
  iosScreenshot: {
    marginTop: '12px',
    marginBottom: '12px',
    marginLeft: '4px',
    marginRight: '4px',
    width: 'auto',
    height: '100%',
    maxHeight: '300px',
  },
  webScreenshot: {
    height: 'auto',
    width: '100%',
    maxWidth: '700px',
  },
};

class JustlightCard extends React.Component {
  render() {
    const {classes} = this.props;
    const justlightLink = `https://www.justlight.com/`;
    const sunflowerAppLink = `https://www.justlight.com/appdownload`;

    const tags = [
      {
        label: 'February 2022 → Present',
        color: 'default',
        variant: 'default',
        icon: <DateRangeIcon />,
      },
      {
        label: 'Full-Time',
        color: 'primary',
        variant: 'default',
      },
      {
        label: 'Android',
      },
      {
        label: 'iOS',
      },
      {
        label: 'Firebase',
      },
      {
        label: 'JavaScript',
      },
      {
        label: 'Kotlin',
      },
      {
        label: 'React',
      },
      {
        label: 'Swift',
      },
    ];
    return (
      <Card
        raised={true}
        className="card">
        <Accordion
          TransitionProps={{unmountOnExit: true}}>
          <AccordionSummary
            aria-label="JustLight"
            aria-controls="justlight-content"
            id="justlight-header"
            expandIcon={
              <Tooltip
                title="Expand/collapse card"
                arrow>
                <IconButton style={{padding: 0}} size="large">
                  <ExpandMoreIcon />
                </IconButton>
              </Tooltip>
            }>
            <a name="justlight_card" href="#justlight_card" className="gone">
            JustLight Card
            </a>
            <div
              className={classes.expansionHeaderContainer}>
              <CardHeader
                className="card-header"
                title="JustLight"
                subheader="Software Engineering Lead"
              />
              <CardMedia
                className={classes.justlightLogo}
                image={this.props.isDarkTheme ? '/images/justlight_logo_light.png' : '/images/justlight_logo_dark.png'}
                title="JustLight logo"
                alt="JustLight logo"
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
          </AccordionSummary>
          <AccordionDetails>
            <CardContent className={classes.cardContent}>
              <Typography variant="body1">
                I am the software engineering lead at
                {' '}
                <Link color="secondary" href={justlightLink}>
                JustLight
                </Link>
                , working on the
                {' '}
                <Link color="secondary" href={sunflowerAppLink}>
                Sunflower
                </Link>
                {' '}
                project. More details to come!
                <br/><br/>
              </Typography>
              <Typography variant="h5" gutterBottom>
                iOS
              </Typography>
              <Typography variant="body1">
                <picture>
                  <source srcSet={justlightScreenshotOne} type="image/webp"/>
                  <source srcSet={justlightScreenshotOneFallback} type="image/jpg"/>
                  <img
                    srcSet={[justlightScreenshotOne, justlightScreenshotOneFallback]}
                    className={classes.iosScreenshot}
                    alt="JustLight screenshot 1"
                  />
                </picture>
                <picture>
                  <source srcSet={justlightScreenshotTwo} type="image/webp"/>
                  <source srcSet={justlightScreenshotTwoFallback} type="image/jpg"/>
                  <img
                    srcSet={[justlightScreenshotTwo, justlightScreenshotTwoFallback]}
                    className={classes.iosScreenshot}
                    alt="JustLight screenshot 2"
                  />
                </picture>
                <picture>
                  <source srcSet={justlightScreenshotThree} type="image/webp"/>
                  <source srcSet={justlightScreenshotThreeFallback} type="image/jpg"/>
                  <img
                    srcSet={[justlightScreenshotThree, justlightScreenshotThreeFallback]}
                    className={classes.iosScreenshot}
                    alt="JustLight screenshot 3"
                  />
                </picture>
                <picture>
                  <source srcSet={justlightScreenshotFour} type="image/webp"/>
                  <source srcSet={justlightScreenshotFourFallback} type="image/jpg"/>
                  <img
                    srcSet={[justlightScreenshotOne, justlightScreenshotOneFallback]}
                    className={classes.iosScreenshot}
                    alt="JustLight screenshot 4"
                  />
                </picture>
                <picture>
                  <source srcSet={justlightScreenshotFive} type="image/webp"/>
                  <source srcSet={justlightScreenshotFiveFallback} type="image/jpg"/>
                  <img
                    srcSet={[justlightScreenshotFive, justlightScreenshotFiveFallback]}
                    className={classes.iosScreenshot}
                    alt="JustLight screenshot 5"
                  />
                </picture>
                <picture>
                  <source srcSet={justlightScreenshotSix} type="image/webp"/>
                  <source srcSet={justlightScreenshotSixFallback} type="image/jpg"/>
                  <img
                    srcSet={[justlightScreenshotSix, justlightScreenshotSixFallback]}
                    className={classes.iosScreenshot}
                    alt="JustLight screenshot 6"
                  />
                </picture>
                <br/><br/>
              </Typography>
              <Typography variant="h5" gutterBottom>
                Android
              </Typography>
              <Typography variant="body1">
                <picture>
                  <source srcSet={justlightScreenshotSeven} type="image/webp"/>
                  <source srcSet={justlightScreenshotSevenFallback} type="image/jpg"/>
                  <img
                    srcSet={[justlightScreenshotSeven, justlightScreenshotSevenFallback]}
                    className={classes.androidScreenshot}
                    alt="JustLight screenshot 7"
                  />
                </picture>
                <picture>
                  <source srcSet={justlightScreenshotEight} type="image/webp"/>
                  <source srcSet={justlightScreenshotEightFallback} type="image/jpg"/>
                  <img
                    srcSet={[justlightScreenshotEight, justlightScreenshotEightFallback]}
                    className={classes.androidScreenshot}
                    alt="JustLight screenshot 8"
                  />
                </picture>
                <picture>
                  <source srcSet={justlightScreenshotNine} type="image/webp"/>
                  <source srcSet={justlightScreenshotNineFallback} type="image/jpg"/>
                  <img
                    srcSet={[justlightScreenshotNine, justlightScreenshotNineFallback]}
                    className={classes.androidScreenshot}
                    alt="JustLight screenshot 9"
                  />
                </picture>
                <picture>
                  <source srcSet={justlightScreenshotTen} type="image/webp"/>
                  <source srcSet={justlightScreenshotTenFallback} type="image/jpg"/>
                  <img
                    srcSet={[justlightScreenshotTen, justlightScreenshotTenFallback]}
                    className={classes.androidScreenshot}
                    alt="JustLight screenshot 10"
                  />
                </picture>
                <picture>
                  <source srcSet={justlightScreenshotEleven} type="image/webp"/>
                  <source srcSet={justlightScreenshotElevenFallback} type="image/jpg"/>
                  <img
                    srcSet={[justlightScreenshotEleven, justlightScreenshotElevenFallback]}
                    className={classes.androidScreenshot}
                    alt="JustLight screenshot 11"
                  />
                </picture>
                <picture>
                  <source srcSet={justlightScreenshotTwelve} type="image/webp"/>
                  <source srcSet={justlightScreenshotTwelveFallback} type="image/jpg"/>
                  <img
                    srcSet={[justlightScreenshotTwelve, justlightScreenshotTwelveFallback]}
                    className={classes.androidScreenshot}
                    alt="JustLight screenshot 12"
                  />
                </picture>
                <br/><br/>
              </Typography>
              <Typography variant="h5" gutterBottom>
                React Admin Portal
              </Typography>
              <Typography variant="body1">
                <picture>
                  <source srcSet={justlightScreenshotThirteen} type="image/webp"/>
                  <source srcSet={justlightScreenshotThirteenFallback} type="image/jpg"/>
                  <img
                    srcSet={[justlightScreenshotThirteen, justlightScreenshotThirteenFallback]}
                    className={classes.webScreenshot}
                    alt="JustLight screenshot 13"
                  />
                </picture>
              </Typography>
            </CardContent>
          </AccordionDetails>
        </Accordion>
      </Card>
    );
  }
}

JustlightCard.propTypes = {
  classes: PropTypes.object.isRequired,
  isDarkTheme: PropTypes.bool.isRequired,
};

export default withStyles(styles)(JustlightCard);
