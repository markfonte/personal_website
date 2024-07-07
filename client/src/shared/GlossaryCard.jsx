import React from 'react';
import PropTypes from 'prop-types';
import androidLogo from '../static/logos/android_logo.svg';
import firebaseLogo from '../static/logos/firebase_logo.svg';
import javaLogo from '../static/logos/java_logo.svg';
import javascriptLogo from '../static/logos/javascript_logo.svg';
import kotlinLogo from '../static/logos/kotlin_logo.svg';
import pythonLogo from '../static/logos/python_logo.svg';
import reactLogo from '../static/logos/react_logo.svg';
import reactNativeLogo from '../static/logos/react_native_logo.svg';
import {Build, Business, MenuBook, School, Work} from '@mui/icons-material';
import {
  Card,
  CardContent,
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
} from '@mui/material';
import withStyles from '@mui/styles/withStyles';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const glossaryItems = [
  {
    tagName: 'Full Time Positions',
    type: 'Project',
    icon: <Work style={{width: '28px', height: 'auto', marginRight: '12px'}} />,
    projects: [
      {
        cardId: 'tesla',
        cardName: 'Tesla',
        subtitle: 'Senior Software Engineer',
      },
      {
        cardId: 'justlight',
        cardName: 'JustLight',
        subtitle: 'Software Engineering Lead',
      },
      {
        cardId: 'amazon',
        cardName: 'Amazon / Amazon Web Services',
        subtitle: 'Software Development Engineer',
      },
    ],
  },
  {
    tagName: 'Internships',
    type: 'Project',
    icon: <School style={{width: '28px', height: 'auto', marginRight: '12px'}} />,
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
    icon: <Business style={{width: '28px', height: 'auto', marginRight: '12px'}} />,
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
        cardId: 'justlight',
        cardName: 'JustLight',
        subtitle: 'Software Engineering Lead',
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
    icon: <Build style={{width: '28px', height: 'auto', marginRight: '12px'}} />,
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
    icon: <MenuBook style={{width: '28px', height: 'auto', marginRight: '12px'}} />,
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
    logo: androidLogo,
    projects: [
      {
        cardId: 'amazon',
        cardName: 'Amazon / Amazon Web Services',
        subtitle: 'Software Engineer',
      },
      {
        cardId: 'justlight',
        cardName: 'JustLight',
        subtitle: 'Software Engineering Lead',
      },
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
    logo: firebaseLogo,
    projects: [
      {
        cardId: 'clipp',
        cardName: 'Clipp',
        subtitle: 'Full Stack Developer',
      },
      {
        cardId: 'justlight',
        cardName: 'JustLight',
        subtitle: 'Software Engineering Lead',
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
    logo: javaLogo,
    projects: [
      {
        cardId: 'amazon',
        cardName: 'Amazon / Amazon Web Services',
        subtitle: 'Software Engineer',
      },
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
    logo: javascriptLogo,
    projects: [
      {
        cardId: 'tesla',
        cardName: 'Tesla',
        subtitle: 'Senior Software Engineer',
      },
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
        cardId: 'justlight',
        cardName: 'JustLight',
        subtitle: 'Software Engineering Lead',
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
        overrideLink: '/home#tech_stack_card',
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
    logo: kotlinLogo,
    projects: [
      {
        cardId: 'justlight',
        cardName: 'JustLight',
        subtitle: 'Software Engineering Lead',
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
    tagName: 'Python Projects',
    logo: pythonLogo,
    projects: [
      {
        cardId: 'tesla',
        cardName: 'Tesla',
        subtitle: 'Senior Software Engineer',
      },
      {
        cardId: 'road_mapper',
        cardName: 'Road Mapper',
        subtitle: 'EECS 493 Class Project',
      },
    ],
  },
  {
    tagName: 'React Projects',
    logo: reactLogo,
    projects: [
      {
        cardId: 'tesla',
        cardName: 'Tesla',
        subtitle: 'Senior Software Engineer',
      },
      {
        cardId: 'jpmorgan',
        cardName: 'J.P. Morgan Chase',
        subtitle: 'Software Engineering Intern',
      },
      {
        cardId: 'justlight',
        cardName: 'JustLight',
        subtitle: 'Software Engineering Lead',
      },
      {
        cardId: 'personal_website',
        cardName: 'Personal Website',
        subtitle: 'This website!',
        overrideLink: '/home#tech_stack_card',
      },
    ],
  },
  {
    logo: reactNativeLogo,
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

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  expansionPanel: {
    maxWidth: 380,
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
    width: '28px',
    height: 'auto',
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

    return (
      <Card raised={true} className="card" style={{maxWidth: 400}}>
        <a name="glossary_card" href="#glossary_card" className="gone">
          Glossary Card
        </a>
        <CardHeader
          className="card-header"
          title="Index"
        />
        <CardContent
          className={classes.expansionPanel}>
          {
            glossaryItems.map((glossaryItem) => (
              <Accordion
                key={glossaryItem.tagName}
                expanded={this.state.expanded === glossaryItem.tagName}
                className={this.expansionPanel}
                elevation={1}
                onChange={this.setExpanded(glossaryItem.tagName)}
                TransitionProps={{unmountOnExit: true}}>
                <AccordionSummary
                  expandIcon={
                    <Tooltip
                      title="Expand/collapse card"
                      arrow>
                      <IconButton size="large">
                        <ExpandMoreIcon />
                      </IconButton>
                    </Tooltip>
                  }
                  aria-label={glossaryItem.tagName}
                  aria-controls={glossaryItem.tagName + '-content'}
                  id={glossaryItem.tagName + '-header'}
                >
                  {glossaryItem.icon ? glossaryItem.icon : ''}
                  <img
                    src={glossaryItem.logo ? glossaryItem.logo : ''}
                    className={classes.tagIcon}
                    alt={glossaryItem.tagName + ' button'}
                  />
                  <Typography
                    variant="subtitle1"
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
                              '/work#' + project.cardId + '_card'}
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
