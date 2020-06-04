import React from 'react';
import PropTypes from 'prop-types';
import BuiltWithTableCard from './built_with_table_card.jsx';
import WelcomeCard from './welcome_card.jsx';
import {Typography, Link, Tooltip} from '@material-ui/core';
import {withStyles} from '@material-ui/styles';
import MetaTags from 'react-meta-tags';
import GlossaryCard from '../shared/glossary_card.jsx';

const getCookie = require('../shared/util/cookies.js').getCookie;

const styles = {
  title: {
    margin: '16px',
  },
  subtitle: {
    margin: '16px',
  },
  michiganLogo: {
    margin: '0px',
  },
  web: {
    color: '#61DBFB',
  },
};

class Home extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       open: true,
//     };
//     this.handleClose = this.handleClose.bind(this);
//   }

  //   handleClose(event, reason) {
  //     if (reason === 'clickaway') {
  //       return;
  //     }
  //     this.setState({open: false});
  //   }

  render() {
    const {classes} = this.props;

    const sdeAmazonLink = 'https://amazon.jobs/en/job_categories/software-development';
    const amazonLink = 'https://www.amazon.com/';
    const compSciEnginUmichLink = 'https://majors.engin.umich.edu/program/computer-science/';
    const umichLink = 'https://umich.edu/';
    const entrepreneurshipLink = 'https://innovateblue.umich.edu/academics/minor-in-entrepreneurship/';
    const webDevLink = 'https://en.wikipedia.org/wiki/Web_development';
    const androidDevLink = 'https://developer.android.com/';

    const lightTheme = getCookie('app_theme') === 'light_theme';
    const amazonColor = lightTheme ? 'amazonColorDark' : 'amazonColorLight';
    const michiganColor = lightTheme ? 'michiganColorDark' : 'michiganColorLight';
    const webColor = lightTheme ? 'webColorDark' : 'webColorLight';
    const androidColor = lightTheme ? 'androidColorDark' : 'androidColorLight';

    return (
      <div>
        <MetaTags>
          <title>Home</title>
          <meta
            name="description"
            content="Incoming Software Development Engineer at Amazon · Student at the University of Michigan"/>
        </MetaTags>
        {/* <Snackbar
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
        </Snackbar> */}
        <Typography className={classes.title} variant="h6">
          Incoming

          {' '}<Tooltip arrow placement="top" title="Go to Amazon Software Jobs page">
            <Link color="textSecondary" href={sdeAmazonLink}>
              <i>Software Development Engineer</i>
            </Link></Tooltip>{' '}

          at

          {' '}<Tooltip arrow placement="top" title="Go to Amazon.com">
            <Link href={amazonLink} className={amazonColor}>
              <i>Amazon</i>
            </Link></Tooltip>{' '}

          ·

          {' '}<Tooltip arrow placement="top" title="Go to U of M computer science page">
            <Link color="textSecondary" href={compSciEnginUmichLink}>
              <i>Computer Science in Engineering</i>
            </Link></Tooltip>{' '}

          degree from the

          {' '}<Tooltip arrow placement="bottom" title="Go to U of M website">
            <Link href={umichLink} className={michiganColor}>
              <i>University of Michigan</i>
            </Link></Tooltip>{' '}

          · Minor in

          {' '}<Tooltip arrow placement="bottom" title="Go to U of M Entrepreneurship page">
            <Link color="textSecondary" href={entrepreneurshipLink}>
              <i>Entrepreneurship</i>
            </Link></Tooltip>{' '}

          · Focus on

          {' '}<Tooltip arrow placement="bottom" title="Go to web development page">
            <Link href={webDevLink} className={webColor}>
              <i>Web</i>
            </Link></Tooltip>{' '}

          &amp;

          {' '}<Tooltip arrow placement="bottom" title="Go to Android Developers page">
            <Link href={androidDevLink} className={androidColor}>
              <i>Android</i>
            </Link></Tooltip>{' '}

          development
        </Typography>
        <WelcomeCard />
        <BuiltWithTableCard />
        <GlossaryCard />
      </div>
    );
  }
}

Home.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Home);
