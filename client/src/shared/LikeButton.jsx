import React from 'react';
import PropTypes from 'prop-types';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Typography, Card, Tooltip, IconButton } from '@mui/material';
import { withStyles } from '@mui/styles';
const fetch = require('node-fetch');

const deleteCookie = require('./util/Cookies.js').deleteCookie;
const setCookie = require('./util/Cookies.js').setCookie;
const getCookie = require('./util/Cookies.js').getCookie;

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
    const requestText = { page: this.props.pagename };
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
        this.setState({ numLikes: data[0]['numlikes'] });
      })
      .catch((error) => {
        if (error.name === 'AbortError' || error.name === 'TypeError') {
          return;
        }
        console.log(error);
      });
  }

  /**
     * The fetch API doesn't allow GET requests to have bodies. This is a really
     * annoying requirement, and in protest I have just chosen to use a POST request
     * with a body to do the exact same thing a GET request would do.
     */
  componentDidMount() {
    if (getCookie(this.props.pagename) === 'liked') {
      this.setState({ liked: true });
    }
    this.fetchNumLikes();
  }

  toggleLike() {
    if (!this.state.liked) {
      const url = process.env.REACT_APP_API_URL + 'like';
      const requestText = { page: this.props.pagename };
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
      this.setState({ liked: true });
    } else {
      const url = process.env.REACT_APP_API_URL + 'like/unlike';
      const requestText = { page: this.props.pagename };
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
      deleteCookie(this.props.pagename, 'liked');
      this.setState({ liked: false });
    }
  }

  componentWillUnmount() {
    this.abortController.abort();
  }

  render() {
    const { classes } = this.props;
    let icon;
    let displayedColor;
    if (this.state.liked) {
      displayedColor = 'secondary';
      icon = <FavoriteIcon color={displayedColor} fontSize="2rem" />;
    } else {
      displayedColor = 'inherit';
      icon = (
        <FavoriteBorderIcon
          color={displayedColor}
          fontSize="2rem"
        />
      );
    }
    return (
      <div className={classes.root}>
        <div className={classes.likeButtonWrapper}>
          <Tooltip
            title={this.state.liked ? 'Click to unlike page' : 'Click to like page'}
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
              {this.state.numLikes} {this.state.numLikes === 1 ? 'like' : 'likes'}
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
