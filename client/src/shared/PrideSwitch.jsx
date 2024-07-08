import React from 'react';
import { Card, Typography, Switch, Tooltip } from '@mui/material';

const getCookie = require('./util/Cookies.js').getCookie;
const setCookie = require('./util/Cookies.js').setCookie;

const styles = {
  flatCard: {
    padding: '12px',
    margin: '8px',
  },
  prideSwitchContent: {
    display: 'flex',
    flexDirection: 'row',
    margin: '8px',
    width: '100%',
    justifyContent: 'space-between',
  },
  prideTitle: {
    alignSelf: 'center',
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
      this.setState({ proud: true });
      setCookie('pride', 'true', 1000);
    } else {
      this.setState({ proud: false });
      setCookie('pride', 'false', 1000);
    }
    window.location.reload();
  }

  render() {
    return (
      <Card sx={styles.flatCard}>
        <div style={styles.prideSwitchContent}>
          <Typography sx={styles.prideTitle} variant="subtitle1">
            Rainbow mode
          </Typography>
          <Tooltip
            placement="top"
            arrow
            title="Toggle rainbow mode!">
            <Switch
              checked={this.state.proud}
              onClick={this.handleChange}
              sx={styles.prideSwitch}
              inputProps={{ 'aria-label': 'primary checkbox' }}
              color="secondary" />
          </Tooltip>
        </div>
      </Card>
    );
  }
}

export default PrideSwitch;
