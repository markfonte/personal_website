import React from 'react';
import './current_coursework_card.css';
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

class CurrentCourseworkCard extends React.Component {
  render() {
    const universityOfMichiganLink = `https://umich.edu/`;
    const courses = [
      {
        subject: 'EECS 441',
        name: 'Mobile App Development for Entrepreneurs',
        link: `https://art.ai.umich.edu/course/EECS%20441/`,
      },
      {
        subject: 'EECS 481',
        name: 'Software Engineering',
        link: `https://art.ai.umich.edu/course/EECS%20481/`,
      },
      {
        subject: 'EECS 496',
        name: 'Major Design Experience-Professionalism',
        link: `https://art.ai.umich.edu/course/EECS%20496/`,
      },
      {
        subject: 'TCHNCLCM 497',
        name: 'Advanced Technical Communication for Computer Science',
        link: `https://art.ai.umich.edu/course/TCHNCLCM%20497/`,
      },
      {
        subject: 'ALA 256',
        name: `Innovator's Toolkit`,
        link: `https://art.ai.umich.edu/course/ALA%20256/`,
      },
    ];
    return (
      <div>
        <Card raised={true} className="card">
          <CardHeader
            title="Current Coursework - Fall 2019"
            subheader="University of Michigan"
          />
          <div id="current-coursework-media-wrapper">
            <CardMedia
              id="current-coursework-media"
              image={require('../static/images/logos/university_of_michigan_logo.png')}
              title="University of Michigan banner logo"
            />
          </div>
          <CardContent>
            <Typography variant="subtitle1">
              {courses.map((course, i) => (
                <Typography key={i}>
                  <Link
                    variant="subtitle1"
                    color="textPrimary"
                    href={course.link}
                  >
                    <b>
                      {course.subject}
                    </b>
                    :{' '}{course.name}
                  </Link>
                </Typography>
              ))}
            </Typography>
          </CardContent>
          <CardActions>
            <IconButton
              aria-label="Go to website"
              href={universityOfMichiganLink}
            >
              <WebIcon />
            </IconButton>
          </CardActions>
        </Card>
      </div>
    );
  }
}

export default CurrentCourseworkCard;
