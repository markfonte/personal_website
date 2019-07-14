import React from 'react';
import './instagram_feed_card.css';
import {CardContent, Card} from '@material-ui/core';

class InstagramFeedCard extends React.Component {
  render() {
    return (
      <div>
        <Card className="card">
          <CardContent style={{height: '100%'}}>
            <iframe src="https://snapwidget.com/embed/713337" height="auto" width="90%"
              className="snapwidget-widget"
              scrolling="no" allowTransparency="true"
              style={{maxWidth: '100%', maxHeight: '100%', margin: 'auto'}}></iframe>
          </CardContent>
        </Card>
      </div>
    );
  }
}

export default InstagramFeedCard;
