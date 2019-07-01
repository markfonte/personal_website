import React from 'react';
import './interaction_card.css';
import CommentBox from './comment_box.jsx';
import {Card, CardContent} from '@material-ui/core';

class InteractionCard extends React.Component {
  render () {
    return (
      <div>
        <Card raised={true} className="card">
          <CardContent>
            <CommentBox />
          </CardContent>
        </Card>
      </div>
    );
  }
}

export default InteractionCard;
