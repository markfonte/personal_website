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
              I worked at Learning A-Z in Summer 2017 and Summer 2018 on two separate projects.
              Learning A-Z is a educational software company for elementary school students, so
              both of my projects were features to serve them.
              <br /><br />
              In Summer 2017, I worked on the
              Student Badge Project, in which I implemented an incentives program for the students
              for achieving goals such as &#34;reading a book 5 days in a row&#34;. This project was
              my first formal experience writing server-side code in PHP/MySQL and client-side code
              in JS/HTML/CSS. I also partially implemented it into the company&#39;s existing Android
              application. The project was picked up by full-time developers and is live in production today!
              <br /><br />
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
              by some full-time developers but is not yet live in production.
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
