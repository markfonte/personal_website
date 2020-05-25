import React from 'react';
import PropTypes from 'prop-types';
// import CommentBox from './comment_box.jsx';
import {Card, CardContent} from '@material-ui/core';
import LikeButton from './like_button.jsx';
import PrideSwitch from './pride_switch.jsx';
import {withStyles} from '@material-ui/styles';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
};

class InteractionCard extends React.Component {
  render() {
    const {classes} = this.props;
    const prideSwitch = this.props.pagename === 'extra' ?
      <PrideSwitch /> :
      <div />;
    return (
      <div className={classes.root}>
        <a name="interaction_card" href="#interaction_card" style={{visibility: 'hidden'}}>
            Interaction Card
        </a>
        <Card raised={true}>
          <CardContent>
            {/* <CommentBox pagename={this.props.pagename} /> */}
            {prideSwitch}
            <LikeButton pagename={this.props.pagename} />
          </CardContent>
        </Card>
      </div>
    );
  }
}

InteractionCard.propTypes = {
  classes: PropTypes.object.isRequired,
  pagename: PropTypes.string.isRequired,
};

export default withStyles(styles)(InteractionCard);
