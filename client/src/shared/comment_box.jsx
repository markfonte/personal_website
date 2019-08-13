import React from 'react';
import PropTypes from 'prop-types';

export default class CommentBox extends React.Component {
  render() {
    return (
      <div>
        Commentbox
      </div>
    );
  }
}

CommentBox.propTypes = {
  pagename: PropTypes.string.isRequired,
};
