import React from 'react';
import './jpmorgan_card.css';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import IconButton from '@material-ui/core/IconButton';
import WebIcon from '@material-ui/icons/Web';
import {Typography} from '@material-ui/core';

class JPMorganCard extends React.Component {
  render () {
    const jpmorganLink = `https://www.jpmorganchase.com/`;

    return (
      <div>
        <Card raised="true" className="card">
          <CardHeader
            title="J.P. Morgan Chase"
            subheader="Software Engineering Intern"
          />
          <CardMedia
            id="jpmorgan-media"
            image={require ('../static/images/jpmorgan_logo.jpg')}
            title="J.P. Morgan Chase logo"
          />
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
