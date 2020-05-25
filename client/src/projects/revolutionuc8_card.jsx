import React from 'react';
import denialDialLogo from '../static/images/logos/denial_dial_logo.svg';
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
import PropTypes from 'prop-types';

const styles = {
  revolutionuc8_logo: {
    width: '100%',
    margin: 'auto',
    maxWidth: '500px',
    marginBottom: '12px',
  },
  denialDialLogo: {
    width: '40%',
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

class RevolutionUC8Card extends React.Component {
  render() {
    const {classes} = this.props;
    // const revolutionuc8Link = `http://revolutionuc.com/`;
    const denialDialDevpostLink = `https://devpost.com/software/revolution-banking`;
    const denialDialGithubLink = `https://github.com/nathan815/denial-dial`;

    const tags = [
      {
        label: 'March 2020',
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
            aria-label="Revolution UC 8"
            aria-controls="revolutionuc8-content"
            id="revolutionuc8-header"
            expandIcon={
              <Tooltip
                title="Expand/collapse card"
                arrow>
                <IconButton>
                  <ExpandMoreIcon />
                </IconButton>
              </Tooltip>
            }>
            <a name="revolutionuc8_card" href="#revolutionuc8_card" style={{visibility: 'hidden'}}>
            RevolutionUC 8 Card
            </a>
            <div className={classes.expansionHeaderContainer}>
              <CardHeader
                title="Denial Dial"
                subheader="Hackathon Project @ RevolutionUC 8"
              />
              <CardMedia
                className={classes.revolutionuc8_logo}
                image="/images/revolutionuc_logo.png"
                title="RevolutionUC 8 logo"
                alt="RevolutionUC 8 logo"
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
              This hackathon was not as successful as the other two, but it was still a great
              experience. We spent at least the first 12 hours of the 24-hour hackathon bouncing
              between a bunch of different ideas. We ended up building a clever rejection hotline
              called Denial Dial using Twilio&#39;s APIs. It connected two people who were given the
              fake phone number we set up, and had them communicate for awhile before breaking
              the news to them. It also had some cool side features like an automated message that
              played if anyone called the number. We did not win anything with the project, but
              was still fun experimenting with some new technologies! View it on
                {' '}
                <Link color="secondary" href={denialDialDevpostLink}>
                Devpost
                </Link>
                {' '}
              or
                {' '}
                <Link color="secondary" href={denialDialGithubLink}>Github</Link>
              </Typography>
              <img
                src={denialDialLogo}
                className={classes.denialDialLogo}
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

RevolutionUC8Card.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RevolutionUC8Card);
