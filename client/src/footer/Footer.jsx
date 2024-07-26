import React, { useState, useEffect } from 'react';
import '../App.css';
import reactLogo from '../static/logos/react_logo.svg';
import universityOfMichiganLogoSmall from '../static/logos/university_of_michigan_logo_small.svg';
import Moment from 'react-moment';
import moment from 'moment';
import { Typography, Link, Tooltip, Button, Box } from '@mui/material';
import timestamp from '../CommitTimestamp.js';
import facebookLogo from '../static/logos/facebook_logo.svg';
import stackOverflowLogo from '../static/logos/stack_overflow_logo.svg';
import githubLogoLight from '../static/logos/github_logo_light.svg';
import githubLogoDark from '../static/logos/github_logo_dark.svg';
import linkedinLogo from '../static/logos/linkedin_logo.svg';
import instagramLogo from '../static/logos/instagram_logo.svg';
import youtubeLogo from '../static/logos/youtube_logo.svg';
import spotifyLogo from '../static/logos/spotify_logo.svg';
import PropTypes from 'prop-types';

const fetch = require('node-fetch');
const HEARTBEAT_INTERVAL = 30000;

const ohio_timestamp = '2019-11-30T20:30:00.000Z'

const facebookLink = `https://www.facebook.com/mark.fonte.397`;
const githubLink = `https://github.com/markfonte`;
const linkedinLink = `https://linkedin.com/in/mark-fonte/`;
const instagramLink = `https://www.instagram.com/mark_fonte21/`;
const youtubeLink = `https://www.youtube.com/channel/UCziCrimzV0XM3qy8BJL_JjQ`;
const websiteGithubLink = `https://github.com/markfonte/personal_website`;
const suggestEditLink = `https://github.com/markfonte/personal_website/issues/new`;
const stackOverflowLink = `https://stackoverflow.com/users/8266770/mark-fonte`;
const commitHistoryLink = `https://github.com/markfonte/personal_website/commits/main`;
const spotifyLink = `https://open.spotify.com/artist/5rVdyxve8VvmsgT3HSWB1a`;
const michiganClockLink = `https://x.com/MichiganClock`;

const buttons = [
  {
    name: 'Facebook',
    logo: facebookLogo,
    link: facebookLink,
  },
  {
    name: 'Stack Overflow',
    logo: stackOverflowLogo,
    link: stackOverflowLink,
  },
  {
    name: 'Spotify',
    logo: spotifyLogo,
    link: spotifyLink,
  },
  {
    name: 'GitHub',
    logo: githubLogoLight,
    logoDark: githubLogoDark,
    link: githubLink,
  },
  {
    name: 'LinkedIn',
    logo: linkedinLogo,
    link: linkedinLink,
  },
  {
    name: 'Instagram',
    logo: instagramLogo,
    link: instagramLink,
  },
  {
    name: 'YouTube',
    logo: youtubeLogo,
    link: youtubeLink,
  },
];

const badges = [
  {
    url: "https://img.shields.io/maintenance/yes/2024"
  },
  {
    url: "https://img.shields.io/uptimerobot/ratio/m783268782-cdf759be1e3aff1f04fa698e"
  },
  {
    url: "https://img.shields.io/github/release/markfonte/personal_website"
  },
  {
    url: "https://img.shields.io/github/release-date/markfonte/personal_website"
  },
  {
    url: "https://img.shields.io/github/commits-since/markfonte/personal_website/latest"
  },
];

const styles = {
  reactLogo: {
    animation: `react-logo-spin infinite 1.8s linear`,
    height: '28px',
    width: '28px',
    pointerEvents: 'none',
  },
  iconBar: {
    display: 'flex',
    flexDirection: 'row',
    listStyle: 'none',
    margin: '8px',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  footerContainer: {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    marginTop: '64px',
    marginBottom: '24px',
    justifyContent: 'center',
  },
  logoDefault: {
    margin: '8px',
  },
  errorMessageRoot: {
    margin: '16px',
  },
  button: {
    width: '40px',
    height: 'auto',
  },
  badge: {
    margin: '4px',
  }
};
export default function Footer({ isDarkTheme }) {
  const [apiResponse, setApiResponse] = useState(true);
  const [serverCrashed, setServerCrashed] = useState(false);

  const checkForAPIHeartbeat = () => {
    const apiUrl = process.env.REACT_APP_API_URL + 'api_heartbeat';
    fetch(apiUrl, { method: 'HEAD' })
      .then((res) => {
        if (res.status === 200) {
          let triggerReload = false;
          if (serverCrashed) {
            triggerReload = true; // back online! reload the page
          }
          setApiResponse(true);
          setServerCrashed(false);
          if (triggerReload) window.location.reload();
        } else {
          setApiResponse(false);
          setServerCrashed(true);
        }
      })
      .catch((err) => {
        setApiResponse(false);
        setServerCrashed(true);
        if (err.name === 'AbortError' || err.name === 'TypeError') {
          return;
        }
        console.error(err);
      });
  };
  const displayInDays = (timestamp) => {
    const now = moment();
    const date = moment(timestamp);
    const diffInDays = now.diff(date, 'days') + 1;
    return `${diffInDays} days ago`;
  };

  useEffect(() => {
    const interval = setInterval(() => { checkForAPIHeartbeat(); }, HEARTBEAT_INTERVAL);

    return () => clearInterval(interval);
  }, []);

  return (
    <footer>
      <Box sx={styles.footerContainer}>
        <Box sx={styles.iconBar}>
          {buttons.map((button) => (
            <Tooltip key={button.name} title={`go to ${button.name}`} arrow>
              <Button href={button.link}>
                <img src={!isDarkTheme && button.logoDark ? button.logoDark : button.logo} style={styles.button} alt={`${button.name} button`} />
              </Button>
            </Tooltip>
          ))}
        </Box>
        <Box>
          {apiResponse ? (
            <img src={reactLogo} style={styles.reactLogo} alt="React logo" />
          ) : (
            <Typography variant="h6">
              Oops! Looks like my server is down. Some features may be degraded. Don&apos;t worry - I&apos;ve been notified! 🔨
            </Typography>
          )}
        </Box>
        <Box sx={{ marginTop: '8px' }}>
          {badges.map((badge, i) => (
            <img src={badge.url} style={styles.badge} alt={`${badge.url} button`} key={i} />
          ))}
        </Box>
        <Typography sx={{ margin: '4px' }} variant="caption" color="textSecondary">
          Ohio State last beat Michigan{' '}
          <Tooltip arrow placement="right" title="">
            <Link color="secondary" href={michiganClockLink}>
              {displayInDays(ohio_timestamp)}
            </Link>
          </Tooltip>
        </Typography>
        <Typography sx={{ margin: '4px' }} variant="caption" color="textSecondary">
          last updated{' '}
          <Tooltip arrow placement="right" title="see most recent commit on GitHub">
            <Link color="secondary" href={commitHistoryLink}>
              <Moment parse="YYYY-MM-DDTHH:mm:ssZ" fromNow>
                {timestamp}
              </Moment>
            </Link>
          </Tooltip>
        </Typography>
        <Box sx={{ margin: '4px' }}>
          <Tooltip arrow placement="right" title="view source code on GitHub">
            <Link variant="caption" color="textSecondary" href={websiteGithubLink}>
              view source code
            </Link>
          </Tooltip>
        </Box>
        <Box sx={{ margin: '4px' }}>
          <Tooltip arrow placement="right" title="suggest an edit on Github">
            <Link variant="caption" color="textSecondary" href={suggestEditLink}>
              report issue
            </Link>
          </Tooltip>
        </Box>
        <Box>
          <Tooltip arrow placement="right" title="go blue 🫡">
            <img
              src={universityOfMichiganLogoSmall}
              width="25"
              height="25"
              style={styles.logoDefault}
              alt="University of Michigan logo small"
            />
          </Tooltip>
        </Box>
      </Box>
    </footer >
  );
}

Footer.propTypes = {
  isDarkTheme: PropTypes.bool.isRequired,
};