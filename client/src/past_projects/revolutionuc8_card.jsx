import React from 'react';
import './revolutionuc8_card.css';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import IconButton from '@material-ui/core/IconButton';
import WebIcon from '@material-ui/icons/Web';
import {Typography} from '@material-ui/core';

class RevolutionUC8Card extends React.Component {
  render () {
    const revolutionuc8Link = `http://revolutionuc.com/`;

    return (
      <div>
        <Card raised={true} className="card">
          <CardHeader
            title="Denial Dial @ RevolutionUC 8"
            subheader="Hackathon Project"
          />
          <CardMedia
            id="revolutionuc8-media"
            image={require ('../static/images/revolutionuc_logo.png')}
            title="RevolutionUC 8 logo"
          />
          <CardContent>
            <Typography variant="body1">
              In progress
            </Typography>
          </CardContent>
          <CardActions>
            <IconButton aria-label="Go to website" href={revolutionuc8Link}>
              <WebIcon />
            </IconButton>
          </CardActions>
        </Card>
      </div>
    );
  }
}

export default RevolutionUC8Card;
