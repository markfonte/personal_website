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

        <Card raised={true}>
          <a name="interaction_card" href="#interaction_card" className="gone">
            Interaction Card
          </a>
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
