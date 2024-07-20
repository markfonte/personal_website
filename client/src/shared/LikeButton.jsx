import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Typography, Card, Tooltip, IconButton, Box } from '@mui/material';
const fetch = require('node-fetch');

const deleteCookie = require('./util/Cookies.js').deleteCookie;
const setCookie = require('./util/Cookies.js').setCookie;
const getCookie = require('./util/Cookies.js').getCookie;

const styles = {
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: '12px',
  },
  likeButtonWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  captionRoot: {
    marginRight: '16px',
  },
  captionText: {
    margin: '0px',
  },
};

export default function LikeButton({ likeType, likeName }) {
  const [liked, setLiked] = useState(false);
  const [numLikes, setNumLikes] = useState(0);

  const abortController = new window.AbortController();

  useEffect(() => {
    if (likeType != 'page' && likeType != 'card') {
      console.error("Received unknown likeType: " + likeType + ". Expected page or card");
    }
    if (getCookie(likeName) === 'liked') {
      setLiked(true);
    }
    fetchNumLikes();

    return () => abortController.abort();
  }, []);

  const fetchNumLikes = () => {
    const url = process.env.REACT_APP_API_URL + 'like/get';
    const requestText = { page: likeName };
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
        console.error(error);
      });
  };

  const toggleLike = () => {
    if (!liked) {
      const url = process.env.REACT_APP_API_URL + 'like';
      const requestText = { page: likeName };
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
          console.error(error);
        });
      setCookie(likeName, 'liked', 1000);
      setLiked(true);
    } else {
      const url = process.env.REACT_APP_API_URL + 'like/unlike';
      const requestText = { page: likeName };
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
          console.error(error);
        });
      deleteCookie(likeName, 'liked');
      setLiked(false);
    }
  };

  let icon;
  let displayedColor;
  if (liked) {
    displayedColor = 'error';
    icon = <FavoriteIcon color={displayedColor} fontSize="2rem" />;
  } else {
    displayedColor = 'inherit';
    icon = <FavoriteBorderIcon color={displayedColor} fontSize="2rem" />;
  }

  return (
    <Box style={styles.root}>
      <Card style={styles.likeButtonWrapper}>
        <Tooltip title={liked ? 'Click to unlike ' + likeType : 'Click to like ' + likeType} arrow onClick={toggleLike}>
          <IconButton size="medium">
            {icon}
          </IconButton>
        </Tooltip>
        <Box sx={styles.captionRoot}>
          <Typography variant="caption" size="small" color="inherit" sx={styles.captionText}>
            {numLikes} {numLikes === 1 ? 'like' : 'likes'}
          </Typography>
        </Box>
      </Card>
    </Box>
  );
};

LikeButton.propTypes = {
  likeType: PropTypes.string.isRequired,
  likeName: PropTypes.string.isRequired,
};
