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

  /**
   * The fetch API doesn't allow GET requests to have bodies. This is a really
   * annoying requirement, and in protest I have just chosen to use a POST request
   * with a body to do the exact same thing a GET request would do.
   */
  componentDidMount () {
    const url = process.env.REACT_APP_API_URL + 'like/get';
    const requestText = {page: this.props.pagename};
    fetch (url, {
      method: 'post',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify (requestText),
    })
      .then (response => response.json ())
      .then (data => {
        this.setState ({numLikes: data[0]['numlikes']});
      })
      .catch (error => console.log (error)); // eslint-disable-line no-console
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
