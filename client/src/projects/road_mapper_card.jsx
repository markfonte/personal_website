import React from 'react';
import {
  Typography,
  Card,
  CardHeader,
  Link,
  CardContent,
  withStyles,
} from '@material-ui/core';
import roadMapperScreenshotOne
  from '../static/images/screenshots/ice_road_mappers_screenshot_1.webp';
import roadMapperScreenshotOneFallback
  from '../static/images/screenshots/ice_road_mappers_screenshot_1.png';
import PropTypes from 'prop-types';

const styles = {
  screenshotOne: {
    height: 'auto',
    width: '100%',
    maxWidth: '560px',
  },
};

class RoadMapperCard extends React.Component {
  render() {
    const {classes} = this.props;
    const eecs493Link = `https://atlas.ai.umich.edu/course/EECS%20493/`;
    const vueLink = `https://vuejs.org/`;
    const mapboxApiLink = `https://docs.mapbox.com/api/`;
    const wazeLink = `https://www.waze.com/`;
    const pythonLink = `https://www.python.org/`;
    const flaskLink = `https://flask.palletsprojects.com/en/1.1.x/`;
    const sqliteLink = `https://docs.python.org/2/library/sqlite3.html`;

    return (
      <div>
        <Card raised={true} className="card">
          <CardHeader
            title="Road Mapper"
            subheader="EECS 493 class project"
          />
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
              <br/><br/>
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
            <picture>
              <br/>
              <source srcSet={roadMapperScreenshotOne} type="image/webp"/>
              <source srcSet={roadMapperScreenshotOneFallback} type="image/png"/>
              <img
                srcSet={[roadMapperScreenshotOne, roadMapperScreenshotOneFallback]}
                className={classes.screenshotOne}
                title="Road Mappers screenshot 1"
                alt="Road Mappers screenshot 1"
              />
            </picture>
            <Typography variant="body1" gutterBottom>
              <br/>
               Although we never released it to the public, it was a great experience with a new
              framework and a new API. It was also a testament to how smoothly a project can be built
              if the team is on the same page, despite being made entirely during quarantine!
            </Typography>
          </CardContent>
        </Card>
      </div>
    );
  }
}

RoadMapperCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RoadMapperCard);
