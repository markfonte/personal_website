import React from 'react';
import {Typography, Button, withStyles} from '@material-ui/core';
import PropTypes from 'prop-types';
import markFeed8 from '../static/images/photos/mark_feed_8.webp';
import MetaTags from 'react-meta-tags';

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
  contactImage: {
    maxHeight: '500px',
    maxWidth: '100%',
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
        <MetaTags>
          <title>Contact</title>
          <meta name="description" content="Let's get in touch!"/>
        </MetaTags>
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
          My resume is available upon request
        </Typography>
        <div>
          <div className="LI-profile-badge" data-version="v1" data-size="large" data-locale="en_US"
            data-type="horizontal" data-theme="dark" data-vanity="mark-fonte">
            <a className="LI-simple-link" href='https://www.linkedin.com/in/mark-fonte?trk=profile-badge'>
                Mark Fonte on LinkedIn
            </a></div>
        </div>
        <div className={classes.paragraph}>
          <img style={styles.contactImage} src={markFeed8} alt="Gimble by the fountain"/>
        </div>
      </div>
    );
  }
}

Contact.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Contact);
