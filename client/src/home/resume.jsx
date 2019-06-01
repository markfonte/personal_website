import React from 'react';
import './resume.css';
import {Typography} from '@material-ui/core';
// import resumePdf from '../static/documents/resume.pdf';

class Resume extends React.Component {
  render() {
    return (
      <div>
        <Typography id="resume-title" variant="subtitle1" align="left">
          Last updated: Feb 02 2019
        </Typography>
        <div id="resume-wrapper">
          {/* <embed id="resume-pdf" type="application/pdf" src={resumePdf} /> */}
        </div>
      </div>
    );
  }
}

export default Resume;
