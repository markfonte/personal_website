import React from 'react';
import {
  Typography,
  Card,
  CardMedia,
  CardHeader,
  Link,
  CardContent,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Chip,
  IconButton,
  Tooltip,
} from '@mui/material';
import withStyles from '@mui/styles/withStyles';
import DateRangeIcon from '@mui/icons-material/DateRange';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import PropTypes from 'prop-types';

const styles = {
  justlightLogo: {
    width: '100%',
    marginBottom: '16px',
    marginTop: '16px',
    marginLeft: '0px',
    marginRight: '0px',
    maxWidth: '500px',
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

class JustlightCard extends React.Component {
  render() {
    const {classes} = this.props;
    const justlightLink = `https://www.justlight.com/`;
    const sunflowerAppLink = `https://www.justlight.com/appdownload`;

    const tags = [
      {
        label: 'February 2022 → Present',
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
        <Accordion
          TransitionProps={{unmountOnExit: true}}>
          <AccordionSummary
            aria-label="JustLight"
            aria-controls="justlight-content"
            id="justlight-header"
            expandIcon={
              <Tooltip
                title="Expand/collapse card"
                arrow>
                <IconButton style={{padding: 0}} size="large">
                  <ExpandMoreIcon />
                </IconButton>
              </Tooltip>
            }>
            <a name="justlight_card" href="#justlight_card" className="gone">
            JustLight Card
            </a>
            <div
              className={classes.expansionHeaderContainer}>
              <CardHeader
                className="card-header"
                title="JustLight"
                subheader="Software Engineering Lead"
              />
              <CardMedia
                className={classes.justlightLogo}
                image={this.props.isDarkTheme ? '/images/justlight_logo_light.png' : '/images/justlight_logo_dark.png'}
                title="JustLight logo"
                alt="JustLight logo"
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
            <CardContent className={classes.cardContent}>
              <Typography variant="body1">
                I am the software engineering lead at
                {' '}
                <Link color="secondary" href={justlightLink}>
                JustLight,
                </Link>
                {' '}
                working on the
                {' '}
                <Link color="secondary" href={sunflowerAppLink}>
                Sunflower
                </Link>
                {' '}
                project. More details to come!
              </Typography>
            </CardContent>
          </AccordionDetails>
        </Accordion>
      </Card>
    );
  }
}

JustlightCard.propTypes = {
  classes: PropTypes.object.isRequired,
  isDarkTheme: PropTypes.bool.isRequired,
};

export default withStyles(styles)(JustlightCard);
