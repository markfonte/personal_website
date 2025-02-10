import React from 'react';
import WebIcon from '@mui/icons-material/Web';
import spotifyLogo from '../static/logos/spotify_logo.svg';
// import googlePlayMusicLogo from '../static/logos/google_play_music.svg';
import appleMusicLogo from '../static/logos/apple_music_logo.svg';
import youtubeLogo from '../static/logos/youtube_logo.svg';
import youtubeMusicLogo from '../static/logos/youtube_music_logo.svg';
// import facebookLogo from '../static/logos/facebook_logo.svg';
import instagramLogo from '../static/logos/instagram_logo.svg';

import {
  Card,
  CardMedia,
  CardActions,
  CardContent,
  CardHeader,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  IconButton,
  Tooltip,
  Box,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import LikeButton from '../shared/LikeButton';


const websiteLink = `https://www.gimbleacappella.com/`;
const spotifyLink = `https://open.spotify.com/artist/0CgETTTImSmkeCBkoUJiMg?autoplay=true&v=A`;
// const googlePlayMusicLink = `https://play.google.com/music/m/A6i265eewm2mhu5p2fvikdbf5tm?play=1`;
const appleMusicLink = `https://itunes.apple.com/us/artist/gimble-a-cappella/1221861150?ign-gact=3&ls=1`;
// const amazonMusicLink = `https://music.amazon.com/artists/B06XZ8143C?tab=LIBRARY&ref=dm_wcp_artist_link_s`;
// const soundcloudLink = `https://soundcloud.com/gimble-a-cappella`;
const youtubeLink = `https://www.youtube.com/channel/UCH2dQr26tAWVijoYdKHcgdg`;
// const youtubeMusicLink = `https://www.youtube.com/channel/UCzwG1_hJ5hRCMqzNlTJj2ZQ`;
// const facebookLink = `https://www.facebook.com/gimbleacappella/`;
// const instagramLink = `https://www.instagram.com/gimbleacappella/`;

const links = [
  { name: 'Gimble A Cappella on Spotify', image: spotifyLogo, link: spotifyLink },
  { name: 'Gimble A Cappella on Apple Music', image: appleMusicLogo, link: appleMusicLink },
  { name: 'Gimble A Cappella on YouTube', image: youtubeLogo, link: youtubeLink },
  // { name: 'Gimble A Cappella on Facebook', image: facebookLogo, link: facebookLink },
  // { name: 'Gimble A Cappella on Google Play Music', image: googlePlayMusicLogo, link: googlePlayMusicLink },
  // { name: 'Gimble A Cappella on SoundCloud', image: soundcloudLogo, link: soundcloudLink },
  // { name: 'Gimble A Cappella on YouTube Music', image: youtubeMusicLogo, link: youtubeMusicLink },
  // { name: 'Gimble A Cappella on Instagram', image: instagramLogo, link: instagramLink },
  // { name: 'Gimble A Cappella on Amazon Music', image: amazonMusicLogo, link: amazonMusicLink },
];

const spotifySingles = [
  {
    src: `https://open.spotify.com/embed/track/2x3lNJtZj9QdDBzFroeVUZ`,
    title: `Movement (Voices Only) - Gimble A Cappella`,
  },
  {
    src: `https://open.spotify.com/embed/track/3vJOfNgJsMcwbfQhQFjqJO`,
    title: `The Joke - Gimble A Cappella`,
  },
  {
    src: `https://open.spotify.com/embed/track/2BPMW7WPHvKVyyPHn3OUC6`,
    title: `Movement - Gimble A Cappella`,
  },
  {
    src: `https://open.spotify.com/embed/track/0WteMpcOWgCTUnMfiBwJXC`,
    title: `when the party's over - Gimble A Cappella`,
  },
  {
    src: `https://open.spotify.com/embed/track/0qR0w1pbjEaQK5WI4vCCvK`,
    title: `Fallingwater - Gimble A Cappella`,
  },
  {
    src: `https://open.spotify.com/embed/track/0syVmzCQYedVdmjHtxGy9K`,
    title: `Dancing On My Own - Gimble A Cappella`,
  },
  {
    src: `https://open.spotify.com/embed/track/69Wf0jtGtFujPkddCZMdCl`,
    title: `715 - CR∑∑KS - Gimble A Cappella`,
  },
];

const spotifyAlbums = [
  {
    src: `https://open.spotify.com/embed/album/6tgeYaO5FiHOzZuFcIEFTR`,
    title: `XX - Gimble A Cappella`,
  },
  {
    src: `https://open.spotify.com/embed/album/2YI8uuf2AUnN2hRxXx4TIo`,
    title: `Home - Gimble A Cappella`,
  },
];

const styles = {
  gimbleCardMedia: {
    width: '100%',
    marginTop: '4px',
    marginBottom: '0px',
  },
  gimbleCardActionIcon: {
    width: '24px',
    height: '24px',
  },
  spotifySingle: {
    height: '232px',
    margin: '4px',
  },
  spotifyAlbum: {
    height: '152px',
    margin: '4px',
  },
  cardContent: {
    padding: '0px',
  },
  expansionHeaderContainer: {
    display: 'flex',
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  buttonExplanation: {
    display: 'flex',
    alignItems: 'start',
    justifyContent: 'left',
    marginLeft: '16px',
    marginRight: '16px',
    marginTop: '12px',
  },
};

export default function GimbleCard() {
  return (
    <Card raised className="large-card">
      <Accordion slotProps={{ transition: { unmountOnExit: true } }}>
        <AccordionSummary
          aria-label="Gimble"
          aria-controls="gimble-content"
          id="gimble-header"
          expandIcon={
            <Tooltip title="expand/collapse card" arrow>
              <ExpandMoreIcon />
            </Tooltip>
          }>
          <a name="gimble_card" href="#gimble_card" className="gone">
            Gimble Card
          </a>
          <Box sx={styles.expansionHeaderContainer}>
            <CardHeader
              className="card-header"
              title="Gimble A Cappella"
              subheader="my college singing group"
            />
            <CardMedia
              sx={styles.gimbleCardMedia}
              image="/media/gimble_group_pic.webp"
              title="Gimble group pic"
              component="img"
            />
          </Box>
        </AccordionSummary>
        <AccordionDetails>
          <CardContent sx={styles.cardContent}>
            {spotifyAlbums.map((spotifyAlbum) => (
              <iframe
                style={styles.spotifyAlbum}
                src={spotifyAlbum.src}
                title={spotifyAlbum.title}
                key={spotifyAlbum.title + " album"}
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ))}
            <br />
            {spotifySingles.map((spotifySingle) => (
              <iframe
                style={styles.spotifySingle}
                src={spotifySingle.src}
                title={spotifySingle.title}
                key={spotifySingle.title + " single"}
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ))}
          </CardContent>
        </AccordionDetails>
      </Accordion>
      <CardActions sx={{ justifyContent: 'flex-end', overflowX: 'auto' }}>
        {links.map((link) => (
          <Tooltip
            title={'go to ' + link.name}
            key={link.name}
            arrow>
            <IconButton aria-label={link.name} href={link.link} size="medium">
              <img
                src={link.image}
                style={styles.gimbleCardActionIcon}
                alt={link.name + ' button'}
              />
            </IconButton>
          </Tooltip>
        ))}
        <Tooltip
          title="see website"
          arrow>
          <IconButton aria-label="Go to website" href={websiteLink} size="medium">
            <WebIcon />
          </IconButton>
        </Tooltip>
        <LikeButton likeType='card' likeName='gimble_card' />
      </CardActions>
    </Card>
  );
};
