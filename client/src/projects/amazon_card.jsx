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
  amazonLogo: {
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

class AmazonCard extends React.Component {
  render() {
    const {classes} = this.props;
    const amazonLink = `https://www.amazon.com/`;
    const sellerLink = `https://sell.amazon.com/`;

    const tags = [
      {
        label: 'September 2021 → February 2022',
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
            aria-label="Amazon"
            aria-controls="amazon-content"
            id="amazon-header"
            expandIcon={
              <Tooltip
                title="Expand/collapse card"
                arrow>
                <IconButton style={{padding: 0}} size="large">
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
                className="card-header"
                title="Amazon"
                subheader="Software Development Engineer"
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
          </AccordionSummary>
          <AccordionDetails>
            <CardContent className={classes.cardContent}>
              <Typography variant="body1">
                I was a software development engineer at
                {' '}
                <Link color="secondary" href={amazonLink}>
                Amazon,
                </Link>
                {' '}
                working for a
                {' '}
                <Link color="secondary" href={sellerLink}>
                Selling Partner Insights &amp; Engagements
                </Link>
                {' '}
                team.
              </Typography>
            </CardContent>
          </AccordionDetails>
        </Accordion>
      </Card>
    );
  }
}

AmazonCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AmazonCard);
