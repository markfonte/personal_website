import React from 'react';
import {Typography, Button, Tooltip} from '@mui/material';
import withStyles from '@mui/styles/withStyles';
import PropTypes from 'prop-types';
import gimbleCoverPhoto from '../static/images/photos/gimble_cover_photo.webp';
import gimbleCoverPhotoFallback from '../static/images/photos/gimble_cover_photo.jpg';

const getCookie = require('../shared/util/cookies.js').getCookie;

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
  linkedinWrapper: {
    display: 'flex',
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  linkedinBadge: {
    marginTop: 16,
    marginBottom: 16,
    backgroundColor: '#F6F6F6',
    width: '330px', // the "large" LinkedIn badge has a set width of 330px
    borderRadius: 3,
    padding: -1,
  },
};

class Contact extends React.Component {
  componentDidMount() {
    // reload LinkedIn Badge
    // ignore this during Jest tests
    if (process.env.NODE_ENV !== 'test' &&
    window !== undefined &&
    window.LIRenderAll !== undefined ) {
      // eslint-disable-next-line
        window.LIRenderAll();
    }
  }

  render() {
    const {classes} = this.props;
    const emailLink = `mailto:mark@fonte.com`;
    const phoneLink = `tel:406-948-1034`;
    const venmoLink = `https://venmo.com/Mark-Fonte`;

    // want this to rerender each time because theme might have changed
    const theme = getCookie('app_theme') === 'dark_theme' ? 'light' : 'dark';

    document.title = 'Contact';

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
          <Tooltip
            arrow
            placement="top"
            title="Send me an email">
            <Button
              className={classes.buttonDefault}
              variant="outlined"
              color="secondary"
              href={emailLink}
            >
            Email
            </Button>
          </Tooltip>
          <Tooltip
            arrow
            placement="top"
            title="Call/text me">
            <Button
              className={classes.buttonDefault}
              variant="outlined"
              color="secondary"
              href={phoneLink}
            >
            Phone
            </Button>
          </Tooltip>
          <Tooltip
            arrow
            placement="top"
            title="Venmo me?">
            <Button
              className={classes.buttonDefault}
              variant="outlined"
              color="secondary"
              href={venmoLink}
            >
            Venmo
            </Button>
          </Tooltip>
        </div>
        <Typography className={classes.paragraph} variant="caption">
          My resume is available upon request
        </Typography>
        <div className={classes.linkedinWrapper}>
          <div
            className={['LI-profile-badge', classes.linkedinBadge].join(' ')}
            data-version="v1"
            data-size="large"
            data-locale="en_US"
            data-type="horizontal"
            data-theme={theme}
            data-vanity="mark-fonte">
            <a
              className="LI-simple-link"
              href='https://www.linkedin.com/in/mark-fonte?trk=profile-badge'>
                LinkedIn
            </a>
          </div>
        </div>
        <picture>
          <source srcSet={gimbleCoverPhoto} type="image/webp"/>
          <source srcSet={gimbleCoverPhotoFallback} type="image/jpg"/>
          <img
            srcSet={[gimbleCoverPhoto, gimbleCoverPhotoFallback]}
            className={classes.contactImage}
            title="Gimble by the fountain"
            alt="Gimble by the fountain"
          />
        </picture>
      </div>
    );
  }
}

Contact.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Contact);
