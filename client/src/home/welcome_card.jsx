import React from 'react';
import {
  CardContent,
  Card,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  IconButton,
  Tooltip,
  CardHeader,
  CardMedia,
  Link,
} from '@mui/material';
import withStyles from '@mui/styles/withStyles';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import PropTypes from 'prop-types';

const getCookie = require('../shared/util/cookies.js').getCookie;

const styles = {
  cardContent: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    padding: '0px',
  },
  photoGrid: {
    flexWrap: 'nowrap',
    transform: 'translateZ(0)',
  },
  photoGridTile: {
  },
  scrollTip: {
    marginTop: '8px',
  },
  expansionHeaderContainer: {
    display: 'flex',
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  welcomeImage: {
    width: '100%',
    marginBottom: '16px',
    marginTop: '16px',
    marginLeft: '0px',
    marginRight: '0px',
    maxWidth: '700px',
  },
};

class WelcomeCard extends React.Component {
  constructor(props) {
    super(props);
    this.refreshFeed = this.refreshFeed.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  refreshFeed() {
    // ignore this during Jest tests
    if (process.env.NODE_ENV !== 'test') {
      if (window !== undefined && window.instgrm !== undefined &&
          window.instgrm.Embeds !== undefined) {
        window.instgrm.Embeds.process();
      }
    }
  }
  handleChange(event, newExpanded) {
    if (newExpanded) {
      setTimeout(this.refreshFeed, 500);
    }
  }

  render() {
    const {classes} = this.props;
    const trelloBoardLink = `https://trello.com/b/yoLCEs6S/personal-website`;
    const materialUICardLink = `https://material-ui.com/components/cards/#card`;
    const materialUIAccordionLink = `https://material-ui.com/components/expansion-panels/#expansion-panel`;
    const amazonLink = 'https://www.amazon.com/';
    const umichLink = 'https://umich.edu/';
    const webDevLink = 'https://en.wikipedia.org/wiki/Web_development';
    const androidDevLink = 'https://developer.android.com/';
    const awsLink = `https://aws.amazon.com/`;
    const justlightLink = `https://www.justlight.com/`;

    const lightTheme = getCookie('app_theme') === 'light_theme';
    const justlightColor = lightTheme ? 'justlight-color-dark' : 'justlight-color-light';
    const amazonColor = lightTheme ? 'amazon-color-dark' : 'amazon-color-light';
    const michiganColor = lightTheme ? 'michigan-color-dark' : 'michigan-color-light';
    const webColor = lightTheme ? 'web-color-dark' : 'web-color-light';
    const androidColor = lightTheme ? 'android-color-dark' : 'android-color-light';

    return (
      <Card raised={true} className="card">
        <Accordion
          onChange={this.handleChange}
          TransitionProps={{unmountOnExit: true}}>
          <AccordionSummary
            aria-label="Welcome"
            aria-controls="welcome-content"
            id="welcome-header"
            expandIcon={
              <Tooltip
                title="Expand/collapse card"
                arrow>
                <IconButton style={{padding: 0}} size="large">
                  <ExpandMoreIcon />
                </IconButton>
              </Tooltip>
            }>
            <a name="welcome_card" href="#welcome_card" className="gone">
              Welcome Card
            </a>
            <div
              className={classes.expansionHeaderContainer}>
              <CardHeader
                className="card-header"
                title="Welcome!"
                subheader="Click for a little about me..."
              />
              <CardMedia
                className={classes.welcomeImage}
                image="/images/welcome_image.jpg"
                title="Welcome Image"
                alt="Welcome Image"
                component="img"
              />
            </div>
          </AccordionSummary>
          <AccordionDetails>
            <CardContent className={classes.cardContent}>
              <Typography variant="h6" paragraph>
                Welcome to my website! I&#39;m the software engineering lead at a medical device startup called
                {' '}
                <Tooltip arrow title="Go to JustLight">
                  <Link color="secondary" href={justlightLink} className={justlightColor}>
                    JustLight
                  </Link>
                </Tooltip>
                , a former software development engineer at

                {' '}
                <Tooltip arrow title="Go to Amazon">
                  <Link color="secondary" href={amazonLink} className={amazonColor}>
                    Amazon
                  </Link>
                </Tooltip>
                {' '}and{' '}
                <Tooltip arrow title="Go to Amazon Web Services">
                  <Link color="secondary" href={awsLink} className={amazonColor}>
                    Amazon Web Services
                  </Link>
                </Tooltip>
                  , a computer science engineering / entrepreneurship graduate from the
                {' '}
                <Tooltip arrow placement="bottom" title="Go to U of M website">
                  <Link href={umichLink} className={michiganColor}>
                    University of Michigan
                  </Link>
                </Tooltip>
                , and a former singer / beatboxer for a college a cappella group.
              </Typography>
              <Typography variant="body1" paragraph>
                Outside of coding, I love reading, writing, teaching, playing basketball and making cool shit. I especially love building{' '}
                <Tooltip arrow placement="bottom" title="Go to Android Developers page">
                  <Link href={androidDevLink} className={androidColor}>
                    Android
                  </Link>
                </Tooltip>
                {' '}and{' '}
                <Tooltip arrow placement="bottom" title="Go to web development page">
                  <Link href={webDevLink} className={webColor}>
                    web
                  </Link>
                </Tooltip>
                {' '}applications. I built this website to be a fun, interactive sandbox where I could play around with different technologies.
              </Typography>
              <Typography variant="body1" paragraph>
                  I am always aiming to make it faster, more intuitive, and easier to navigate.Most of the content is contained within &#34;
                <Tooltip arrow title="View Cards on Material-UI">
                  <Link color="secondary" href={materialUICardLink}>
                    Cards
                  </Link>
                </Tooltip>
                &#34; that{' '}
                <Tooltip arrow title="View Expansion Panels on Material-UI">
                  <Link color="secondary" href={materialUIAccordionLink}>
                    expand to show content
                  </Link>
                </Tooltip>
                . This design leads to quicker navigation, a manageable amount of screen content, and faster page loads.
                  You can expect a better experience each time you visit my website. You can always check what I&#39;m working on on my
                {' '}
                <Tooltip arrow title="Go to my Trello board">
                  <Link color="secondary" href={trelloBoardLink}>
                  Trello board
                  </Link>
                </Tooltip>
                .
              </Typography>
              <Typography variant="body1" paragraph>
                Please reach out with questions, comments, or concerns! Much love ❤️
              </Typography>
            </CardContent>
          </AccordionDetails>
        </Accordion>
      </Card>
    );
  }
}

WelcomeCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(WelcomeCard);
