import React from 'react';
import './interaction_card.css';
import PropTypes from 'prop-types';
//import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

export default class LikeButton extends React.Component {
  render () {
    return (
      <div>
        <FavoriteBorderIcon />
      </div>
    );
  }
}

LikeButton.propTypes = {
  pagename: PropTypes.string.isRequired,
};
