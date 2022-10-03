import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@mui/styles';

const styles = {};

class CommentBox extends React.Component {
  render() {
    return (
      <div>
        Commentbox
      </div>
    );
  }
}

CommentBox.propTypes = {
  classes: PropTypes.object.isRequired,
  pagename: PropTypes.string.isRequired,
};

export default withStyles(styles)(CommentBox);
