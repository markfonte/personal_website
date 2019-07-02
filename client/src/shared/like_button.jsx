import React from 'react';
import './like_button.css';
import PropTypes from 'prop-types';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import {Typography, Card} from '@material-ui/core';

export default class LikeButton extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      liked: false,
      numLikes: 0,
    };
    this.toggleLike = this.toggleLike.bind (this);
  }

  toggleLike () {
    this.state.liked === true
      ? this.setState ({liked: false})
      : this.setState ({liked: true});
  }

  render () {
    const isLiked = this.state.liked;
    let icon;
    if (isLiked) {
      icon = (
        <FavoriteIcon
          color="secondary"
          fontSize="large"
          onClick={this.toggleLike}
        />
      );
    } else {
      icon = <FavoriteBorderIcon fontSize="large" onClick={this.toggleLike} />;
    }
    return (
      <div id="like-button-root">
        <div id="like-button-wrapper">
          {icon}
          <Card style={{margin: 8}}>
            <Typography size="small" color="secondary" style={{margin: 16}}>
              {this.state.numLikes}
            </Typography>
          </Card>
        </div>
        <Typography variant="caption">
          likes and comments coming soon..
        </Typography>
      </div>
    );
  }
}

LikeButton.propTypes = {
  pagename: PropTypes.string.isRequired,
};
