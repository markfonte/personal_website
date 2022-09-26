import React from 'react';
import WebIcon from '@material-ui/icons/Web';
import spotifyLogo from '../static/images/logos/spotify_logo.svg';
import googlePlayMusicLogo from '../static/images/logos/google_play_music.svg';
import appleMusicLogo from '../static/images/logos/apple_music_logo.svg';
import amazonMusicLogo from '../static/images/logos/amazon_music_logo.svg';
import soundcloudLogo from '../static/images/logos/soundcloud_logo.svg';
import youtubeLogo from '../static/images/logos/youtube_logo.svg';
import youtubeMusicLogo from '../static/images/logos/youtube_music_logo.svg';
import facebookLogo from '../static/images/logos/facebook_logo.svg';
import instagramLogo from '../static/images/logos/instagram_logo.svg';
import {withStyles} from '@material-ui/styles';
import PropTypes from 'prop-types';

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
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const styles = {
  gimbleCardMedia: {
    width: '100%',
    marginBottom: '16px',
    marginTop: '16px',
    marginLeft: '0px',
    marginRight: '0px',
    maxWidth: '700px',
  },
  gimbleCardActionIcon: {
    width: '24px',
    height: '24px',
  },
  iframeStyle: {
    height: '235px',
    width: '100%',
    maxWidth: '330px',
    margin: '4px',
  },
  cardActions: {
    overflowX: 'auto',
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

class GimbleCard extends React.Component {
  render() {
    const {classes} = this.props;
    const websiteLink = `https://www.gimbleacappella.com/`;
    const spotifyLink = `https://open.spotify.com/artist/0CgETTTImSmkeCBkoUJiMg?autoplay=true&v=A`;
    const googlePlayMusicLink = `https://play.google.com/music/m/A6i265eewm2mhu5p2fvikdbf5tm?play=1`;
    const appleMusicLink = `https://itunes.apple.com/us/artist/gimble-a-cappella/1221861150?ign-gact=3&ls=1`;
    const amazonMusicLink = `https://music.amazon.com/artists/B06XZ8143C?tab=LIBRARY&ref=dm_wcp_artist_link_s`;
    const soundcloudLink = `https://soundcloud.com/gimble-a-cappella`;
    const youtubeLink = `https://www.youtube.com/channel/UCH2dQr26tAWVijoYdKHcgdg`;
    const youtubeMusicLink = `https://www.youtube.com/channel/UCzwG1_hJ5hRCMqzNlTJj2ZQ`;
    const facebookLink = `https://www.facebook.com/gimbleacappella/`;
    const instagramLink = `https://www.instagram.com/gimbleacappella/`;

    const links = [
      {name: 'Gimble A Cappella on Apple Music', image: appleMusicLogo, link: appleMusicLink},
      {name: 'Gimble A Cappella on Facebook', image: facebookLogo, link: facebookLink},
      {name: 'Gimble A Cappella on Spotify', image: spotifyLogo, link: spotifyLink},
      {name: 'Gimble A Cappella on Google Play Music', image: googlePlayMusicLogo, link: googlePlayMusicLink},
      {name: 'Gimble A Cappella on SoundCloud', image: soundcloudLogo, link: soundcloudLink},
      {name: 'Gimble A Cappella on YouTube', image: youtubeLogo, link: youtubeLink},
      {name: 'Gimble A Cappella on YouTube Music', image: youtubeMusicLogo, link: youtubeMusicLink},
      {name: 'Gimble A Cappella on Instagram', image: instagramLogo, link: instagramLink},
      {name: 'Gimble A Cappella on Amazon Music', image: amazonMusicLogo, link: amazonMusicLink},
    ];

    const mediaPlayers = [
      {
        type: 'Spotify',
        src: `https://open.spotify.com/embed/track/2x3lNJtZj9QdDBzFroeVUZ`,
        title: `The Joke - Gimble A Cappella`,
      },
      {
        type: 'Spotify',
        src: `https://open.spotify.com/embed/track/3vJOfNgJsMcwbfQhQFjqJO`,
        title: `The Joke - Gimble A Cappella`,
      },
      {
        type: 'Spotify',
        src: `https://open.spotify.com/embed/track/2BPMW7WPHvKVyyPHn3OUC6`,
        title: `Movement - Gimble A Cappella`,
      },
      {
        type: 'Spotify',
        src: `https://open.spotify.com/embed/album/2YI8uuf2AUnN2hRxXx4TIo`,
        title: `Home - Gimble A Cappella`,
      },
      {
        type: 'Spotify',
        src: `https://open.spotify.com/embed/track/0WteMpcOWgCTUnMfiBwJXC`,
        title: `when the party's over - Gimble A Cappella`,
      },
      {
        type: 'Spotify',
        src: `https://open.spotify.com/embed/track/0qR0w1pbjEaQK5WI4vCCvK`,
        title: `Fallingwater - Gimble A Cappella`,
      },
      {
        type: 'Spotify',
        src: `https://open.spotify.com/embed/track/0syVmzCQYedVdmjHtxGy9K`,
        title: `Dancing On My Own - Gimble A Cappella`,
      },
      {
        type: 'Spotify',
        src: `https://open.spotify.com/embed/track/69Wf0jtGtFujPkddCZMdCl`,
        title: `715 - CR∑∑KS - Gimble A Cappella`,
      },
      {
        type: 'Spotify',
        src: `https://open.spotify.com/embed/album/6tgeYaO5FiHOzZuFcIEFTR`,
        title: `XX - Gimble A Cappella`,
      },
    ];

    return (
      <Card raised={true} className="card">
        <Accordion
          TransitionProps={{unmountOnExit: true}}>
          <AccordionSummary
            aria-label="Gimble"
            aria-controls="gimble-content"
            id="gimble-header"
            expandIcon={
              <Tooltip
                title="Expand/collapse card"
                arrow>
                <IconButton style={{padding: 0}}>
                  <ExpandMoreIcon />
                </IconButton>
              </Tooltip>
            }>
            <a name="gimble_card" href="#gimble_card" className="gone">
              Gimble Card
            </a>
            <div
              className={classes.expansionHeaderContainer}>
              <CardHeader
                className="card-header"
                title="Gimble A Cappella"
                subheader={`My college acappella group!`}
              />
              <CardMedia
                className={classes.gimbleCardMedia}
                image="/images/gimble_group_pic.webp"
                title="Gimble group pic"
                component="img"
              />
            </div>
          </AccordionSummary>
          <AccordionDetails>
            <CardContent>
              {mediaPlayers.map((mediaPlayer) => (
                <iframe
                  className={classes.iframeStyle}
                  src={mediaPlayer.src}
                  title={mediaPlayer.title}
                  key={mediaPlayer.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ))}
              <br/>
            </CardContent>
          </AccordionDetails>
        </Accordion>
        <CardActions className={classes.cardActions}>
          <Tooltip
            title="Go to Gimble A Cappella's website"
            arrow>
            <IconButton
              aria-label="Go to website"
              href={websiteLink}>
              <WebIcon />
            </IconButton>
          </Tooltip>
          {links.map((link) => (
            <Tooltip
              title={'Go to ' + link.name}
              key={link.name}
              arrow>
              <IconButton
                aria-label={link.name}
                href={link.link}>
                <img
                  src={link.image}
                  className={classes.gimbleCardActionIcon}
                  alt={link.name + ' button'}
                />
              </IconButton>
            </Tooltip>
          ))}
        </CardActions>
      </Card>
    );
  }
}

GimbleCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(GimbleCard);
