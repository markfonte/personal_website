import React from 'react';
import {CardContent,
  Card,
  withStyles,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  IconButton,
  Tooltip,
  CardHeader,
  CardMedia,
  Link,
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
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
    const gimbleLink = `https://gimbleacappella.com`;

    // const feedData = [
    //   {
    //     postId: 'CEAyAX-AGaP/',
    //   },
    //   {
    //     postId: 'CIMZFGagicb/',
    //   },
    //   {
    //     postId: 'CBZMXQRgJz5/',
    //   },
    //   {
    //     postId: 'B_yokGTgNUK/',
    //   },
    //   {
    //     postId: 'CLfeOKCs0SJ/',
    //   },
    //   {
    //     postId: 'B6RFvKXA69I/',
    //   },
    // ];
    const lightTheme = getCookie('app_theme') === 'light_theme';
    const amazonColor = lightTheme ? 'amazon-color-dark' : 'amazon-color-light';
    const michiganColor = lightTheme ? 'michigan-color-dark' : 'michigan-color-light';
    const webColor = lightTheme ? 'web-color-dark' : 'web-color-light';
    const androidColor = lightTheme ? 'android-color-dark' : 'android-color-light';
    const gimbleColor = lightTheme ? 'gimble-color-dark' : 'gimble-color-light';

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
                <IconButton style={{padding: 0}}>
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
                    Welcome to my website! I&#39;m a software development engineer at

                {' '}
                <Tooltip arrow title="Go to Amazon.com">
                  <Link color="secondary" href={amazonLink} className={amazonColor}>
              Amazon
                  </Link>
                </Tooltip>

            , a computer science engineering/entrepreneurship graduate from the

                {' '}
                <Tooltip arrow placement="bottom" title="Go to U of M website">
                  <Link href={umichLink} className={michiganColor}>
              University of Michigan
                  </Link>
                </Tooltip>

            , and a former singer/beatboxer in

                {' '}
                <Tooltip arrow placement="bottom" title="Go to Gimble's website">
                  <Link href={gimbleLink} className={gimbleColor}>
            Gimble A Cappella
                  </Link>
                </Tooltip>

            .
              </Typography>
              <Typography variant="body1" paragraph>
                    Outside of coding,
                    I love reading, writing, teaching, and anything to do with leadership. I love
                    good design, usability and accessibility - concepts which I get to practice all the
                    time while making

                {' '}
                <Tooltip arrow placement="bottom" title="Go to Android Developers page">
                  <Link href={androidDevLink} className={androidColor}>
              Android
                  </Link>
                </Tooltip>
                {' '}

            and

                {' '}
                <Tooltip arrow placement="bottom" title="Go to web development page">
                  <Link href={webDevLink} className={webColor}>
              web
                  </Link>
                </Tooltip>
                {' '}

            applications.
              </Typography>
              <Typography variant="body1" paragraph>
                    I built this website to be a fun, interactive sandbox that I could try out new
                    technologies in.
                    I am always aiming to make it faster, more intuitive, and easier to navigate.
                    Most of the content is contained
                    within &#34;

                <Tooltip arrow title="View Cards on Material-UI">
                  <Link color="secondary" href={materialUICardLink}>
                Cards
                  </Link>
                </Tooltip>

                &#34; that

                {' '}
                <Tooltip arrow title="View Expansion Panels on Material-UI">
                  <Link color="secondary" href={materialUIAccordionLink}>
                expand to show content
                  </Link>
                </Tooltip>

               . This allows you to navigate quickly, only view
                    the content you want to see, and speeds up page loading in the process.
              </Typography>
              <Typography variant="body1" paragraph>
                  You can expect a better experience every time you come back to my website. You
                  can always see what I&#39;m working on on my

                {' '}
                <Tooltip arrow title="Go to my Trello board">
                  <Link color="secondary" href={trelloBoardLink}>
                  Trello board
                  </Link>
                </Tooltip>

                  . Please reach out with
                  suggestions, questions; anything!
              </Typography>
              {/* <Accordion style={{marginBottom: 16}}>
                <div
                  className={classes.expansionHeaderContainer}>
                  <AccordionSummary
                    aria-label="Leadership Book"
                    aria-controls="leadership-book-content"
                    id="leadership-book-header"
                    expandIcon={
                      <Tooltip
                        title="Expand/collapse card"
                        arrow>
                        <IconButton>
                          <ExpandMoreIcon />
                        </IconButton>
                      </Tooltip>
                    }>
                    <Typography variant="h6">
                  I&#39;m writing a book about leadership....
                    </Typography>
                  </AccordionSummary>
                </div>
                <AccordionDetails>
                  <Typography variant="body1" paragraph>
                  centered around the ways that <b><i>anyone</i></b> can become a better
                    leader. The core of my main argument is that the best leaders are experts at adapting
                    to the people they are leading. They constantly seek feedback from their team members
                    and continuously use it to improve. If that seems obvious or simple, that&#39;s because it
                    is! It requires only effort, awareness and humility.
                    <br/> <br/>
                    Unfortunately, I have seen leaders
                    fail over and over and over because they didn&#39;t practice this concept (which is
                    simple in principle, but difficult in practice). My journey involves analyzing and
                    interviewing all kinds of leaders, providing a plethora of examples and showing
                    ways that anyone can become a better leader. I will certainly be writing more about
                    the book on this website in the months to come.
                  </Typography>
                </AccordionDetails>
              </Accordion> */}

              {/* <GridList className={classes.photoGrid} cellHeight="auto" cols="auto">
                {feedData.map((feedDatum) => (
                  <GridListTile key={feedDatum.postId} className={classes.photoGridTile}>
                    <InstagramPost postId={feedDatum.postId}/>
                  </GridListTile>
                ))}
              </GridList>
              <Typography className={classes.scrollTip} variant="caption" color="textSecondary">
                  Scroll horizontally to view all photos!
              </Typography> */}
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
