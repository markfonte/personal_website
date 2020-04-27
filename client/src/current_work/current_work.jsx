import React from 'react';
import {Typography, withStyles} from '@material-ui/core';
import InteractionCard from '../shared/interaction_card';
import PropTypes from 'prop-types';

const styles = {
  title: {
    margin: '16px',
  },
};

class CurrentWork extends React.Component {
  render() {
    const {classes} = this.props;
    return (
      <div>
        <Typography className={classes.title} variant="h6">
          Current coursework, projects and businesses I am working on
        </Typography>
        <InteractionCard pagename="current_work" />
      </div>
    );
  }
}

CurrentWork.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CurrentWork);
