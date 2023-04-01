import React from 'react';
import {
  Typography,
  Card,
  CardMedia,
  CardContent,
  CardHeader,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Chip,
  IconButton,
  Tooltip,
} from '@mui/material';
import DateRangeIcon from '@mui/icons-material/DateRange';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import PropTypes from 'prop-types';
import {withStyles} from '@mui/styles';

const styles = {
  teslaBanner: {
    width: 'auto',
    height: '200px',
    margin: '0px',
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
  rocky: {
    height: '100%',
    maxHeight: '300px',
    width: 'auto',
    marginLeft: '4px',
    marginRight: '4px',
  },
  webScreenshot: {
    width: '100%',
    maxWidth: '400px',
    height: 'auto',
  },
};

class TeslaCard extends React.Component {
  render() {
    const {classes} = this.props;

    const tags = [
      {
        label: 'January 2023 → Present',
        color: 'default',
        variant: 'default',
        icon: <DateRangeIcon />,
      },
      {
        label: 'Full Time',
        color: 'primary',
        variant: 'default',
      },
    ];

    return (
      <Card raised={true} className="card">
        <Accordion
          TransitionProps={{unmountOnExit: true}}>
          <AccordionSummary
            aria-label="Tesla"
            aria-controls="tesla-content"
            id="tesla-header"
            expandIcon={
              <Tooltip
                title="Expand/collapse card"
                arrow>
                <IconButton style={{padding: 0}} size="large">
                  <ExpandMoreIcon />
                </IconButton>
              </Tooltip>
            }>
            <a name="tesla_card" href="#tesla_card" className="gone">
            Tesla Card
            </a>
            <div className={classes.expansionHeaderContainer}>
              <CardHeader
                className="card-header"
                title="Tesla"
                subheader="Software Engineer" />
              <CardMedia
                className={classes.teslaBanner}
                image="/media/tesla_logo.svg"
                title="Tesla banner"
                alt="Tesla banner"
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
          </AccordionSummary>
          <AccordionDetails>
            <CardContent>
              <Typography variant="body1" paragraph>
                Working on onboard firmware and in-vehicle UI in Service Engineering. Details to come!
              </Typography>
            </CardContent>
          </AccordionDetails>
        </Accordion>
      </Card>
    );
  }
}

TeslaCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TeslaCard);
