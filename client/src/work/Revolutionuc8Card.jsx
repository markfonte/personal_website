import React from 'react';
import denialDialLogo from '../static/logos/denial_dial_logo.svg';
import {
  Typography,
  Card,
  CardMedia,
  CardContent,
  CardHeader,
  Link,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Chip,
  IconButton,
  Tooltip,
} from '@mui/material';
import DateRangeIcon from '@mui/icons-material/DateRange';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const denialDialDevpostLink = `https://devpost.com/software/revolution-banking`;
const denialDialGithubLink = `https://github.com/nathan815/denial-dial`;
const twilioLink = `https://www.twilio.com/`;
const expressLink = `https://expressjs.com/`;
const nodeLink = `https://nodejs.org/`;
const mongodbLink = `https://www.mongodb.com/`;

const tags = [
  {
    label: 'March 2020',
    color: 'default',
    variant: 'default',
    icon: <DateRangeIcon />,
  },
  {
    label: 'Hackathon',
    color: 'primary',
    variant: 'default',
  },
  {
    label: 'Express.js',
  },
  {
    label: 'JavaScript',
  },
];

const styles = {
  revolutionuc8_logo: {
    width: '100%',
    marginBottom: '16px',
    marginTop: '16px',
    marginLeft: '0px',
    marginRight: '0px',
    maxWidth: '500px',
  },
  denialDialLogo: {
    width: '40%',
    height: 'auto',
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

export default function RevolutionUC8Card() {
  return (
    <Card raised={true} className="large-card">
      <Accordion slotProps={{ transition: { unmountOnExit: true } }}>
        <AccordionSummary
          aria-label="Revolution UC 8"
          aria-controls="revolutionuc8-content"
          id="revolutionuc8-header"
          expandIcon={
            <Tooltip
              title="expand/collapse card"
              arrow>
              <IconButton size="large">
                <ExpandMoreIcon />
              </IconButton>
            </Tooltip>
          }>
          <a name="revolutionuc8_card" href="#revolutionuc8_card" className="gone">
            RevolutionUC 8 Card
          </a>
          <div style={styles.expansionHeaderContainer}>
            <CardHeader
              className="card-header"
              title="Denial Dial"
              subheader="Hackathon Project @ RevolutionUC 8"
            />
            <CardMedia
              sx={styles.revolutionuc8_logo}
              image="/media/revolutionuc_logo.webp"
              title="RevolutionUC 8 logo"
              alt="RevolutionUC 8 logo"
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
              At RevolutionUC 8, we spent at least the first 12 hours of the 24-hour hackathon
              bouncing
              between a bunch of different ideas. We ended up building a
              &quot;rejection hotline&quot;
              called <i>Denial Dial</i> using

              {' '}
              <Link color="secondary" href={twilioLink}>
                Twilio&#39;s APIs.
              </Link>
              {' '}

              Basically, we set up a

              {' '}
              <Link color="secondary" href={mongodbLink}>
                MongoDB
              </Link>

              ,
              {' '}
              <Link color="secondary" href={nodeLink}>
                NodeJS
              </Link>
              {' '}

              and

              {' '}
              <Link color="secondary" href={expressLink}>
                Express
              </Link>
              {' '}

              server such that if anyone called (614) 782-8989 we
              could prank them a little bit. The idea was that you could give someone this
              fake phone number if you didn&apos;t want to give them your real phone number.
              Then we would connect two people who were given that fake phone number,
              and had them communicate with each other, causing mass confusion!
            </Typography>
            <Typography variant="body1" paragraph>
              Our server also had some cool side features like an automated message that
              played if anyone called the number. It was very silly, and we were unable to make
              as nice of a product as we did at other hackathons because we were in such a time
              crunch after pivoting so much!
            </Typography>
            <Typography variant="body1" paragraph>
              There was no user interface, so unfortunately I don&apos;t have any
              screenshots to show.
            </Typography>
            <Typography variant="body1" paragraph>
              We did not win any awards with this project, but it was still a great experience!
              We learned a lot from pivoting our idea so frequently, and we got to use some
              cool technologies like MongoDB and the Twilio API.
            </Typography>
            <Typography variant="body1" paragraph>
              View it on

              {' '}
              <Link color="secondary" href={denialDialDevpostLink}>
                Devpost
              </Link>
              {' '}

              or

              {' '}
              <Link color="secondary" href={denialDialGithubLink}>
                Github
              </Link>
            </Typography>
            <img
              src={denialDialLogo}
              style={styles.denialDialLogo}
              title="CongoAI logo"
              alt="CongoAI logo"
            />
          </CardContent>
        </AccordionDetails>
      </Accordion>
    </Card>
  );
};
