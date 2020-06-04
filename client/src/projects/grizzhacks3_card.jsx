import React from 'react';
import {
  Typography,
  Card,
  CardMedia,
  CardContent,
  CardHeader,
  Link,
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
import congoaiLogo from '../static/images/logos/congoai_logo.svg';
import PropTypes from 'prop-types';

import congoaiScreenshotOne from
  '../static/images/screenshots/congoai_screenshot_1.webp';
import congoaiScreenshotOneFallback from
  '../static/images/screenshots/congoai_screenshot_1.jpg';

import congoaiDemoOne from
  '../static/images/photos/congoai_demo_1.webp';
import congoaiDemoOneFallback from
  '../static/images/photos/congoai_demo_1.jpg';

const styles = {
  grizzhacks3Banner: {
    width: '100%',
    marginBottom: '16px',
    marginTop: '16px',
    marginLeft: '0px',
    marginRight: '0px',
  },
  congoaiLogo: {
    width: '50%',
    height: 'auto',
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
  mobileScreenshot: {
    marginTop: '12px',
    marginBottom: '12px',
    marginLeft: '4px',
    marginRight: '4px',
    height: 'auto',
    width: '100%',
    maxWidth: '280px',
  },
  demoImage: {
    width: '100%',
    height: 'auto',
    maxWidth: '550px',
  },
};

class Grizzhacks3Card extends React.Component {
  render() {
    const {classes} = this.props;
    // const grizzhacks3Link = `http://grizzhacks.com/`;
    const grizzhacks3DevpostLink = `https://devpost.com/software/congoai`;
    const grizzhacks3GithubLink = `https://github.com/nathan815/CongoAI`;
    const vueLink = `https://vuejs.org/`;
    const nodeLink = `https://nodejs.org/`;
    const mongodbLink = `https://www.mongodb.com/`;
    const mongooseLink = `https://mongoosejs.com/docs/`;

    const tags = [
      {
        label: 'September 2018',
        color: 'default',
        variant: 'default',
        icon: <DateRangeIcon />,
      },
      {
        label: 'Hackathon',
        color: 'primary',
        variant: 'default',
      },
      {
        label: 'JavaScript',
      },
      {
        label: 'Vue.js',
      },
    ];

    return (
      <Card raised={true} className="card">
        <ExpansionPanel
          TransitionProps={{unmountOnExit: true}}>
          <ExpansionPanelSummary
            aria-label="GrizzHacks 3"
            aria-controls="grizzhacks3-content"
            id="grizzhacks3-header"
            expandIcon={
              <Tooltip
                title="Expand/collapse card"
                arrow>
                <IconButton style={{padding: 0}}>
                  <ExpandMoreIcon />
                </IconButton>
              </Tooltip>
            }>
            <a name="grizzhacks3_card" href="#grizzhacks3_card" className="gone">
            Grizzhacks 3 Card
            </a>
            <div className={classes.expansionHeaderContainer}>
              <CardHeader
                className="cardHeader"
                title="Congo AI"
                subheader="Hackathon Project @ GrizzHacks 3"
              />
              <CardMedia
                className={classes.grizzhacks3Banner}
                image="/images/grizzhacks_banner.png"
                title="GrizzHacks 3 banner"
                alt="GrizzHacks 3 banner"
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
              GrizzHacks 3 was the first hackathon I ever competed in. We built an online
              store where users could buy and sell pre-trained machine learning models.
              While we did not completely finish, users could use our store to post
              pre-trained machine learning models, view models that others had posted,
              buy them, and even test them out in-store before purchasing!

              </Typography>
              <Typography variant="body1" paragraph>
                  We built the web store using

                {' '}
                <Link color="secondary" href={vueLink}>
                  Vue.js
                </Link>
                {' '}

                  and the server using

                {' '}
                <Link color="secondary" href={nodeLink}>
                  NodeJS
                </Link>

                  ,

                {' '}
                <Link color="secondary" href={mongodbLink}>
                  MongoDB
                </Link>
                {' '}
                  and

                {' '}
                <Link color="secondary" href={mongooseLink}>
                  Mongoose
                </Link>

                  . Credit goes to my team for making the vast majority of this
                  project - I was just learning most of this stuff at the time!
              </Typography>
              <picture>
                <source srcSet={congoaiScreenshotOne} type="image/webp"/>
                <source srcSet={congoaiScreenshotOneFallback} type="image/jpg"/>
                <img
                  srcSet={[congoaiScreenshotOne, congoaiScreenshotOneFallback]}
                  className={classes.mobileScreenshot}
                  alt="Congo AI screenshot 1"
                />
              </picture>
              <Typography variant="body1" paragraph>
              We won

                {' '}
                <Typography color="secondary" display="inline">
                  <b><i>Best DevOps Hack, Presented by Ally Financial</i></b>
                </Typography>

                  ,

                {' '}
                <Typography color="secondary" display="inline">
                  <b><i>Best use of Dynatrace</i></b>
                </Typography>

                      , and a

                {' '}
                <Typography color="secondary" display="inline">
                  <b><i>Top 10 finish</i></b>
                </Typography>

                          .
              </Typography>
              <Typography variant="body1" paragraph>
                    View it on

                {' '}
                <Link color="secondary" href={grizzhacks3DevpostLink}>
                Devpost
                </Link>
                {' '}

              or
                {' '}
                <Link color="secondary" href={grizzhacks3GithubLink}>
                    Github
                </Link>
              </Typography>
              <picture>
                <source srcSet={congoaiDemoOne} type="image/webp"/>
                <source srcSet={congoaiDemoOneFallback} type="image/jpg"/>
                <img
                  srcSet={[congoaiDemoOne, congoaiDemoOneFallback]}
                  className={classes.demoImage}
                  alt="Congo demo 1"
                />
              </picture>
              <br/>
              <img
                src={congoaiLogo}
                className={classes.congoaiLogo}
                title="CongoAI logo"
                alt="CongoAI logo"
              />
            </CardContent>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </Card>
    );
  }
}

Grizzhacks3Card.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Grizzhacks3Card);
