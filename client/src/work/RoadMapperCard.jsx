import React from 'react';
import {
  Typography,
  Card,
  CardHeader,
  Link,
  CardContent,
  CardMedia,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Chip,
  Tooltip,
  Box,
} from '@mui/material';
import DateRangeIcon from '@mui/icons-material/DateRange';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import roadMapperScreenshotOne
  from '../static/screenshots/ice_road_mappers_screenshot_1.webp';
import LikeButton from '../shared/LikeButton';

const eecs493Link = `https://atlas.ai.umich.edu/course/EECS%20493/`;
const vueLink = `https://vuejs.org/`;
const mapboxApiLink = `https://docs.mapbox.com/api/`;
const wazeLink = `https://www.waze.com/`;
const pythonLink = `https://www.python.org/`;
const flaskLink = `https://flask.palletsprojects.com/en/1.1.x/`;
const sqliteLink = `https://docs.python.org/2/library/sqlite3.html`;

const tags = [
  {
    label: 'March 2020 → April 2020',
    color: 'default',
    variant: 'default',
    icon: <DateRangeIcon />,
  },
  {
    label: 'Class Project',
    color: 'primary',
    variant: 'default',
  },
  {
    label: 'JavaScript',
  },
  {
    label: 'Python',
  },
  {
    label: 'SQLite',
  },
  {
    label: 'Vue.js',
  },
];

const styles = {
  screenshotOne: {
    height: 'auto',
    width: '100%',
    maxWidth: '560px',
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
  roadMapperLogo: {
    width: '100%',
    marginBottom: '16px',
    marginTop: '16px',
    marginLeft: '0px',
    marginRight: '0px',
    maxWidth: '120px',
  },
};

export default function RoadMapperCard() {
  return (
    <Card raised className="large-card">
      <Accordion slotProps={{ transition: { unmountOnExit: true } }}>
        <AccordionSummary
          aria-label="Road Mapper"
          aria-controls="road-mapper-content"
          id="road-mapper-header"
          expandIcon={
            <Tooltip title="expand/collapse card" arrow>
              <ExpandMoreIcon />
            </Tooltip>
          }>
          <a name="road_mapper_card" href="#road_mapper_card" className="gone">
            Road Mapper Card
          </a>
          <Box sx={styles.expansionHeaderContainer}>
            <CardHeader
              className="card-header"
              title="Road Mapper"
              subheader="EECS 493 Class Project"
            />
            <CardMedia
              sx={styles.roadMapperLogo}
              image="media/road_mapper_logo.png"
              title="Road Mapper logo"
              alt="Road Mapper logo"
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
            <Typography variant="body1" gutterBottom>
              This was just a small project that we worked on for
              {' '}
              <Link color="secondary" href={eecs493Link}>
                EECS 493
              </Link>
              {' '}
              during my final semester in college. It was really fun because I got to use
              {' '}
              <Link color="secondary" href={vueLink}>
                Vue.js
              </Link>
              {' '}
              for the first time on an actual web application. It was very simple to use, and I loved
              how lightweight it was (with a single import you can start using Vue right away
              in any web application).
              <br /><br />
              The application was modeled off of how applications like
              {' '}
              <Link color="secondary" href={wazeLink}>
                Waze
              </Link>
              {' '}
              allow users to indicate driving hazards and speed traps that they find. We used the same
              concept to crowdsource the presence of (primarily winter) walking hazards like ice,
              snow and mud. Using the
              {' '}
              <Link color="secondary" href={mapboxApiLink}>
                Mapbox API
              </Link>
              {' '}
              we had a map that allowed users to create, read, update and delete different walking
              hazards. They could enter a description, drag markers to a spot, select the type of
              hazard, and even use built-in walking directions. We stored the currently-active hazards
              in a
              {' '}
              <Link color="secondary" href={sqliteLink}>
                SQLite
              </Link>
              {' '}
              database managed by a
              {' '}
              <Link color="secondary" href={pythonLink}>
                Python
              </Link>
              {' '}
              <Link color="secondary" href={flaskLink}>
                Flask
              </Link>
              {' '}
              application.
            </Typography>
            <br />
            <img
              src={roadMapperScreenshotOne}
              style={styles.screenshotOne}
              title="Road Mappers screenshot 1"
              alt="Road Mappers screenshot 1"
            />
            <Typography variant="body1" gutterBottom>
              <br />
              Although we never released it to the public, it was a great experience with a new
              framework and a new API. It was also a testament to how smoothly a project can be built
              if the team is on the same page, despite being made entirely during quarantine!
            </Typography>
            <LikeButton likeType='card' likeName='road_mapper_card' />
          </CardContent>
        </AccordionDetails>
      </Accordion>
    </Card>
  );
};
