import React from 'react';
import PropTypes from 'prop-types';
import BuiltWithTable from './built_with_table.jsx';
import PhotoFeedCard from './photo_feed_card.jsx';
import {Typography, Link, Snackbar, Fade, Tooltip} from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';
import {withStyles} from '@material-ui/styles';
import MetaTags from 'react-meta-tags';
// import HighlightsCard from './highlights_card.jsx';
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
  compSci: {
  },
  entrepreneurship: {
  },
};

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: true,
    };
    this.handleClose = this.handleClose.bind(this);
  }

  handleClose(event, reason) {
    if (reason === 'clickaway') {
      return;
    }
    this.setState({open: false});
  }

  render() {
    const sdeAmazonLink = 'https://amazon.jobs/en/job_categories/software-development';
    const amazonLink = 'https://www.amazon.com/';
    const compSciEnginUmichLink = 'https://majors.engin.umich.edu/program/computer-science/';
    const umichLink = 'https://umich.edu/';
    const entrepreneurshipLink = 'https://innovateblue.umich.edu/academics/minor-in-entrepreneurship/';
    const webDevLink = 'https://en.wikipedia.org/wiki/Web_development';
    const androidDevLink = 'https://developer.android.com/';

    const {classes} = this.props;
    const isOpen = this.state.open;

    return (
      <div>
        <MetaTags>
          <title>Home</title>
          <meta
            name="description"
            content="Incoming Software Development Engineer at Amazon · Student at the University of Michigan"/>
        </MetaTags>
        <Snackbar
          open={isOpen}
          onClose={this.handleClose}
          TransitionComponent={Fade} >
          <MuiAlert elevation={10} variant="filled" onClose={this.handleClose} severity="warning" >
            <Link color="textPrimary"
              href="https://trello.com/c/dAlQUBgH/145-145-webp-images-not-rendering-in-ios">
                    Many images are not displaying on Apple devices at the moment.
                    Stay tuned for a fix and click here for updates!
            </Link>
          </MuiAlert>
        </Snackbar>
        <Typography className={classes.title} variant="h6">
          Incoming

          {' '}<Tooltip arrow placement="top" title="Go to Amazon Software Jobs page">
            <Link color="textSecondary" href={sdeAmazonLink}>
              <i>Software Development Engineer</i>
            </Link></Tooltip>{' '}

          at

          {' '}<Tooltip arrow placement="top" title="Go to Amazon.com">
            <Link color="secondary" href={amazonLink} className={classes.amazon}>
              <i>Amazon</i>
            </Link></Tooltip>{' '}

          ·

          {' '}<Tooltip arrow placement="top" title="Go to U of M computer science page">
            <Link color="textSecondary" href={compSciEnginUmichLink} className={classes.compSci}>
              <i>Computer Science in Engineering</i>
            </Link></Tooltip>{' '}

          degree from the

          {' '}<Tooltip arrow placement="bottom" title="Go to U of M website">
            <Link href={umichLink} className={classes.michigan}>
              <i>University of Michigan</i>
            </Link></Tooltip>{' '}

          · Minor in

          {' '}<Tooltip arrow placement="bottom" title="Go to U of M Entrepreneurship page">
            <Link color="textSecondary" href={entrepreneurshipLink} className={classes.entrepreneurship}>
              <i>Entrepreneurship</i>
            </Link></Tooltip>{' '}

          · Focus on

          {' '}<Tooltip arrow placement="bottom" title="Go to web development page">
            <Link href={webDevLink} className={classes.web}>
              <i>Web</i>
            </Link></Tooltip>{' '}

          &amp;

          {' '}<Tooltip arrow placement="bottom" title="Go to Android Developers page">
            <Link href={androidDevLink} className={classes.android}>
              <i>Android</i>
            </Link></Tooltip>{' '}

          development
        </Typography>
        {/* <HighlightsCard /> */}
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
