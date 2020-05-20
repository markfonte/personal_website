import React from 'react';
// import instEventsLogo
//   from '../static/images/logos/instevents_logo.webp';
import instEventsScreenshot1
  from '../static/images/screenshots/instevents_screenshot_1.webp';
import instEventsScreenshot2
  from '../static/images/screenshots/instevents_screenshot_2.webp';
import instEventsScreenshot3
  from '../static/images/screenshots/instevents_screenshot_3.webp';
import mhacksNathanAndMark
  from '../static/images/photos/mhacks_mark_and_nathan.webp';
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
    height: '0px',
    paddingTop: '30%',
  },
  logo: {
    width: '40%', height: 'auto',
  },
  screenshot: {
    marginTop: '12px',
    marginBottom: '12px',
    marginLeft: '4px',
    marginRight: '4px',
    height: 'auto',
    width: '100%',
    maxWidth: '280px',
  },
};

class MHacks12Card extends React.Component {
  render() {
    const {classes} = this.props;
    const mhacks12Link = `https://mhacks12.devpost.com/`;
    const instEventsDevpostLink = `https://devpost.com/software/instevent`;
    const instEventsGithubLink = `https://github.com/markfonte/InstEvents`;

    return (
      <div>
        <Card raised={true} className="card">
          <CardHeader
            title="InstEvents"
            subheader="Hackathon Project @ MHacks 12"
          />
          <CardMedia
            className={classes.media}
            image="/images/mhacks_logo.webp"
            title="MHacks 12 logo"
            alt="MHacks 12 logo"
          />
          <CardContent>
            <Typography variant="body1">
              This project was definitely my favorite hackathon project. Nathan and I had 36 hours at MHacks to make
              a very solid project, and I thought we delivered on our own high expectations. The idea for the app
              came out of one of my entrepreneurship classes where we were asked to &quot;explore&quot;
              something new every week.
              It did not matter where we went - concerts, festivals, restaurants - as long as it was something new to
              us. Thus, I was craving an app that I could open up to instantly view current events in my area. The app
              features a Google Maps view that immediately opens to show today&apos;s current and upcoming events. In
              addition, it allows users to browse current and upcoming events in a clean RecyclerView/Cards list. Users
              can add events with an interface that features date pickers, time pickers, address autocomplete using the
              Google Maps Places API, the ability to add a cover photo and more!
              <br /> <br/>
              For this app, we focused on making sure all of the features that we completed were done well. For example,
              we put lots of extra time into making sure the &quot;Add Event&quot; flow was as seamless as possible,
              instead of
              using that time to partially complete some of our stretch goals. The advantage of this is a good UX, even
              with just the app we made during the hackathon. Going forward, we plan to continue working on other
              features like web-scraping for popular events, and an eventual release to the Google Play Store. More
              details on upcoming features and more on our
              {' '}
              <Link color="secondary" href={instEventsGithubLink}>
                Github
              </Link>! We also believe that the app has significant value as-is, because of the fact that anyone
              can post an event. This, in combination with the built-in Google Maps view, allows for a location-based
              sorting of events as opposed to the normal popularity-based sorting of events. In other words, events
              with only 30 people attending get the same weight on the map as those with 5,000. This allows for an
              even playing field and is a concept we have not really seen before.
              <br /> <br/>
              View it on
              {' '}
              <Link color="secondary" href={instEventsDevpostLink}>
                Devpost
              </Link>
              {' '}
              or
              {' '}
              <Link color="secondary" href={instEventsGithubLink}>
                Github
              </Link>
              {/* <br /> <br />
              <img
                src={instEventsLogo}
                className={classes.logo}
                title="InstEvents logo"
                alt="InstEvents logo"
              /> */}
              <br /> <br />
              <img
                className={classes.screenshot}
                src={instEventsScreenshot3}
                width="240"
                height="500"
                title="InstEvents screenshot 3"
                alt="InstEvents screenshot 3"
              />
              <img
                className={classes.screenshot}
                src={instEventsScreenshot1}
                width="240"
                height="500"
                title="InstEvents screenshot 1"
                alt="InstEvents screenshot 1"
              />
              <img
                className={classes.screenshot}
                src={instEventsScreenshot2}
                width="240"
                height="500"
                title="InstEvents screenshot 2"
                alt="InstEvents screenshot 2"
              />
              <img
                className={classes.screenshot}
                src={mhacksNathanAndMark}
                width="240"
                height="360"
                title="Nathan and Mark MHacks 12"
                alt="Nathan and Mark MHacks 12"
              />
            </Typography>
          </CardContent>
          <CardActions>
            <IconButton aria-label="Go to website" href={mhacks12Link}>
              <WebIcon />
            </IconButton>
          </CardActions>
        </Card>
      </div>
    );
  }
}

MHacks12Card.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MHacks12Card);
