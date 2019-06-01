import React from 'react';
import './spartahack5_card.css';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import IconButton from '@material-ui/core/IconButton';
import WebIcon from '@material-ui/icons/Web';
import {Typography} from '@material-ui/core';
import Link from '@material-ui/core/Link';
import laughableLyricsLogo from '../static/images/laughable_lyrics_logo.png';

class Spartahack5Card extends React.Component {
  render() {
    const spartahack5Link = `https://spartahackv.devpost.com/`;
    const laughableLyricsDevpostLink = `https://devpost.com/software/laughable-lyrics`;
    const laughableLyricsGithubLink = `https://github.com/nathan815/Laughable-Lyrics`;
    const googleTranslateSingsLink = `https://www.youtube.com/watch?v=2bVAoVlFYf0`;

    return (
      <div>
        <Card raised={true} className="card">
          <CardHeader
            title="Laughable Lyrics"
            subheader="Hackathon Winner @ Spartahack V"
          />
          <CardMedia
            id="spartahack5-media"
            image={require('../static/images/spartahack_logo.png')}
            title="SpartaHack V logo"
          />
          <CardContent>
            <Typography variant="body1">
              This hackathon project,
              {' '}
              <i>Laughable Lyrics</i>
              , is one of my favorites.
              {' '}
              We took inspiration from the popular
              {' '}
              <i>&#34;Google Translate Sings&#34;</i>
              {' '}
              <Link href={googleTranslateSingsLink}>Youtube videos</Link>
              {' '}
              and decided we could automate that process. Using Google Translate APIs we built an
              Android application that allowed users to translate the Genius Lyrics through a specified
              number of languages, and back to English. The result was always hilarious,
              and the user interface we built (using Android Jetpack) made it very easy to do.
              We won <i>Most Creative/Funniest Hack</i> for the project.
              View it on
              {' '}
              <Link href={laughableLyricsDevpostLink}>
                Devpost
              </Link> or <Link href={laughableLyricsGithubLink}>Github</Link>
              <br />
              <img
                src={laughableLyricsLogo}
                style={{width: '40%', height: 'auto'}}
                title="Laughable Lyrics logo"
                alt="Laughable Lyrics logo"
              />
            </Typography>
          </CardContent>
          <CardActions>
            <IconButton aria-label="Go to website" href={spartahack5Link}>
              <WebIcon />
            </IconButton>
          </CardActions>
        </Card>
      </div>
    );
  }
}

export default Spartahack5Card;
