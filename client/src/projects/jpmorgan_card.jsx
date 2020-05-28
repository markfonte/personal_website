import React from 'react';

import JPMorganScreenshotOne
  from '../static/images/screenshots/jpmorgan_screenshot_1.webp';
import JPMorganScreenshotOneFallback
  from '../static/images/screenshots/jpmorgan_screenshot_1.jpg';

import {
  Typography,
  Card,
  CardMedia,
  CardContent,
  CardHeader,
  withStyles,
  Link,
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  Chip,
  IconButton,
  Tooltip,
} from '@material-ui/core';
import DateRangeIcon from '@material-ui/icons/DateRange';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import PropTypes from 'prop-types';

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
  cardHeader: {
    padding: '0 !important',
  },
};

class JPMorganCard extends React.Component {
  render() {
    const {classes} = this.props;
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
        label: 'Java Spring Boot',
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

    return (
      <Card
        raised={true}
        className="card">
        <ExpansionPanel
          TransitionProps={{unmountOnExit: true}}>
          <ExpansionPanelSummary
            aria-label="JPMorgan"
            aria-controls="jpmorgan-content"
            id="jpmorgan-header"
            expandIcon={
              <Tooltip
                title="Expand/collapse card"
                arrow>
                <IconButton style={{padding: 0}}>
                  <ExpandMoreIcon />
                </IconButton>
              </Tooltip>
            }>
            <a name="jpmorgan_card" href="#jpmorgan_card" className="gone">
            J.P. Morgan Card
            </a>
            <div className={classes.expansionHeaderContainer}>
              <CardHeader
                className="cardHeader"
                title="J.P. Morgan Chase"
                subheader="Software Engineering Intern"
              />
              <CardMedia
                className={classes.jpMorganLogo}
                image="/images/jpmorgan_logo.svg"
                title="J.P. Morgan Chase logo"
                alt="J.P. Morgan Chase logo"
                component="img"
              />
              <div>
                {tags.map((tag) => (
                  <Chip
                    className={classes.tags}
                    key={tag.label}
                    icon={tag.icon ? tag.icon : <div/>}
                    label={tag.label}
                    variant={tag.variant ? tag.variant : 'outlined'}
                    color={tag.color ? tag.color : 'secondary'}
                    clickable />
                ))}
              </div>
            </div>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
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
                <br/><br/>
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
                <br/>
                <picture>
                  <source srcSet={JPMorganScreenshotOne} type="image/webp"/>
                  <source srcSet={JPMorganScreenshotOneFallback} type="image/jpg"/>
                  <img
                    srcSet={[JPMorganScreenshotOne, JPMorganScreenshotOneFallback]}
                    className={classes.mobileScreenshot}
                    alt="J.P. Morgan screenshot 1"
                  />
                </picture>
                <br/>
              Although this was not one of my most challenging technical experiences, I did learn a lot about
              work cultures where there are lots of manual steps surrounding development. I believe that learning how
              to navigate these types of situations while maintaining productivity is a crucial skill for me going
              forward. My main takeaways from J.P. Morgan were:
                <br/><br/>
              - Adapting to and refactoring legacy code
                <br/>
              - Navigating corporate red tape
                <br/>
              - Extensive work with React and React Native
                <br/>
              - Some awesome friends!
              </Typography>
            </CardContent>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </Card>
    );
  }
}

JPMorganCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(JPMorganCard);
