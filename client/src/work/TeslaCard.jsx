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
} from '@mui/material';
import teslaOnboardPic from '../static/photos/tesla_onboard_pic.jpg';
import DateRangeIcon from '@mui/icons-material/DateRange';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

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
    label: 'JavaScript',
  },
  {
    label: 'Python',
  },
  {
    label: 'React',
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
};

export default function TeslaCard() {
  return (
    <Card raised={true} className="large-card">
      <Accordion slotProps={{ transition: { unmountOnExit: true } }}>
        <AccordionSummary
          aria-label="Tesla"
          aria-controls="tesla-content"
          id="tesla-header"
          expandIcon={
            <Tooltip
              title="expand/collapse card"
              arrow>
              <IconButton size="large">
                <ExpandMoreIcon />
              </IconButton>
            </Tooltip>
          }>
          <a name="tesla_card" href="#tesla_card" className="gone">
            Tesla Card
          </a>
          <div style={styles.expansionHeaderContainer}>
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
            <div>
              {tags.map((tag) => (
                <Chip
                  sx={styles.tags}
                  key={tag.label}
                  icon={tag.icon ? tag.icon : <div />}
                  label={tag.label}
                  variant={tag.variant ? tag.variant : 'outlined'}
                  color={tag.color ? tag.color : 'secondary'}
                  clickable />
              ))}
            </div>
          </div>
        </AccordionSummary>
        <AccordionDetails>
          <CardContent>
            <Typography variant="body1" paragraph>
              Working on vehicle diagnostics firmware and in-vehicle UI as part of the Service Engineering organization
            </Typography>
            <img src={teslaOnboardPic}
            />
          </CardContent>
        </AccordionDetails>
      </Accordion>
    </Card>
  );
};