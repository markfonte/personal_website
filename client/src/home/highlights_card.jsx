import React from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  Button,
  Typography,
  Link,
} from '@material-ui/core';
import {withStyles} from '@material-ui/styles';
import PropTypes from 'prop-types';
// import homeCoverArt
//   from '../static/images/photos/home_cover_art.webp';


const styles = {
  media: {
    height: '0px',
    paddingTop: '25%',
  },
  logo: {
    width: '40%', height: 'auto',
  },
  screenshot: {
    margin: '16px',
  },
  buttonDefault: {
    margin: '8px',
  },
};

class HighlightsCard extends React.Component {
  render() {
    const {classes} = this.props;
    const currentWorkLink = process.env.REACT_APP_CLIENT_URL + 'current_work';
    const pastProjectsLink = process.env.REACT_APP_CLIENT_URL + 'past_projects';
    const randomLink = process.env.REACT_APP_CLIENT_URL + 'random';

    return (
      <div>
        <Card raised={true} className="card">
          <CardHeader
            title="Recent Highlights"
            subheader="Check out &quot;Current Work&quot; or &quot;Past Projects&quot;
            to see what I have been working on, or head over to &quot;Random&quot;
            for new songs from my acappella group!"
          />
          <CardContent>
            <div>
              {/* <img
                src={homeCoverArt}
                width="360"
                height="360"
                title="home Cover Art"
                alt="home Cover Art"
              /> */}
              <Typography variant="body1">
                  New EP out now! Head to {' '}
                <Link color="secondary" href={randomLink}><i>Extra</i></Link> to check it out..
              </Typography>
            </div>
            <Button
              className={classes.buttonDefault}
              variant="contained"
              color="primary"
              href={currentWorkLink}
            >
                Current Work
            </Button>
            <Button
              className={classes.buttonDefault}
              variant="contained"
              color="primary"
              href={pastProjectsLink}
            >
                Past Projects
            </Button>
            <Button
              className={classes.buttonDefault}
              variant="contained"
              color="primary"
              href={randomLink}
            >
                Extra
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }
}

HighlightsCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HighlightsCard);
