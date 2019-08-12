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
  render() {
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

export default JPMorganCard;
