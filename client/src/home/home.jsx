import React from 'react';
import './home.css';
import 'typeface-roboto';
import {Typography} from '@material-ui/core';
import BuiltWithTable from './built_with_table';
import Resume from './resume.jsx';

class Home extends React.Component {
  render () {
    return (
      <div>
        <Typography variant="title">
          Welcome to my website! It is under active development (last updated 5/30/2019). Please check back soon!
        </Typography>
        <Typography variant="subtitle1">
          Incoming Software Engineering Intern at J.P. Morgan ·
          4rd year CSE student at the University of Michigan ·
          Minor in Entrepreneurship ·
          Focus on Web &amp; Android development
        </Typography>
        <div id="instagram-feed-wrapper">
          <div class="elfsight-app-b21d23fa-3bec-42f0-8828-b41cc63cff02" />
        </div>
        <Resume />

        <BuiltWithTable />
      </div>
    );
  }
}

export default Home;
