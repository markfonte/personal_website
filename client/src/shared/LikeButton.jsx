import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Typography, Card, Tooltip, IconButton } from '@mui/material';
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

export default function LikeButton({ pagename }) {
  const [liked, setLiked] = useState(false);
  const [numLikes, setNumLikes] = useState(0);

  const abortController = new window.AbortController();

  useEffect(() => {
    if (getCookie(pagename) === 'liked') {
      setLiked(true);
    }
    fetchNumLikes();

    return () => abortController.abort();
  }, []);

  const fetchNumLikes = () => {
    const url = process.env.REACT_APP_API_URL + 'like/get';
    const requestText = { page: pagename };
    fetch(url, {
      method: 'post',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestText),
      signal: abortController.signal,
    })
      .then((response) => response.json())
      .then((data) => {
        setNumLikes(data[0]['numlikes']);
      })
      .catch((error) => {
        if (error.name === 'AbortError' || error.name === 'TypeError') {
          return;
        }
        console.log(error);
      });
  };

  const toggleLike = () => {
    if (!liked) {
      const url = process.env.REACT_APP_API_URL + 'like';
      const requestText = { page: pagename };
      fetch(url, {
        method: 'post',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestText),
        signal: abortController.signal,
      })
        .then(() => {
          fetchNumLikes();
        })
        .catch((error) => {
          if (error.name === 'AbortError' || error.name === 'TypeError') {
            return;
          }
          console.log(error);
        });
      setCookie(pagename, 'liked', 1000);
      setLiked(true);
    } else {
      const url = process.env.REACT_APP_API_URL + 'like/unlike';
      const requestText = { page: pagename };
      fetch(url, {
        method: 'post',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestText),
        signal: abortController.signal,
      })
        .then(() => {
          fetchNumLikes();
        })
        .catch((error) => {
          if (error.name === 'AbortError' || error.name === 'TypeError') {
            return;
          }
          console.log(error);
        });
      deleteCookie(pagename, 'liked');
      setLiked(false);
    }
  };

  let icon;
  let displayedColor;
  if (liked) {
    displayedColor = 'secondary';
    icon = <FavoriteIcon color={displayedColor} fontSize="2rem" />;
  } else {
    displayedColor = 'inherit';
    icon = <FavoriteBorderIcon color={displayedColor} fontSize="2rem" />;
  }

  return (
    <div style={styles.root}>
      <div style={styles.likeButtonWrapper}>
        <Tooltip title={liked ? 'Click to unlike page' : 'Click to like page'} arrow onClick={toggleLike}>
          <IconButton size="large">
            {icon}
          </IconButton>
        </Tooltip>
        <Card sx={styles.captionRoot}>
          <Typography variant="caption" size="small" color={displayedColor} sx={styles.captionText}>
            {numLikes} {numLikes === 1 ? 'like' : 'likes'}
          </Typography>
        </Card>
      </div>
    </div>
  );
};

LikeButton.propTypes = {
  pagename: PropTypes.string.isRequired,
};
