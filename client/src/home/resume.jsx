import React from 'react';
import {Typography} from '@material-ui/core';
import {withStyles} from '@material-ui/styles';
import PropTypes from 'prop-types';
// import resumePdf from '../static/documents/resume.pdf';

const styles = {
  resumePdf: {
    minHeight: '800px',
    margin: 'auto',
    width: '100%',
  },
  resumeWrapper: {
    margin: '16px',
  },
  resumeTitle: {
    margin: '16px',
  },
};

class Resume extends React.Component {
  render() {
    const {classes} = this.props;
    return (
      <div>
        <Typography className={classes.resumeTitle} variant="subtitle1" align="left">
          Last updated: Feb 02 2019
        </Typography>
        <div className={classes.resumeWrapper}>
          {/* <embed className={classes.resumePdf} type="application/pdf" src={resumePdf} /> */}
        </div>
      </div>
    );
  }
}

Resume.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Resume);
