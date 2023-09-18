import React from 'react';
import reactLogo from '../static/logos/react_logo.svg';
import digitalOceanLogo from '../static/logos/digital_ocean_logo.svg';
import expressLogo from '../static/logos/express_logo.svg';
import nodeLogo from '../static/logos/nodejs_logo.svg';
import materialUILogo from '../static/logos/material_ui_logo.svg';
import nginxLogo from '../static/logos/nginx_logo.svg';
import githubLogo from '../static/logos/github_logo.svg';
import trelloLogo from '../static/logos/trello_logo.svg';
import jestLogo from '../static/logos/jest_logo.svg';
import sqliteLogo from '../static/logos/sqlite_logo.svg';
import {withStyles} from '@mui/styles';
import PropTypes from 'prop-types';

import {
  Card,
  CardContent,
  CardHeader,
  Avatar,
  Chip,
} from '@mui/material';

const styles = {
  techStackWrapper: {
    overflowX: 'auto',
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
  avatar: {
    height: '80px',
  },
};

class TechStackCard extends React.Component {
  render() {
    const {classes} = this.props;

    const tags = [
      {
        label: 'DigitalOcean',
        icon: digitalOceanLogo,
      },
      {
        label: 'Express.js',
        icon: expressLogo,
      },
      {
        label: 'GitHub',
        icon: githubLogo,
      },
      {
        label: 'Jest',
        icon: jestLogo,
      },
      {
        label: 'Material-UI',
        icon: materialUILogo,
      },
      {
        label: 'Nginx',
        icon: nginxLogo,
      },
      {
        label: 'NodeJS',
        icon: nodeLogo,
      },
      {
        label: 'React',
        icon: reactLogo,
      },
      {
        label: 'SQLite',
        icon: sqliteLogo,
      },
      {
        label: 'Trello',
        icon: trelloLogo,
      },
    ];
    return (
      <Card
        raised={true}
        className="large-card">
        <a name="tech_stack_card" href="#tech_stack_card" className="gone">
          Tech Stack Card
        </a>
        <CardHeader
          className="card-header"
          title="🛠️ Tech Stack"
          subheader="What I used to build this website:" />
        <CardContent className={classes.cardContent}>
          <div className={classes.techStackWrapper}>
            {tags.map((tag) => (
              <Chip
                className={classes.tags}
                key={tag.label}
                avatar={<Avatar alt={tag.label} src={tag.icon} />}
                label={tag.label}
                variant={tag.variant ? tag.variant : 'outlined'}
                size="large"
                clickable={false} />
            ))}
          </div>
        </CardContent>
      </Card>
    );
  }
}

TechStackCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TechStackCard);
