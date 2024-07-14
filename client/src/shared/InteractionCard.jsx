import React from 'react';
import PropTypes from 'prop-types';
// import CommentBox from './comment_box.jsx';
import { Card, CardContent } from '@mui/material';
import LikeButton from './LikeButton.jsx';
import Settings from './Settings.jsx';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  }
}

const InteractionCard = ({ pagename }) => {
  return (
    <div style={styles.root}>
      <Card raised={true}>
        <a name="interaction_card" href="#interaction_card" className="gone">
          Interaction Card
        </a>
        <CardContent>
          {pagename === 'home' ? <Settings /> : null}
          <LikeButton pagename={pagename} />
        </CardContent>
      </Card>
    </div>
  );
};

InteractionCard.propTypes = {
  pagename: PropTypes.string.isRequired,
};

export default InteractionCard;
