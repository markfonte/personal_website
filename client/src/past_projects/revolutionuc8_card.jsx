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
import Link from '@material-ui/core/Link';
import denialDialLogo from '../static/images/denial_dial_logo.png';

class RevolutionUC8Card extends React.Component {
  render() {
    const revolutionuc8Link = `http://revolutionuc.com/`;
    const denialDialDevpostLink = `https://devpost.com/software/revolution-banking`;
    const denialDialGithubLink = `https://github.com/nathan815/denial-dial`;
    return (
      <div>
        <Card raised={true} className="card">
          <CardHeader
            title="Denial Dial"
            subheader="Hackathon Project @ RevolutionUC 8"
          />
          <div id="revolutionuc8-media-wrapper">
            <CardMedia
              id="revolutionuc8-media"
              image={require('../static/images/revolutionuc_logo.png')}
              title="RevolutionUC 8 logo"
            />
          </div>
          <CardContent>
            <Typography variant="body1">
              This hackathon was not as successful as the other two, but it was still a great
              experience. We spent at least the first 12 hours of the 24-hour hackathon bouncing
              between a bunch of different ideas. We ended up building a clever rejection hotline
              called Denial Dial using Twilio&#39;s APIs. It connected two people who were given the
              fake phone number we set up, and had them communicate for awhile before breaking
              the news to them. It also had some cool side features like an automated message that
              played if anyone called the number. We did not win anything with the project, but
              was still fun experimenting with some new technologies! View it on
              {' '}
              <Link href={denialDialDevpostLink}>
                Devpost
              </Link> or <Link href={denialDialGithubLink}>Github</Link>
            </Typography>
            <img
              src={denialDialLogo}
              style={{width: '40%', height: 'auto', margin: 16}}
              title="CongoAI logo"
              alt="CongoAI logo"
            />
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