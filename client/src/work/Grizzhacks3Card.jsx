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
import congoaiLogo from '../static/logos/congoai_logo.svg';

import congoaiScreenshotOne from
  '../static/screenshots/congoai_screenshot_1.webp';

import congoaiDemoOne from
  '../static/photos/congoai_demo_1.webp';
import LikeButton from '../shared/LikeButton';

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

const Grizzhacks3Card = () => {
  return (
    <Card raised={true} className="large-card">
      <Accordion slotProps={{ transition: { unmountOnExit: true } }}>
        <AccordionSummary
          aria-label="GrizzHacks 3"
          aria-controls="grizzhacks3-content"
          id="grizzhacks3-header"
          expandIcon={
            <Tooltip
              title="expand/collapse card"
              arrow>
              <IconButton size="small">
                <ExpandMoreIcon />
              </IconButton>
            </Tooltip>
          }>
          <a name="grizzhacks3_card" href="#grizzhacks3_card" className="gone">
            Grizzhacks 3 Card
          </a>
          <div style={styles.expansionHeaderContainer}>
            <CardHeader
              className="card-header"
              title="Congo AI"
              subheader="Hackathon Project @ GrizzHacks 3"
            />
            <CardMedia
              sx={styles.grizzhacks3Banner}
              image="/media/grizzhacks_banner.webp"
              title="GrizzHacks 3 banner"
              alt="GrizzHacks 3 banner"
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
              <Link color="secondary" href={mongodbLink}>
                {' '}MongoDB{' '}
              </Link>
              and

              {' '}
              <Link color="secondary" href={mongooseLink}>
                Mongoose
              </Link>

              . Credit goes to my team for making the vast majority of this
              project - I was just learning most of this stuff at the time!
            </Typography>
            <img
              src={congoaiScreenshotOne}
              style={styles.mobileScreenshot}
              alt="Congo AI screenshot 1"
            />
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
            <img
              src={congoaiDemoOne}
              style={styles.demoImage}
              alt="Congo demo 1"
            />
            <br />
            <img
              src={congoaiLogo}
              style={styles.congoaiLogo}
              title="CongoAI logo"
              alt="CongoAI logo"
            />
            <LikeButton likeType='card' likeName='grizzhacks_card' />
          </CardContent>
        </AccordionDetails>
      </Accordion>
    </Card>
  );
}

export default Grizzhacks3Card;
