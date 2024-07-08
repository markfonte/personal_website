import React from 'react';
import {
  CardContent,
  Card,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  IconButton,
  Tooltip,
  CardHeader,
  Link,
  ImageList,
  ImageListItem,
} from '@mui/material';
import welcomeImageOne from '../static/photos/welcome_photo_1.jpg';
import welcomeImageTwo from '../static/photos/welcome_photo_2.jpg';
import welcomeImageThree from '../static/photos/welcome_photo_3.jpg';
import welcomeImageFour from '../static/photos/welcome_photo_4.jpg';
import welcomeImageFive from '../static/photos/welcome_photo_5.jpg';
import welcomeImageSix from '../static/photos/welcome_photo_6.jpg';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import PropTypes from 'prop-types';

const trelloBoardLink = `https://trello.com/b/yoLCEs6S/personal-website`;
const umichLink = 'https://umich.edu/';
const webDevLink = 'https://en.wikipedia.org/wiki/Web_development';
const androidDevLink = 'https://developer.android.com/';
const awsLink = `https://aws.amazon.com/`;
const justlightLink = `https://www.justlight.com/`;
const teslaLink = `https://tesla.com`;

const itemData = [
  {
    img: welcomeImageOne,
    title: '',
  },
  {
    img: welcomeImageTwo,
    title: '',
  },
  {
    img: welcomeImageThree,
    title: '',
  },
  {
    img: welcomeImageFour,
    title: '',
  },
  {
    img: welcomeImageFive,
    title: '',
  },
  {
    img: welcomeImageSix,
    title: '',
  },
];

const styles = {
  cardContent: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    padding: '0px',
  },
  photoGrid: {
    flexWrap: 'nowrap',
    transform: 'translateZ(0)',
  },
  photoGridTile: {
  },
  scrollTip: {
    marginTop: '8px',
  },
  expansionHeaderContainer: {
    display: 'flex',
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  iframeStyle: {
    height: '235px',
    width: '100%',
    maxWidth: '330px',
    margin: '4px',
  },
};

export default function WelcomeCard({ isDarkTheme }) {
  const justlightColor = isDarkTheme ? 'justlight-color-light' : 'justlight-color-dark';
  const teslaColor = isDarkTheme ? 'tesla-color-light' : 'tesla-color-dark';
  const amazonColor = isDarkTheme ? 'amazon-color-light' : 'amazon-color-dark';
  const michiganColor = isDarkTheme ? 'michigan-color-light' : 'michigan-color-dark';
  const webColor = isDarkTheme ? 'web-color-light' : 'web-color-dark';
  const androidColor = isDarkTheme ? 'android-color-light' : 'android-color-dark';

  return (
    <Card raised={true} className="large-card">
      <Accordion
        TransitionProps={{ unmountOnExit: true }}>
        <AccordionSummary
          aria-label="Welcome"
          aria-controls="welcome-content"
          id="welcome-header"
          expandIcon={
            <Tooltip
              title="Expand/collapse card"
              arrow>
              <IconButton size="large">
                <ExpandMoreIcon />
              </IconButton>
            </Tooltip>
          }>
          <a name="welcome_card" href="#welcome_card" className="gone">
            Welcome Card
          </a>
          <div
            style={styles.expansionHeaderContainer}>
            <CardHeader
              className="card-header"
              title="Welcome!"
              subheader="Click for a little about me..."
            />
            <ImageList variant="masonry" cols={2}>
              {itemData.map((item) => (
                <ImageListItem key={item.img}>
                  <img
                    src={item.img}
                    alt={item.title}
                    loading="lazy"
                  />
                </ImageListItem>
              ))}
            </ImageList>
          </div>
        </AccordionSummary>
        <AccordionDetails>
          <CardContent sx={styles.cardContent}>
            <Typography variant="h6" paragraph>
              Welcome to my website! I&#39;m a senior software engineer at{' '}
              <Tooltip arrow title="Go to Tesla">
                <Link color="secondary" href={teslaLink} className={teslaColor} underline="hover">
                  Tesla
                </Link>
              </Tooltip>
              , a former software engineering lead at a medical device startup called{' '}
              <Tooltip arrow title="Go to JustLight">
                <Link color="secondary" href={justlightLink} className={justlightColor} underline="hover">
                  JustLight
                </Link>
              </Tooltip>
              , a former software engineer at{' '}
              <Tooltip arrow title="Go to Amazon Web Services">
                <Link color="secondary" href={awsLink} className={amazonColor} underline="hover">
                  Amazon Web Services
                </Link>
              </Tooltip>
              , a computer science engineering / entrepreneurship graduate from{' '}
              <Tooltip arrow placement="bottom" title="Go to U of M website">
                <Link href={umichLink} className={michiganColor} underline="hover">
                  University of Michigan
                </Link>
              </Tooltip>
              , and a former singer / beatboxer for a college a cappella group.
            </Typography>
            <Typography variant="body1" paragraph>
              Outside of coding, I love reading, writing, teaching, playing basketball and making cool shit. I especially love building{' '}
              <Tooltip arrow placement="bottom" title="Go to Android Developers page">
                <Link href={androidDevLink} className={androidColor} underline="hover">
                  Android
                </Link>
              </Tooltip>
              {' '}and{' '}
              <Tooltip arrow placement="bottom" title="Go to web development page">
                <Link href={webDevLink} className={webColor} underline="hover">
                  web
                </Link>
              </Tooltip>
              {' '}applications. I built this website to be an interactive sandbox where I could break things and have fun. I aim to make it faster, more intuitive, and easier to navigate. Hopefully the experience is better each time you visit! You can always check what I&#39;m working on on my
              {' '}
              <Tooltip arrow title="Go to my Trello board">
                <Link color="secondary" href={trelloBoardLink} underline="hover">
                  Trello board
                </Link>
              </Tooltip>
              .
            </Typography>
            <Typography variant="body1" paragraph>
              Please reach out with questions, comments, or concerns! Much love ❤️
              <br /> <br />
              <iframe
                style={styles.iframeStyle}
                src='https://open.spotify.com/embed/track/04x6SfCgzOUVvFn3Ej3mIg'
                title={'Mark Fonte on Spotify'}
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </Typography>
          </CardContent>
        </AccordionDetails>
      </Accordion>
    </Card>
  );
};

WelcomeCard.propTypes = {
  isDarkTheme: PropTypes.bool.isRequired,
};