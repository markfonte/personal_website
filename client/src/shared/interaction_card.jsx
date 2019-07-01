import React from 'react';
import './interaction_card.css';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CommentBox from './comment_box.jsx';

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
