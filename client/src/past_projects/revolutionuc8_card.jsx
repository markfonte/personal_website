import React from 'react';
import denialDialLogo from '../static/images/logos/denial_dial_logo.png';
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
import {withStyles} from '@material-ui/styles';
import PropTypes from 'prop-types';

const styles = {
  media: {
    margin: '8px',
    paddingTop: '10.8%',
    width: '50%',
  },
  mediaWrapper: {
    display: 'flex',
    justifyContent: 'center',
  },
  logo: {
    width: '40%',
    height: 'auto',
    margin: '16px',
  },
};

class RevolutionUC8Card extends React.Component {
  render() {
    const {classes} = this.props;
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
          <div className={classes.mediaWrapper}>
            <CardMedia
              className={classes.media}
              image={'../static/images/logos/revolutionuc_logo.png'}
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
              <Link color="secondary" href={denialDialDevpostLink}>
                Devpost
              </Link>
              {' '}
              or
              {' '}
              <Link color="secondary" href={denialDialGithubLink}>Github</Link>
            </Typography>
            <img
              src={denialDialLogo}
              className={classes.logo}
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

RevolutionUC8Card.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RevolutionUC8Card);
