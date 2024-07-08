import React from 'react';
import PropTypes from 'prop-types';

const styles = {};

export default function CommentBox({ pagename }) {
  return (
    <div>
      Commentbox
    </div>
  );
};

CommentBox.propTypes = {
  pagename: PropTypes.string.isRequired,
};
