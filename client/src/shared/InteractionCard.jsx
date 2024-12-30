import React from 'react';
import PropTypes from 'prop-types';
import { Box, Card, CardContent } from '@mui/material';
import LikeButton from './LikeButton.jsx';
import Settings from './Settings.jsx';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  }
}

const InteractionCard = ({ likeName }) => {
  return (
    <Box sx={styles.root}>
      <Card raised className="small-card">
        <a name="interaction_card" href="#interaction_card" className="gone">
          Interaction Card
        </a>
        {likeName === 'home' ? <CardContent><Settings /></CardContent> : null}
        <LikeButton likeType="page" likeName={likeName} />
      </Card>
    </Box>
  );
};

InteractionCard.propTypes = {
  likeName: PropTypes.string.isRequired,
};

export default InteractionCard;
