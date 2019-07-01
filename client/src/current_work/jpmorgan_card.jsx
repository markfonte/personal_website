import React from 'react';
import './jpmorgan_card.css';
import WebIcon from '@material-ui/icons/Web';
import {
  Typography,
  Card,
  CardMedia,
  CardActions,
  CardContent,
  CardHeader,
  IconButton,
} from '@material-ui/core';

class JPMorganCard extends React.Component {
  render () {
    const jpmorganLink = `https://www.jpmorganchase.com/`;

    return (
      <div>
        <Card raised={true} className="card">
          <CardHeader
            title="J.P. Morgan Chase"
            subheader="Software Engineering Intern"
          />
          <div id="jpmorgan-media-wrapper">
            <CardMedia
              id="jpmorgan-media"
              image={require ('../static/images/logos/jpmorgan_logo.jpg')}
              title="J.P. Morgan Chase logo"
            />
          </div>
          <CardContent>
            <Typography variant="body1">
              Software internship in full stack web development. More details to come!
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

export default JPMorganCard;
