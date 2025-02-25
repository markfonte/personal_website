import React from 'react';
import {
  Typography,
  Card,
  CardHeader,
  Link,
  CardContent,
  CardMedia,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Chip,
  Tooltip,
  Box,
} from '@mui/material';
import DateRangeIcon from '@mui/icons-material/DateRange';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import miSymptomsScreenshotOne
  from '../static/screenshots/mi_symptoms_screenshot_1.webp';
import miSymptomsScreenshotTwo
  from '../static/screenshots/mi_symptoms_screenshot_2.webp';
import miSymptomsScreenshotThree
  from '../static/screenshots/mi_symptoms_screenshot_3.webp';
import LikeButton from '../shared/LikeButton';

const miSymptomsLink = `https://misymptomapp.state.mi.us/`;
const covid19Link = `https://www.cdc.gov/coronavirus/2019-ncov/index.html`;
const stateOfMichiganLink = `https://www.michigan.gov/som/`;
const universityOfMichiganLink = `https://umich.edu/`;
const umichCAENTeamLink = `https://caen.engin.umich.edu/about/senior-management-team/`;
const umichITSTeamLink = `https://its.umich.edu/about/leadership`;
const jestLink = `https://jestjs.io/`;
const jmeterLink = `https://jmeter.apache.org/`;
const cypressLink = `https://www.cypress.io/`;
const unitTestingLink = `https://en.wikipedia.org/wiki/Unit_testing`;
const penTestingLink = `https://en.wikipedia.org/wiki/Penetration_test`;
const smokeTestingLink = `https://en.wikipedia.org/wiki/Smoke_testing_(software)`;
const endToEndTestingLink = `https://www.cypress.io/how-it-works/`;
const stressTestingLink = `https://en.wikipedia.org/wiki/Stress_testing`;
const trelloLink = `https://trello.com/`;
const googleAnalyticsLink = `https://analytics.google.com/analytics/web/`;
const firebasePerformanceLink = `https://firebase.google.com/docs/perf-mon`;
const appScanLink = `https://www.ibm.com/developerworks/library/se-scan/index.html`;
const pagespeedInsightsLink = `https://developers.google.com/speed/pagespeed/insights/`;
const tags = [
  {
    label: 'April 2020 → May 2020',
    color: 'default',
    variant: 'default',
    icon: <DateRangeIcon />,
  },
  {
    label: 'Startup',
    color: 'primary',
    variant: 'default',
  },
  {
    label: 'Cypress',

  },
  {
    label: 'Firebase',
  },
  {
    label: 'Jest',
  },
  {
    label: 'JMeter',
  },
];

const styles = {
  mobileScreenshot: {
    marginTop: '12px',
    marginBottom: '12px',
    marginLeft: '4px',
    marginRight: '4px',
    height: 'auto',
    width: '100%',
    maxWidth: '280px',
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
  miSymptomsLogo: {
    width: '100%',
    marginBottom: '16px',
    marginTop: '16px',
    marginLeft: '0px',
    marginRight: '0px',
    maxWidth: '200px',
  },
};

export default function MISymptomsCard() {
  return (
    <Card raised className="large-card">
      <Accordion slotProps={{ transition: { unmountOnExit: true } }}>
        <AccordionSummary
          aria-label="MI Symptoms"
          aria-controls="mi-symptoms-content"
          id="mi-symptoms-header"
          expandIcon={
            <Tooltip title="expand/collapse card" arrow>
              <ExpandMoreIcon />
            </Tooltip>
          }>
          <a name="mi_symptoms_card" href="#mi_symptoms_card" className="gone">
            MI Symptoms Card
          </a>
          <Box sx={styles.expansionHeaderContainer}>
            <CardHeader
              className="card-header"
              title="MI Symptoms"
              subheader={'Testing Team Lead'}
            />
            <CardMedia
              sx={styles.miSymptomsLogo}
              src="/media/mi_symptoms_logo.png"
              title="MI Symptoms logo"
              alt="MI Symptoms logo"
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
              I was asked to join this project, along with many others from the
              {' '}
              <Link color="secondary" href={universityOfMichiganLink}>
                University of Michigan
              </Link>
              , in response to the
              {' '}
              <Link color="secondary" href={covid19Link}>
                COVID-19 pandemic
              </Link>
              . This web application, known as
              {' '}
              <Link color="secondary" href={miSymptomsLink}>
                MI Symptoms
              </Link>
              , is a project issued by the
              {' '}
              <Link color="secondary" href={stateOfMichiganLink}>
                State of Michigan
              </Link>
              {' '}
              to track the spread of the coronavirus and give residents resources they need to fight it.
              Residents can take a survey each day through the application which asks about current symptoms,
              current temperature, test results and more. Users who are determined &#34;at-risk&#34; based on their
              symptoms are given the resources they need and can even be contacted directly by health
              professionals. No sensitive user data is stored by the application (it is sent straight to
              the State of Michigan).
              <br /> <br />
              It is backed by the highest levels of the Michigan government and is being developed by
              about 30 University of Michigan computer science juniors and seniors, along with a few professors,
              government workers, the
              {' '}
              <Link color="secondary" href={umichCAENTeamLink}>
                University of Michigan CAEN team
              </Link>
              {' '}
              and the
              {' '}
              <Link color="secondary" href={umichITSTeamLink}>
                University of Michigan ITS team
              </Link>
              . At the time of writing (May 20th, 2020), it is being tested in production with
              larger and larger groups of people.
            </Typography>
            <img
              src={miSymptomsScreenshotOne}
              style={styles.mobileScreenshot}
              title="MI Symptoms screenshot 1"
              alt="MI Symptoms screenshot 1"
            />
            <img
              src={miSymptomsScreenshotTwo}
              style={styles.mobileScreenshot}
              title="MI Symptoms screenshot 2"
              alt="MI Symptoms screenshot 2"
            />
            <img
              src={miSymptomsScreenshotThree}
              style={styles.mobileScreenshot}
              title="MI Symptoms screenshot 3"
              alt="MI Symptoms screenshot 3"
            />
            <Typography variant="body1" paragraph>
              As testing team lead, I was responsible for the day-to-day operations of the testing team.
              This was another great opportunity to improve on my leadership skills, especially with
              the added challenge of only being able to communicate remotely. I managed building out testing
              tools to cover different domains like
              <Link color="secondary" href={unitTestingLink}>
                {' '}unit testing{' '}
              </Link>
              ,
              <Link color="secondary" href={endToEndTestingLink}>
                end-to-end testing
              </Link>
              ,
              {' '}
              <Link color="secondary" href={penTestingLink}>
                security/pen testing
              </Link>
              {' '}
              and
              {' '}
              <Link color="secondary" href={stressTestingLink}>
                performance/stress testing
              </Link>
              . We built a
              {' '}
              <Link color="secondary" href={jestLink}>
                Jest
              </Link>
              {' '}
              test suite for unit testing, a
              {' '}
              <Link color="secondary" href={cypressLink}>
                Cypress
              </Link>
              {' '}
              test suite for end-to-end testing and a
              {' '}
              <Link color="secondary" href={jmeterLink}>
                JMeter
              </Link>
              {' '}
              test suite for stress testing. We put in place a process for continuously
              {' '}
              <Link color="secondary" href={smokeTestingLink}>
                smoke testing
              </Link>
              {' '}
              the application and putting actionable, reproducible issues in front of the development
              team on our
              {' '}
              <Link color="secondary" href={trelloLink}>
                Trello
              </Link>
              {' '}
              board. Everything required constant communication with all parts of the team to ensure that
              we were responding as quickly as possible to frequent requirements changes. We used tools like
              {' '}
              <Link color="secondary" href={googleAnalyticsLink}>
                Google Analytics
              </Link>
              ,
              {' '}
              <Link color="secondary" href={firebasePerformanceLink}>
                Firebase Performance Monitoring
              </Link>
              ,
              {' '}
              <Link color="secondary" href={pagespeedInsightsLink}>
                Google PageSpeed Insights
              </Link>
              , and facilitated
              the use of security tools like
              {' '}
              <Link color="secondary" href={appScanLink}>
                IBM AppScan
              </Link>
              {' '}
              from the University of Michigan ITS team - anything
              that would help the product become as robust as possible, as quickly as possible.
            </Typography>
            <Typography variant="body1" paragraph>
              I am so thankful for this experience. In my opinion, the most special part about the project
              was the way that everyone came together and sacrificed their time and energy out of the
              goodness of their hearts - simply for the prospect that they might be able to help some people.
              Thank you all!
            </Typography>
            <LikeButton likeType='card' likeName='mi_symptoms_card' />
          </CardContent>
        </AccordionDetails>
      </Accordion>
    </Card>
  );
};