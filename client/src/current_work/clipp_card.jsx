import React from 'react';
import clippLogo
  from '../static/images/logos/clipp_logo.png';
import {
  Typography,
  Card,
  CardContent,
  CardHeader,
  withStyles,
} from '@material-ui/core';
import PropTypes from 'prop-types';

const styles = {
  screenshot: {
    margin: '16px',
  },
  logo: {
    width: '30%', height: 'auto',
  },
};

class ClippCard extends React.Component {
  render() {
    const {classes} = this.props;

    return (
      <div>
        <Card raised={true} className="card">
          <CardHeader
            title="Clipp"
            subheader="Full Stack Software Developer (Part Time)"
          />
          <CardContent>
            <Typography variant="body1">

              <img
                src={clippLogo}
                className={classes.logo}
                title="Clipp logo"
                alt="Clipp logo"
              />
              <br /> <br />
              Clipp, a startup at Michigan, is a mobile application for exchanging items without any
              exchange of money. Our 6-person development team is working hard to begin alpha testing
              our React Native application in November 2019. The project requires full-stack awareness,
              careful planning and great teamwork to achieve our release date and feature goals.
              Public details on Clipp are scarce at the moment, but I will continue to update this
              blurb as more information becomes available! We are very excited to share our product with
              the world!
            </Typography>
          </CardContent>
        </Card>
      </div>
    );
  }
}

ClippCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ClippCard);
