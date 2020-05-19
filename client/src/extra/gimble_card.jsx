import React from 'react';
import WebIcon from '@material-ui/icons/Web';
import spotifyLogo from '../static/images/logos/spotify_logo.webp';
import googlePlayMusicLogo from '../static/images/logos/google_play_music.svg';
import appleMusicLogo from '../static/images/logos/apple_music_logo.webp';
import amazonMusicLogo from '../static/images/logos/amazon_music_logo.webp';
import soundcloudLogo from '../static/images/logos/soundcloud_logo.webp';
import youtubeLogo from '../static/images/logos/youtube_logo.webp';
import youtubeMusicLogo from '../static/images/logos/youtube_music_logo.webp';
import facebookLogo from '../static/images/logos/facebook_logo.webp';
import instagramLogo from '../static/images/logos/instagram_logo.webp';
import {withStyles} from '@material-ui/styles';
import PropTypes from 'prop-types';

import {
  Card,
  CardMedia,
  CardActions,
  CardContent,
  CardHeader,
  IconButton,
} from '@material-ui/core';

const styles = {
  gimbleCardMedia: {
    height: '0px',
    paddingTop: '46%',
  },
  gimbleCardActionIcon: {
    width: '24px',
    height: '24px',
  },
  iframeStyle: {
    height: '235px',
    width: '100%',
    maxWidth: '400px',
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

    return (
      <div>
        <Card raised={true} className="card">
          <CardHeader
            title="Gimble A Cappella"
            subheader={`My acappella group - check out our new EP: "home"!`}
          />
          <CardMedia
            className={classes.gimbleCardMedia}
            image="/images/gimble_group_pic.webp"
            title="MHacks 12 logo"
          />
          <CardContent>
            <iframe
              src="https://open.spotify.com/embed/album/2YI8uuf2AUnN2hRxXx4TIo"
              className={classes.iframeStyle}
              title="Home - Gimble A Cappella"
              frameBorder="8"
              allow="encrypted-media"
            />
            <iframe
              src="https://open.spotify.com/embed/track/0WteMpcOWgCTUnMfiBwJXC"
              className={classes.iframeStyle}
              title="Fallingwater - Gimble A Cappella"
              frameBorder="8"
              allow="encrypted-media"
            />
            {/* <iframe allow="autoplay *; encrypted-media *;"
              frameBorder="0"
              className={classes.iframeStyle}
              title="when the party's over Apple Music - Gimble A Cappella"
              src="https://embed.music.apple.com/us/album/when-the-partys-over-single/1488378903"/> */}
            <iframe
              className={classes.iframeStyle}
              src="https://www.youtube.com/embed/Iiy4V1oq1QU"
              title="when the party's over Video - Gimble A Cappella"
              frameBorder="8"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
            <iframe
              src="https://open.spotify.com/embed/track/0qR0w1pbjEaQK5WI4vCCvK"
              className={classes.iframeStyle}
              title="Fallingwater - Gimble A Cappella"
              frameBorder="8"
              allow="encrypted-media"
            />
            {/* <iframe allow="autoplay *; encrypted-media *;"
              frameBorder="0"
              height="235"
              width="320"
              title="Fallingwater Apple Music - Gimble A Cappella"
              src="https://embed.music.apple.com/us/album/fallingwater-single/1479474008"/> */}
            <iframe
              className={classes.iframeStyle}
              src="https://www.youtube-nocookie.com/embed/6Qge12ldMqU"
              title="Fallingwater Video - Gimble A Cappella"
              frameBorder="8"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
            <iframe
              src="https://open.spotify.com/embed/track/0syVmzCQYedVdmjHtxGy9K"
              className={classes.iframeStyle}
              title="Dancing On My Own - Gimble A Cappella"
              frameBorder="8"
              allow="encrypted-media"
            />
            <iframe
              src="https://open.spotify.com/embed/track/69Wf0jtGtFujPkddCZMdCl"
              className={classes.iframeStyle}
              title="715 - CR∑∑KS - Gimble A Cappella"
              frameBorder="8"
              allow="encrypted-media"
            />
            <iframe
              src="https://open.spotify.com/embed/album/6tgeYaO5FiHOzZuFcIEFTR"
              className={classes.iframeStyle}
              title="XX - Gimble A Cappella"
              frameBorder="8"
              allow="encrypted-media"
            />
          </CardContent>
          <CardActions>
            <IconButton aria-label="Go to website" href={websiteLink}>
              <WebIcon />
            </IconButton>
            {links.map((link) => (
              <IconButton key={link.name} aria-label={link.name} href={link.link}>
                <img
                  src={link.image}
                  className={classes.gimbleCardActionIcon}
                  title={link.name}
                  alt={link.name + ' button'}
                />
              </IconButton>
            ))}


          </CardActions>
        </Card>
      </div>
    );
  }
}

GimbleCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(GimbleCard);