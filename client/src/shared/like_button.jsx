import React from 'react';
import PropTypes from 'prop-types';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import {Typography, Card, Tooltip, IconButton} from '@mui/material';
import {withStyles} from '@mui/styles';
const fetch = require('node-fetch');

const setCookie = require('../shared/util/cookies.js').setCookie;
const getCookie = require('../shared/util/cookies.js').getCookie;

const styles = {
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: '16px',
  },
  likeButtonWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  captionRoot: {
    margin: '8px',
  },
  captionText: {
    margin: '16px',
  },
};

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      liked: false,
      numLikes: 0,
    };
    this.toggleLike = this.toggleLike.bind(this);
    this.fetchNumLikes = this.fetchNumLikes.bind(this);
  }

  abortController = new window.AbortController();

  fetchNumLikes() {
    const url = process.env.REACT_APP_API_URL + 'like/get';
    const requestText = {page: this.props.pagename};
    fetch(url, {
      method: 'post',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestText),
      signal: this.abortController.signal,
    })
        .then((response) => response.json())
        .then((data) => {
          this.setState({numLikes: data[0]['numlikes']});
        })
        .catch((error) => {
          if (error.name === 'AbortError' || error.name === 'TypeError') {
            return;
          }
          console.log(error);
        }); // eslint-disable-line no-console
  }

  /**
     * The fetch API doesn't allow GET requests to have bodies. This is a really
     * annoying requirement, and in protest I have just chosen to use a POST request
     * with a body to do the exact same thing a GET request would do.
     */
  componentDidMount() {
    if (getCookie(this.props.pagename) === 'liked') {
      this.setState({liked: true});
    }
    this.fetchNumLikes();
  }

  toggleLike() {
    if (this.state.liked === false) {
      const url = process.env.REACT_APP_API_URL + 'like';
      const requestText = {page: this.props.pagename};
      fetch(url, {
        method: 'post',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestText),
        signal: this.abortController.signal,
      })
          .then(() => {
            this.fetchNumLikes();
          })
          .catch((error) => {
            if (error.name === 'AbortError' || error.name === 'TypeError') {
              return;
            }
            console.log(error);
          });
      setCookie(this.props.pagename, 'liked', 1000);
      this.setState({liked: true});
    }
  }

  componentWillUnmount() {
    this.abortController.abort();
  }

  render() {
    const {classes} = this.props;
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
        />
      );
    }
    return (
      <div className={classes.root}>
        <div className={classes.likeButtonWrapper}>
          <Tooltip
            title="Click to like page"
            arrow
            onClick={this.toggleLike}>
            <IconButton size="large">
              {icon}
            </IconButton>
          </Tooltip>
          <Card className={classes.captionRoot}>
            <Typography
              variant="caption"
              size="small"
              color={displayedColor}
              className={classes.captionText}
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
  classes: PropTypes.object.isRequired,
  pagename: PropTypes.string.isRequired,
};

export default withStyles(styles)(LikeButton);
