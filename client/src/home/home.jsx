import React from 'react';
import PropTypes from 'prop-types';
import BuiltWithTable from './built_with_table.jsx';
import PhotoFeedCard from './photo_feed_card.jsx';
import {Typography} from '@material-ui/core';
import {withStyles} from '@material-ui/styles';
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
          4th year CSE student at the University of Michigan ·
          Minor in Entrepreneurship ·
          Focus on Web &amp; Android development
        </Typography>
        <Typography className={classes.subtitle} variant="body1">
          Welcome to my personal website! I am a computer science in engineering student at the
          University of Michigan and my website is designed to show you a little more about myself.
          Please browse around and feel free to check out my social media accounts or contact me
          directly!
        </Typography>
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
