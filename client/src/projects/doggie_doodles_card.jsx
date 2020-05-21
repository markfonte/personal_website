import React from 'react';
import {
  Typography,
  Card,
  CardMedia,
  CardContent,
  CardHeader,
  Link,
} from '@material-ui/core';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/styles';

const styles = {
  media: {
    height: '0px',
    paddingTop: '25%',
  },
};

class DoggieDoodlesCard extends React.Component {
  render() {
    const {classes} = this.props;
    // const doggieDoodlesWebsiteLink = `https://dopedoggiedoodles.wixsite.com/home`;
    const doggieDoodlesRedbubbleLink = `https://www.redbubble.com/people/doggiedoodles`;
    const doggieDoodlesEmailLink = `mailto:dopedoggiedoodles@gmail.com`;

    return (
      <div>
        <Card raised={true} className="card">
          <CardHeader title="Doggie Doodles" subheader="Entrepreneur" />
          <CardMedia
            className={classes.media}
            image="/images/doggie_doodles_logo.webp"
            title="Gimble A Cappella - 2019"
            alt="Gimble A Cappella - 2019"
          />
          <CardContent>
            <Typography variant="body1">
              Started from a class project, this business sells custom merchandise using a
              digital drawing of your animal.
              {' '}
              <Link color="secondary" href={doggieDoodlesEmailLink}>
                Send us a picture of your dog or cat{' '}
              </Link> and we will turn it into a custom
              drawing. Then head over to
              {' '}
              <Link color="secondary" href={doggieDoodlesRedbubbleLink}>
                Redbubble
              </Link>
              {' '}
              and you can purchase a
              custom mug, laptop sticker, phone case, and more. I might not be writing software
              for this business, but it is still lots of fun!
            </Typography>
          </CardContent>
        </Card>
      </div>
    );
  }
}

DoggieDoodlesCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DoggieDoodlesCard);
