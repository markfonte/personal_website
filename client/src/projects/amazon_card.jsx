import React from 'react';
import {
  Typography,
  Card,
  CardMedia,
  CardHeader,
  Link,
  CardContent,
  withStyles,
} from '@material-ui/core';
import PropTypes from 'prop-types';

const styles = {
  amazonLogo: {
    paddingLeft: '20%',
    paddingRight: '20%',
  },
};

class AmazonCard extends React.Component {
  render() {
    const {classes} = this.props;
    const amazonLink = `https://www.amazon.com/`;

    return (
      <div>
        <Card raised={true} className="card">
          <CardHeader
            title="Amazon"
            subheader="Software Engineer"
          />
          <CardMedia
            className={classes.amazonLogo}
            image="/images/amazon_logo.svg"
            title="Amazon logo"
            component="img"
            alt="Amazon logo"
          />
          <CardContent>
            <Typography variant="body1">
                I will become a software engineer at
              {' '}
              <Link color="secondary" href={amazonLink}>
                Amazon
              </Link>
              {' '}
                in Seattle later this year. I can&#39;t wait!
            </Typography>
          </CardContent>
        </Card>
      </div>
    );
  }
}

AmazonCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AmazonCard);
