import React from 'react';
import {
  Typography,
  Card,
  CardMedia,
  CardHeader,
  Link,
  CardContent,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Chip,
  IconButton,
  Tooltip,
} from '@mui/material';
import withStyles from '@mui/styles/withStyles';
import DateRangeIcon from '@mui/icons-material/DateRange';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import PropTypes from 'prop-types';

import amazonScreenshotOne
  from '../static/screenshots/amazon_screenshot_1.webp';
import amazonScreenshotOneFallback
  from '../static/screenshots/amazon_screenshot_1.jpg';

import awsScreenshotOne
  from '../static/screenshots/aws_screenshot_1.webp';
import awsScreenshotOneFallback
  from '../static/screenshots/aws_screenshot_1.jpg';

import awsScreenshotTwo
  from '../static/screenshots/aws_screenshot_2.webp';
import awsScreenshotTwoFallback
  from '../static/screenshots/aws_screenshot_2.jpg';

import awsScreenshotThree
  from '../static/screenshots/aws_screenshot_3.webp';
import awsScreenshotThreeFallback
  from '../static/screenshots/aws_screenshot_3.jpg';

import awsScreenshotFour
  from '../static/screenshots/aws_screenshot_4.webp';
import awsScreenshotFourFallback
  from '../static/screenshots/aws_screenshot_4.jpg';

const amazonLink = `https://www.amazon.com/`;
const sellerLink = `https://sell.amazon.com/`;
const awsLink = `https://aws.amazon.com/`;
const workspacesLink = `https://aws.amazon.com/workspaces/`;

const tags = [
  {
    label: 'July 2020 → February 2022',
    color: 'default',
    variant: 'default',
    icon: <DateRangeIcon />,
  },
  {
    label: 'Full-Time',
    color: 'primary',
    variant: 'default',
  },
  {
    label: 'AWS',
  },
  {
    label: 'Android',
  },
  {
    label: 'C#',
  },
  {
    label: 'iOS',
  },
  {
    label: 'Java',
  },
  {
    label: 'MacOS',
  },
  {
    label: 'Windows',
  },
  {
    label: 'Xamarin',
  },
];

const styles = {
  amazonLogo: {
    width: '100%',
    marginBottom: '16px',
    marginTop: '16px',
    marginLeft: '0px',
    marginRight: '0px',
    maxWidth: '500px',
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
  cardContent: {
    display: 'flex',
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  mobileScreenshot: {
    marginTop: '12px',
    marginBottom: '12px',
    marginLeft: '4px',
    marginRight: '4px',
    width: 'auto',
    height: '100%',
    maxHeight: '400px',
  },
  webScreenshot: {
    height: 'auto',
    width: '100%',
    maxWidth: '600px',
  },
};

export default function AmazonCard() {
  return (
    <Card
      raised={true}
      className="large-card">
      <Accordion
        TransitionProps={{ unmountOnExit: true }}>
        <AccordionSummary
          aria-label="Amazon &amp; Amazon Web Services"
          aria-controls="amazon-content"
          id="amazon-header"
          expandIcon={
            <Tooltip
              title="Expand/collapse card"
              arrow>
              <IconButton size="large">
                <ExpandMoreIcon />
              </IconButton>
            </Tooltip>
          }>
          <a name="amazon_card" href="#amazon_card" className="gone">
            Amazon Card
          </a>
          <div
            style={styles.expansionHeaderContainer}>
            <CardHeader
              className="card-header"
              title="Amazon &amp; Amazon Web Services"
              subheader="Software Engineer"
            />
            <CardMedia
              sx={styles.amazonLogo}
              image="/media/amazon_logo.svg"
              title="Amazon logo"
              alt="Amazon logo"
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
          <CardContent sx={styles.cardContent}>
            <Typography variant="h5" gutterBottom>
              Amazon Web Services: WorkSpaces clients team
            </Typography>
            <Typography variant="body1">
              I joined <Link color="secondary" href={awsLink}>AWS</Link> as a new graduate out of college in 2020,
              and was placed on the <Link color="secondary" href={workspacesLink}>WorkSpaces</Link> clients team.
              The Amazon WorkSpaces product is a virtual desktop that can be accessed from the browser or from native applications
              on Windows, MacOS, Linux, Android or iOS devices. My team managed the client applications for all six of these use cases.
              Users (or their administrator) provision a WorkSpace from the AWS console, which becomes &#34;their&#34; virtual computer. Then
              they can download our application on their Windows, Android etc. and log into and use &#34;their&#34; virtual computer whenever
              they want. The primary use case is business users who use Windows WorkSpaces as their work computers.
              <br /><br />
              My first project was migrating our native Android code base to our shared C# Xamarin codebase that was
              used for the Windows, MacOS and Linux apps as well. Xamarin was cool because it allowed us to reuse
              core components and enforce a strict MVC architecture across every app. Then each of the clients
              built separately and could be released whatever way we wanted (Google Play Store, direct download, etc.)
              The risk was that we would not get the cutting-edge features that roll out with new versions of native
              Android until Xamarin copied them... but this was a fine tradeoff for us because we could get the basic
              functionality to work. Since most of software engineering is reading, understanding and talking about code,
              it was a good move to pay down future technical debt and combine the codebases.
              <br /><br />
              <picture>
                <source srcSet={awsScreenshotTwo} type="image/webp" />
                <source srcSet={awsScreenshotTwoFallback} type="image/jpg" />
                <img
                  srcSet={[awsScreenshotTwo, awsScreenshotTwoFallback]}
                  style={styles.mobileScreenshot}
                  alt="AWS screenshot 2"
                />
              </picture>
              <picture>
                <source srcSet={awsScreenshotThree} type="image/webp" />
                <source srcSet={awsScreenshotThreeFallback} type="image/jpg" />
                <img
                  srcSet={[awsScreenshotThree, awsScreenshotThreeFallback]}
                  style={styles.mobileScreenshot}
                  alt="AWS screenshot 3"
                />
              </picture>
              <picture>
                <source srcSet={awsScreenshotOne} type="image/webp" />
                <source srcSet={awsScreenshotOneFallback} type="image/jpg" />
                <img
                  srcSet={[awsScreenshotOne, awsScreenshotOneFallback]}
                  style={styles.mobileScreenshot}
                  alt="AWS screenshot 1"
                />
              </picture>
              <br /><br />
              Another project I worked on was writing a C++ library to extend the usage of the Windows WorkSpaces clients to
              pass data outside of the virtual machines. For example, Amazon Chime, a video calling app, could use the
              library to pop out a video call from the WorkSpace into a separate window on the client computer. This way,
              the UDP stream can go directly between the participants instead of hopping through the virutal machine first,
              resulting in a native-like experience and much better performance. This was an interesting challenge because
              of all the design considerations of writing a library (encapsulation, threading, security, architecture, etc.)
              and I learned a ton. Working with straight C++ was fun and my teammates were awesome!
              <br /><br />
              Another aspect that I pushed myself on at AWS was operational excellence. The operations load was very high on
              the WorkSpaces team, as is fairly common in AWS. I tried to take ownership of this as much as possible and find
              root causes of the issues that plagued our team. In particular, when I first joined, high severity issues would
              wake up the on-call person most nights. I spent a lot of time trying to root-cause these issues; not just
              flip the alarm and go back to sleep. This involved looking at the mass of high severity tickets, categorizing them
              and looking at which ones were real issues and which ones we could safely ignore, then making data-driven arguments
              on how alarm thresholds could be adjusted. I also spent my free time updating our operations dashboard, aggregate
              alarms, writing SOPs, making new dashboards with additional insights, and much more. By the time I finished my
              tenure on the team, I was the top ticket-resolver since I had begun and our operations load was considerably
              lower even though we had a smaller headcount. Above all else, I was just happy that I could help my teammates
              sleep better.
              <br /><br />
              One of the most rewarding things I worked on was being a good mentor to the engineers who joined after me. I ended
              up mentoring four of the other engineers, which was a huge win-win for me. I put on a bunch of knowledge-transfer
              talks for them so that we could go through different aspects of the team and get them onboarded as quickly as
              possible. It was great for me too because I really solidified my understanding by teaching it to others. I just
              wanted the next engineers to have a better experience onboarding than I did when I joined, and I want them
              to thrive in whatever they do!
              <br /><br />
              <picture>
                <source srcSet={awsScreenshotFour} type="image/webp" />
                <source srcSet={awsScreenshotFourFallback} type="image/jpg" />
                <img
                  srcSet={[awsScreenshotFour, awsScreenshotFourFallback]}
                  style={styles.webScreenshot}
                  alt="AWS screenshot 4"
                />
              </picture>
              <br /><br />
            </Typography>
            <Typography variant="h5" gutterBottom>
              Amazon:  Selling Partner Insights &amp; Engagements team
            </Typography>
            <Typography variant="body1">
              I joined the <Link color="secondary" href={amazonLink}>Amazon</Link> <Link color="secondary" href={sellerLink}>Selling Partner Insights &amp; Engagements</Link> team
              in September 2021 on a team that managed push notifications to sellers on Amazon.com. Much like buyers on Amazon.com, sellers have
              various email and SMS messages notify them of purchases, shipments, performance insights etc. My team handled the backend infrastructure
              of these types of notifications and allowed sellers to customize which notifications they received.
              <br /><br />
              The team was young when I joined, as we had just taken some services from surrounding teams in the Selling Partner Insights &amp; Engagements
              organization and started owning them. A lot of my focus on this team was on learning more about backend and full stack development
              and helping the operations load on the team. The services that we inherited had lots of stale pipelines and deprecated packages, so
              I spent a large portion of my time managing our pipelines and setting them up to be healthier in the future. For example, I made a
              common pipeline that fed into the pipelines of most of our services, so that we could build it once and send package updates to each
              instead of building each individually every time. I also briefly worked on the design for extending our APIs to support a new mobile
              app that was being launched for vendors.
              <br /><br />
              <picture>
                <source srcSet={amazonScreenshotOne} type="image/webp" />
                <source srcSet={amazonScreenshotOneFallback} type="image/jpg" />
                <img
                  srcSet={[amazonScreenshotOne, amazonScreenshotOneFallback]}
                  style={styles.webScreenshot}
                  alt="Amazon screenshot 1"
                />
              </picture>
            </Typography>
          </CardContent>
        </AccordionDetails>
      </Accordion>
    </Card>
  );
}