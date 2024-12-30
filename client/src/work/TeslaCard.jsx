import React from 'react';
import {
  Typography,
  Card,
  CardMedia,
  CardContent,
  CardHeader,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Chip,
  IconButton,
  Tooltip,
  Box,
} from '@mui/material';
import teslaOnboardPhoto from '../static/photos/tesla_onboard_photo.jpg';
import teslaCyberPhoto from '../static/photos/tesla_cyber_photo.webp';
import DateRangeIcon from '@mui/icons-material/DateRange';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import LikeButton from '../shared/LikeButton';

const tags = [
  {
    label: 'January 2023 → Present',
    color: 'default',
    variant: 'default',
    icon: <DateRangeIcon />,
  },
  {
    label: 'Full Time',
    color: 'primary',
    variant: 'default',
  },
  {
    label: 'C',
  },
  {
    label: 'C++',
  },
  {
    label: 'JavaScript',
  },
  {
    label: 'Python',
  },
  {
    label: 'React',
  },
  {
    label: 'React Native',
  },
];

const styles = {
  teslaBanner: {
    width: '100%',
    maxWidth: '400px',
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
  teslaPhoto: {
    margin: '4px',
    height: 'auto',
    width: '100%',
    maxWidth: '300px',
  },
};

export default function TeslaCard() {
  return (
    <Card raised className="large-card">
      <Accordion slotProps={{ transition: { unmountOnExit: true } }}>
        <AccordionSummary
          aria-label="Tesla"
          aria-controls="tesla-content"
          id="tesla-header"
          expandIcon={
            <Tooltip
              title="expand/collapse card"
              arrow>
              <IconButton size="small">
                <ExpandMoreIcon />
              </IconButton>
            </Tooltip>
          }>
          <a name="tesla_card" href="#tesla_card" className="gone">
            Tesla Card
          </a>
          <Box sx={styles.expansionHeaderContainer}>
            <CardHeader
              className="card-header"
              title="Tesla"
              subheader="Senior Software Engineer" />
            <CardMedia
              sx={styles.teslaBanner}
              image="/media/tesla_logo.svg"
              title="Tesla banner"
              alt="Tesla banner"
              component="img"
            />
            <Box>
              {tags.map((tag) => (
                <Chip
                  sx={styles.tags}
                  key={tag.label}
                  icon={tag.icon ? tag.icon : null}
                  label={tag.label}
                  variant={tag.variant ? tag.variant : 'outlined'}
                  color={tag.color ? tag.color : 'secondary'}
                  clickable />
              ))}
            </Box>
          </Box>
        </AccordionSummary>
        <AccordionDetails>
          <CardContent>
            <Typography variant="body1" paragraph>
              Developing in-vehicle diagnostics firmware and center display UI development for Tesla vehicles in the Service Engineering organization.
              This involves owning, maintaining and/or contributing to the on-vehicle diagnostics interface, vehicle compliance with Diagnostics over IP protocol, Right-To-Repair efforts, technician-facing diagnostic tools and much more.
              Development is full-stack: from Linux buildroot to C++ infrastructure to Python application layer to React and React Native (mobile app) development.
              My goal is to continually improve the experience of diagnosing and repairing Tesla vehicles for Tesla Service technicians, independent repairers and customers.
              It&#39;s a blast! ⚡️🚗
            </Typography>
            <Typography variant="body1" sx={{ textAlign: 'left' }} paragraph>
              <b>Some of my responsibilities include:</b><br />
              · Writing and owning the core logic of the Maintenance Summary / Service History feature<br />
              · Co-writing and owning the DoIP service which communicates with diagnostic tools<br />
              · Co-owning the core logic of the ODIN diagnostic software for Service<br />
              · Contributing to the Vehicle Ops mobile application for Service<br />
              · Contributing to the Service Mode UI in the vehicle display<br />
              · Contributing to the Transport Mode UI in the vehicle display<br />
              · Mentoring some fantastic interns! (shoutout Yassine and Jason)
            </Typography>

            <img style={styles.teslaPhoto} src={teslaOnboardPhoto} /> <img style={styles.teslaPhoto} src={teslaCyberPhoto} />
            <LikeButton likeType='card' likeName='tesla_card' />
          </CardContent>
        </AccordionDetails>
      </Accordion>
    </Card>
  );
};