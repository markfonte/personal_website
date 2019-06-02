import React from 'react';
import './completed_coursework_card.css';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import IconButton from '@material-ui/core/IconButton';
import WebIcon from '@material-ui/icons/Web';
import {Typography} from '@material-ui/core';
import Link from '@material-ui/core/Link';

class CompletedCourseworkCard extends React.Component {
  render () {
    const universityOfMichiganLink = `https://umich.edu/`;
    const courses = [
      {
        subject: 'EECS 482',
        name: 'Introduction to Operating Systems',
        link: `https://art.ai.umich.edu/course/EECS%20482/`,
      },
      {
        subject: 'EECS 485',
        name: 'Web Systems',
        link: `https://art.ai.umich.edu/course/EECS%20485/`,
      },
      {
        subject: 'EECS 388',
        name: 'Introduction to Computer Security',
        link: `https://art.ai.umich.edu/course/EECS%20388/`,
      },
      {
        subject: 'EECS 376',
        name: 'Foundations of Computer Science',
        link: `https://art.ai.umich.edu/course/EECS%20376/`,
      },
      {
        subject: 'EECS 370',
        name: 'Introduction to Computer Organization',
        link: `https://art.ai.umich.edu/course/EECS%20370/`,
      },
      {
        subject: 'EECS 281',
        name: 'Data Structures and Algorithms',
        link: `https://art.ai.umich.edu/course/EECS%20281/`,
      },
      {
        subject: 'EECS 280',
        name: 'Programming and Introductory Data Structures',
        link: `https://art.ai.umich.edu/course/EECS%20280/`,
      },
      {
        subject: 'EECS 203',
        name: 'Discrete Math',
        link: `https://art.ai.umich.edu/course/EECS%20203/`,
      },
      {
        subject: 'Math 214',
        name: 'Applied Linear Algebra',
        link: `https://art.ai.umich.edu/course/MATH%20214/`,
      },
      {
        subject: 'Math 425',
        name: 'Introduction to Probability',
        link: `https://art.ai.umich.edu/course/MATH%20425/`,
      },
      {
        subject: 'Math 215',
        name: 'Calculus III',
        link: `https://art.ai.umich.edu/course/MATH%20215/`,
      },
      {
        subject: 'Entrepreneurship 411',
        name: 'Entrepreneurship Practicum',
        link: `https://art.ai.umich.edu/course/ENTR%20411/`,
      },
      {
        subject: 'Physics 240',
        name: 'Electricity and Magnetism',
        link: `https://art.ai.umich.edu/course/PHYSICS%20240/`,
      },
      {
        subject: 'Physics 140',
        name: 'Mechanics',
        link: `https://art.ai.umich.edu/course/PHYSICS%20140/`,
      },
      {
        subject: 'Engineering 100',
        name: 'Wireless Communication Design',
        link: `https://art.ai.umich.edu/course/ENGR%20100/`,
      },
    ];
    return (
      <div>
        <Card raised={true} className="card">
          <CardHeader
            title="Completed Coursework"
            subheader="University of Michigan"
          />
          <div id="completed-coursework-media-wrapper">
            <CardMedia
              id="completed-coursework-media"
              image={require ('../static/images/university_of_michigan_logo.png')}
              title="University of Michigan banner logo"
            />
          </div>
          <CardContent>
            <Typography variant="subtitle1">
              {courses.map ((course, i) => (
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

export default CompletedCourseworkCard;
