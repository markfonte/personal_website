import React from 'react';
import './instagram_feed_card.css';
import {CardContent, Card, GridList, GridListTile} from '@material-ui/core';
import markFeed1 from '../static/images/photos/mark_feed_1.jpg';
import markFeed2 from '../static/images/photos/mark_feed_2.jpg';
import markFeed3 from '../static/images/photos/mark_feed_3.jpg';
import markFeed4 from '../static/images/photos/mark_feed_4.jpg';
import markFeed5 from '../static/images/photos/mark_feed_5.jpg';
import markFeed6 from '../static/images/photos/mark_feed_6.jpg';
import markFeed7 from '../static/images/photos/mark_feed_7.jpg';

class InstagramFeedCard extends React.Component {
  render() {
    const feedData = [
      {
        image: markFeed1,
        cols: 1,
        title: 'Mark Feed 1',
      },
      {
        image: markFeed7,
        cols: 1,
        title: 'Mark Feed 7',
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
        image: markFeed5,
        cols: 1,
        title: 'Mark Feed 5',
      },
      {
        image: markFeed2,
        cols: 1,
        title: 'Mark Feed 2',
      },
      {
        image: markFeed4,
        cols: 2,
        title: 'Mark Feed 4',
      },
    ];
    return (
      <Card className="card">
        <CardContent style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', overflow: 'hidden'}}>
          <GridList style={{maxWidth: 740}} cellHeight={320} cols={2}>
            {feedData.map((feedDatum) => (
              <GridListTile style={{margin: 0}} key={feedDatum.image} cols={feedDatum.cols || 1}>
                <img src={feedDatum.image} alt={feedDatum.title} />
              </GridListTile>
            ))}
          </GridList>
        </CardContent>
      </Card>
    );
  }
}

export default InstagramFeedCard;
