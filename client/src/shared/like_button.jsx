import React from 'react';
import './like_button.css';
import PropTypes from 'prop-types';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import {Typography, Card} from '@material-ui/core';
const setCookie = require ('../shared/util/cookies.js').setCookie;
const getCookie = require ('../shared/util/cookies.js').getCookie;

export default class LikeButton extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      liked: false,
      numLikes: 0,
    };
    this.toggleLike = this.toggleLike.bind (this);
    this.fetchNumLikes = this.fetchNumLikes.bind (this);
  }

  fetchNumLikes () {
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

  /**
   * The fetch API doesn't allow GET requests to have bodies. This is a really
   * annoying requirement, and in protest I have just chosen to use a POST request
   * with a body to do the exact same thing a GET request would do.
   */
  componentDidMount () {
    if (getCookie (this.props.pagename) === 'liked') {
      this.setState ({liked: true});
    }
    this.fetchNumLikes ();
  }

  toggleLike () {
    if (this.state.liked === false) {
      const url = process.env.REACT_APP_API_URL + 'like';
      const requestText = {page: this.props.pagename};
      fetch (url, {
        method: 'post',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify (requestText),
      })
        .then (() => {
          this.fetchNumLikes ();
        })
        .catch (error => console.log (error));
      setCookie (this.props.pagename, 'liked', 1000);
      this.setState ({liked: true});
    }
  }

  render () {
    const isLiked = this.state.liked;
    let icon;
    let displayedColor;
    if (isLiked) {
      displayedColor = 'secondary';
      icon = <FavoriteIcon color={displayedColor} fontSize="large" />;
    } else {
      displayedColor = 'inherit';
      icon = (
        <FavoriteBorderIcon
          color={displayedColor}
          fontSize="large"
          onClick={this.toggleLike}
        />
      );
    }
    return (
      <div id="like-button-root">
        <div id="like-button-wrapper">
          {icon}
          <Card style={{margin: 8}}>
            <Typography
              variant="caption"
              size="small"
              color={displayedColor}
              style={{margin: 16}}
            >
              {this.state.numLikes} likes
            </Typography>
          </Card>
        </div>
      </div>
    );
  }
}

LikeButton.propTypes = {
  pagename: PropTypes.string.isRequired,
};
