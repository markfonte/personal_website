import React from 'react';

import JPMorganScreenshotOne
  from '../static/screenshots/jpmorgan_screenshot_1.webp';

import {
  Typography,
  Card,
  CardMedia,
  CardContent,
  CardHeader,
  Link,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Chip,
  IconButton,
  Tooltip,
  Box,
} from '@mui/material';
import DateRangeIcon from '@mui/icons-material/DateRange';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import LikeButton from '../shared/LikeButton';

const jpmorganLink = `https://www.jpmorganchase.com/`;
const paymentNetLink = `https://m.jpmorgan.com/`;
const reactLink = `https://reactjs.org/`;
const springBootLink = `https://spring.io/projects/spring-boot`;
const reactNativeLink = `https://reactnative.dev/`;
const bootstrapLink = `https://getbootstrap.com/`;
const jqueryLink = `https://jquery.com/`;
const materialUILink = `https://material-ui.com/`;
const materialUIDialogLink = `https://material-ui.com/components/dialogs/`;

const tags = [
  {
    label: 'June 2019 → August 2019',
    color: 'default',
    variant: 'default',
    icon: <DateRangeIcon />,
  },
  {
    label: 'Internship',
    color: 'primary',
    variant: 'default',
  },
  {
    label: 'Java',
  },
  {
    label: 'JavaScript',
  },
  {
    label: 'Material UI',
  },
  {
    label: 'React',
  },
  {
    label: 'React Native',
  },
];

const styles = {
  jpMorganLogo: {
    width: '100%',
    marginBottom: '16px',
    marginTop: '16px',
    marginLeft: '0px',
    marginRight: '0px',
    maxWidth: '500px',
  },
  mobileScreenshot: {
    marginTop: '12px',
    marginBottom: '12px',
    marginLeft: '4px',
    marginRight: '4px',
    height: 'auto',
    width: '100%',
    maxWidth: '280px',
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
};

export default function JPMorganCard() {
  return (
    <Card
      raised
      className="large-card">
      <Accordion slotProps={{ transition: { unmountOnExit: true } }}>
        <AccordionSummary
          aria-label="JPMorgan"
          aria-controls="jpmorgan-content"
          id="jpmorgan-header"
          expandIcon={
            <Tooltip
              title="expand/collapse card"
              arrow>
              <IconButton size="small">
                <ExpandMoreIcon />
              </IconButton>
            </Tooltip>
          }>
          <a name="jpmorgan_card" href="#jpmorgan_card" className="gone">
            J.P. Morgan Card
          </a>
          <Box sx={styles.expansionHeaderContainer}>
            <CardHeader
              className="card-header"
              title="J.P. Morgan Chase"
              subheader="Software Engineering Intern"
            />
            <CardMedia
              sx={styles.jpMorganLogo}
              image="/media/jpmorgan_logo.svg"
              title="J.P. Morgan Chase logo"
              alt="J.P. Morgan Chase logo"
              component="img"
            />
            <Box>
              {tags.map((tag) => (
                <Chip
                  sx={styles.tags}
                  key={tag.label}
                  icon={tag.icon ? tag.icon : null}
                  label={tag.label}
                  variant={tag.variant ? tag.variant : 'outlined'}
                  color={tag.color ? tag.color : 'secondary'}
                  clickable />
              ))}
            </Box>
          </Box>
        </AccordionSummary>
        <AccordionDetails>
          <CardContent>
            <Typography variant="h5" gutterBottom>
              Summer 2019
            </Typography>
            <Typography variant="body1" paragraph>
              I worked at

              {' '}
              <Link color="secondary" href={jpmorganLink}>
                J.P. Morgan Chase
              </Link>
              {' '}

              throughout Summer 2019 on a mobile application for J.P. Morgan corporate
              cardholders (for example, Amazon employees who have been given a Chase credit card to use on
              business trips). The application, called

              {' '}
              <Link color="secondary" href={paymentNetLink}>
                PaymentNet® Mobile
              </Link>

              , is a mobile webview for these
              corporate clients to track their payment history, enter receipts, and perform other necessary
              cardholder functions. Built in

              {' '}
              <Link color="secondary" href={reactLink}>
                React
              </Link>
              {' '}

              and

              {' '}
              <Link color="secondary" href={springBootLink}>
                Java Spring Boot
              </Link>

              , there was no <i>native</i> mobile application
              for PaymentNet®, and they asked us to make a proof of concept for one using

              {' '}
              <Link color="secondary" href={reactNativeLink}>
                React Native
              </Link>

              .
              <br /><br />
              After working in React Native for the first half of the summer, I moved my focus to refactoring and
              cleaning up the React webview. There was lots of legacy code, spaghetti code and a strong
              dependency on

              {' '}
              <Link color="secondary" href={bootstrapLink}>
                Bootstrap
              </Link>
              {' '}

              and

              {' '}
              <Link color="secondary" href={jqueryLink}>
                JQuery
              </Link>
              {' '}

              . Given my previous knowledge in React, I was able to
              refactor and reshape much of the codebase to remove the dependency on third party libraries
              like JQuery. I replaced legacy React components with an internal J.P. Morgan adaptation of the

              {' '}
              <Link color="secondary" href={materialUILink}>
                Material-UI
              </Link>
              {' '}

              library. These custom components were much more responsive, reusable and accessible.
              For example, I replaced Boostrap modal pop-ups throughout the application with J.P. Morgan-branded
              version of

              {' '}
              <Link color="secondary" href={materialUIDialogLink}>
                Material-UI Dialog
              </Link>
              {' '}

              pop-ups.
              <br />
              <img
                src={JPMorganScreenshotOne}
                style={styles.mobileScreenshot}
                alt="J.P. Morgan screenshot 1"
              />
              <br />
              Although this was not one of my most challenging technical experiences, I did learn a lot about
              work cultures where there are lots of manual steps surrounding development. I believe that learning how
              to navigate these types of situations while maintaining productivity is a crucial skill for me going
              forward. My main takeaways from J.P. Morgan were:
              <br /><br />
              - Adapting to and refactoring legacy code
              <br />
              - Navigating corporate red tape
              <br />
              - Extensive work with React and React Native
              <br />
              - Some awesome friends!
              <LikeButton likeType='card' likeName='jpmorgan_card' />
            </Typography>
          </CardContent>
        </AccordionDetails>
      </Accordion>
    </Card>
  );
};