import React from 'react';
import '../App.css';
import reactLogo from '../static/vectors/react_logo.svg';
import universityOfMichiganLogoSmall
  from '../static/vectors/university_of_michigan_logo_small.svg';
import Moment from 'react-moment';
import {Typography, Link, Tooltip, Button} from '@material-ui/core';
import timestamp from '../commit_timestamp.js';
import {withStyles} from '@material-ui/styles';
import PropTypes from 'prop-types';
import facebookLogo from '../static/images/logos/facebook_logo.svg';
import stackOverflowLogo from '../static/images/logos/stack_overflow_logo.svg';
import githubLogo from '../static/images/logos/github_logo.svg';
import linkedinLogo from '../static/images/logos/linkedin_logo.svg';
import instagramLogo from '../static/images/logos/instagram_logo.svg';
import youtubeLogo from '../static/images/logos/youtube_logo.svg';

const fetch = require('node-fetch');

const styles = {
  reactLogo: {
    animation: `react-logo-spin infinite 1.8s linear`,
    height: '50px',
    width: '50px',
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
      'fontSize': '20px',
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

const DisplayError = (props) => {
  return (
    <Typography variant="h6" className={props.classes.errorMessageRoot} >
      Oops! Looks like my backend server is down. Please
      {' '}
      <Tooltip
        arrow
        title="Go to Contact page">
        <Link color="secondary" href="https://markfonte.dev/contact">
        contact me
        </Link>
      </Tooltip>
      {' '}
      so I can fix the issue! Thanks!
    </Typography>
  );
};

DisplayError.propTypes = {
  classes: PropTypes.object.isRequired,
};

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {apiResponse: false, serverCrashed: false};
    this.checkForAPIHeartbeat = this.checkForAPIHeartbeat.bind(this);
  }

  abortController = new window.AbortController();

  checkForAPIHeartbeat() {
    const apiUrl = process.env.REACT_APP_API_URL + 'api_heartbeat';
    fetch(apiUrl, {method: 'HEAD', signal: this.abortController.signal})
        .then((res) => {
          if (res.status === 200) {
            let triggerReload = false;
            if (this.state.serverCrashed === true) {
              triggerReload = true; // back online! reload the page
            }
            this.setState({apiResponse: true, serverCrashed: false});
            if (triggerReload === true) window.location.reload();
          } else this.setState({apiResponse: false, serverCrashed: true});
        })
        .catch((err) => {
          if (err.name === 'AbortError' || err.name === 'TypeError') {
            return;
          }
          this.setState({apiResponse: false, serverCrashed: true});
          console.log(err);
        });
  }

  componentDidMount() {
    this.checkForAPIHeartbeat();
    const timeoutInterval = 45000; // check for API heartbeat every 45 seconds
    setInterval(
        function() {
          this.checkForAPIHeartbeat();
        }.bind(this),
        timeoutInterval
        , 1000);
  }

  componentWillUnmount() {
    clearInterval(1000);
    this.abortController.abort();
  }

  render() {
    const {classes} = this.props;
    const facebookLink = `https://www.facebook.com/mark.fonte.397`;
    const githubLink = `https://github.com/markfonte`;
    const linkedinLink = `https://linkedin.com/in/mark-fonte/`;
    const instagramLink = `https://www.instagram.com/mark_fonte21/`;
    const youtubeLink = `https://www.youtube.com/channel/UCziCrimzV0XM3qy8BJL_JjQ`;
    const websiteGithubLink = `https://github.com/markfonte/personal_website`;
    const suggestEditLink = `mailto:mark@fonte.com?subject=Website edit suggestion`;
    const stackOverflowLink = `https://stackoverflow.com/users/8266770/mark-fonte`;
    const travisCILink = `https://travis-ci.org/markfonte/personal_website`;
    const commitHistoryLink = `https://github.com/markfonte/personal_website/commits/main`;
    const updatedDate = timestamp;

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
        name: 'GitHub',
        logo: githubLogo,
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
    return (
      <footer>
        <div className={classes.footerContainer}>
          <div className={classes.iconBar}>
            {buttons.map((button) => (
              <Tooltip
                key={button.name}
                title={'Go to ' + button.name }
                arrow>
                <Button href={button.link}>
                  <img
                    src={button.logo}
                    className={classes.buttons}
                    alt={button.name + ' button'}
                  />
                </Button>
              </Tooltip>
            ))}
          </div>
          <div>
            {this.state.apiResponse ?
              <img src={reactLogo} className={classes.reactLogo} alt="React logo" /> :
              <DisplayError classes={classes} />}
          </div>
          <div style={{margin: 4}}>
            <Typography variant="caption" color="textSecondary" >
              Last updated
              {' '}
              <Tooltip
                arrow
                placement="right"
                title="Go to most recent commit on GitHub">
                <Link color="secondary" href={commitHistoryLink}>
                  <Moment parse="MM/DD/YYYY HH mm SS" fromNow>
                    {updatedDate}
                  </Moment>
                </Link>
              </Tooltip>
            </Typography>
          </div>
          <div style={{margin: 4}}>
            <Tooltip
              arrow
              placement="right"
              title="Go to source code on GitHub">
              <Link
                variant="caption"
                color="textSecondary"
                href={websiteGithubLink}
              >
              view source on github
              </Link>
            </Tooltip>
          </div>
          <div style={{margin: 4}}>
            <Tooltip
              arrow
              placement="right"
              title="Go to build history on Travis CI">
              <Link
                variant="caption"
                color="textSecondary"
                href={travisCILink}
              >
                 view build history
              </Link>
            </Tooltip>
          </div>
          <div style={{margin: 4}}>
            <Tooltip
              arrow
              placement="right"
              title="Email me with website edit suggestions!">
              <Link
                variant="caption"
                color="textSecondary"
                href={suggestEditLink}
              >
              suggest an edit
              </Link>
            </Tooltip>
          </div>
          {/* go blue */}
          <div>
            <Tooltip
              arrow
              placement="right"
              title="Go blue!!">
              <img
                src={universityOfMichiganLogoSmall}
                width="25"
                height="25"
                className={classes.logoDefault}
                alt="University of Michigan logo small"
              />
            </Tooltip>
          </div>
        </div>
      </footer>
    );
  }
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Footer);
