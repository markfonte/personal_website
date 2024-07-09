import React, { useState, useEffect } from 'react';
import '../App.css';
import reactLogo from '../static/logos/react_logo.svg';
import universityOfMichiganLogoSmall from '../static/logos/university_of_michigan_logo_small.svg';
import Moment from 'react-moment';
import { Typography, Link, Tooltip, Button } from '@mui/material';
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

const styles = {
  reactLogo: {
    animation: `react-logo-spin infinite 1.8s linear`,
    height: '28px',
    width: '28px',
    pointerEvents: 'none',
  },
  iconBar: {
    'display': 'flex',
    'flexDirection': 'row',
    'listStyle': 'none',
    'margin': '24px',
    'flexWrap': 'wrap',
    'justifyContent': 'center',
    '& a': {
      'textAlign': 'center',
      'transition': 'all 0.3s ease',
      'color': 'white',
      'fontSize': '1.25rem',
      'height': '64px',
      'width': '48px',
      'padding': '16px',
      '&:hover': {
        backgroundColor: 'darkgrey',
      },
    },
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
  buttons: {
    width: '40px',
    height: 'auto',
  },
};

const facebookLink = `https://www.facebook.com/mark.fonte.397`;
const githubLink = `https://github.com/markfonte`;
const linkedinLink = `https://linkedin.com/in/mark-fonte/`;
const instagramLink = `https://www.instagram.com/mark_fonte21/`;
const youtubeLink = `https://www.youtube.com/channel/UCziCrimzV0XM3qy8BJL_JjQ`;
const websiteGithubLink = `https://github.com/markfonte/personal_website`;
const suggestEditLink = `mailto:mark@fonte.com?subject=Website edit suggestion`;
const stackOverflowLink = `https://stackoverflow.com/users/8266770/mark-fonte`;
const commitHistoryLink = `https://github.com/markfonte/personal_website/commits/main`;
const spotifyLink = `https://open.spotify.com/artist/5rVdyxve8VvmsgT3HSWB1a`;

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
        console.log("aaa");
        setApiResponse(false);
        setServerCrashed(true);
        if (err.name === 'AbortError' || err.name === 'TypeError') {
          return;
        }
        console.log(err);
      });
  };

  useEffect(() => {
    document.title = 'Blog | Mark Fonte';

    const interval = setInterval(() => { checkForAPIHeartbeat(); }, HEARTBEAT_INTERVAL);

    return () => clearInterval(interval);
  }, []);

  return (
    <footer>
      <div style={styles.footerContainer}>
        <div style={styles.iconBar}>
          {buttons.map((button) => (
            <Tooltip key={button.name} title={`Go to ${button.name}`} arrow>
              <Button href={button.link}>
                <img src={!isDarkTheme && button.logoDark ? button.logoDark : button.logo} style={styles.buttons} alt={`${button.name} button`} />
              </Button>
            </Tooltip>
          ))}
        </div>
        <div>
          {apiResponse ? (
            <img src={reactLogo} style={styles.reactLogo} alt="React logo" />
          ) : (
            <Typography variant="h6">
              Oops! Looks like my server is down. Some features may be degraded. Don&apos;t worry - I&apos;ve been notified! 🔨
            </Typography>
          )}
        </div>
        <div style={{ margin: 4 }}>
          <Typography variant="caption" color="textSecondary">
            Last updated{' '}
            <Tooltip arrow placement="right" title="Go to most recent commit on GitHub">
              <Link color="secondary" href={commitHistoryLink}>
                <Moment parse="MM/DD/YYYY HH mm SS" fromNow>
                  {timestamp}
                </Moment>
              </Link>
            </Tooltip>
          </Typography>
        </div>
        <div style={{ margin: 4 }}>
          <Tooltip arrow placement="right" title="Go to source code on GitHub">
            <Link variant="caption" color="textSecondary" href={websiteGithubLink}>
              View source on GitHub
            </Link>
          </Tooltip>
        </div>
        <div style={{ margin: 4 }}>
          <Tooltip arrow placement="right" title="Email me with website edit suggestions!">
            <Link variant="caption" color="textSecondary" href={suggestEditLink}>
              Suggest an edit
            </Link>
          </Tooltip>
        </div>
        <div>
          <Tooltip arrow placement="right" title="Go blue!!">
            <img
              src={universityOfMichiganLogoSmall}
              width="25"
              height="25"
              style={styles.logoDefault}
              alt="University of Michigan logo small"
            />
          </Tooltip>
        </div>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  isDarkTheme: PropTypes.bool.isRequired,
};