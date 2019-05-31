import React from 'react';
import './laz_card.css';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import IconButton from '@material-ui/core/IconButton';
import WebIcon from '@material-ui/icons/Web';
import {Typography} from '@material-ui/core';

class LAZCard extends React.Component {
  render () {
    const lazLink = `https://www.learninga-z.com/`;

    return (
      <div>
        <Card raised={true} className="card">
          <CardHeader
            title="Learning A-Z"
            subheader="Software Engineering Intern"
          />
          <CardMedia
            id="laz-media"
            image={require ('../static/images/laz_logo.png')}
            title="Learning A-Z logo"
          />
          <CardContent>
            <Typography variant="body1">
              In progress
            </Typography>
          </CardContent>
          <CardActions>
            <IconButton aria-label="Go to website" href={lazLink}>
              <WebIcon />
            </IconButton>
          </CardActions>
        </Card>
      </div>
    );
  }
}

export default LAZCard;
