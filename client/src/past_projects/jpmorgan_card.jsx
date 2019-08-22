import React from 'react';
import WebIcon from '@material-ui/icons/Web';
import {
  Typography,
  Card,
  CardMedia,
  CardActions,
  CardContent,
  CardHeader,
  IconButton,
  withStyles,
} from '@material-ui/core';
import PropTypes from 'prop-types';

const styles = {
  media: {
    margin: '8px',
    paddingTop: '10.8%',
    width: '50%',
  },
  mediaWrapper: {
    display: 'flex',
    justifyContent: 'center',
  },
};

class JPMorganCard extends React.Component {
  render() {
    const {classes} = this.props;
    const jpmorganLink = `https://www.jpmorganchase.com/`;

    return (
      <div>
        <Card raised={true} className="card">
          <CardHeader
            title="J.P. Morgan Chase"
            subheader="Software Engineering Intern"
          />
          <div className={classes.mediaWrapper}>
            <CardMedia
              className={classes.media}
              image={require('../static/images/logos/jpmorgan_logo.jpg')}
              title="J.P. Morgan Chase logo"
            />
          </div>
          <CardContent>
            <Typography variant="body1">
              I worked at JP Morgan Chase in Summer 2019 on a React mobile web application.
              Unfortunately, the details of this project are private information, but my contributions
              are expected to go into production at the end of 2019. I learned lots while using a new
              tech stack and met many good developers and good people throughout the summer. I am very
              grateful for this experience.
            </Typography>
          </CardContent>
          <CardActions>
            <IconButton aria-label="Go to website" href={jpmorganLink}>
              <WebIcon />
            </IconButton>
          </CardActions>
        </Card>
      </div>
    );
  }
}

JPMorganCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(JPMorganCard);
