import React from 'react';
import './home.css';
import 'typeface-roboto';
import {Typography} from '@material-ui/core';
import BuiltWithTable from './built_with_table';
// import Resume from './resume.jsx';

class Home extends React.Component {
  render () {
    return (
      <div>
        <Typography style={{margin: 16}} variant="h6">
          Software Engineering Intern at J.P. Morgan ·
          4th year CSE student at the University of Michigan ·
          Minor in Entrepreneurship ·
          Focus on Web &amp; Android development
        </Typography>
        <Typography style={{margin: 16}} variant="body1">
          Welcome to my personal website! I am a computer science in engineering student at the
          University of Michigan and my website is designed to show you a little more about myself.
          Please browse around and feel free to check out my social media accounts or contact me
          directly!
        </Typography>

        <BuiltWithTable />
      </div>
    );
  }
}

export default Home;
