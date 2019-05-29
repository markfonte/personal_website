import React from 'react';
import './random.css';
import {Typography} from '@material-ui/core';
import Link from '@material-ui/core/Link';
import TicTacToeGame from './tic_tac_toe_game.jsx';

import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import IconButton from '@material-ui/core/IconButton';
import WebIcon from '@material-ui/icons/Web';

class Random extends React.Component {
  render () {
    const reactTutorialLink = `https://reactjs.org/tutorial/tutorial.html#overview`;
    const gimbleAcappellaLink = `https://www.gimbleacappella.com/`;

    return (
      <div>
        <Typography variant="h6">
          My sandbox for trying random stuff - enjoy!
        </Typography>
        <div className="tic-tac-toe-container">
          <Typography variant="subtitle1">Tic Tac Toe</Typography>
          <TicTacToeGame />
          <Typography variant="caption" id="tic-tac-toe-caption">
            <Link color="textPrimary" href={reactTutorialLink}>
              credit: reactjs tutorial
            </Link>
          </Typography>
        </div>
        <Card id="gimble-card">
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
              width="300"
              height="80"
              title="Dancing On My Own - Gimble A Cappella"
              frameBorder="8"
              allowtransparency="true"
              allow="encrypted-media"
            />
            <iframe
              src="https://open.spotify.com/embed/track/69Wf0jtGtFujPkddCZMdCl"
              width="300"
              height="80"
              title="715 - CR∑∑KS - Gimble A Cappella"
              frameBorder="8"
              allowtransparency="true"
              allow="encrypted-media"
            />
            <iframe
              src="https://open.spotify.com/embed/album/6tgeYaO5FiHOzZuFcIEFTR"
              width="300"
              height="220"
              title="XX - Gimble A Cappella"
              frameBorder="8"
              allowtransparency="true"
              allow="encrypted-media"
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

export default Random;
