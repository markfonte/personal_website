import React from 'react';
import './doggie_doodles_card.css';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import IconButton from '@material-ui/core/IconButton';
import WebIcon from '@material-ui/icons/Web';
import {Typography} from '@material-ui/core';
import Link from '@material-ui/core/Link';

class DoggieDoodlesCard extends React.Component {
  render() {
    const doggieDoodlesWebsiteLink = `https://dopedoggiedoodles.wixsite.com/home`;
    const doggieDoodlesRedbubbleLink = `https://www.redbubble.com/people/doggiedoodles`;
    const doggieDoodlesEmailLink = `mailto:dopedoggiedoodles@gmail.com`;

    return (
      <div>
        <Card raised={true} className="card">
          <CardHeader title="Doggie Doodles" subheader="Entrepreneur" />
          <CardMedia
            id="doggie-doodles-media"
            image={require('../static/images/doggie_doodles_logo.jpg')}
            title="Gimble A Cappella - 2019"
          />
          <CardContent>
            <Typography variant="body1">
              Started from a class project, this business sells custom merchandise using a
              digital drawing of your animal. <Link
                href={doggieDoodlesEmailLink}
              >
                Send us a picture of your dog or cat{' '}
              </Link> and we will turn it into a custom
              drawing. Then head over to
              {' '}
              <Link href={doggieDoodlesRedbubbleLink}>Redbubble</Link>
              {' '}
              and you can purchase a
              custom mug, laptop sticker, phone case, and more. I might not be writing software
              for this business, but it is still lots of fun!
            </Typography>
          </CardContent>
          <CardActions>
            <IconButton
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
