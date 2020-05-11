import React from 'react';
import PropTypes from 'prop-types';
import BuiltWithTable from './built_with_table.jsx';
import PhotoFeedCard from './photo_feed_card.jsx';
import {Typography, Link} from '@material-ui/core';
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
  render() {
    const sdeAmazonLink = 'https://amazon.jobs/en/job_categories/software-development';
    const amazonLink = 'https://www.amazon.com/';
    const compSciEnginUmichLink = 'https://majors.engin.umich.edu/program/computer-science/';
    const umichLink = 'https://umich.edu/';
    const entrepreneurshipLink = 'https://innovateblue.umich.edu/academics/minor-in-entrepreneurship/';
    const webDevLink = 'https://en.wikipedia.org/wiki/Web_development';
    const androidDevLink = 'https://developer.android.com/';

    const {classes} = this.props;
    return (
      <div>
        <MetaTags>
          <title>Home</title>
          <meta
            name="description"
            content="Incoming Software Development Engineer at Amazon · Student at the University of Michigan"/>
        </MetaTags>
        <Typography className={classes.title} variant="h6">
          Incoming

          {' '}<Link color="textSecondary" href={sdeAmazonLink}>
            <i>Software Development Engineer</i>
          </Link>{' '}

          at

          {' '}<Link color="secondary" href={amazonLink} className={classes.amazon}>
            <i>Amazon</i>
          </Link>{' '}

          · Senior

          {' '}<Link color="textSecondary" href={compSciEnginUmichLink} className={classes.compSci}>
            <i>Computer Science in Engineering</i>
          </Link>{' '}

          student at the

          {' '}<Link href={umichLink} className={classes.michigan}>
            <i>University of Michigan</i>
          </Link>{' '}

          · Minor in

          {' '}<Link color="textSecondary" href={entrepreneurshipLink} className={classes.entrepreneurship}>
            <i>Entrepreneurship</i>
          </Link>{' '}

          · Focus on

          {' '}<Link href={webDevLink} className={classes.web}>
            <i>Web</i>
          </Link>{' '}

          &amp;

          {' '}<Link href={androidDevLink} className={classes.android}>
            <i>Android</i>
          </Link>{' '}

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
