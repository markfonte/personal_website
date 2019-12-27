import React from 'react';
import {CardContent, Card, GridList, GridListTile, withStyles} from '@material-ui/core';
import markFeed1 from '../static/images/photos/mark_feed_1.jpg';
import markFeed2 from '../static/images/photos/mark_feed_2.jpg';
import markFeed3 from '../static/images/photos/mark_feed_3.jpg';
import markFeed4 from '../static/images/photos/mark_feed_4.jpg';
import markFeed5 from '../static/images/photos/mark_feed_5.jpg';
import markFeed6 from '../static/images/photos/mark_feed_6.jpg';
import markFeed7 from '../static/images/photos/mark_feed_7.jpg';
import markFeed9 from '../static/images/photos/mark_feed_9.jpg';
import markFeed10 from '../static/images/photos/mark_feed_10.jpg';
import markFeed11 from '../static/images/photos/mark_feed_11.jpg';
import PropTypes from 'prop-types';

const styles = {
  cardContent: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
  },
  photoGrid: {
    maxWidth: '740px',
  },
  photoGridTile: {
    margin: '0',
  },
};

class PhotoFeedCard extends React.Component {
  render() {
    const {classes} = this.props;
    const feedData = [
      {
        image: markFeed1,
        cols: 1,
        title: 'Mark Feed 1',
      },
      {
        image: markFeed2,
        cols: 1,
        title: 'Mark Feed 2',
      },
      {
        image: markFeed10,
        cols: 2,
        title: 'Mark Feed 10',
        rows: 2,
      },
      {
        image: markFeed9,
        cols: 2,
        title: 'Mark Feed 9',
      },
      {
        image: markFeed11,
        cols: 2,
        title: 'Mark Feed 11',
        rows: 2,
      },
      {
        image: markFeed7,
        cols: 1,
        title: 'Mark Feed 7',
      },
      {
        image: markFeed5,
        cols: 1,
        title: 'Mark Feed 5',
      },
      {
        image: markFeed3,
        cols: 2,
        title: 'Mark Feed 3',
      },
      {
        image: markFeed6,
        cols: 2,
        title: 'Mark Feed 6',
      },
      {
        image: markFeed4,
        cols: 2,
        title: 'Mark Feed 4',
      },
    ];
    return (
      <Card raised={true} className="card">
        <CardContent className={classes.cardContent}>
          <GridList className={classes.photoGrid} cellHeight={320} cols={2}>
            {feedData.map((feedDatum) => (
              <GridListTile key={feedDatum.title} className={classes.photoGridTile}
                cols={feedDatum.cols || 1} rows={feedDatum.rows || 1}>
                <img src={feedDatum.image} alt={feedDatum.title} />
              </GridListTile>
            ))}
          </GridList>
        </CardContent>
      </Card>
    );
  }
}

PhotoFeedCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PhotoFeedCard);
