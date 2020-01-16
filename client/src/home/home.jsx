import React from 'react';
import PropTypes from 'prop-types';
import BuiltWithTable from './built_with_table.jsx';
import PhotoFeedCard from './photo_feed_card.jsx';
import {Typography} from '@material-ui/core';
import {withStyles} from '@material-ui/styles';
import HighlightsCard from './highlights_card.jsx';
// import Resume from './resume.jsx';

const styles = {
  title: {
    margin: '16px',
  },
  subtitle: {
    margin: '16px',
  },
};

class Home extends React.Component {
  render() {
    const {classes} = this.props;
    return (
      <div>
        <Typography className={classes.title} variant="h6">
          Incoming Software Development Engineer at <i>Amazon</i> ·
          Senior <i>Computer Science in Engineering</i> student at the University of Michigan ·
          Minor in <i>Entrepreneurship</i> ·
          Focus on <i>Web &amp; Android</i> development
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
