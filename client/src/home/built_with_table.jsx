import React from 'react';
import reactLogo from '../static/vectors/react_logo.svg';
import digitalOceanLogo from '../static/images/logos/digital_ocean_logo.png';
import expressLogo from '../static/images/logos/express_logo.svg';
import nodeLogo from '../static/images/logos/nodejs_logo.png';
import materialUILogo from '../static/images/logos/material_ui_logo.svg';
import travisCILogo from '../static/images/logos/travis_ci_logo.png';
import nginxLogo from '../static/images/logos/nginx_logo.png';
import githubLogo from '../static/images/logos/github_logo.png';
import trelloLogo from '../static/images/logos/trello_logo.png';
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
    width: '80px',
    maxHeight: '80px',
  },
  builtWithTableWrapper: {
    overflowX: 'auto',
  },
  builtWithTable: {
    minWidth: '520px',
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
