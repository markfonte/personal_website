import React from 'react';
import {
  Typography,
  Card,
  CardMedia,
  CardContent,
  CardHeader,
  Link,
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
import {withStyles} from '@material-ui/styles';

const styles = {
  doggieDoodlesBanner: {
    width: '100%',
    margin: 'auto',
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
};

class DoggieDoodlesCard extends React.Component {
  render() {
    const {classes} = this.props;
    // const doggieDoodlesWebsiteLink = `https://dopedoggiedoodles.wixsite.com/home`;
    const doggieDoodlesRedbubbleLink = `https://www.redbubble.com/people/doggiedoodles`;
    const doggieDoodlesEmailLink = `mailto:dopedoggiedoodles@gmail.com`;

    const tags = [
      {
        label: 'March 2019 → May 2019',
        color: 'default',
        variant: 'default',
        icon: <DateRangeIcon />,
      },
      {
        label: 'Part-Time',
        color: 'primary',
        variant: 'default',
      },
      {
        label: 'Startup',
        color: 'primary',
        variant: 'default',
      },
      {
        label: 'Entrepreneurship',
        color: 'primary',
        variant: 'default',
      },
    ];

    return (
      <Card raised={true} className="card">
        <ExpansionPanel
          TransitionProps={{unmountOnExit: true}}>
          <ExpansionPanelSummary
            aria-label="Doggie Doodles"
            aria-controls="doggie-doodles-content"
            id="doggie-doodles-header"
            expandIcon={
              <Tooltip
                title="Expand/collapse card"
                arrow>
                <IconButton>
                  <ExpandMoreIcon />
                </IconButton>
              </Tooltip>
            }>
            <a name="doggie_doodles_card" href="#doggie_doodles_card" className="gone">
            Doggie Doodles Card
            </a>
            <div className={classes.expansionHeaderContainer}>
              <CardHeader title="Doggie Doodles" subheader="Entrepreneur" />
              <CardMedia
                className={classes.doggieDoodlesBanner}
                image="/images/doggie_doodles_banner.jpg"
                title="Doggie Doodles banner"
                alt="Doggie Doodles banner"
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
            <CardContent>
              <Typography variant="body1">
              Started from a class project, this business sells custom merchandise using a
              digital drawing of your animal.
                {' '}
                <Link color="secondary" href={doggieDoodlesEmailLink}>
                Send us a picture of your dog or cat{' '}
                </Link> and we will turn it into a custom
              drawing. Then head over to
                {' '}
                <Link color="secondary" href={doggieDoodlesRedbubbleLink}>
                Redbubble
                </Link>
                {' '}
              and you can purchase a
              custom mug, laptop sticker, phone case, and more. I might not be writing software
              for this business, but it is still lots of fun!
              </Typography>
            </CardContent>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </Card>
    );
  }
}

DoggieDoodlesCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DoggieDoodlesCard);
