import React from 'react';
import laughableLyricsLogo
  from '../static/logos/laughable_lyrics_logo.svg';
import {
  Typography,
  Card,
  CardMedia,
  CardContent,
  CardHeader,
  Link,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Chip,
  IconButton,
  Tooltip,
} from '@mui/material';
import DateRangeIcon from '@mui/icons-material/DateRange';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import laughableLyricsScreenshotOne
  from '../static/screenshots/laughable_lyrics_screenshot_1.webp';
import laughableLyricsScreenshotTwo
  from '../static/screenshots/laughable_lyrics_screenshot_2.webp';
import laughableLyricsScreenshotThree
  from '../static/screenshots/laughable_lyrics_screenshot_3.webp';
import LikeButton from '../shared/LikeButton';

const laughableLyricsDevpostLink = `https://devpost.com/software/laughable-lyrics`;
const laughableLyricsGithubLink = `https://github.com/nathan815/Laughable-Lyrics`;
const googleTranslateSingsLink = `https://www.youtube.com/watch?v=2bVAoVlFYf0`;
const translateAPILink = `https://cloud.google.com/translate/`;
const androidLink = `https://developer.android.com/`;
const kotlinLink = `https://kotlinlang.org/`;
const androidJetpackLink = `https://developer.android.com/jetpack`;
const mySqlLink = `https://www.mysql.com/`;
const expressLink = `https://expressjs.com/`;
const nodeLink = `https://nodejs.org/`;
const geniusAPILink = `https://docs.genius.com/`;
const glideLink = `https://bumptech.github.io/glide/`;
const volleyLink = `https://developer.android.com/training/volley`;

const tags = [
  {
    label: 'January 2019',
    color: 'default',
    variant: 'default',
    icon: <DateRangeIcon />,
  },
  {
    label: 'Hackathon',
    color: 'primary',
    variant: 'default',
  },
  {
    label: 'Android',
  },
  {
    label: 'Android Jetpack',
  },
  {
    label: 'Express.js',
  },
  {
    label: 'JavaScript',
  },
  {
    label: 'Kotlin',
  },
  {
    label: 'MySQL',
  },
];

const styles = {
  spartahack5Banner: {
    width: '100%',
    marginBottom: '16px',
    marginTop: '16px',
    marginLeft: '0px',
    marginRight: '0px',
  },
  laughableLyricsLogo: {
    width: '40%', height: 'auto',
  },
  tags: {
    margin: '4px',
  },
  expansionHeaderContainer: {
    display: 'flex',
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  mobileScreenshot: {
    marginTop: '12px',
    marginBottom: '12px',
    marginLeft: '4px',
    marginRight: '4px',
    height: 'auto',
    width: '100%',
    maxWidth: '280px',
  },
};

export default function Spartahack5Card() {
  return (
    <Card raised={true} className="large-card">
      <Accordion slotProps={{ transition: { unmountOnExit: true } }}>
        <AccordionSummary
          aria-label="SpartaHack V"
          aria-controls="spartahack5-content"
          id="spartahack5-header"
          expandIcon={
            <Tooltip
              title="expand/collapse card"
              arrow>
              <IconButton size="large">
                <ExpandMoreIcon />
              </IconButton>
            </Tooltip>
          }>
          <a name="spartahack5_card" href="#spartahack5_card" className="gone">
            SpartHack V Card
          </a>
          <div style={styles.expansionHeaderContainer}>
            <CardHeader
              className="card-header"
              title="Laughable Lyrics"
              subheader="Hackathon Project @ SpartaHack V"
            />
            <CardMedia
              sx={styles.spartahack5Banner}
              image="/media/spartahack_banner.webp"
              title="SpartaHack V banner"
              alt="SpartaHack V banner"
              component="img"
            />
            <div>
              {tags.map((tag) => (
                <Chip
                  sx={styles.tags}
                  key={tag.label}
                  icon={tag.icon ? tag.icon : <div />}
                  label={tag.label}
                  variant={tag.variant ? tag.variant : 'outlined'}
                  color={tag.color ? tag.color : 'secondary'}
                  clickable />
              ))}
            </div>
          </div>
        </AccordionSummary>
        <AccordionDetails>
          <CardContent>
            <Typography variant="body1" paragraph>
              This hackathon project, <i>Laughable Lyrics</i>, is one of my favorites.
              We took inspiration from the popular

              {' '}
              <Link color="secondary" href={googleTranslateSingsLink}>
                <i>&#34;Google Translate Sings&#34;</i> YouTube videos
              </Link>
              {' '}

              and realized that we could automate the process of translating
              song lyrics to a bunch of different languages, then back to English.
            </Typography>
            <Typography variant="body1" paragraph>
              As you can see in the screenshots below, users could type in the
              name of any song, use the slider to select how many translations
              to make before translating back to English (the more translations,
              the wackier the result), and tap on the song they wanted to translate!
              The results were always hilarious.
            </Typography>
            <Typography variant="body1" paragraph>
              We built the

              {' '}
              <Link color="secondary" href={androidLink}>
                Android
              </Link>
              {' '}

              app in

              {' '}
              <Link color="secondary" href={kotlinLink}>
                Kotlin
              </Link>
              {' '}

              for <i>Laughable Lyrics</i> using

              {' '}
              <Link color="secondary" href={androidJetpackLink}>
                Android Jetpack
              </Link>
              {' '}

              for architecture components, view models, and much more.
              Images in the search results were loaded using the

              {' '}
              <Link color="secondary" href={glideLink}>
                Glide
              </Link>
              {' '}

              library, and network calls were made using the

              {' '}
              <Link color="secondary" href={volleyLink}>
                Volley
              </Link>
              {' '}

              library. We used

              {' '}
              <Link color="secondary" href={geniusAPILink}>
                Genius.com&apos;s API
              </Link>
              {' '}

              to load song lyrics and the

              {' '}
              <Link color="secondary" href={translateAPILink}>
                Google Translate API
              </Link>
              {' '}

              to translate them. Our API was built in

              {' '}
              <Link color="secondary" href={nodeLink}>
                NodeJS
              </Link>
              {' '}

              and

              {' '}
              <Link color="secondary" href={expressLink}>
                Express
              </Link>

              , and saves the funny translations to a

              {' '}
              <Link color="secondary" href={mySqlLink}>
                MySQL
              </Link>
              {' '}

              database.
            </Typography>
            <Typography variant="body1" paragraph>
              <i>Laughable Lyrics</i> was a very lighthearted app, just meant
              for a little entertainment and a few laughs. Unfortunately, the Google
              Translate API has some steep pricing on their usage and very small limits
              on their free tier (causing a few demo fails, oops!).
            </Typography>
            <img
              src={laughableLyricsScreenshotOne}
              style={styles.mobileScreenshot}
              alt="Laughable Lyrics Screenshot 1"
            />
            <img
              src={laughableLyricsScreenshotTwo}
              style={styles.mobileScreenshot}
              alt="Laughable Lyrics Screenshot 2"
            />
            <img
              src={laughableLyricsScreenshotThree}
              style={styles.mobileScreenshot}
              alt="Laughable Lyrics Screenshot 3"
            />
            <Typography variant="body1" paragraph>
              We won
              <Typography color="secondary" display="inline">
                {' '}<b><i>Most Creative/Funniest Hack</i></b>
              </Typography>
              {' '}

              and a

              {' '}
              <Typography color="secondary" display="inline">
                <b><i>Top 10 finish</i></b>
              </Typography>
              {' '}

              for the project.
              We were never able to push it to production due to the rate limiting issue with the
              Google Translate API.
            </Typography>
            <Typography variant="body1" paragraph>
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
              style={styles.laughableLyricsLogo}
              title="Laughable Lyrics logo"
              alt="Laughable Lyrics logo"
            />
            <LikeButton likeType='card' likeName='spartahack_card' />
          </CardContent>
        </AccordionDetails>
      </Accordion>
    </Card>
  );
};
