import React from 'react';

import instEventsScreenshotOne
  from '../static/screenshots/instevents_screenshot_1.webp';
import instEventsScreenshotTwo
  from '../static/screenshots/instevents_screenshot_2.webp';
import instEventsScreenshotThree
  from '../static/screenshots/instevents_screenshot_3.webp';
import mhacksNathanAndMark
  from '../static/photos/mhacks_mark_and_nathan.webp';

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
  Tooltip,
  Box,
} from '@mui/material';
import DateRangeIcon from '@mui/icons-material/DateRange';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import LikeButton from '../shared/LikeButton';
const instEventsDevpostLink = `https://devpost.com/software/instevent`;
const instEventsGithubLink = `https://github.com/markfonte/InstEvents`;
const nathanWebsiteLink = `https://nathanieljohnson.me/`;
const mhacksLink = `https://staging.mhacks.org/`;
const ala256Link = `https://atlas.ai.umich.edu/course/ALA%20256/`;
const googleMapsLink = `https://www.google.com/maps`;
const recyclerViewLink =
  `https://developer.android.com/reference/kotlin/androidx/recyclerview/widget/RecyclerView`;
const cardsLink = `https://material.io/develop/android/components/cards/`;
const androidLink = `https://developer.android.com/`;
const timePickerLink = `https://developer.android.com/reference/android/widget/TimePicker`;
const datePickerLink = `https://developer.android.com/reference/android/widget/DatePicker`;
const googlePlacesLink = `https://developers.google.com/places/web-service/intro`;
const kotlinLink = `https://kotlinlang.org/`;
const androidJetpackLink = `https://developer.android.com/jetpack`;

const tags = [
  {
    label: 'October 2019',
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
    label: 'Android',
  },
  {
    label: 'Android Jetpack',
  },
  {
    label: 'Kotlin',
  },
  {
    label: 'Firebase',
  },
];

const styles = {
  mhacks12Banner: {
    width: '100%',
    marginBottom: '16px',
    marginTop: '16px',
    marginLeft: '0px',
    marginRight: '0px',
  },
  logo: {
    width: '40%', height: 'auto',
  },
  screenshot: {
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
};

export default function MHacks12Card() {
  return (
    <Card raised className="large-card">
      <Accordion slotProps={{ transition: { unmountOnExit: true } }}>
        <AccordionSummary
          aria-label="MHacks 12"
          aria-controls="mhacks12-content"
          id="mhacks12-header"
          expandIcon={
            <Tooltip title="expand/collapse card" arrow>
              <ExpandMoreIcon />
            </Tooltip>
          }>
          <a name="mhacks12_card" href="#mhack12_card" className="gone">
            MHacks 12 Card
          </a>
          <Box sx={styles.expansionHeaderContainer}>
            <CardHeader
              className="card-header"
              title="InstEvents"
              subheader="Hackathon Project @ MHacks 12"
            />
            <CardMedia
              sx={styles.mhacks12Banner}
              image="/media/mhacks_banner.webp"
              title="MHacks 12 banner"
              alt="MHacks 12 banner"
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
              This project was definitely my favorite hackathon project.

              {' '}
              <Link color="secondary" href={nathanWebsiteLink}>
                Nathan
              </Link>
              {' '}

              and I made the InstEvents app during the 36 hours of

              {' '}
              <Link color="secondary" href={mhacksLink}>
                MHacks 12
              </Link>

              . The idea for the app
              came out of

              {' '}
              <Link color="secondary" href={ala256Link}>
                one of my entrepreneurship classes
              </Link>
              {' '}

              where we were asked to &quot;explore&quot;
              something new on campus every week.
              It didn&apos;t matter where we went - concerts, festivals, restaurants
              - as long as it was something we had
              never done before.
              Thus, I was craving an app that I could open up to instantly view current events in my area - and
              our hackathon project was born!
            </Typography>
            <Typography variant="body1" paragraph>
              Built in

              {' '}
              <Link color="secondary" href={kotlinLink}>
                Kotlin
              </Link>
              {' '}

              and

              {' '}
              <Link color="secondary" href={androidJetpackLink}>
                Android Jetpack
              </Link>

              , the

              {' '}
              <Link color="secondary" href={androidLink}>
                Android
              </Link>
              {' '}

              app that we built
              features a

              {' '}
              <Link color="secondary" href={googleMapsLink}>
                Google Maps
              </Link>
              {' '}

              view that immediately opens to show today&apos;s current and upcoming events. In
              addition, it allows users to browse current and upcoming events in a clean

              {' '}
              <Link color="secondary" href={recyclerViewLink}>
                RecyclerView
              </Link>
              {' '}

              /

              {' '}
              <Link color="secondary" href={cardsLink}>
                Cards
              </Link>
              {' '}

              list. Users
              can add events with an interface that features

              {' '}
              <Link color="secondary" href={datePickerLink}>
                date pickers
              </Link>

              ,

              {' '}
              <Link color="secondary" href={timePickerLink}>
                time pickers
              </Link>

              , address autocomplete using the

              {' '}
              <Link color="secondary" href={googlePlacesLink}>
                Google Places API
              </Link>

              , the ability to add a cover photo and more!
            </Typography>
            <Typography variant="body1" paragraph>
              For this app, we focused on making sure all of the features that we completed were done well. For example,
              we put lots of extra time into making sure the &quot;Add Event&quot; flow was as seamless as possible,
              instead of
              using that time to partially complete some of our stretch goals. The advantage of this was a better
              user experience at the expense of less features.
            </Typography>
            <Typography variant="body1" paragraph>
              I see the competitive advantage of this app as the fact that anyone can post an event.
              This, in combination with the built-in Google Maps view, allows for a <i>location-based </i>
              sorting of events as opposed to the normal <i>popularity-based</i> sorting of events.
              In other words, events
              with only 30 people attending get the same weight on the map as those with 5,000. This allows for an
              <b><i> even playing field</i></b> and is a concept we have seldom seen before.
            </Typography>
            <img
              src={instEventsScreenshotThree}
              style={styles.screenshot}
              alt="InstEvents screenshot 3"
            />
            <img
              src={instEventsScreenshotOne}
              style={styles.screenshot}
              alt="InstEvents screenshot 1"
            />
            <img
              src={instEventsScreenshotTwo}
              style={styles.screenshot}
              alt="InstEvents screenshot 2"
            />
            <Typography variant="body1" paragraph>
              We never released the app to the public, the main reason being that we were unable
              to find a reliable, free events API online to pull from that could supplement user-entered
              events. We also did not win any awards with it, but there were lots of projects and very
              few awards given out at MHacks 12. We had a great time and learned a lot while making a
              product that we are definitely proud of!
            </Typography>
            <Typography variant="body1" paragraph>
              View it on
              {' '}
              <Link color="secondary" href={instEventsDevpostLink}>
                Devpost
              </Link>
              {' '}
              or
              {' '}
              <Link color="secondary" href={instEventsGithubLink}>
                Github
              </Link>
            </Typography>
            <img
              src={mhacksNathanAndMark}
              style={styles.screenshot}
              alt="Nathan and Mark MHacks 12"
            />
            <LikeButton likeType='card' likeName='mhacks_card' />
          </CardContent>
        </AccordionDetails>
      </Accordion>
    </Card>
  );
};