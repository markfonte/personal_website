import React from 'react';
import './contact.css';
import {Typography, Button, withStyles} from '@material-ui/core';
import PropTypes from 'prop-types';

const styles = {
  root: {
    minHeight: '70vh',
  },
  title: {
    margin: '16px',
  },
  subtitle: {
    margin: '16px',
  },
  paragraph: {
    margin: '16px',
  },
  buttonDefault: {
    margin: '8px',
  },
};

class Contact extends React.Component {
  render() {
    const {classes} = this.props;
    const emailLink = `mailto:mark@fonte.com`;
    const phoneLink = `tel:406-948-1034`;
    const venmoLink = `https://venmo.com/Mark-Fonte`;

    return (
      <div className={classes.root}>
        <Typography className={classes.title} variant="h6">
          Let&#39;s get in touch!
        </Typography>
        <Typography className={classes.subtitle} variant="subtitle1">
          I am always open to new opportunities - recommendations, contracting work,
          collaborations, job opportunities, etc. Feel free to reach out!
        </Typography>
        <div>
          <Button
            className={classes.buttonDefault}
            variant="outlined"
            color="secondary"
            href={emailLink}
          >
            Email
          </Button>
          <Button
            className={classes.buttonDefault}
            variant="outlined"
            color="secondary"
            href={phoneLink}
          >
            Phone
          </Button>
          <Button
            className={classes.buttonDefault}
            variant="outlined"
            color="secondary"
            href={venmoLink}
          >
            Venmo
          </Button>
        </div>
        <Typography className={classes.paragraph} variant="caption">
          My resume is available upon request!
        </Typography>
      </div>
    );
  }
}

Contact.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Contact);
