import React from 'react';
import reactLogo from '../static/logos/react_logo.svg';
import digitalOceanLogo from '../static/logos/digital_ocean_logo.svg';
import expressLogo from '../static/logos/express_logo.svg';
import nodeLogo from '../static/logos/nodejs_logo.svg';
import materialUILogo from '../static/logos/material_ui_logo.svg';
import nginxLogo from '../static/logos/nginx_logo.svg';
import githubLogoLight from '../static/logos/github_logo_light.svg';
import githubLogoDark from '../static/logos/github_logo_dark.svg';
import trelloLogo from '../static/logos/trello_logo.svg';
import jestLogo from '../static/logos/jest_logo.svg';
import sqliteLogo from '../static/logos/sqlite_logo.svg';
import PropTypes from 'prop-types';

import {
  Card,
  CardContent,
  CardHeader,
  Avatar,
  Chip,
  CardActions,
  Box,
} from '@mui/material';
import LikeButton from '../shared/LikeButton';



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
    icon: githubLogoLight,
    iconDark: githubLogoDark,
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
    margin: '0px',
    padding: '0px',
  },
  tags: {
    margin: '4px',
  },
  avatar: {
    height: '80px',
  },
};

export default function TechStackCard({ isDarkTheme }) {
  return (
    <Card
      raised
      className="large-card">
      <a name="tech_stack_card" href="#tech_stack_card" className="gone">
        Tech Stack Card
      </a>
      <CardHeader
        className="card-header"
        title="Tech Stack 🛠️"
        subheader=""
        sx={{ marginTop: '16px' }} />
      <CardContent sx={styles.cardContent}>
        <Box sx={styles.techStackWrapper}>
          {tags.map((tag) => (
            <Chip
              sx={styles.tags}
              key={tag.label}
              avatar={!isDarkTheme && tag.iconDark ? <Avatar alt={tag.label} src={tag.iconDark + ""} /> : <Avatar alt={tag.label} src={tag.icon + ""} />}
              label={tag.label}
              variant={tag.variant ? tag.variant : 'outlined'}
              size="large"
              clickable={false} />
          ))}
        </Box>
      </CardContent>
      <hr />
      <CardActions sx={{ justifyContent: 'flex-end' }}>
        <LikeButton likeType='card' likeName='tech_stack_card' />
      </CardActions>
    </Card>
  );
};

TechStackCard.propTypes = {
  isDarkTheme: PropTypes.bool.isRequired,
};