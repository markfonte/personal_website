import React from 'react';
import laughableLyricsLogo
  from '../static/images/logos/laughable_lyrics_logo.svg';
import {
  Typography,
  Card,
  CardMedia,
  CardContent,
  CardHeader,
  Link,
} from '@material-ui/core';
import {withStyles} from '@material-ui/styles';
import PropTypes from 'prop-types';

const styles = {
  media: {
    height: '0px',
    paddingTop: '30%',
  },
  logo: {
    width: '40%', height: 'auto',
  },
};

class Spartahack5Card extends React.Component {
  render() {
    const {classes} = this.props;
    // const spartahack5Link = `https://spartahackv.devpost.com/`;
    const laughableLyricsDevpostLink = `https://devpost.com/software/laughable-lyrics`;
    const laughableLyricsGithubLink = `https://github.com/nathan815/Laughable-Lyrics`;
    const googleTranslateSingsLink = `https://www.youtube.com/watch?v=2bVAoVlFYf0`;

    return (
      <Card raised={true} className="card">
        <a name="spartahack5_card" href="#spartahack5_card" style={{visibility: 'hidden'}}>
            Sparthack 5 Card
        </a>
        <CardHeader
          title="Laughable Lyrics"
          subheader="Hackathon Winner @ Spartahack V"
        />
        <CardMedia
          className={classes.media}
          image="/images/spartahack_logo.png"
          title="SpartaHack V logo"
          alt="SpartaHack V logo"
        />
        <CardContent>
          <Typography variant="body1" paragraph>
              This hackathon project,
            {' '}
            <i>Laughable Lyrics</i>
              , is one of my favorites.
            {' '}
              We took inspiration from the popular
            {' '}
            <i>&#34;Google Translate Sings&#34;</i>
            {' '}
            <Link color="secondary" href={googleTranslateSingsLink}>
                YouTube videos
            </Link>
            {' '}
              and decided we could automate that process. Using Google Translate APIs we built an
              Android application that allowed users to translate the Genius Lyrics through a specified
              number of languages, and back to English. The result was always hilarious,
              and the user interface we built (using Android Jetpack) made it very easy to do.
              We won <i>Most Creative/Funniest Hack</i> for the project.
              View it on
            {' '}
            <Link color="secondary" href={laughableLyricsDevpostLink}>
                Devpost
            </Link>
            {' '}
              or
            {' '}
            <Link color="secondary" href={laughableLyricsGithubLink}>
                Github
            </Link>
          </Typography>
          <img
            src={laughableLyricsLogo}
            className={classes.logo}
            title="Laughable Lyrics logo"
            alt="Laughable Lyrics logo"
          />
        </CardContent>
      </Card>
    );
  }
}

Spartahack5Card.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Spartahack5Card);
