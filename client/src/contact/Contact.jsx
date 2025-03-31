import React, { useEffect } from 'react';
import { Typography, Tooltip, Chip, Avatar, Box } from '@mui/material';
import contactCoverPhoto from '../static/photos/spike_photo.webp';
import venmoLogo from '../static/logos/venmo_logo.svg';
import gmailLogo from '../static/logos/gmail_logo.svg';
import InteractionCard from '../shared/InteractionCard.jsx';
import ResumeCard from './ResumeCard.jsx';

const emailLink = `mailto:mark@fonte.com`;
const venmoLink = `https://venmo.com/Mark-Fonte`;

const styles = {
  root: {
    minHeight: '70vh',
  },
  title: {
    marginBottom: '16px',
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
    maxHeight: '400px',
    maxWidth: '100%',
  },
};

export default function Contact() {
  useEffect(() => {
    document.title = 'Contact | Mark Fonte';
  }, []);

  return (
    <Box sx={styles.root}>
      <Typography sx={styles.title} variant="h6">
        let&#39;s get in touch
      </Typography>
      <Typography sx={styles.subtitle} variant="subtitle1">
        my inbox is always open! and so is my Venmo... why not pass me a few bucks? someone has to pay these server costs 🙃
      </Typography>
      <Box>
        <Tooltip
          arrow
          placement="top"
          title="email me: mark@fonte.com">
          <Chip
            sx={styles.buttonDefault}
            key='Email chip'
            avatar={<Avatar alt="Gmail logo" src={gmailLogo + ""} />}
            label='Email'
            variant='outlined'
            onClick={() => window.open(emailLink)}
            clickable />
        </Tooltip>
        <Tooltip
          arrow
          placement="top"
          title="Venmo me? @mark-fonte">
          <Chip
            sx={styles.buttonDefault}
            key='Venmo chip'
            avatar={<Avatar alt="Venmo logo" src={venmoLogo + ""} />}
            label='Venmo'
            variant='outlined'
            onClick={() => window.open(venmoLink)}
            clickable />
        </Tooltip>
        {/* <ResumeCard /> */}
      </Box>
      <br /> <br />
      <img
        src={contactCoverPhoto}
        style={styles.contactImage}
        title="Contact page cover photo"
        alt="Contact page cover photo"
      />
      <br />
      <Typography variant="caption">
        <i>liking this page makes Spike happy!</i>
      </Typography>
      <br /> <br /> <br />
      <InteractionCard likeType="page" likeName="contact" />
    </Box>
  );
};
