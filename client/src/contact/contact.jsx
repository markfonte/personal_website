import React from 'react';
import {Typography, Tooltip, Chip, Avatar} from '@mui/material';
import withStyles from '@mui/styles/withStyles';
import PropTypes from 'prop-types';
import contactCoverPhoto from '../static/photos/contact_cover_photo.webp';
import contactCoverPhotoFallback from '../static/photos/contact_cover_photo.jpg';
import venmoLogo from '../static/logos/venmo_logo.svg';
import gmailLogo from '../static/logos/gmail_logo.svg';
import InteractionCard from '../shared/interaction_card.jsx';

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
    const venmoLink = `https://venmo.com/Mark-Fonte`;

    document.title = 'Contact | Mark Fonte';

    return (
      <div className={classes.root}>
        <Typography className={classes.title} variant="h6">
          Let&#39;s get in touch!
        </Typography>
        <Typography className={classes.subtitle} variant="subtitle1">
          My door is always open! And so is my Venmo... so feel free to pass along a few (hundred) of your hard-earned bucks 🤪
        </Typography>
        <div>
          <Tooltip
            arrow
            placement="top"
            title="Email me: mark@fonte.com">
            <Chip
              className={classes.buttonDefault}
              key='Email chip'
              avatar={<Avatar alt="Gmail logo" src={gmailLogo} />}
              label='Email'
              variant='outlined'
              onClick={() => console.log(window.open(emailLink))}
              clickable />
          </Tooltip>
          <Tooltip
            arrow
            placement="top"
            title="Venmo me? @mark-fonte">
            <Chip
              className={classes.buttonDefault}
              key='Venmo chip'
              avatar={<Avatar alt="Venmo logo" src={venmoLogo} />}
              label='Venmo'
              variant='outlined'
              onClick={() => console.log(window.open(venmoLink))}
              clickable />
          </Tooltip>
        </div>
        <Typography className={classes.paragraph} variant="caption">
          <i>My resume is available upon request</i>
        </Typography>
        <br/> <br/>
        <picture>
          <source srcSet={contactCoverPhoto} type="image/webp"/>
          <source srcSet={contactCoverPhotoFallback} type="image/jpg"/>
          <img
            srcSet={[contactCoverPhoto, contactCoverPhotoFallback]}
            className={classes.contactImage}
            title="Contact page cover photo"
            alt="Contact page cover photo"
          />
        </picture>
        <br/> <br/>
        <InteractionCard pagename="contact" />
      </div>
    );
  }
}

Contact.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Contact);
