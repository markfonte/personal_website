import React from 'react';
import reactLogo from '../static/vectors/react_logo.svg';
import digitalOceanLogo from '../static/images/logos/digital_ocean_logo.svg';
import expressLogo from '../static/images/logos/express_logo.svg';
import nodeLogo from '../static/images/logos/nodejs_logo.svg';
import materialUILogo from '../static/images/logos/material_ui_logo.svg';
import travisCILogo from '../static/images/logos/travis_ci_logo.svg';
import nginxLogo from '../static/images/logos/nginx_logo.svg';
import githubLogo from '../static/images/logos/github_logo.svg';
import trelloLogo from '../static/images/logos/trello_logo.svg';
import jestLogo from '../static/images/logos/jest_logo.svg';
import sqliteLogo from '../static/images/logos/sqlite_logo.svg';
import {withStyles} from '@material-ui/styles';
import PropTypes from 'prop-types';

import {
  Typography,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Link,
  Card,
  CardContent,
  CardHeader,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  IconButton,
  Tooltip,
  Chip,
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const styles = {
  logoDefault: {
    width: 'auto',
    height: '80px',
  },
  builtWithTableWrapper: {
    overflowX: 'auto',
  },
  builtWithTable: {
    minWidth: '460px',
  },
  scrollTip: {
    marginTop: '12px',
    alignSelf: 'start',
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
    margin: 0,
    padding: 0,
  },
  tags: {
    margin: '4px',
  },
};

class BuiltWithTableCard extends React.Component {
  render() {
    const {classes} = this.props;
    const digitalOceanLink = `https://www.digitalocean.com/`;
    const reactLink = `https://reactjs.org/`;
    const materialUILink = `https://material-ui.com/`;
    const expressLink = `https://expressjs.com/`;
    const nodeLink = `https://nodejs.org/`;
    const travisCILink = `https://travis-ci.org/`;
    const nginxLink = `https://www.nginx.com/`;
    const githubLink = `https://github.com/`;
    const trelloLink = `https://trello.com/`;
    const jestLink = `https://jestjs.io/`;
    const sqliteLink = `https://www.sqlite.org/index.html`;

    const rows = [
      {
        title: 'DigitalOcean',
        subtitle: 'cloud provider',
        link: digitalOceanLink,
        logo: digitalOceanLogo,
      },
      {
        title: 'Express.js',
        subtitle: 'backend framework',
        link: expressLink,
        logo: expressLogo,
      },
      {
        title: 'GitHub',
        subtitle: 'repository hosting',
        link: githubLink,
        logo: githubLogo,
      },
      {
        title: 'Jest',
        subtitle: 'UI testing',
        link: jestLink,
        logo: jestLogo,
      },
      {
        title: 'Material-UI',
        subtitle: 'UI framework',
        link: materialUILink,
        logo: materialUILogo,
      },
      {
        title: 'Nginx',
        subtitle: 'web server',
        link: nginxLink,
        logo: nginxLogo,
      },
      {
        title: 'NodeJS',
        subtitle: 'server environment',
        link: nodeLink,
        logo: nodeLogo,
      },
      {
        title: 'React',
        subtitle: 'frontend framework',
        link: reactLink,
        logo: reactLogo,
      },
      {
        title: 'SQLite',
        subtitle: 'SQL database',
        link: sqliteLink,
        logo: sqliteLogo,
      },
      {
        title: 'TravisCI',
        subtitle: 'continuous integration',
        link: travisCILink,
        logo: travisCILogo,
      },
      {
        title: 'Trello',
        subtitle: 'project management',
        link: trelloLink,
        logo: trelloLogo,
      },
    ];

    const tags = [
      {
        label: 'DigitalOcean',
      },
      {
        label: 'Express.js',
      },
      {
        label: 'GitHub',
      },
      {
        label: 'JavaScript',
      },
      {
        label: 'Jest',
      },
      {
        label: 'Material-UI',
      },
      {
        label: 'Nginx',
      },
      {
        label: 'NodeJS',
      },
      {
        label: 'React',
      },
      {
        label: 'SQLite',
      },
      {
        label: 'TravisCI',
      },
      {
        label: 'Trello',
      },
    ];
    return (
      <Card
        raised={true}
        className="card">
        <Accordion
          TransitionProps={{unmountOnExit: true}}>
          <AccordionSummary
            aria-label="Built With Table"
            aria-controls="built-with-table-content"
            id="built-with-table-header"
            expandIcon={
              <Tooltip
                title="Expand/collapse card"
                arrow>
                <IconButton style={{padding: 0}}>
                  <ExpandMoreIcon />
                </IconButton>
              </Tooltip>
            }>
            <a name="built_with_table_card" href="#built_with_table_card" className="gone">
            Built With Table Card
            </a>
            <div className={classes.expansionHeaderContainer}>
              <CardHeader
                className="cardHeader"
                title="🛠️ Built With:"
                subheader="What I used to build this website" />
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
          <AccordionDetails style={{overflowX: 'auto'}}>
            <CardContent className={classes.cardContent}>
              <div className={classes.builtWithTableWrapper}>
                <Table className={classes.builtWithTable}>
                  <TableBody>
                    {rows.map((row) => (
                      <TableRow key={row.title}>
                        <TableCell component="th" scope="row" align="left">
                          <Link href={row.link} color="textPrimary">
                            <Tooltip title={'Go to ' + row.title} placement="bottom-start">
                              <Typography variant="h6" color="textPrimary">
                                {row.title}
                              </Typography>
                            </Tooltip>
                          </Link>
                        </TableCell>
                        <TableCell align="center">
                          <img
                            src={row.logo}
                            className={classes.logoDefault}
                            alt={row.title + ' logo'}
                          />
                        </TableCell>
                        <TableCell align="right">
                          <Typography variant="subtitle2">
                            {row.subtitle}
                          </Typography>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
              <Typography className={classes.scrollTip} variant="caption" color="textSecondary">
                This table scrolls horizontally on smaller-width devices!
              </Typography>
            </CardContent>
          </AccordionDetails>
        </Accordion>
      </Card>
    );
  }
}

BuiltWithTableCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BuiltWithTableCard);
