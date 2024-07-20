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
  Box,
} from '@mui/material';
import DateRangeIcon from '@mui/icons-material/DateRange';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import rockyOne from '../static/photos/rocky_1.webp';
import rockyTwo from '../static/photos/rocky_2.webp';

import doggieDoodlesScreenshotOne
  from '../static/screenshots/doggie_doodles_screenshot_1.webp';
import LikeButton from '../shared/LikeButton';

const doggieDoodlesWebsiteLink = `https://dopedoggiedoodles.wixsite.com/home`;
const doggieDoodlesRedbubbleLink = `https://www.redbubble.com/people/doggiedoodles`;
const doggieDoodlesEmailLink = `mailto:dopedoggiedoodles@gmail.com`;
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
  doggieDoodlesLogo: {},
};

export default function DoggieDoodlesCard() {
  return (
    <Card raised className="large-card">
      <Accordion slotProps={{ transition: { unmountOnExit: true } }}>
        <AccordionSummary
          aria-label="Doggie Doodles"
          aria-controls="doggie-doodles-content"
          id="doggie-doodles-header"
          expandIcon={
            <Tooltip
              title="expand/collapse card"
              arrow>
              <IconButton size="small">
                <ExpandMoreIcon />
              </IconButton>
            </Tooltip>
          }>
          <a name="doggie_doodles_card" href="#doggie_doodles_card" className="gone">
            Doggie Doodles Card
          </a>
          <Box sx={styles.expansionHeaderContainer}>
            <CardHeader
              className="card-header"
              title="Doggie Doodles"
              subheader="Entrepreneur" />
            <CardMedia
              sx={styles.doggieDoodlesBanner}
              image="/media/doggie_doodles_banner.webp"
              title="Doggie Doodles banner"
              alt="Doggie Doodles banner"
              component="img"
            />
            <Box>
              {tags.map((tag) => (
                <Chip
                  sx={styles.tags}
                  key={tag.label}
                  icon={tag.icon ? tag.icon : null}
                  label={tag.label}
                  variant={tag.variant ? tag.variant : 'outlined'}
                  color={tag.color ? tag.color : 'secondary'}
                  clickable />
              ))}
            </Box>
          </Box>
        </AccordionSummary>
        <AccordionDetails>
          <CardContent>
            <Typography variant="body1" paragraph>
              Started from a class project, this business sold custom merchandise using a
              digital drawing of your animal. We would take a picture of pets and
              turn it into custom digital drawings, then upload them to
              <Link color="secondary" href={redbubbleLink}>
                {' '}Redbubble{' '}
              </Link>
              and use the custom drawing on all kinds
              of merchandise - posters, mugs, phone cases, pillows and much more.
            </Typography>
            <img
              src={rockyOne}
              style={styles.rocky}
              alt="Rocky #1"
            />
            <img
              src={rockyTwo}
              style={styles.rocky}
              alt="Rocky #2"
            />
            <img
              src={doggieDoodlesScreenshotOne}
              style={styles.webScreenshot}
              alt="Rocky #2"
            />
            <br /><br />
            <Typography variant="body1" paragraph>
              Send a picture of your animal to
              <Link color="secondary" href={doggieDoodlesEmailLink}>
                {' '}dopedoggiedoodles@gmail.com{' '}
              </Link>
              to get started!
            </Typography>
            <Typography variant="body1" paragraph>
              View the
              <Link color="secondary" href={doggieDoodlesWebsiteLink}>
                {' '}website{' '}
              </Link>
              or
              <Link color="secondary" href={doggieDoodlesRedbubbleLink}>
                {' '}Redbubble
              </Link>
            </Typography>
            <LikeButton likeType='card' likeName='doggie_doodles_card' />
          </CardContent>
        </AccordionDetails>
      </Accordion>
    </Card>
  );
};
