import React from 'react';
import {
  Typography,
  Card,
  CardMedia,
  CardContent,
  CardHeader,
  Link,
  Tooltip,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Chip,
  IconButton,
} from '@mui/material';
import DateRangeIcon from '@mui/icons-material/DateRange';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

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

const tags = [
  {
    label: 'September 2016 → May 2020',
    color: 'default',
    variant: 'default',
    icon: <DateRangeIcon />,
  },
];

const styles = {
  universityOfMichiganLogo: {
    width: '100%',
    maxWidth: '500px',
    marginBottom: '16px',
    marginTop: '16px',
    marginLeft: '0px',
    marginRight: '0px',
  },
  tags: {
    margin: '4px',
  },
  expansionHeaderContainer: {
    display: 'flex',
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  cardContent: {
    display: 'flex',
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
};

export default function CompletedCourseworkCard() {
  return (
    <Card raised={true} className="large-card">
      <Accordion slotProps={{ transition: { unmountOnExit: true } }}>
        <AccordionSummary
          aria-label="Michigan"
          aria-controls="michigan-content"
          id="michigan-header"
          expandIcon={
            <Tooltip
              title="Expand/collapse card"
              arrow>
              <IconButton size="large">
                <ExpandMoreIcon />
              </IconButton>
            </Tooltip>
          }>
          <a name="completed_coursework_card" href="#completed_coursework_card" className="gone">
            Completed Coursework Card
          </a>
          <div style={styles.expansionHeaderContainer}>
            <CardHeader
              className="card-header"
              title="University of Michigan"
              subheader="Graduated May 2020 · Bachelor's of Computer Science in Engineering · Minor in Entrepreneurship"
            />
            <CardMedia
              sx={styles.universityOfMichiganLogo}
              image="media/university_of_michigan_logo.svg"
              title="University of Michigan banner logo"
              alt="University of Michigan banner logo"
              component="img"
            />
            <div>
              {tags.map((tag) => (
                <Chip
                  sx={styles.tags}
                  key={tag.label}
                  icon={tag.icon ? tag.icon : <div />}
                  label={tag.label}
                  variant={tag.variant ? tag.variant : 'outlined'}
                  color={tag.color ? tag.color : 'secondary'}
                  clickable />
              ))}
            </div>
          </div>
        </AccordionSummary>
        <AccordionDetails>
          <CardContent sx={styles.cardContent}>
            <Link
              color="textPrimary"
              href={universityOfMichiganLink}
              gutterBottom
              variant="h5"
            >
              Completed coursework:
            </Link>
            <Typography variant="subtitle1">
              {courses.map((course) => (
                <Tooltip
                  arrow
                  title="View course profile on Atlas"
                  key={course.name}>
                  <Link
                    gutterBottom
                    variant="subtitle1"
                    color="textPrimary"
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
                </Tooltip>
              ))}
            </Typography>
            <Typography variant="caption" color="textSecondary" gutterBottom>
              note: this is only the most relevant coursework, not an exhaustive list
            </Typography>
          </CardContent>
        </AccordionDetails>
      </Accordion>
    </Card>
  );
};