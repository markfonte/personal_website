import React from 'react';
import './built_with_table.css';
import reactLogo from '../static/vectors/react_logo.svg';
import digitalOceanLogo from '../static/images/digital_ocean_logo.png';
import expressLogo from '../static/images/express_logo.png';
import nodeLogo from '../static/images/nodejs_logo.png';
import materialUILogo from '../static/images/material_ui_logo.png';
import travisCILogo from '../static/images/travis_ci_logo.png';
import nginxLogo from '../static/images/nginx_logo.png';
import githubLogo from '../static/images/github_logo.png';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import 'typeface-roboto';
import {Typography} from '@material-ui/core';
import Link from '@material-ui/core/Link';

class BuiltWithTable extends React.Component {
  render() {
    const digitalOceanLink = `https://www.digitalocean.com/`;
    const reactLink = `https://reactjs.org/`;
    const materialUILink = `https://material-ui.com/`;
    const expressLink = `https://expressjs.com/`;
    const nodeLink = `https://nodejs.org/`;
    const travisCILink = `https://travis-ci.org/`;
    const nginxLink = `https://www.nginx.com/`;
    const githubLink = `https://github.com/`;
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
    ];
    return (
      <div>
        <Typography variant="h5" id="built-with-title">
          Built With:
        </Typography>
        <Paper id="built-with-table-root">
          <div id="built-with-table-wrapper">
            <Table id="built-with-table">
              <TableBody>
                {rows.map((row, i) => (
                  <TableRow key={i}>
                    <TableCell component="th" scope="row" align="left">
                      <Link href={row.link}>
                        <Typography variant="title">
                          {row.title}
                        </Typography>
                      </Link>
                    </TableCell>
                    <TableCell align="center">
                      <img
                        src={row.logo}
                        className="logo-default"
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
        </Paper>
      </div>
    );
  }
}

export default BuiltWithTable;
