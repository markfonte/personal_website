import React from 'react';
import './gimble_card.css';

import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import IconButton from '@material-ui/core/IconButton';
import WebIcon from '@material-ui/icons/Web';

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
            image={require ('../static/images/gimble_group_pic.jpg')}
            title="Gimble A Cappella - 2019"
          />
          <CardContent>
            <iframe
              src="https://open.spotify.com/embed/track/0syVmzCQYedVdmjHtxGy9K"
              width="360"
              height="80"
              title="Dancing On My Own - Gimble A Cappella"
              frameBorder="8"
              allowtransparency="true"
              allow="encrypted-media"
            />
            <iframe
              src="https://open.spotify.com/embed/track/69Wf0jtGtFujPkddCZMdCl"
              width="360"
              height="80"
              title="715 - CR∑∑KS - Gimble A Cappella"
              frameBorder="8"
              allowtransparency="true"
              allow="encrypted-media"
            />
            <iframe
              src="https://open.spotify.com/embed/album/6tgeYaO5FiHOzZuFcIEFTR"
              width="360"
              height="201"
              title="XX - Gimble A Cappella"
              frameBorder="8"
              allowtransparency="true"
              allow="encrypted-media"
            />
            <iframe
              width="360"
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
