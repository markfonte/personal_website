import React from 'react';
import {Card, Typography, Switch, Link, Tooltip} from '@material-ui/core';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/styles';

const getCookie = require('./util/cookies.js').getCookie;
const setCookie = require('./util/cookies.js').setCookie;

const styles = {
  flatCard: {
    padding: '12px',
    margin: '8px',
  },
  prideSwitchContent: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
  },
  prideTitle: {
    alignSelf: 'flex-start',
  },
  prideSwitch: {
    alignSelf: 'flex-end',
  },
};

class PrideSwitch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      proud: true,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    if (getCookie('pride') === 'true') {
      this.setState({
        proud: true,
      });
    } else if (getCookie('pride') === 'false') {
      this.setState({
        proud: false,
      });
    } else {
      this.setState({
        proud: false,
      });
      setCookie('pride', 'false', 1000);
    }
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
    const {classes} = this.props;
    const travisCILink = `https://travis-ci.org/account/preferences`;
    const proud = this.state.proud;
    return (
      <Card className={classes.flatCard}>
        <div className={classes.prideSwitchContent}>
          <Typography className={classes.prideTitle} variant="h5">
            Pride
          </Typography>
          <Tooltip
            placement="top"
            arrow
            title="Click to add a rainbow header and footer to the page">
            <Switch
              checked={proud}
              onClick={this.handleChange}
              className={classes.prideSwitch}
              inputProps={{'aria-label': 'primary checkbox'}}
              color="secondary"/>
          </Tooltip>
        </div>
        <Typography variant="body1">
            I deeply care about diversity and inclusivity. Click the switch to show your pride or your solidarity.
        </Typography>
        <br />
        <Tooltip
          arrow
          title="Go to Travis CI (where I got this idea)">
          <Link
            href={travisCILink}
            variant="caption"
            color="textSecondary"
          >
            credit: Travis CI
          </Link>
        </Tooltip>
      </Card>
    );
  }
}

PrideSwitch.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PrideSwitch);
