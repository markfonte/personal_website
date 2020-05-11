import React from 'react';
import reactLogo from '../static/vectors/react_logo.svg';
import digitalOceanLogo from '../static/images/logos/digital_ocean_logo.webp';
import expressLogo from '../static/images/logos/express_logo.svg';
import nodeLogo from '../static/images/logos/nodejs_logo.webp';
import materialUILogo from '../static/images/logos/material_ui_logo.svg';
import travisCILogo from '../static/images/logos/travis_ci_logo.webp';
import nginxLogo from '../static/images/logos/nginx_logo.webp';
import githubLogo from '../static/images/logos/github_logo.webp';
import trelloLogo from '../static/images/logos/trello_logo.webp';
import jestLogo from '../static/images/logos/jest_logo.webp';
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
} from '@material-ui/core';

const styles = {
  logoDefault: {
    width: 'auto',
    height: '80px',
  },
  builtWithTableWrapper: {
    overflowX: 'auto',
  },
  builtWithTable: {
    minWidth: '520px',
  },
  scrollTip: {
    marginTop: '8px',
  },
};

class BuiltWithTable extends React.Component {
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

    const rows = [
      {
        title: 'DigitalOcean',
        subtitle: 'cloud provider',
        link: digitalOceanLink,
        logo: digitalOceanLogo,
      },
      {
        title: 'Express',
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
    return (
      <div>
        <Card raised={true} className="card">
          <CardHeader title="Built With:" />
          <CardContent>
            <div className={classes.builtWithTableWrapper}>
              <Table className={classes.builtWithTable}>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow key={row.title}>
                      <TableCell component="th" scope="row" align="left">
                        <Link href={row.link}>
                          <Typography variant="h6" color="textPrimary">
                            {row.title}
                          </Typography>
                        </Link>
                      </TableCell>
                      <TableCell align="center">
                        <img
                          src={row.logo}
                          className={classes.logoDefault}
                          alt="express"
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
        </Card>
      </div>
    );
  }
}

BuiltWithTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BuiltWithTable);
