import React from 'react';
import parentPortalScreenshotOne
  from '../static/images/screenshots/laz_parent_portal_screenshot_1.webp';
import parentPortalScreenshotOneFallback
  from '../static/images/screenshots/laz_parent_portal_screenshot_1.jpg';

import parentPortalScreenshotTwo
  from '../static/images/screenshots/laz_parent_portal_screenshot_2.webp';
import parentPortalScreenshotTwoFallback
  from '../static/images/screenshots/laz_parent_portal_screenshot_2.jpg';

import parentPortalScreenshotThree
  from '../static/images/screenshots/laz_parent_portal_screenshot_3.webp';
import parentPortalScreenshotThreeFallback
  from '../static/images/screenshots/laz_parent_portal_screenshot_3.jpg';

import badgeScreenshot
  from '../static/images/screenshots/laz_badge_screenshot.webp';
import badgeScreenshotFallback
  from '../static/images/screenshots/laz_badge_screenshot.png';
import {
  Typography,
  Card,
  CardMedia,
  CardContent,
  CardHeader,
  Link,
  withStyles,
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  Chip,
  IconButton,
  Tooltip,
} from '@material-ui/core';
import DateRangeIcon from '@material-ui/icons/DateRange';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import PropTypes from 'prop-types';

const styles = {
  lazLogo: {
    width: '100%',
    maxWidth: '500px',
    marginBottom: '16px',
    marginTop: '16px',
    marginLeft: '0px',
    marginRight: '0px',
  },
  mobileScreenshot: {
    marginTop: '12px',
    marginBottom: '12px',
    marginLeft: '4px',
    marginRight: '4px',
    height: 'auto',
    width: '100%',
    maxWidth: '280px',
  },
  webScreenshot: {
    height: 'auto',
    width: '100%',
    maxWidth: '800px',
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

class LAZCard extends React.Component {
  render() {
    const {classes} = this.props;
    const lazLink = `https://www.learninga-z.com/`;
    const parentPortalLink = `https://www.kidsa-z.com/main/ParentHome`;
    const kidsazLink = `https://www.kidsa-z.com/`;
    const androidLink = `https://developer.android.com/`;
    const androidKidazLink = `https://play.google.com/store/apps/details?id=com.learninga_z.onyourown`;
    const kotlinLink = `https://kotlinlang.org/`;
    const javaLink = `https://www.java.com/en/`;
    const kotlinAdoptionLink = `https://developer.android.com/kotlin`;
    const kotlinGradualTypingLink = `https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/`;
    const kotlinLamdaFunctionsLink = `https://kotlinlang.org/docs/reference/lambdas.html`;
    const kotlinNullSafetyLink = `https://kotlinlang.org/docs/reference/null-safety.html`;
    const kotlinAndroidSpecificFeaturesLink = `https://developer.android.com/kotlin`;
    const kotlinInteroperableLink = `https://developer.android.com/kotlin/interop`;
    const studentBadgeProjectLink = `https://www.learninga-z.com/site/breakroom/kidsaz-student-badges`;
    const phpLink = `https://www.php.net/`;
    const mySqlLink = `https://www.mysql.com/`;
    const javascriptLink = `https://www.javascript.com/`;
    const htmlLink = `https://developer.mozilla.org/en-US/docs/Web/HTML`;
    const cssLink = `https://developer.mozilla.org/en-US/docs/Web/CSS`;

    const tags = [
      {
        label: 'May 2017 → August 2018',
        color: 'default',
        variant: 'default',
        icon: <DateRangeIcon />,
      },
      {
        label: 'Internship',
        color: 'primary',
        variant: 'default',
      },
      {
        label: 'Android',
      },
      {
        label: 'Kotlin',
      },
      {
        label: 'JavaScript',
      },
      {
        label: 'PHP',
      },
      {
        label: 'MySQL',
      },
    ];
    return (
      <Card raised={true} className="card">
        <ExpansionPanel
          TransitionProps={{unmountOnExit: true}}>
          <ExpansionPanelSummary
            aria-label="Learning A-Z"
            aria-controls="learningaz-content"
            id="learningaz-header"
            expandIcon={
              <Tooltip
                title="Expand/collapse card"
                arrow>
                <IconButton style={{padding: 0}}>
                  <ExpandMoreIcon />
                </IconButton>
              </Tooltip>
            }>
            <a name="laz_card" href="#laz_card" className="gone">
            Learning A-Z Card
            </a>
            <div className={classes.expansionHeaderContainer}>
              <CardHeader
                className="cardHeader"
                title="Learning A-Z"
                subheader="Software Engineering Intern"
              />
              <CardMedia
                className={classes.lazLogo}
                image="/images/laz_logo.svg"
                title="Learning A-Z logo"
                component="img"
                alt="Learning A-Z logo"
              />
              <div>
                {tags.map((tag) => (
                  <Chip
                    className={classes.tags}
                    key={tag.label}
                    icon={tag.icon ? tag.icon : <div/>}
                    label={tag.label}
                    variant={tag.variant ? tag.variant : 'outlined'}
                    color={tag.color ? tag.color : 'secondary'}
                    clickable />
                ))}
              </div>
            </div>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <CardContent>
              <Typography variant="body1">
              I worked at
                {' '}
                <Link color="secondary" href={lazLink}>
              Learning A-Z
                </Link>
                {' '}
              in Summer 2017 and Summer 2018 on two separate projects.
              Learning A-Z is a educational software company for elementary school students, and
              both of my projects were features to serve the students. Each summer, outside of the main
              project I worked on a small project with the other interns and presented on a computer
              science-related research topic. I was fortunate enough to have two great mentors
              and had the opportunity work alongside some awesome coworkers and fellow interns!
              </Typography>
              <Typography variant="h5" gutterBottom>
                <br />Summer 2018
              </Typography>
              <Typography variant="body1" gutterBottom>
              In Summer 2018, I worked on the Android
                {' '}
                <Link color="secondary" href={parentPortalLink}>
              Parent Portal
                </Link>
                {' '}
              project. The Parent Portal is a dashboard for each student&#39;s
              parents to view their child&#39;s activity on the
                {' '}
                <Link color="secondary" href={kidsazLink}>
              Kids A-Z
                </Link>
                {' '}
              website. At the time,
              the Parent Portal only existed as a web app.
                {' '}
                <i>
                (fun fact: that was a project started by my brother John several years ago)
                </i>
              . My task was to bring that functionality to native mobile. I built an
                {' '}
                <Link color="secondary" href={androidLink}>
              Android
                </Link>
                {' '}
              app using the same APIs as the web application. I built a separate application
              than the
                {' '}
                <Link color="secondary" href={androidKidazLink}>
              existing Learning A-Z Android application
                </Link>
                {' '}
              because I wanted parents to have a streamlined way of viewing their children&#39;s
              activity instead of adding another user segment to the existing application.
              Later, they merged my code into the existing Android application, which now has seperate
              logins for students, their parents, and their teachers.
                <br/><br/>
              I built it using
                {' '}
                <Link color="secondary" href={kotlinLink}>
              Kotlin
                </Link>
                {' '}
              (as opposed to
                {' '}
                <Link color="secondary" href={javaLink}>
              Java
                </Link>
              ), which had
                {' '}
                <Link color="secondary" href={kotlinAdoptionLink}>
              just been officially adopted as an official language for Android
                </Link>
                {' '}
              at the time. I found that Kotlin was much easier to write clean code with.
              It supports many
                {' '}
                <Link color="secondary" href={kotlinGradualTypingLink}>
                  gradual typing concepts
                </Link>
              , modern features like
                {' '}
                <Link color="secondary" href={kotlinLamdaFunctionsLink}>
              lamda functions
                </Link>
                {' '}
              and
                {' '}
                <Link color="secondary" href={kotlinNullSafetyLink}>
              nullable types/null safety
                </Link>
              , and Android-specific features like the ability to
                {' '}
                <Link color="secondary" href={kotlinAndroidSpecificFeaturesLink}>
              refer directly to XML objects
                </Link>
              . Plus, it is
                {' '}
                <Link color="secondary" href={kotlinInteroperableLink}>
              interoperable with Java code
                </Link>
                {' '}
              (meaning you can have part-Kotlin, part-Java projects)!
              I would, without question, recommend that any Android developer use Kotlin instead
              of Java for all of their projects.
                <br/><br/>
              The project was picked up
              by a full-time developer and is
                {' '}
                <Link color="secondary" href={androidKidazLink}>
              live in production
                </Link>
              ! The following screenshots are from
              the production application:
              </Typography>
              <picture>
                <source srcSet={parentPortalScreenshotOne} type="image/webp"/>
                <source srcSet={parentPortalScreenshotOneFallback} type="image/jpg"/>
                <img
                  srcSet={[parentPortalScreenshotOne, parentPortalScreenshotOneFallback]}
                  className={classes.mobileScreenshot}
                  alt="LAZ parent portal screenshot 1"
                />
              </picture>
              <picture>
                <source srcSet={parentPortalScreenshotTwo} type="image/webp"/>
                <source srcSet={parentPortalScreenshotTwoFallback} type="image/jpg"/>
                <img
                  srcSet={[parentPortalScreenshotTwo, parentPortalScreenshotTwoFallback]}
                  className={classes.mobileScreenshot}
                  alt="LAZ parent portal screenshot 2"
                />
              </picture>
              <picture>
                <source srcSet={parentPortalScreenshotThree} type="image/webp"/>
                <source srcSet={parentPortalScreenshotThreeFallback} type="image/jpg"/>
                <img
                  srcSet={[parentPortalScreenshotThree, parentPortalScreenshotThreeFallback]}
                  className={classes.mobileScreenshot}
                  alt="LAZ parent portal screenshot 3"
                />
              </picture>
              <Typography variant="h5" gutterBottom>
                <br />Summer 2017
              </Typography>
              <Typography variant="body1" gutterBottom>
            In Summer 2017, I worked on the
                {' '}
                <Link color="secondary" href={studentBadgeProjectLink}>
              Student Badge Project
                </Link>
              . This is an incentives program for the students in which they receive &#34;badges&#34;
              for achieving goals such as &#34;Read at least one book a day for five straight days&#34;
              or &#34;Complete eight 100% quizzes in a row&#34;
                {' '}
                <br/><br/>
              This badge program was only an idea at the time that I took it on, so much of the work was
              in planning. I particularly learned a lot from the struggle with how to represent the badges
              in the database in a way that minimizes load, and where to hook in the code that could tell
              us when students earned badges while still minimizing the number of API calls.
              I am so thankful that I had great engineers around me that could fix and help me learn
              from my numerous mistakes throughout that summer. This project was
              my first formal experience writing server-side code in
                {' '}
                <Link color="secondary" href={phpLink}>
              PHP
                </Link>
                {' '}
              /
                {' '}
                <Link color="secondary" href={mySqlLink}>
              MySQL
                </Link>
                {' '}
              and client-side code in
                {' '}
                <Link color="secondary" href={javascriptLink}>
              JavaScript
                </Link>
                {' '}
              /
                {' '}
                <Link color="secondary" href={htmlLink}>
              HTML
                </Link>
                {' '}
              /
                {' '}
                <Link color="secondary" href={cssLink}>
              CSS
                </Link>
              . I also partially integrated it into the
                {' '}
                <Link color="secondary" href={androidKidazLink}>
              existing Kids A-Z Android application
                </Link>
              .
                <br/><br/>
              The project was picked up by full-time developers and is
                {' '}
                <Link color="secondary" href={androidKidazLink}>
              live in production
                </Link>
                {' '}
              today! The following screenshot is from the production site:
              </Typography>
              <picture>
                <source srcSet={badgeScreenshot} type="image/webp"/>
                <source srcSet={badgeScreenshotFallback} type="image/png"/>
                <img
                  srcSet={[badgeScreenshot, badgeScreenshotFallback]}
                  className={classes.webScreenshot}
                  alt="LAZ badge screenshot"
                />
              </picture>
              <Typography variant="body1">
                <br/>As a final note, I met some of the best people I have ever known during my two
                summers at Learning A-Z. They are welcoming, encouraging, great engineers and just
                good people. I am very thankful for my time there. To anyone looking for a job in Ann
                Arbor, I would certainly recommend Learning A-Z. Feel free to contact me and I would
                be happy to give more details on what my experience was like working there!
              </Typography>
            </CardContent>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </Card>
    );
  }
}

LAZCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LAZCard);
