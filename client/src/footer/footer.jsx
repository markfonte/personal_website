import React from 'react';
import '../App.css';
import './footer.css';
import reactLogo from '../static/vectors/react_logo.svg';
import universityOfMichiganLogoSmall
  from '../static/vectors/university_of_michigan_logo_small.svg';
import Moment from 'react-moment';
import {Typography, Link} from '@material-ui/core';

function DisplayError(props) {
  return (
    <Typography variant="h6" style={{margin: 16}}>
      Oops! Looks like my backend server is down. Please
      {' '}
      <Link href="https://mark.fonte.com/contact">contact me</Link>
      {' '}
      so I can fix the issue! Thanks!
    </Typography>
  );
}

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {apiResponse: false};
  }

  checkForAPIHeartbeat() {
    fetch(process.env.REACT_APP_API_URL + 'api_heartbeat', {method: 'HEAD'})
        .then((res) => {
          if (res.status === 200) this.setState({apiResponse: true});
          else this.setState({apiResponse: false});
        })
        .catch((err) => {
          this.setState({apiResponse: false});
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
    );
  }
  render() {
    const facebookLink = `https://www.facebook.com/mark.fonte.397`;
    const githubLink = `https://github.com/markfonte`;
    const linkedinLink = `https://linkedin.com/in/mark-fonte/`;
    const instagramLink = `https://www.instagram.com/mark_fonte21/`;
    const youtubeLink = `https://www.youtube.com/channel/UCziCrimzV0XM3qy8BJL_JjQ`;
    const websiteGithubLink = `https://github.com/markfonte/personal_website`;
    const suggestEditLink = `mailto:mark@fonte.com?subject=Website edit suggestion`;
    const stackOverflowLink = `https://stackoverflow.com/users/8266770/mark-fonte`;
    const updatedDate = '07 02 2019 22';

    return (
      <footer id="footer">
        <div id="footer-container">
          <div className="icon-bar">
            <a href={facebookLink} className="facebook">
              <i className="fa fa-facebook" />
            </a>
            <a href={stackOverflowLink} className="stack-overflow">
              <i className="fa fa-stack-overflow" />
            </a>
            <a href={githubLink} className="github">
              <i className="fa fa-github" />
            </a>
            <a href={linkedinLink} className="linkedin">
              <i className="fa fa-linkedin" />
            </a>
            <a href={instagramLink} className="instagram">
              <i className="fa fa-instagram" />
            </a>
            <a href={youtubeLink} className="youtube">
              <i className="fa fa-youtube" />
            </a>
          </div>
          <div>
            {this.state.apiResponse
              ? <img src={reactLogo} className="App-logo" alt="logo" />
              : <DisplayError />}
          </div>
          <div>
            <Typography variant="caption" color="textSecondary">
              Last updated
              {' '}
              <Moment parse="MM DD YYYY HH" fromNow>{updatedDate}</Moment>
            </Typography>
          </div>
          <div>
            <Link
              variant="caption"
              color="textSecondary"
              href={websiteGithubLink}
            >
              view source on github
            </Link>
          </div>
          <div>
            <Link
              variant="caption"
              color="textSecondary"
              href={suggestEditLink}
            >
              suggest an edit
            </Link>
          </div>
          {/* go blue */}
          <div>
            <img
              src={universityOfMichiganLogoSmall}
              width="20"
              height="20"
              style={{margin: 8}}
              title="University of Michigan logo small"
              alt="University of Michigan logo small"
            />
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
