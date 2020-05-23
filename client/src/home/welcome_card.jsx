import React from 'react';
import {CardContent,
  Card,
  GridList,
  GridListTile,
  withStyles,
  Typography,
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  IconButton,
  Tooltip,
  CardHeader,
  CardMedia,
  Link,
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import PropTypes from 'prop-types';
import InstagramPost from './instagram_post.jsx';
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
    margin: 'auto',
    maxWidth: '700px',
  },
  amazon: {
    color: '#FF9900',
  },
  michigan: {
    color: '#FFCB05',
  },
  web: {
    color: '#61DBFB',
  },
  android: {
    color: '#A4C639',
  },
  gimble: {
    color: '#83B2DA',
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
    const materialUIExpansionPanelLink = `https://material-ui.com/components/expansion-panels/#expansion-panel`;
    const amazonLink = 'https://www.amazon.com/';
    const umichLink = 'https://umich.edu/';
    const webDevLink = 'https://en.wikipedia.org/wiki/Web_development';
    const androidDevLink = 'https://developer.android.com/';
    const gimbleLink = `https://gimbleacappella.com`;

    const feedData = [
      {
        postId: 'B_yokGTgNUK/',
      },
      {
        postId: 'B9K_P5AAQp6/',
      },
      {
        postId: 'B6RFvKXA69I/',
      },
      {
        postId: 'Bz1m6oGgh4j/',
      },
      {
        postId: 'BZ-SbmLBhhk/',
      },
    ];
    return (
      <Card raised={true} className="card">
        <ExpansionPanel
          onChange={this.handleChange}
          TransitionProps={{unmountOnExit: true}}>
          <ExpansionPanelSummary
            aria-label="Welcome"
            aria-controls="welcome-content"
            id="welcome-header"
            expandIcon={
              <Tooltip
                title="Expand/collapse card"
                arrow>
                <IconButton>
                  <ExpandMoreIcon />
                </IconButton>
              </Tooltip>
            }>
            <div
              className={classes.expansionHeaderContainer}>
              <CardHeader
                title="Welcome!"
                subheader="Click for a little about me..."
              />
              <CardMedia
                className={classes.welcomeImage}
                image="/images/mark_grad_pic_1.jpg"
                title="Mark grad pic 1"
                alt="Mark grad pic 1"
                component="img"
              />
            </div>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <CardContent className={classes.cardContent}>
              <Typography variant="h6" paragraph>
                    Welcome to my website! I&#39;m a software development engineer at

                {' '}
                <Tooltip arrow title="Go to Amazon.com">
                  <Link color="secondary" href={amazonLink} className={classes.amazon}>
              Amazon
                  </Link>
                </Tooltip>

            , a computer science engineering/entrepreneurship graduate from the

                {' '}
                <Tooltip arrow placement="bottom" title="Go to U of M website">
                  <Link href={umichLink} className={classes.michigan}>
              University of Michigan
                  </Link>
                </Tooltip>

            , and a former singer/beatboxer in

                {' '}
                <Tooltip arrow placement="bottom" title="Go to Gimble's website">
                  <Link href={gimbleLink} className={classes.gimble}>
            Gimble A Cappella
                  </Link>
                </Tooltip>

            .
              </Typography>
              <Typography variant="body1" paragraph>
                    I love reading, writing, teaching, and anything to do with leadership. I love
                    good design, usability and accessibility - concepts which I get to practice all the
                    time while making

                {' '}
                <Tooltip arrow placement="bottom" title="Go to Android Developers page">
                  <Link href={androidDevLink} className={classes.android}>
              Android
                  </Link>
                </Tooltip>
                {' '}

            and

                {' '}
                <Tooltip arrow placement="bottom" title="Go to web development page">
                  <Link href={webDevLink} className={classes.web}>
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
                  <Link color="secondary" href={materialUIExpansionPanelLink}>
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
                  suggestions, questions, anything! My door is always open.
              </Typography>
              <ExpansionPanel style={{marginBottom: 16}}>
                <div
                  className={classes.expansionHeaderContainer}>
                  <ExpansionPanelSummary
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
                  </ExpansionPanelSummary>
                </div>
                <ExpansionPanelDetails>
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
                </ExpansionPanelDetails>
              </ExpansionPanel>

              <GridList className={classes.photoGrid} cellHeight="auto" cols={1.1}>
                {feedData.map((feedDatum) => (
                  <GridListTile key={feedDatum.postId} className={classes.photoGridTile}>
                    <InstagramPost postId={feedDatum.postId}/>
                  </GridListTile>
                ))}
              </GridList>
              <Typography className={classes.scrollTip} variant="caption" color="textSecondary">
                  Scroll horizontally to view all photos!
              </Typography>
            </CardContent>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </Card>
    );
  }
}

WelcomeCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(WelcomeCard);
