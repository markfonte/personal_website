import React from 'react';
import PropTypes from 'prop-types';
import BuiltWithTable from './built_with_table.jsx';
import PhotoFeedCard from './photo_feed_card.jsx';
import {Typography} from '@material-ui/core';
import {withStyles} from '@material-ui/styles';
import HighlightsCard from './highlights_card.jsx';
import universityOfMichiganLogoSmall
  from '../static/vectors/university_of_michigan_logo_small.svg';
// import Resume from './resume.jsx';

const styles = {
  title: {
    margin: '16px',
  },
  subtitle: {
    margin: '16px',
  },
  amazon: {
    color: '#FF9900',
  },
  michigan: {
    color: '#FFCB05',
  },
  michiganLogo: {
    margin: '0px',
  },
  web: {
    color: '#61DBFB',
  },
  android: {
    color: '#A4C639',
  },
  computerScience: {
  },
  entrepreneurship: {
  },
};

class Home extends React.Component {
  render() {
    const {classes} = this.props;
    return (
      <div>
        <Typography className={classes.title} variant="h6">
          Incoming Software Development Engineer at <i className={classes.amazon}>Amazon</i> ·
          Senior <i className={classes.computerScience}>Computer Science in Engineering</i> {' '}
          student at the {' '}
          <span className={classes.michigan}>University of Michigan</span>
          {' '}
          <img
            src={universityOfMichiganLogoSmall}
            width="20"
            height="20"
            className={classes.michiganLogo}
            title="University of Michigan logo small"
            alt="University of Michigan logo small"
          /> {' '}·
          Minor in <i className={classes.entrepreneurship}>Entrepreneurship</i> ·
          Focus on <i className={classes.web}>Web</i> &amp;
          <i className={classes.android}> Android</i> development
        </Typography>
        <HighlightsCard />
        <PhotoFeedCard />
        <BuiltWithTable />
      </div>
    );
  }
}

Home.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Home);
