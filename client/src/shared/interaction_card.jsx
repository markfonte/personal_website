import React from 'react';
import './interaction_card.css';
import PropTypes from 'prop-types';
// import CommentBox from './comment_box.jsx';
import {Card, CardContent} from '@material-ui/core';
import LikeButton from './like_button.jsx';

export default class InteractionCard extends React.Component {
  render() {
    return (
      <div id="interaction-card-wrapper">
        <Card raised={true}>
          <CardContent>
            {/* <CommentBox pagename={this.props.pagename} /> */}
            <LikeButton pagename={this.props.pagename} />
          </CardContent>
        </Card>
      </div>
    );
  }
}

InteractionCard.propTypes = {
  pagename: PropTypes.string.isRequired,
};
