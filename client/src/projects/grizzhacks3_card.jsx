import React from 'react';
import {
  Typography,
  Card,
  CardMedia,
  CardContent,
  CardHeader,
  Link,
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
import congoaiLogo from '../static/images/logos/congoai_logo.svg';
import PropTypes from 'prop-types';

const styles = {
  grizzhacks3Banner: {
    width: '100%',
    marginBottom: '16px',
    marginTop: '16px',
    marginLeft: '0px',
    marginRight: '0px',
  },
  congoaiLogo: {
    width: '50%',
    height: 'auto',
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

class Grizzhacks3Card extends React.Component {
  render() {
    const {classes} = this.props;
    // const grizzhacks3Link = `http://grizzhacks.com/`;
    const grizzhacks3DevpostLink = `https://devpost.com/software/congoai`;
    const grizzhacks3GithubLink = `https://github.com/nathan815/CongoAI`;

    const tags = [
      {
        label: 'September 2018',
        color: 'default',
        variant: 'default',
        icon: <DateRangeIcon />,
      },
      {
        label: 'Hackathon',
        color: 'primary',
        variant: 'default',
      },
    ];

    return (
      <Card raised={true} className="card">
        <ExpansionPanel
          TransitionProps={{unmountOnExit: true}}>
          <ExpansionPanelSummary
            aria-label="GrizzHacks 3"
            aria-controls="grizzhacks3-content"
            id="grizzhacks3-header"
            expandIcon={
              <Tooltip
                title="Expand/collapse card"
                arrow>
                <IconButton style={{padding: 0}}>
                  <ExpandMoreIcon />
                </IconButton>
              </Tooltip>
            }>
            <a name="grizzhacks3_card" href="#grizzhacks3_card" className="gone">
            Grizzhacks 3 Card
            </a>
            <div className={classes.expansionHeaderContainer}>
              <CardHeader
                className="cardHeader"
                title="Congo AI"
                subheader="Hackathon Winner @ GrizzHacks 3"
              />
              <CardMedia
                className={classes.grizzhacks3Banner}
                image="/images/grizzhacks_banner.png"
                title="GrizzHacks 3 banner"
                alt="GrizzHacks 3 banner"
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
              <Typography variant="body1" paragraph>
              This was the first hackathon I ever competed in. We built an online
              store to buy and sell pre-trained machine learning models, using Vue.js and MongoDB.
              While we did not completely finish, the idea was to be able to test out
              the machine learning models first in the store before purchasing from the
              person that made it. Most of the credit on this project goes to my team.
              We won <i>Best DevOps Hack, Presented by Ally Financial</i> and <i
                >
                Best use of Dynatrace
                </i>. View it on <Link
                  color="secondary"
                  href={grizzhacks3DevpostLink}
                >
                Devpost
                </Link>
                {' '}
              or
                {' '}
                <Link color="secondary" href={grizzhacks3GithubLink}>Github</Link>
              </Typography>
              <img
                src={congoaiLogo}
                className={classes.congoaiLogo}
                title="CongoAI logo"
                alt="CongoAI logo"
              />
            </CardContent>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </Card>
    );
  }
}

Grizzhacks3Card.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Grizzhacks3Card);
