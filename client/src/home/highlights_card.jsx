import React from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  Button,
} from '@material-ui/core';
import {withStyles} from '@material-ui/styles';
import PropTypes from 'prop-types';

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
            <Button
              className={classes.buttonDefault}
              variant="outlined"
              color="default"
              href={currentWorkLink}
            >
                Current Work
            </Button>
            <Button
              className={classes.buttonDefault}
              variant="outlined"
              color="default"
              href={pastProjectsLink}
            >
                Past Projects
            </Button>
            <Button
              className={classes.buttonDefault}
              variant="outlined"
              color="default"
              href={randomLink}
            >
                Random
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
