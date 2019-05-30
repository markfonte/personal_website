import React from 'react';
import './contact.css';
import {Typography, Button} from '@material-ui/core';

class Contact extends React.Component {
  render () {
    const emailLink = `mailto:mark@fonte.com`;
    const phoneLink = `tel:406-948-1034`;
    const venmoLink = `https://venmo.com/Mark-Fonte`;

    return (
      <div>
        <Typography variant="h6">
          Please contact me in the most convenient way for you!
        </Typography>
        <Typography variant="subheading">
          I am always open to new opportunities - recommendations, contracting work,
          collaborations, job opportunities, etc. Feel free to reach out!
        </Typography>
        <Button
          className="contact-buttons"
          variant="outlined"
          color="secondary"
          href={emailLink}
          style={{margin: 8}}
        >
          Email
        </Button>
        <Button
          className="contact-button"
          variant="outlined"
          color="secondary"
          href={phoneLink}
          style={{margin: 8}}
        >
          Phone
        </Button>
        <Button
          className="contact-button"
          variant="outlined"
          color="secondary"
          href={venmoLink}
          style={{margin: 8}}
        >
          Venmo
        </Button>
      </div>
    );
  }
}

export default Contact;
