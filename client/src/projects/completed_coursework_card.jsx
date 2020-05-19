import React from 'react';
import {
  Typography,
  Card,
  CardMedia,
  CardContent,
  CardHeader,
  Link,
  withStyles,
} from '@material-ui/core';
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
};

class CompletedCourseworkCard extends React.Component {
  render() {
    const {classes} = this.props;
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
        subject: 'EECS 490',
        name: 'Programming Languages',
        link: `https://atlas.ai.umich.edu/course/EECS%20490/`,
      },
      {
        subject: 'EECS 493',
        name: 'User Interface Development',
        link: `https://atlas.ai.umich.edu/course/EECS%20493/`,
      },
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
        subject: 'EECS 496',
        name: 'Major Design Experience-Professionalism',
        link: `https://art.ai.umich.edu/course/EECS%20496/`,
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
        subject: 'ALA 256',
        name: `Innovator's Toolkit`,
        link: `https://art.ai.umich.edu/course/ALA%20256/`,
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
            title="University of Michigan"
            subheader="Graduated May 2020 with a Bachelor's in Computer Science in Engineering
            and a minor in Entrepreneurship"
          />
          <div className={classes.mediaWrapper}>
            <CardMedia
              className={classes.media}
              image="images/university_of_michigan_logo.webp"
              title="University of Michigan banner logo"
            />
          </div>
          <CardContent>
            <Link
              color="textPrimary"
              href={universityOfMichiganLink}
              gutterBottom
              variant="h4">
                  Completed coursework:
            </Link>
            <br/>
            <Typography variant="subtitle1">
              {courses.map((course) => (
                <Link
                  gutterBottom
                  variant="subtitle1"
                  color="textPrimary"
                  key={course.name}
                  href={course.link}
                  display={'block'}
                >
                  <Typography color="secondary" variant="h6" display={'inline'}>
                    {course.subject}
                  </Typography>
                    :
                  <Typography color="textSecondary" display={'inline'}>
                    <i>
                      {' ' + course.name}
                    </i>
                  </Typography>
                </Link>
              ))}
            </Typography>
            <Typography variant="caption" color="textSecondary" gutterBottom>
                note: this is only the most relevant coursework, not an exhaustive list
            </Typography>
          </CardContent>
        </Card>
      </div>
    );
  }
}

CompletedCourseworkCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CompletedCourseworkCard);
