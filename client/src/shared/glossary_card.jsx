import React from 'react';
import PropTypes from 'prop-types';
import {
  Card,
  CardContent,
  withStyles,
  CardHeader,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  List,
  ListItem,
  ListItemText,
  Link,
  Typography,
  IconButton,
  Tooltip,
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  expansionPanel: {
    maxWidth: 360,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 'auto',
  },
  tags: {
    margin: '6px',
  },
};

class GlossaryCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
    };
    this.setExpanded = this.setExpanded.bind(this);
    this.handleClicker = this.handleClicker.bind(this);
  }

  handleClicker() {
  }

  setExpanded = (panel) => (event, isExpanded) => {
    if (isExpanded) {
      this.setState({expanded: panel});
      return;
    }
    this.setState({expanded: false});
  }

  render() {
    const {classes} = this.props;
    const glossaryItems = [
      {
        tagName: 'Full Time Positions',
        type: 'Project',
        projects: [
          {
            cardId: 'amazon',
            cardName: 'Amazon',
            subtitle: 'Software Engineer',
          },
        ],
      },
      {
        tagName: 'Internships',
        type: 'Project',
        projects: [
          {
            cardId: 'jpmorgan',
            cardName: 'J.P. Morgan Chase',
            subtitle: 'Software Engineering Intern Summer 2019',
          },
          {
            cardId: 'laz',
            cardName: 'Learning A-Z',
            subtitle: 'Software Engineering Intern Summer 2018',
          },
          {
            cardId: 'laz',
            cardName: 'Learning A-Z',
            subtitle: 'Software Engineering Intern Summer 2017',
          },
        ],
      },
      {
        tagName: 'Startups',
        type: 'Project',
        projects: [
          {
            cardId: 'doggie_doodles',
            cardName: 'Doggie Doodles',
            subtitle: 'Entrepreneur',
          },
          {
            cardId: 'clipp',
            cardName: 'Clipp',
            subtitle: 'Full Stack Developer',
          },
          {
            cardId: 'mi_symptoms',
            cardName: 'MI Symptoms',
            subtitle: 'Testing Team Lead',
          },
          {
            cardId: 'spotlight',
            cardName: 'Spotlight',
            subtitle: 'Dev Lead & Android Developer',
          },
        ],
      },
      {
        tagName: 'Hackathon Projects',
        type: 'Project',
        projects: [
          {
            cardId: 'revolutionuc8',
            cardName: 'Denial Dial',
            subtitle: 'Hackathon Project @ RevolutionUC 8',
          },
          {
            cardId: 'grizzhacks3',
            cardName: 'Congo AI',
            subtitle: 'Hackathon Project @ GrizzHacks 3',
          },
          {
            cardId: 'mhacks12',
            cardName: 'InstEvents',
            subtitle: 'Hackathon Project @ MHacks 12',
          },
          {
            cardId: 'spartahack5',
            cardName: 'Laughable Lyrics',
            subtitle: 'Hackathon Project & SpartaHack V',
          },
        ],
      },
      {
        tagName: 'Class Projects',
        type: 'Project',
        projects: [
          {
            cardId: 'doggie_doodles',
            cardName: 'Doggie Doodles',
            subtitle: 'Entrepreneur',
          },
          {
            cardId: 'road_mapper',
            cardName: 'Road Mapper',
            subtitle: 'EECS 493 Class Project',
          },
          {
            cardId: 'spotlight',
            cardName: 'Spotlight',
            subtitle: 'Dev Lead & Android Developer',
          },
          {
            cardId: 'walklens',
            cardName: 'WalkLens',
            subtitle: 'Android Developer',
          },
        ],
      },
      {
        tagName: 'Android Projects',
        projects: [
          {
            cardId: 'laz',
            cardName: 'Learning A-Z',
            subtitle: 'Software Engineering Intern',
          },
          {
            cardId: 'mhacks12',
            cardName: 'InstEvents',
            subtitle: 'Hackathon Project @ MHacks 12',
          },
          {
            cardId: 'spartahack5',
            cardName: 'Laughable Lyrics',
            subtitle: 'Hackathon Project & SpartaHack V',
          },
          {
            cardId: 'spotlight',
            cardName: 'Spotlight',
            subtitle: 'Dev Lead & Android Developer',
          },
          {
            cardId: 'walklens',
            cardName: 'WalkLens',
            subtitle: 'Android Developer',
          },
        ],
      },
      {
        tagName: 'Firebase Projects',
        projects: [
          {
            cardId: 'clipp',
            cardName: 'Clipp',
            subtitle: 'Full Stack Developer',
          },
          {
            cardId: 'mhacks12',
            cardName: 'InstEvents',
            subtitle: 'Hackathon Project @ MHacks 12',
          },
          {
            cardId: 'mi_symptoms',
            cardName: 'MI Symptoms',
            subtitle: 'Testing Team Lead',
          },
          {
            cardId: 'spotlight',
            cardName: 'Spotlight',
            subtitle: 'Dev Lead & Android Developer',
          },
        ],
      },
      {
        tagName: 'Java Projects',
        projects: [
          {
            cardId: 'jpmorgan',
            cardName: 'J.P. Morgan Chase',
            subtitle: 'Software Engineering Intern',
          },
          {
            cardId: 'laz',
            cardName: 'Learning A-Z',
            subtitle: 'Software Engineering Intern',
          },
        ],
      },
      {
        tagName: 'JavaScript Projects',
        projects: [
          {
            cardId: 'clipp',
            cardName: 'Clipp',
            subtitle: 'Full Stack Developer',
          },
          {
            cardId: 'grizzhacks3',
            cardName: 'Congo AI',
            subtitle: 'Hackathon Project @ GrizzHacks 3',
          },
          {
            cardId: 'revolutionuc8',
            cardName: 'Denial Dial',
            subtitle: 'Hackathon Project @ RevolutionUC 8',
          },
          {
            cardId: 'jpmorgan',
            cardName: 'J.P. Morgan Chase',
            subtitle: 'Software Engineering Intern',
          },
          {
            cardId: 'spartahack5',
            cardName: 'Laughable Lyrics',
            subtitle: 'Hackathon Project & SpartaHack V',
          },
          {
            cardId: 'laz',
            cardName: 'Learning A-Z',
            subtitle: 'Software Engineering Intern',
          },
          {
            cardId: 'personal_website',
            cardName: 'Personal Website',
            subtitle: 'This website!',
            overrideLink: '/home#built_with_table_card',
          },
          {
            cardId: 'road_mapper',
            cardName: 'Road Mapper',
            subtitle: 'EECS 493 Class Project',
          },
        ],
      },
      {
        tagName: 'Kotlin Projects',
        projects: [
          {
            cardId: 'mhacks12',
            cardName: 'InstEvents',
            subtitle: 'Hackathon Project @ MHacks 12',
          },
          {
            cardId: 'spartahack5',
            cardName: 'Laughable Lyrics',
            subtitle: 'Hackathon Project & SpartaHack V',
          },
          {
            cardId: 'spotlight',
            cardName: 'Spotlight',
            subtitle: 'Dev Lead & Android Developer',
          },
          {
            cardId: 'walklens',
            cardName: 'WalkLens',
            subtitle: 'Android Developer',
          },
        ],
      },
      {
        tagName: 'Python Projects',
        projects: [
          {
            cardId: 'road_mapper',
            cardName: 'Road Mapper',
            subtitle: 'EECS 493 Class Project',
          },
        ],
      },
      {
        tagName: 'React Projects',
        projects: [
          {
            cardId: 'jpmorgan',
            cardName: 'J.P. Morgan Chase',
            subtitle: 'Software Engineering Intern',
          },
          {
            cardId: 'personal_website',
            cardName: 'Personal Website',
            subtitle: 'This website!',
            overrideLink: '/home#built_with_table_card',
          },
        ],
      },
      {
        tagName: 'React Native Projects',
        projects: [
          {
            cardId: 'clipp',
            cardName: 'Clipp',
            subtitle: 'Full Stack Developer',
          },
          {
            cardId: 'jpmorgan',
            cardName: 'J.P. Morgan Chase',
            subtitle: 'Software Engineering Intern',
          },
        ],
      },
    ];
    return (
      <Card raised={true} className="card" style={{maxWidth: 450}}>
        <a name="glossary_card" href="#glossary_card" className="gone">
            Glossary Card
        </a>
        <CardHeader
          className="cardHeader"
          title="Glossary"
        />
        <CardContent
          className={classes.expansionPanel}>
          {
            glossaryItems.map((glossaryItem) => (
              <Accordion
                key={glossaryItem.tagName}
                expanded={this.state.expanded===glossaryItem.tagName}
                className={this.expansionPanel}
                elevation={4}
                onChange={this.setExpanded(glossaryItem.tagName)}
                TransitionProps={{unmountOnExit: true}}>
                <AccordionSummary
                  expandIcon={
                    <Tooltip
                      title="Expand/collapse card"
                      arrow>
                      <IconButton style={{padding: 0}}>
                        <ExpandMoreIcon />
                      </IconButton>
                    </Tooltip>
                  }
                  aria-label={glossaryItem.tagName}
                  aria-controls={glossaryItem.tagName + '-content'}
                  id={glossaryItem.tagName + '-header'}>
                  <Typography variant="h6" color={glossaryItem.type === 'Project' ? 'secondary' : 'textPrimary'}>
                    {glossaryItem.tagName} - <b>{glossaryItem.projects.length}</b>
                    {/* <Chip
                      className={classes.tags}
                      color={glossaryItem.type === 'Project' ? 'secondary' : 'textPrimary'}
                      variant={glossaryItem.type === 'Project' ? 'outlined' : 'outlined'}
                      label={glossaryItem.projects.length}
                      clickable/> */}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <List component="nav" style={{margin: 'auto'}}>
                    {
                      glossaryItem.projects.map((project, i) => (
                        <ListItem key={project.cardName + i} button>
                          <Link color="inherit"
                            href={
                                project.overrideLink ?
                                    project.overrideLink :
                                    '/projects#' + project.cardId + '_card'}>
                            <ListItemText
                              primaryTypographyProps={{color: 'secondary'}}
                              primary={project.cardName}
                              secondary={project.subtitle} />
                          </Link>
                        </ListItem>
                      ))
                    }
                  </List>
                </AccordionDetails>
              </Accordion>
            ))
          }
        </CardContent>
      </Card>
    );
  }
}

GlossaryCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(GlossaryCard);
