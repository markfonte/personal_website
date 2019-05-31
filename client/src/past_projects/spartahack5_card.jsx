import React from 'react';
import './spartahack5_card.css';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import IconButton from '@material-ui/core/IconButton';
import WebIcon from '@material-ui/icons/Web';
import {Typography} from '@material-ui/core';

class Spartahack5Card extends React.Component {
  render () {
    const spartahack5Link = `https://spartahackv.devpost.com/`;

    return (
      <div>
        <Card raised={true} className="card">
          <CardHeader
            title="Laughable Lyrics @ Spartahack V"
            subheader="Hackathon Winner"
          />
          <CardMedia
            id="spartahack5-media"
            image={require ('../static/images/spartahack_logo.png')}
            title="SpartaHack V logo"
          />
          <CardContent>
            <Typography variant="body1">
              In progress
            </Typography>
          </CardContent>
          <CardActions>
            <IconButton aria-label="Go to website" href={spartahack5Link}>
              <WebIcon />
            </IconButton>
          </CardActions>
        </Card>
      </div>
    );
  }
}

export default Spartahack5Card;
