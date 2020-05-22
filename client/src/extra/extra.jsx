import React from 'react';
import TicTacToeCard from './tic_tac_toe_card.jsx';
import GimbleCard from './gimble_card.jsx';
// import CurrentBooksCard from './current_books_card.jsx';
// import CompletedBooksCard from './completed_books_card.jsx';
import RecommendedSitesCard from './recommended_sites_card.jsx';
import {Typography} from '@material-ui/core';
import InteractionCard from '../shared/interaction_card.jsx';
import {withStyles} from '@material-ui/styles';
import PropTypes from 'prop-types';
import MetaTags from 'react-meta-tags';

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
        <Typography variant="body1" color="secondary">
          <b>
              Click to expand/collapse cards
          </b>
        </Typography>
        <GimbleCard />
        <TicTacToeCard />
        {/* <CurrentBooksCard />
        <CompletedBooksCard /> */}
        <RecommendedSitesCard />
        <InteractionCard pagename="extra" />
      </div>
    );
  }
}

Extra.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Extra);
