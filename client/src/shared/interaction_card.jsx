import React from 'react';
import './interaction_card.css';
import PropTypes from 'prop-types';
// import CommentBox from './comment_box.jsx';
import {Card, CardContent} from '@material-ui/core';
import LikeButton from './like_button.jsx';
import DiversityButton from './diversity_button.jsx';

export default class InteractionCard extends React.Component {
  render() {
    const diversityButton = this.props.pagename === 'rando'
      ? <DiversityButton />
      : <div />;
    return (
      <div id="interaction-card-wrapper">
        <Card raised={true}>
          <CardContent>
            {/* <CommentBox pagename={this.props.pagename} /> */}
            {diversityButton}
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
