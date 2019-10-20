import React from 'react';
import {Typography, withStyles} from '@material-ui/core';
import CurrentCourseworkCard from './current_coursework_card.jsx';
import InteractionCard from '../shared/interaction_card';
import ClippCard from './clipp_card.jsx';
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
        <CurrentCourseworkCard />
        <ClippCard />
        <InteractionCard pagename="current_work" />
      </div>
    );
  }
}

CurrentWork.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CurrentWork);
