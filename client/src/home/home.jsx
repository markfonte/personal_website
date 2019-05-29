import React from 'react';
import './home.css';
import 'typeface-roboto';
import {Typography} from '@material-ui/core';
import Link from '@material-ui/core/Link';
import TicTacToeGame from '../random/tic_tac_toe_game';
import BuiltWithTable from '../random/built_with_table';

class Home extends React.Component {
  render () {
    const reactTutorialLink = `https://reactjs.org/tutorial/tutorial.html#overview`;
    return (
      <div>
        <Typography variant="title">
          Welcome to my website! It is under active development (last updated 5/29/2019). Please check back soon!
        </Typography>
        <Typography variant="subtitle1">
          Incoming Software Engineering Intern at J.P. Morgan ·
          4rd year CSE student at the University of Michigan ·
          Minor in Entrepreneurship ·
          Focus on Web &amp; Android development
        </Typography>

        <div className="tic-tac-toe-container">
          <Typography variant="subtitle1" id="tic-tac-toe-title">
            Here&apos;s some tic-tac-toe while you wait:
          </Typography>
          <TicTacToeGame />
          <Typography variant="caption" id="tic-tac-toe-caption">
            <Link color="textPrimary" href={reactTutorialLink}>
              credit: reactjs tutorial
            </Link>
          </Typography>
        </div>

        <BuiltWithTable />

      </div>
    );
  }
}

export default Home;
