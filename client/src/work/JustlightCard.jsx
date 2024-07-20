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
  Box,
} from '@mui/material';
import DateRangeIcon from '@mui/icons-material/DateRange';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import PropTypes from 'prop-types';
import justlightScreenshotOne
  from '../static/screenshots/justlight_screenshot_1.webp';
import justlightScreenshotTwo
  from '../static/screenshots/justlight_screenshot_2.webp';
import justlightScreenshotThree
  from '../static/screenshots/justlight_screenshot_3.webp';
import justlightScreenshotFour
  from '../static/screenshots/justlight_screenshot_4.webp';
import justlightScreenshotFive
  from '../static/screenshots/justlight_screenshot_5.webp';
import justlightScreenshotSix
  from '../static/screenshots/justlight_screenshot_6.webp';
import justlightScreenshotSeven
  from '../static/screenshots/justlight_screenshot_7.webp';
import justlightScreenshotEight
  from '../static/screenshots/justlight_screenshot_8.webp';
import justlightScreenshotNine
  from '../static/screenshots/justlight_screenshot_9.webp';
import justlightScreenshotTen
  from '../static/screenshots/justlight_screenshot_10.webp';
import justlightScreenshotEleven
  from '../static/screenshots/justlight_screenshot_11.webp';
import justlightScreenshotTwelve
  from '../static/screenshots/justlight_screenshot_12.webp';
import justlightScreenshotThirteen
  from '../static/screenshots/justlight_screenshot_13.webp';
import justlightSunflower
  from '../static/screenshots/justlight_sunflower.webp';
import LikeButton from '../shared/LikeButton';

const justlightLink = `https://www.justlight.com/`;
const sunflowerAndroidLink = `https://play.google.com/store/apps/details?id=com.justlight.sunflower`;
const sunfloweriOSLink = `https://apps.apple.com/us/app/sunflower-by-justlight/id1566792431`;
const pbmDatabaseLink = `https://docs.google.com/spreadsheets/d/1ZKl5Me4XwPj4YgJCBes3VSCJjiVO4XI0tIR0rbMBj08/edit?usp=sharing`;

const tags = [
  {
    label: 'February 2021 → October 2022',
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
    label: 'Android',
  },
  {
    label: 'iOS',
  },
  {
    label: 'Firebase',
  },
  {
    label: 'JavaScript',
  },
  {
    label: 'Kotlin',
  },
  {
    label: 'React',
  },
  {
    label: 'Swift',
  },
];

const styles = {
  justlightLogo: {
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
  androidScreenshot: {
    marginTop: '12px',
    marginBottom: '12px',
    marginLeft: '4px',
    marginRight: '4px',
    width: 'auto',
    height: '100%',
    maxHeight: '340px',
  },
  iosScreenshot: {
    marginTop: '12px',
    marginBottom: '12px',
    marginLeft: '4px',
    marginRight: '4px',
    width: 'auto',
    height: '100%',
    maxHeight: '300px',
  },
  webScreenshot: {
    height: 'auto',
    width: '100%',
    maxWidth: '700px',
  },
  violet: {
    width: 'auto',
    height: '100%',
    maxHeight: '200px',
  },
  sunflower: {
    width: 'auto',
    height: '100%',
    maxHeight: '240px',
  },
};

export default function JustlightCard({ isDarkTheme }) {
  return (
    <Card
      raised
      className="large-card">
      <Accordion slotProps={{ transition: { unmountOnExit: true } }}>
        <AccordionSummary
          aria-label="JustLight"
          aria-controls="justlight-content"
          id="justlight-header"
          expandIcon={
            <Tooltip
              title="expand/collapse card"
              arrow>
              <IconButton size="small">
                <ExpandMoreIcon />
              </IconButton>
            </Tooltip>
          }>
          <a name="justlight_card" href="#justlight_card" className="gone">
            JustLight Card
          </a>
          <Box sx={styles.expansionHeaderContainer}>
            <CardHeader
              className="card-header"
              title="JustLight"
              subheader="Software Engineering Lead"
            />
            <CardMedia
              sx={styles.justlightLogo}
              image={isDarkTheme ? 'media/justlight_logo_light.png' : 'media/justlight_logo_dark.png'}
              title="JustLight logo"
              alt="JustLight logo"
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
          <CardContent sx={styles.cardContent}>
            <Typography variant="body1">
              <Link color="secondary" href={justlightLink}>JustLight</Link> is a medical device startup developing consumer products in two domains: red and infrared light therapy and UV light sanitization. JustLight&#39;s product Violet uses skin-safe UV light to disinfect human hands exponentially better than hand sanitizer or soap and water. While this product was largely developed before my time at JustLight, I played a key role in ensuring the company&#39;s software strategy was compatible with this product.  A majority of my work is on a product called Sunflower, which is a red and infrared light device that biomimics a sunflower plant.
              <br /><br />
              The Sunflower device was released as a treatment and prevention method for Alzheimer&#39;s and chronic pain, though it has many more positive effects than just those. Scientifically, this stems from the fact that almost every modern human is extremely sunlight deprived. Living and working indoors has drastically reduced the amount of sun exposure modern day humans receive compared to our ancestors. The result is consistent, predictable, preventable and ubiquitous diseases and bodily degeneration. Re-introducing the amounts of sunlight required for normal bodily functions (naturally through the sun, or artificially mimicking the important wavelengths of sunlight through LEDs) has such a profound effect on humans. Alzheimer&#39;s, MS, cancers, heart disease, osteoporosis and so many more are treatable and / or preventable with proper light exposure. I encourage anyone to read through the 6,750+ worldwide clinical studies compiled in this database to prove these claims. <Link color="secondary" href={pbmDatabaseLink}>6,750+ worldwide clinical studies compiled in this database</Link> to prove these claims.
              <br /><br />
              <img
                src={justlightSunflower}
                style={styles.sunflower}
                alt="JustLight Sunflower"
              />
              <br /><br />
              I played a pivotal role in the invention of Sunflower, developing the software integral to Sunflower&#39;s operation. The device was carefully designed to consumerize what we know scientifically into a form factor that fits in as many people&#39;s homes as possible. Ideally, people would spend enough time outside to get the amount of sunlight that their body needs. Unfortunately, in most cases this isn&#39;t possible because of our indoor lifestyles, far from the equator. Knowing that this isn&#39;t possible leads to the suggestion of some sort of indoor chamber where people can soak up their daily dosage of light and continue their normal life. This is certainly possible,, but is infeasible as a consumer product at the moment. Hence Sunflower. The flexible neck allows it to be pointed at whatever part of the body is experiencing the most issues (ex. head for Alzheimer&#39;s, the hand for arthritis, etc.) and the red and infrared lights are 100% safe even in extreme dosages. That leads us to device usability, which is where my software comes in...
              <br /><br />
              The Sunflower device has a circuit board that enables it as a Bluetooth Low Energy peripheral device. In tandem with our manufacturer and another software engineer, I designed the protocol between the Sunflower device and an Android and iOS app. The app was designed to be more than just a remote control to the Sunflower device. It is designed to show users how to use it, the science behind why it works, let them set schedules and so much more. In order to do this I needed a little more firepower, so I got a few <i><b>fantastic</b></i> software engineers on my team and we were off!
              <br></br>
              There are two consumer products and one internal product that my software department manages: the consumer Android application (<Link color="secondary" href={sunflowerAndroidLink}>check it out here</Link>), the consumer iOS application (<Link color="secondary" href={sunfloweriOSLink}>check it out here</Link>) and the internal React web admin portal.
              <br /><br />
              The Android app was built with Kotlin and takes advantage of a majority of the Jetpack and Android architecture components (with the exception of Jetpack Compose, that is a future project). The architecture of the app was carefully planned out with consideration of future features and minimal tech debt. We use Flow and StateFlow components to send data from the Firebase database / internal database back to the UI layer. After hitting the Repository layer, the data is translated to LiveData or MutableLiveData in the viewmodels and data binded to the XML views or observed from the Fragments. Settings are stored in SharedPreferences, navigation is controlled by a navigation graph, common utilities are extracted into helper classes and there is a single activity that is replaced by full screen fragments. Testing is done via unit tests, automated UI tests and manual smoke tests at the end. It is designed to scale to fit any sized Android phone or tablet.
              <br /><br />
              <img
                src={justlightScreenshotSeven}
                style={styles.androidScreenshot}
                alt="JustLight screenshot 7"
              />
              <img
                src={justlightScreenshotEight}
                style={styles.androidScreenshot}
                alt="JustLight screenshot 8"
              />
              <img
                src={justlightScreenshotNine}
                style={styles.androidScreenshot}
                alt="JustLight screenshot 9"
              />
              <img
                src={justlightScreenshotTen}
                style={styles.androidScreenshot}
                alt="JustLight screenshot 10"
              />
              <img
                src={justlightScreenshotEleven}
                style={styles.androidScreenshot}
                alt="JustLight screenshot 11"
              />
              <img
                src={justlightScreenshotTwelve}
                style={styles.androidScreenshot}
                alt="JustLight screenshot 12"
              />
              <br /><br />
              The iOS app is written primarily by two other very talented engineers under my management. It is written in Swift and SwiftUI, which allows for a very condensed codebase. It is scaled to fit any size iOS device, with a few views that have separate functionality on iPad and iPhones. It uses View / ViewModel / Service architecture, similar to the Android codebase, except it uses less of the observable pattern for better code readability. iOS is the bulk of our user base; about 70% of users are on iOS, as we are a United States product right now. Like Android, the iOS app supports light and dark mode and has consistent JustLight brand theming in fonts, colors and buttons throughout.
              <br /><br />
              <img
                src={justlightScreenshotOne}
                style={styles.iosScreenshot}
                alt="JustLight screenshot 1"
              />
              <img
                src={justlightScreenshotTwo}
                style={styles.iosScreenshot}
                alt="JustLight screenshot 2"
              />
              <img
                src={justlightScreenshotThree}
                style={styles.iosScreenshot}
                alt="JustLight screenshot 3"
              />
              <img
                src={justlightScreenshotFour}
                style={styles.iosScreenshot}
                alt="JustLight screenshot 4"
              />
              <img
                src={justlightScreenshotFive}
                style={styles.iosScreenshot}
                alt="JustLight screenshot 5"
              />
              <img
                src={justlightScreenshotSix}
                style={styles.iosScreenshot}
                alt="JustLight screenshot 6"
              />
              <br /><br />
              The admin web portal was made out of necessity. Our Firebase Firestore database holds the data model for each &#34;Routine&#34; that the user uses in the app. We did not want to go in and modify the parameters of each Routine ourselves, and we wanted the science team at the company to be able to update the treatments dynamically. One of our main value propositions was the result of putting our Routine data in Firestore so that it would not require a client update to refresh. This meant that we had less regulatory hurdles (if there was an issue, we could fix it without dealing with legacy versions of the data floating around) and a more unified customer experience. Also, less tech debt! The admin portal allows authenticated internal administrators to edit this data as new science or customer demand comes in. React fortunately has many tools baked in to make this a relatively simple codebase.
              <br /><br />
              <img
                src={justlightScreenshotThirteen}
                style={styles.webScreenshot}
                alt="JustLight screenshot 13"
              />
              <br /><br />
              I learn a ton at JustLight while tackling new coding challenges and designing a software team from scratch. The challenges posed are always interesting: What are customers thinking? What tools does the software team need? What is our security strategy? How are people enjoying themselves? Where can I provide the most value? These are all questions that I find myself tackling on a daily basis. In addition, it feels great to be working on something that I know will inevitably help millions with their diseases and pain. It is an exciting time to be alive!
            </Typography>
            <LikeButton likeType='card' likeName='justlight_card' />
          </CardContent>
        </AccordionDetails>
      </Accordion>
    </Card>
  );
};

JustlightCard.propTypes = {
  isDarkTheme: PropTypes.bool.isRequired,
};