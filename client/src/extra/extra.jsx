import React, {lazy, Suspense} from 'react';
import {Typography, CircularProgress} from '@material-ui/core';
const TicTacToeCard = lazy(() => import('./tic_tac_toe_card.jsx'));
const GimbleCard = lazy(() => import('./gimble_card.jsx'));
const InteractionCard = lazy(() => import('../shared/interaction_card.jsx'));
import {withStyles} from '@material-ui/styles';
import PropTypes from 'prop-types';
import MetaTags from 'react-meta-tags';

const renderLoader = () => <CircularProgress color="secondary" />;

const styles = {};

class Extra extends React.Component {
  render() {
    return (
      <div>
        <MetaTags>
          <title>Extra</title>
          <meta name="description" content="Some other fun stuff - enjoy!"/>
        </MetaTags>
        <Typography style={{margin: 16}} variant="h6">
         Some other fun stuff - enjoy!
        </Typography>
        <Suspense fallback={renderLoader()}>
          <GimbleCard />
          <TicTacToeCard />
          <InteractionCard pagename="extra" />
        </Suspense>
      </div>
    );
  }
}

Extra.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Extra);
