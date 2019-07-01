import React from 'react';
import './gimble_card.css';
import WebIcon from '@material-ui/icons/Web';
import {
  Card,
  CardMedia,
  CardActions,
  CardContent,
  CardHeader,
  IconButton,
} from '@material-ui/core';

class GimbleCard extends React.Component {
  render () {
    const gimbleAcappellaLink = `https://www.gimbleacappella.com/`;

    return (
      <div>
        <Card raised={true} className="card">
          <CardHeader
            title="Gimble A Cappella"
            subheader="My acappella group!"
          />
          <CardMedia
            id="gimble-card-media"
            image={require ('../static/images/photos/gimble_group_pic.jpg')}
            title="Gimble A Cappella - 2019"
          />
          <CardContent>
            <iframe
              src="https://open.spotify.com/embed/track/0syVmzCQYedVdmjHtxGy9K"
              width="320"
              height="80"
              title="Dancing On My Own - Gimble A Cappella"
              frameBorder="8"
              allow="encrypted-media"
            />
            <iframe
              src="https://open.spotify.com/embed/track/69Wf0jtGtFujPkddCZMdCl"
              width="320"
              height="80"
              title="715 - CR∑∑KS - Gimble A Cappella"
              frameBorder="8"
              allow="encrypted-media"
            />
            <iframe
              src="https://open.spotify.com/embed/album/6tgeYaO5FiHOzZuFcIEFTR"
              width="320"
              height="201"
              title="XX - Gimble A Cappella"
              frameBorder="8"
              allow="encrypted-media"
            />
            <iframe
              width="320"
              height="201"
              src="https://www.youtube-nocookie.com/embed/6Qge12ldMqU"
              title="Fallingwater - Gimble A Cappella"
              frameBorder="8"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </CardContent>
          <CardActions>
            <IconButton aria-label="Go to website" href={gimbleAcappellaLink}>
              <WebIcon />
            </IconButton>
          </CardActions>
        </Card>
      </div>
    );
  }
}

export default GimbleCard;
