import React from 'react';
import './grizzhacks3_card.css';
import WebIcon from '@material-ui/icons/Web';
import {
  Typography,
  Card,
  CardMedia,
  CardActions,
  CardContent,
  CardHeader,
  IconButton,
  Link,
} from '@material-ui/core';
import congoaiLogo from '../static/images/logos/congoai_logo.png';

class Grizzhacks3Card extends React.Component {
  render() {
    const grizzhacks3Link = `http://grizzhacks.com/`;
    const grizzhacks3DevpostLink = `https://devpost.com/software/congoai`;
    const grizzhacks3GithubLink = `https://github.com/nathan815/CongoAI`;
    return (
      <div>
        <Card raised={true} className="card">
          <CardHeader
            title="Congo AI"
            subheader="Hackathon Winner @ GrizzHacks 3"
          />
          <CardMedia
            id="grizzhacks3-media"
            image={require('../static/images/logos/grizzhacks_logo.png')}
            title="GrizzHacks 3 logo"
          />
          <CardContent>
            <Typography variant="body1">
              This was the first hackathon I ever competed in. We built an online
              store to buy and sell pre-trained machine learning models, using Vue.js and MongoDB.
              While we did not completely finish, the idea was to be able to test out
              the machine learning models first in the store before purchasing from the
              person that made it. Most of the credit on this project goes to my team.
              We won <i>Best DevOps Hack, Presented by Ally Financial</i> and <i
              >
                Best use of Dynatrace
              </i>. View it on <Link href={grizzhacks3DevpostLink}>
                Devpost
              </Link> or <Link href={grizzhacks3GithubLink}>Github</Link>
            </Typography>
            <br />
            <img
              src={congoaiLogo}
              style={{width: '50%', height: 'auto'}}
              title="CongoAI logo"
              alt="CongoAI logo"
            />
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
