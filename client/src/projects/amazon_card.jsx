import React from 'react';
import {
  Typography,
  Card,
  CardMedia,
  CardHeader,
  Link,
  CardContent,
  withStyles,
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  Chip,
  IconButton,
  Tooltip,
} from '@material-ui/core';
import DateRangeIcon from '@material-ui/icons/DateRange';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import PropTypes from 'prop-types';

const styles = {
  amazonLogo: {
    width: '100%',
    margin: 'auto',
    maxWidth: '500px',
    marginBottom: '12px',
  },
  tags: {
    margin: '4px',
  },
  expansionHeaderContainer: {
    display: 'flex',
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  cardContent: {
    display: 'flex',
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
};

class AmazonCard extends React.Component {
  render() {
    const {classes} = this.props;
    const amazonLink = `https://www.amazon.com/`;

    const tags = [
      {
        label: 'August 2020 → Present',
        color: 'default',
        variant: 'default',
        icon: <DateRangeIcon />,
      },
      {
        label: 'Full-Time',
        color: 'primary',
        variant: 'default',
      },
    ];
    return (
      <Card
        raised={true}
        className="card">
        <ExpansionPanel
          TransitionProps={{unmountOnExit: true}}>
          <ExpansionPanelSummary
            aria-label="Amazon"
            aria-controls="amazon-content"
            id="amazon-header"
            expandIcon={
              <Tooltip
                title="Expand/collapse card"
                arrow>
                <IconButton>
                  <ExpandMoreIcon />
                </IconButton>
              </Tooltip>
            }>
            <a name="amazon_card" href="#amazon_card" className="gone">
            Amazon Card
            </a>
            <div
              className={classes.expansionHeaderContainer}>
              <CardHeader
                title="Amazon"
                subheader="Software Engineer"
              />
              <CardMedia
                className={classes.amazonLogo}
                image="/images/amazon_logo.svg"
                title="Amazon logo"
                alt="Amazon logo"
                component="img"
              />
              <div>
                {tags.map((tag) => (
                  <Chip
                    className={classes.tags}
                    key={tag.label}
                    icon={tag.icon ? tag.icon : <div/>}
                    label={tag.label}
                    variant={tag.variant ? tag.variant : 'outlined'}
                    color={tag.color ? tag.color : 'secondary'}
                    clickable />
                ))}
              </div>
            </div>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <CardContent className={classes.cardContent}>
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
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </Card>
    );
  }
}

AmazonCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AmazonCard);
