import React from 'react';
import {
  CardContent,
  Card,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Tooltip,
  CardHeader,
  Link,
  ImageList,
  ImageListItem,
  CardActions,
  Box,
} from '@mui/material';
import welcomeImageOne from '../static/photos/welcome_photo_1.webp';
import welcomeImageTwo from '../static/photos/welcome_photo_2.webp';
import welcomeImageFour from '../static/photos/welcome_photo_4.webp';
import welcomeImageTen from '../static/photos/welcome_photo_10.webp';
import welcomeImageSeven from '../static/photos/welcome_photo_7.webp';
import welcomeImageEight from '../static/photos/welcome_photo_8.webp';
import welcomeImageNine from '../static/photos/welcome_photo_9.webp';
import welcomeImageEleven from '../static/photos/welcome_photo_11.webp';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import PropTypes from 'prop-types';
import LikeButton from '../shared/LikeButton';

const trelloBoardLink = `https://trello.com/b/yoLCEs6S/personal-website`;
const umichLink = 'https://umich.edu/';
const awsLink = `https://aws.amazon.com/`;
const justlightLink = `https://www.justlight.com/`;
const teslaLink = `https://tesla.com`;

const itemData = [
  {
    img: welcomeImageSeven,
    title: '',
  },
  {
    img: welcomeImageTen,
    title: '',
  },
  {
    img: welcomeImageFour,
    title: '',
  },
  {
    img: welcomeImageTwo,
    title: '',
  },
  {
    img: welcomeImageOne,
    title: '',
  },
  {
    img: welcomeImageNine,
    title: '',
  },
  {
    img: welcomeImageEight,
    title: '',
  },
  {
    img: welcomeImageEleven,
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
    <Card raised className="large-card">
      <Accordion slotProps={{ transition: { unmountOnExit: true } }}>
        <AccordionSummary
          aria-label="Welcome"
          aria-controls="welcome-content"
          id="welcome-header"
          expandIcon={
            <Tooltip title="expand/collapse card" arrow>
              <ExpandMoreIcon />
            </Tooltip>
          }>
          <a name="welcome_card" href="#welcome_card" className="gone">
            Welcome Card
          </a>
          <Box sx={styles.expansionHeaderContainer}>
            <CardHeader
              className="card-header"
              title="Welcome!"
              subheader=""
            />
            <ImageList variant="masonry" cols={2} sx={{ marginTop: "4px", marginBottom: "0px" }}>
              {itemData.map((item, i) => (
                <ImageListItem key={item.img + " " + i}>
                  <img
                    src={item.img}
                    alt={item.title}
                    loading="lazy"
                  />
                </ImageListItem>
              ))}
            </ImageList>
          </Box>
        </AccordionSummary>
        <AccordionDetails>
          <CardContent sx={styles.cardContent}>
            <Typography variant="h6" paragraph>
              Welcome to my website!
            </Typography>
            <Typography variant="body1" paragraph>
              I&#39;m a senior software engineer at{' '}
              <Tooltip arrow title="go to Tesla">
                <Link color="secondary" href={teslaLink} className={teslaColor} underline="hover">
                  Tesla
                </Link>
              </Tooltip>
              , a former software engineering lead at a medical device startup called{' '}
              <Tooltip arrow title="go to JustLight">
                <Link color="secondary" href={justlightLink} className={justlightColor} underline="hover">
                  JustLight
                </Link>
              </Tooltip>
              , a former software engineer at{' '}
              <Tooltip arrow title="go to Amazon Web Services">
                <Link color="secondary" href={awsLink} className={amazonColor} underline="hover">
                  Amazon Web Services
                </Link>
              </Tooltip>
              , I have bachelor&#39;s of computer science in engineering degree with a minor in entrepreneurship from{' '}
              <Tooltip arrow placement="bottom" title="go blue...">
                <Link href={umichLink} className={michiganColor} underline="hover">
                  University of Michigan
                </Link>
              </Tooltip>
              , and I was a singer / beatboxer for a college a cappella group.
            </Typography>
            <Typography variant="body1" paragraph>
              Outside of coding, I love reading, writing, teaching, playing basketball and making cool shit. I especially love building{' '}
              <Link href="" className={androidColor} underline="hover">
                Android
              </Link>
              {' '}and{' '}
              <Link href="" className={webColor} underline="hover">
                web
              </Link>
              {' '}applications. I built this website to be an interactive sandbox where I could break things and have fun. I aim to make it faster, more intuitive, and easier to navigate. Hopefully the experience is better each time you visit! You can always check what I&#39;m working on on my
              {' '}
              <Tooltip arrow title="see my Trello board">
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
      <CardActions sx={{ justifyContent: 'flex-end' }}>
        <LikeButton likeType='card' likeName='welcome_card' />
      </CardActions>
    </Card>
  );
};

WelcomeCard.propTypes = {
  isDarkTheme: PropTypes.bool.isRequired,
};