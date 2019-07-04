import React from 'react';
import './doggie_doodles_card.css';
import WebIcon from '@material-ui/icons/Web';
import {
  Typography,
  Card,
  CardMedia,
  CardActions,
  CardContent,
  CardHeader,
  IconButton,
  Link,
} from '@material-ui/core';

class DoggieDoodlesCard extends React.Component {
  render () {
    const doggieDoodlesWebsiteLink = `https://dopedoggiedoodles.wixsite.com/home`;
    const doggieDoodlesRedbubbleLink = `https://www.redbubble.com/people/doggiedoodles`;
    const doggieDoodlesEmailLink = `mailto:dopedoggiedoodles@gmail.com`;

    return (
      <div>
        <Card raised={true} className="card">
          <CardHeader title="Doggie Doodles" subheader="Entrepreneur" />
          <CardMedia
            id="doggie-doodles-media"
            image={require ('../static/images/logos/doggie_doodles_logo.jpg')}
            title="Gimble A Cappella - 2019"
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
          <CardActions>
            <IconButton
              color="secondary"
              aria-label="Go to website"
              href={doggieDoodlesWebsiteLink}
            >
              <WebIcon />
            </IconButton>
          </CardActions>
        </Card>
      </div>
    );
  }
}

export default DoggieDoodlesCard;
