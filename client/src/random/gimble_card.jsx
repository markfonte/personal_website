import React from 'react';
import WebIcon from '@material-ui/icons/Web';
import spotifyLogo from '../static/images/logos/spotify_logo.png';
import googlePlayMusicLogo from '../static/images/logos/google_play_music.svg';
import appleMusicLogo from '../static/images/logos/apple_music_logo.png';
import amazonMusicLogo from '../static/images/logos/amazon_music_logo.png';
import soundcloudLogo from '../static/images/logos/soundcloud_logo.png';
import youtubeLogo from '../static/images/logos/youtube_logo.png';
import youtubeMusicLogo from '../static/images/logos/youtube_music_logo.png';
import facebookLogo from '../static/images/logos/facebook_logo.png';
import instagramLogo from '../static/images/logos/instagram_logo.png';
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
    height: 0,
    paddingTop: '56%',
  },
  gimbleCardActionIcon: {
    width: '24px',
    height: '24px',
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
            subheader="My acappella group!"
          />
          <CardMedia
            id={classes.gimbleCardMedia}
            image={require('../static/images/photos/gimble_group_pic.jpg')}
            title="Gimble A Cappella - 2019"
          />
          <CardContent>
            <iframe
              src="https://open.spotify.com/embed/track/0syVmzCQYedVdmjHtxGy9K"
              width="320"
              height="235"
              title="Dancing On My Own - Gimble A Cappella"
              frameBorder="8"
              allow="encrypted-media"
            />
            <iframe
              src="https://open.spotify.com/embed/track/69Wf0jtGtFujPkddCZMdCl"
              width="320"
              height="235"
              title="715 - CR∑∑KS - Gimble A Cappella"
              frameBorder="8"
              allow="encrypted-media"
            />
            <iframe
              src="https://open.spotify.com/embed/album/6tgeYaO5FiHOzZuFcIEFTR"
              width="320"
              height="235"
              title="XX - Gimble A Cappella"
              frameBorder="8"
              allow="encrypted-media"
            />
            <iframe
              width="320"
              height="235"
              src="https://www.youtube-nocookie.com/embed/6Qge12ldMqU"
              title="Fallingwater - Gimble A Cappella"
              frameBorder="8"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </CardContent>
          <CardActions>
            <IconButton aria-label="Go to website" href={websiteLink}>
              <WebIcon />
            </IconButton>
            {links.map((link, i) => (
              <IconButton key={i} aria-label={link.name} href={link.link}>
                <img
                  src={link.image}
                  className={classes.gimbleCardActionIcon}
                  title={link.name}
                  alt={link.name}
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
