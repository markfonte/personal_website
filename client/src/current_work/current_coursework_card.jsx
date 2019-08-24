import React from 'react';
import WebIcon from '@material-ui/icons/Web';
import PropTypes from 'prop-types';
import {
  Typography,
  Card,
  CardMedia,
  CardActions,
  CardContent,
  CardHeader,
  IconButton,
  Link,
  withStyles,
} from '@material-ui/core';

const styles = {
  mediaRoot: {
    margin: '8px',
    paddingTop: '10.8%',
    width: '50%',
  },
  mediaWrapper: {
    display: 'flex',
    justifyContent: 'center',
  },
};

class CurrentCourseworkCard extends React.Component {
  render() {
    const {classes} = this.props;
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
          <div className={classes.mediaWrapper}>
            <CardMedia
              className={classes.mediaRoot}
              image={'../static/images/logos/university_of_michigan_logo.png'}
              title="University of Michigan banner logo"
            />
          </div>
          <CardContent>
            <Typography variant="subtitle1">
              {courses.map((course) => (
                <Typography key={course.name}>
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

CurrentCourseworkCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CurrentCourseworkCard);
