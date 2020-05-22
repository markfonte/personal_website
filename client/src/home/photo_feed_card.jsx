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
  instagramLogo: {
    width: '100%',
    margin: 'auto',
    maxWidth: '100px',
  },
};

class PhotoFeedCard extends React.Component {
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
            aria-label="Instagram Feed"
            aria-controls="instagram-feed-content"
            id="instagram-feed-header"
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
                title="Instagram Feed"
                subheader="Check it out!"
              />
              <CardMedia
                className={classes.instagramLogo}
                image="/images/instagram_logo.svg"
                title="Instagram logo"
                alt="Instagram logo"
                component="img"
              />
            </div>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <CardContent className={classes.cardContent}>
              <GridList className={classes.photoGrid} cellHeight="auto" cols={1.1}>
                {feedData.map((feedDatum) => (
                  <GridListTile key={feedDatum.postId} className={classes.photoGridTile}
                    cols={feedDatum.cols || 1} rows={feedDatum.rows || 1}>
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

PhotoFeedCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PhotoFeedCard);
