import React from 'react';
import PropTypes from 'prop-types';

const styles = {};

export default function CommentBox({ likeType, likeName }) {
  return (
    <div>
      Commentbox
    </div>
  );
};

CommentBox.propTypes = {
  likeType: PropTypes.string.isRequired,
  likeName: PropTypes.string.isRequired,
};
