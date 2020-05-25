import React from 'react';
import laughableLyricsLogo
  from '../static/images/logos/laughable_lyrics_logo.svg';
import {
  Typography,
  Card,
  CardMedia,
  CardContent,
  CardHeader,
  Link,
  withStyles,
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
  spartahack5_logo: {
    width: '100%',
    margin: 'auto',
    maxWidth: '500px',
    marginBottom: '12px',
  },
  laughable_lyrics_logo: {
    width: '40%', height: 'auto',
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

class Spartahack5Card extends React.Component {
  render() {
    const {classes} = this.props;
    // const spartahack5Link = `https://spartahackv.devpost.com/`;
    const laughableLyricsDevpostLink = `https://devpost.com/software/laughable-lyrics`;
    const laughableLyricsGithubLink = `https://github.com/nathan815/Laughable-Lyrics`;
    const googleTranslateSingsLink = `https://www.youtube.com/watch?v=2bVAoVlFYf0`;
    const tags = [
      {
        label: 'January 2019',
        color: 'default',
        variant: 'default',
        icon: <DateRangeIcon />,
      },
      {
        label: 'Hackathon',
        color: 'primary',
        variant: 'default',
      },
      {
        label: 'Android',
      },
    ];
    return (
      <Card raised={true} className="card">
        <ExpansionPanel
          TransitionProps={{unmountOnExit: true}}>
          <ExpansionPanelSummary
            aria-label="SpartaHack V"
            aria-controls="spartahack5-content"
            id="spartahack5-header"
            expandIcon={
              <Tooltip
                title="Expand/collapse card"
                arrow>
                <IconButton>
                  <ExpandMoreIcon />
                </IconButton>
              </Tooltip>
            }>
            <a name="spartahack5_card" href="#spartahack5_card" style={{visibility: 'hidden'}}>
            SpartHack V Card
            </a>
            <div className={classes.expansionHeaderContainer}>
              <CardHeader
                title="Laughable Lyrics"
                subheader="Hackathon Winner @ SpartaHack V"
              />
              <CardMedia
                className={classes.spartahack5_logo}
                image="/images/spartahack_logo.png"
                title="SpartaHack V logo"
                alt="SpartaHack V logo"
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
              <Typography variant="body1" paragraph>
              This hackathon project,
                {' '}
                <i>Laughable Lyrics</i>
              , is one of my favorites.
                {' '}
              We took inspiration from the popular
                {' '}
                <i>&#34;Google Translate Sings&#34;</i>
                {' '}
                <Link color="secondary" href={googleTranslateSingsLink}>
                YouTube videos
                </Link>
                {' '}
              and decided we could automate that process. Using Google Translate APIs we built an
              Android application that allowed users to translate the Genius Lyrics through a specified
              number of languages, and back to English. The result was always hilarious,
              and the user interface we built (using Android Jetpack) made it very easy to do.
              We won <i>Most Creative/Funniest Hack</i> for the project.
              View it on
                {' '}
                <Link color="secondary" href={laughableLyricsDevpostLink}>
                Devpost
                </Link>
                {' '}
              or
                {' '}
                <Link color="secondary" href={laughableLyricsGithubLink}>
                Github
                </Link>
              </Typography>
              <img
                src={laughableLyricsLogo}
                className={classes.laughable_lyrics_logo}
                title="Laughable Lyrics logo"
                alt="Laughable Lyrics logo"
              />
            </CardContent>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </Card>
    );
  }
}

Spartahack5Card.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Spartahack5Card);
