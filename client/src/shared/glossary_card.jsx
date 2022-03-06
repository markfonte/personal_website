import React from 'react';
import PropTypes from 'prop-types';
import androidLogo from '../static/images/logos/android_logo.svg';
import firebaseLogo from '../static/images/logos/firebase_logo.svg';
import javaLogo from '../static/images/logos/java_logo.svg';
import javascriptLogo from '../static/images/logos/javascript_logo.svg';
import kotlinLogo from '../static/images/logos/kotlin_logo.svg';
import pythonLogo from '../static/images/logos/python_logo.svg';
import reactLogo from '../static/images/logos/react_logo.svg';
import reactNativeLogo from '../static/images/logos/react_native_logo.svg';
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
    maxWidth: 400,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 'auto',
  },
  tag: {
    display: 'flex',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tagIcon: {
    maxHeight: '36px',
    width: 'auto',
    marginRight: '12px',
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
  };

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
        icon: androidLogo,
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
        icon: firebaseLogo,
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
        icon: javaLogo,
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
        icon: javascriptLogo,
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
        icon: kotlinLogo,
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
        icon: pythonLogo,
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
        icon: reactLogo,
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
        icon: reactNativeLogo,
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
      <Card raised={true} className="card">
        <a name="glossary_card" href="#glossary_card" className="gone">
            Glossary Card
        </a>
        <CardHeader
          className="cardHeader"
          title="Glossary"
        />
        <CardContent
          className={classes.expansionPanel} style={{maxWidth: 500}}>
          {
            glossaryItems.map((glossaryItem) => (
              <Accordion
                key={glossaryItem.tagName}
                expanded={this.state.expanded===glossaryItem.tagName}
                className={this.expansionPanel}
                elevation={1}
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
                  <img
                    src={glossaryItem.icon ? glossaryItem.icon : ''}
                    className={classes.tagIcon}
                    alt={glossaryItem.tagName + ' button'}
                  />
                  <Typography
                    variant="h6"
                    color={glossaryItem.type === 'Project' ? 'secondary' : 'textPrimary'}
                    className={classes.tag}>
                    {glossaryItem.tagName}
                    {' '}
                        ({glossaryItem.projects.length})
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <List component="nav" style={{margin: 'auto', width: '100%'}}>
                    {
                      glossaryItem.projects.map((project, i) => (
                        <ListItem
                          component="a"
                          button
                          key={project.cardName + i}
                          href={
                            project.overrideLink ?
                                project.overrideLink :
                                '/projects#' + project.cardId + '_card'}
                        >
                          <ListItemText
                            primaryTypographyProps={{color: 'secondary'}}
                            primary={project.cardName}
                            secondary={project.subtitle} />
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
