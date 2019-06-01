import React from 'react';
import './current_coursework_card.css';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import IconButton from '@material-ui/core/IconButton';
import WebIcon from '@material-ui/icons/Web';
import {Typography} from '@material-ui/core';
import Link from '@material-ui/core/Link';
class CurrentCourseworkCard extends React.Component {
  render () {
    const universityOfMichiganLink = `https://umich.edu/`;
    const courses = [
      {
        name: 'EECS 441: Mobile App Development for Entrepreneurs',
        link: `https://art.ai.umich.edu/course/EECS%20441/`,
      },
      {
        name: 'EECS 481: Software Engineering',
        link: `https://art.ai.umich.edu/course/EECS%20481/`,
      },
      {
        name: 'EECS 496: Major Design Experience-Professionalism',
        link: `https://art.ai.umich.edu/course/EECS%20496/`,
      },
      {
        name: 'TCHNCLCM 497: Advanced Technical Communication for Computer Science',
        link: `https://art.ai.umich.edu/course/TCHNCLCM%20497/`,
      },
      {
        name: `ALA 256: Innovator's Toolkit`,
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
          <CardMedia
            id="current-coursework-media"
            image={require ('../static/images/university_of_michigan_logo.png')}
            title="University of Michigan banner logo"
          />
          <CardContent>
            <Typography variant="subheading">
              {courses.map ((course, i) => (
                <Typography>
                  <Link
                    variant="subheading"
                    color="textPrimary"
                    href={course.link}
                  >
                    {course.name}
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
