import React from 'react';
import './grizzhacks3_card.css';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import IconButton from '@material-ui/core/IconButton';
import WebIcon from '@material-ui/icons/Web';
import {Typography} from '@material-ui/core';

class Grizzhacks3Card extends React.Component {
  render () {
    const grizzhacks3Link = `http://grizzhacks.com/`;

    return (
      <div>
        <Card raised={true} className="card">
          <CardHeader
            title="Congo AI @ GrizzHacks 3"
            subheader="Hackathon Winner"
          />
          <CardMedia
            id="grizzhacks3-media"
            image={require ('../static/images/grizzhacks_logo.png')}
            title="GrizzHacks 3 logo"
          />
          <CardContent>
            <Typography variant="body1">
              In progress
            </Typography>
          </CardContent>
          <CardActions>
            <IconButton aria-label="Go to website" href={grizzhacks3Link}>
              <WebIcon />
            </IconButton>
          </CardActions>
        </Card>
      </div>
    );
  }
}

export default Grizzhacks3Card;
