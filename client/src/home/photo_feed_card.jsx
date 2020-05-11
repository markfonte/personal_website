import React from 'react';
import {CardContent, Card, GridList, GridListTile, withStyles, Typography} from '@material-ui/core';
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
    // maxWidth: '740px',
    flexWrap: 'nowrap',
    transform: 'translateZ(0)',
  },
  photoGridTile: {
    marginTop: '16px',
    marginBottom: '8px',
  },
  scrollTip: {
    marginTop: '8px',
  },
};

class PhotoFeedCard extends React.Component {
  render() {
    const {classes} = this.props;
    const feedData = [
      {
        postId: 'B_yokGTgNUK/',
      },
      //   {
      //     postId: "B_timDZAYes/"
      //   },
      {
        postId: 'B9K_P5AAQp6/',
      },
      //   {
      //     postId: "B8nAI1RgDbE/"
      //   },
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

        <CardContent className={classes.cardContent}>
          <GridList className={classes.photoGrid} cellHeight="auto" cols={1.3}>
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
      </Card>
    );
  }
}

PhotoFeedCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PhotoFeedCard);
