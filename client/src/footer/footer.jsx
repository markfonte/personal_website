import React from 'react';
import reactLogo from '../static/vectors/react_logo.svg';
import '../App.css';
import './footer.css';
import 'typeface-roboto';
import {Typography} from '@material-ui/core';
import Link from '@material-ui/core/Link';

class Footer extends React.Component {
  constructor (props) {
    super (props);
    this.state = {apiResponse: false};
  }

  checkForAPIHeartbeat () {
    fetch (process.env.REACT_APP_API_URL + 'api_heartbeat', {method: 'HEAD'})
      .then (res => this.setState ({apiResponse: true}))
      .catch (err => {
        this.setState ({apiResponse: false});
        console.log (err);
      });
  }

  componentDidMount () {
    this.checkForAPIHeartbeat ();

    const timeoutInterval = 45000; // check for API heartbeat every 45 seconds
    setInterval (
      function () {
        this.checkForAPIHeartbeat ();
      }.bind (this),
      timeoutInterval
    );
  }
  render () {
    const facebookLink = `https://www.facebook.com/mark.fonte.397`;
    const githubLink = `https://github.com/markfonte`;
    const linkedinLink = `https://linkedin.com/in/mark-fonte/`;
    const instagramLink = `https://www.instagram.com/mark_fonte21/`;
    const youtubeLink = `https://www.youtube.com/channel/UCziCrimzV0XM3qy8BJL_JjQ`;
    const websiteGithubLink = `https://github.com/markfonte/personal_website`;

    return (
      <footer id="footer">
        <div id="footer-container">
          <div className="icon-bar">
            <a href={facebookLink} className="facebook">
              <i className="fa fa-facebook" />
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
              : <p>
                  {' '}
                  {/*
                    TODO: Display something ie "send report to me" & "retry"
                */}
                </p>}
          </div>
          <div>
            <Typography variant="caption" color="textSecondary">
              Last updated 6/1/2019
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
        </div>
      </footer>
    );
  }
}

export default Footer;
