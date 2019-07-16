import React from 'react';
import './laz_card.css';
import parentPortalScreenshotOne
  from '../static/images/screenshots/laz_parent_portal_screenshot_1.jpg';
import parentPortalScreenshotTwo
  from '../static/images/screenshots/laz_parent_portal_screenshot_2.jpg';
import parentPortalScreenshotThree
  from '../static/images/screenshots/laz_parent_portal_screenshot_3.jpg';
import badgeScreenshot
  from '../static/images/screenshots/laz_badge_screenshot.PNG';
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

class LAZCard extends React.Component {
  render() {
    const lazLink = `https://www.learninga-z.com/`;

    return (
      <div>
        <Card raised={true} className="card">
          <CardHeader
            title="Learning A-Z"
            subheader="Software Engineering Intern"
          />
          <div id="laz-media-wrapper">
            <CardMedia
              id="laz-media"
              image={require('../static/images/logos/laz_logo.png')}
              title="Learning A-Z logo"
            />
          </div>
          <CardContent>
            <Typography variant="body1">
              I worked at Learning A-Z in Summer 2017 and Summer 2018 on two separate projects.
              Learning A-Z is a educational software company for elementary school students, so
              both of my projects were features to serve them. Each summer, outside of the main
              project I worked on a small project with the other interns and presented on a relevant
              research topic. I was fortunate enough to have two great mentors
              and had the opportunity work alongside some awesome coworkers and fellow interns!
              <br /><br /><b>Summer 2017</b><br />
              In Summer 2017, I worked on the
              Student Badge Project, in which I implemented an incentives program for the students
              for achieving goals such as &#34;read at least one book a day for five straight days&#34;.
              {' '}
              This project was
              my first formal experience writing server-side code in PHP/MySQL and client-side code
              in JS/HTML/CSS. I also partially integrated it into the company&#39;s existing Android
              application. The project was picked up by full-time developers and is live in production today!
              <br /><br />
              <img
                src={badgeScreenshot}
                style={{width: '100%', height: 'auto'}}
                title="LAZ badge screenshot"
                alt="LAZ badge screenshot"
              />
              <br /><br /><b>Summer 2018</b><br />
              In Summer 2018, I worked on the Android Parent Portal project. At the time, parents of
              the students could only view their students information on the web
              {' '}
              <i>
                (fun fact: that was a project started by my brother John several years ago)
              </i>
              . My task was to bring that functionality to mobile. I built an Android app using
              the same APIs as the web application, but this time it was into a separate application
              than the existing Learning A-Z Android app. I actually built it using Kotlin, which had
              just been officially adopted as an official language by Android at the time. I found that
              Kotlin was much easier to write clean code with, and I would recommend it to any Android
              developer. Plus, it is interoperable with existing Java code! The project was picked up
              by a full-time developer and is live in pre-production as of July 2019.
              <br /><br />
              <img
                className="laz-screenshot"
                src={parentPortalScreenshotOne}
                width="240"
                height="500"
                title="LAZ parent portal screenshot 1"
                alt="LAZ parent portal screenshot 1"
              />
              <img
                className="laz-screenshot"
                src={parentPortalScreenshotTwo}
                width="240"
                height="500"
                title="LAZ parent portal screenshot 2"
                alt="LAZ parent portal screenshot 2"
              />
              <img
                className="laz-screenshot"
                src={parentPortalScreenshotThree}
                width="240"
                height="500"
                title="LAZ parent portal screenshot 3"
                alt="LAZ parent portal screenshot 3"
              />
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
