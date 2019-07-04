import React from 'react';
import './diversity_button.css';
import {Card, Typography, Switch} from '@material-ui/core';

export default class DiversityButton extends React.Component {
  render () {
    return (
      <Card>
        <div>
          <Typography variant="body1">
            I deeply care about diversity and inclusivity. Show your pride (or your solidarity).
          </Typography>
          <Switch />
        </div>
      </Card>
    );
  }
}
