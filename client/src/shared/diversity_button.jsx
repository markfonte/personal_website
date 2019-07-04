import React from 'react';
import './diversity_button.css';
import {Card, Typography, Switch, Link} from '@material-ui/core';
const getCookie = require('../shared/util/cookies.js').getCookie;
const setCookie = require('../shared/util/cookies.js').setCookie;

export default class DiversityButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      proud: true,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    console.log(this.state.proud);
    if (getCookie('pride') === 'true') {
      this.setState({
        proud: true,
      });
      console.log(20);
    } else if (getCookie('pride') === 'false') {
      this.setState({
        proud: false,
      });
      console.log(23);
    } else {
      this.setState({
        proud: false,
      });
      console.log(25);
      setCookie('pride', 'false', 1000);
    }
    console.log(this.state.proud);
  }

  handleChange() {
    if (this.state.proud === false) {
      this.setState({proud: true});
      setCookie('pride', 'true', 1000);
    } else {
      this.setState({proud: false});
      setCookie('pride', 'false', 1000);
    }
    window.location.reload();
  }

  render() {
    const travisCILink = `https://travis-ci.org/account/preferences`;
    const proud = this.state.proud;
    return (
      <Card className="flat-card">
        <div id="diversity-button-content">
          <Typography id="pride-title" variant="h5">
        Pride
          </Typography>
          <Switch checked={proud} onClick={this.handleChange} id="pride-switch" color="secondary"/>
        </div>
        <Typography variant="body1">
    I deeply care about diversity and inclusivity. Show your pride or your solidarity.
        </Typography>
        <br />
        <Link
          href={travisCILink}
          variant="caption"
          color="textSecondary"
        >
        credit: Travis CI
        </Link>
      </Card>
    );
  }
}
