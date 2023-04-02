import React from 'react';
import {
  Typography,
  Card,
  CardMedia,
  CardContent,
  CardHeader,
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

import rockyOne from '../static/photos/rocky_1.webp';
import rockyOneFallback from '../static/photos/rocky_1.jpg';

import rockyTwo from '../static/photos/rocky_2.webp';
import rockyTwoFallback from '../static/photos/rocky_2.jpg';

import doggieDoodlesScreenshotOne
  from '../static/screenshots/doggie_doodles_screenshot_1.webp';
import doggieDoodlesScreenshotOneFallback
  from '../static/screenshots/doggie_doodles_screenshot_1.png';

import PropTypes from 'prop-types';
import {withStyles} from '@mui/styles';

const styles = {
  doggieDoodlesBanner: {
    width: '100%',
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
  rocky: {
    height: '100%',
    maxHeight: '300px',
    width: 'auto',
    marginLeft: '4px',
    marginRight: '4px',
  },
  webScreenshot: {
    width: '100%',
    maxWidth: '400px',
    height: 'auto',
  },
  doggieDoodlesLogo: {

  },
};

class DoggieDoodlesCard extends React.Component {
  render() {
    const {classes} = this.props;
    const doggieDoodlesWebsiteLink = `https://dopedoggiedoodles.wixsite.com/home`;
    const doggieDoodlesRedbubbleLink = `https://www.redbubble.com/people/doggiedoodles`;
    const doggieDoodlesEmailLink = `mailto:dopedoggiedoodles@gmail.com`;
    const morganSalvanoLink = `https://www.morgansalvanodesign.com/`;
    const stampsLink = `https://stamps.umich.edu/`;
    const redbubbleLink = `https://www.redbubble.com/people/doggiedoodles/shop`;

    const tags = [
      {
        label: 'March 2019 → May 2019',
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
    ];

    return (
      <Card raised={true} className="card">
        <Accordion
          TransitionProps={{unmountOnExit: true}}>
          <AccordionSummary
            aria-label="Doggie Doodles"
            aria-controls="doggie-doodles-content"
            id="doggie-doodles-header"
            expandIcon={
              <Tooltip
                title="Expand/collapse card"
                arrow>
                <IconButton style={{padding: 0}} size="large">
                  <ExpandMoreIcon />
                </IconButton>
              </Tooltip>
            }>
            <a name="doggie_doodles_card" href="#doggie_doodles_card" className="gone">
            Doggie Doodles Card
            </a>
            <div className={classes.expansionHeaderContainer}>
              <CardHeader
                className="card-header"
                title="Doggie Doodles"
                subheader="Entrepreneur" />
              <CardMedia
                className={classes.doggieDoodlesBanner}
                image="/media/doggie_doodles_banner.jpg"
                title="Doggie Doodles banner"
                alt="Doggie Doodles banner"
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
            <CardContent>
              <Typography variant="body1" paragraph>
              Started from a class project, this business sells custom merchandise using a
              digital drawing of your animal.

                {' '}
                <Link color="secondary" href={morganSalvanoLink}>
                Morgan Salvano
                </Link>

                , from U of M&apos;s

                {' '}
                <Link color="secondary" href={stampsLink}>
                Stamps School of Art and Design
                </Link>

                    , will take a picture of your pet (it doesn&apos;t have to be a dog!) and
                    turn it into a custom digital drawing. The drawing itself is
                <b> completely free</b>!
                    Once she has drawn it to your satisfaction, she will upload it
                    to
                {' '}
                <Link color="secondary" href={redbubbleLink}>
                    Redbubble
                </Link>
                {' '}

                    (with your permission), where you can see your custom drawing on all kinds
                    of merchandise - posters, mugs, phone cases, pillows and much more!

              </Typography>
              <picture>
                <source srcSet={rockyOne} type="image/webp"/>
                <source srcSet={rockyOneFallback} type="image/jpg"/>
                <img
                  srcSet={[rockyOne, rockyOneFallback]}
                  className={classes.rocky}
                  alt="Rocky #1"
                />
              </picture>
              <picture>
                <source srcSet={rockyTwo} type="image/webp"/>
                <source srcSet={rockyTwoFallback} type="image/jpg"/>
                <img
                  srcSet={[rockyTwo, rockyTwoFallback]}
                  className={classes.rocky}
                  alt="Rocky #2"
                />
              </picture>
              <br/><br/>
              <picture>
                <source srcSet={doggieDoodlesScreenshotOne} type="image/webp"/>
                <source srcSet={doggieDoodlesScreenshotOneFallback} type="image/png"/>
                <img
                  srcSet={[doggieDoodlesScreenshotOne, doggieDoodlesScreenshotOneFallback]}
                  className={classes.webScreenshot}
                  alt="Rocky #2"
                />
              </picture>
              <br/><br/>
              <Typography variant="body1" paragraph>
                Send a picture of your animal to

                {' '}
                <Link color="secondary" href={doggieDoodlesEmailLink}>
                dopedoggiedoodles@gmail.com
                </Link>
                {' '}

                to get started!
              </Typography>
              <Typography variant="body1" paragraph>
                    View the

                {' '}
                <Link color="secondary" href={doggieDoodlesWebsiteLink}>
                 website
                </Link>
                {' '}

                    or on

                {' '}
                <Link color="secondary" href={doggieDoodlesRedbubbleLink}>
                Redbubble
                </Link>
                {' '}
              </Typography>
            </CardContent>
          </AccordionDetails>
        </Accordion>
      </Card>
    );
  }
}

DoggieDoodlesCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DoggieDoodlesCard);
