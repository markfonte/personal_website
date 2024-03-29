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
import justlightScreenshotOne
  from '../static/screenshots/justlight_screenshot_1.webp';
import justlightScreenshotOneFallback
  from '../static/screenshots/justlight_screenshot_1.jpg';
import justlightScreenshotTwo
  from '../static/screenshots/justlight_screenshot_2.webp';
import justlightScreenshotTwoFallback
  from '../static/screenshots/justlight_screenshot_2.jpg';
import justlightScreenshotThree
  from '../static/screenshots/justlight_screenshot_3.webp';
import justlightScreenshotThreeFallback
  from '../static/screenshots/justlight_screenshot_3.jpg';
import justlightScreenshotFour
  from '../static/screenshots/justlight_screenshot_4.webp';
import justlightScreenshotFourFallback
  from '../static/screenshots/justlight_screenshot_4.jpg';
import justlightScreenshotFive
  from '../static/screenshots/justlight_screenshot_5.webp';
import justlightScreenshotFiveFallback
  from '../static/screenshots/justlight_screenshot_5.jpg';
import justlightScreenshotSix
  from '../static/screenshots/justlight_screenshot_6.webp';
import justlightScreenshotSixFallback
  from '../static/screenshots/justlight_screenshot_6.jpg';
import justlightScreenshotSeven
  from '../static/screenshots/justlight_screenshot_7.webp';
import justlightScreenshotSevenFallback
  from '../static/screenshots/justlight_screenshot_7.jpg';
import justlightScreenshotEight
  from '../static/screenshots/justlight_screenshot_8.webp';
import justlightScreenshotEightFallback
  from '../static/screenshots/justlight_screenshot_8.jpg';
import justlightScreenshotNine
  from '../static/screenshots/justlight_screenshot_9.webp';
import justlightScreenshotNineFallback
  from '../static/screenshots/justlight_screenshot_9.jpg';
import justlightScreenshotTen
  from '../static/screenshots/justlight_screenshot_10.webp';
import justlightScreenshotTenFallback
  from '../static/screenshots/justlight_screenshot_10.jpg';
import justlightScreenshotEleven
  from '../static/screenshots/justlight_screenshot_11.webp';
import justlightScreenshotElevenFallback
  from '../static/screenshots/justlight_screenshot_11.jpg';
import justlightScreenshotTwelve
  from '../static/screenshots/justlight_screenshot_12.webp';
import justlightScreenshotTwelveFallback
  from '../static/screenshots/justlight_screenshot_12.jpg';
import justlightScreenshotThirteen
  from '../static/screenshots/justlight_screenshot_13.webp';
import justlightScreenshotThirteenFallback
  from '../static/screenshots/justlight_screenshot_13.jpg';
import justlightSunflower
  from '../static/screenshots/justlight_sunflower.webp';
import justlightSunflowerFallback
  from '../static/screenshots/justlight_sunflower.jpg';

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

class JustlightCard extends React.Component {
  render() {
    const {classes} = this.props;
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
    return (
      <Card
        raised={true}
        className="large-card">
        <Accordion
          TransitionProps={{unmountOnExit: true}}>
          <AccordionSummary
            aria-label="JustLight"
            aria-controls="justlight-content"
            id="justlight-header"
            expandIcon={
              <Tooltip
                title="Expand/collapse card"
                arrow>
                <IconButton size="large">
                  <ExpandMoreIcon />
                </IconButton>
              </Tooltip>
            }>
            <a name="justlight_card" href="#justlight_card" className="gone">
            JustLight Card
            </a>
            <div
              className={classes.expansionHeaderContainer}>
              <CardHeader
                className="card-header"
                title="JustLight"
                subheader="Software Engineering Lead"
              />
              <CardMedia
                className={classes.justlightLogo}
                image={this.props.isDarkTheme ? 'media/justlight_logo_light.png' : 'media/justlight_logo_dark.png'}
                title="JustLight logo"
                alt="JustLight logo"
                component="img"
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
          </AccordionSummary>
          <AccordionDetails>
            <CardContent className={classes.cardContent}>
              <Typography variant="body1">
                <Link color="secondary" href={justlightLink}>JustLight</Link> is a medical device startup developing consumer products in two domains: red and infrared light therapy and UV light sanitization. JustLight&#39;s product Violet uses skin-safe UV light to disinfect human hands exponentially better than hand sanitizer or soap and water. While this product was largely developed before my time at JustLight, I played a key role in ensuring the company&#39;s software strategy was compatible with this product.  A majority of my work is on a product called Sunflower, which is a red and infrared light device that biomimics a sunflower plant.
                <br/><br/>
                The Sunflower device was released as a treatment and prevention method for Alzheimer&#39;s and chronic pain, though it has many more positive effects than just those. Scientifically, this stems from the fact that almost every modern human is extremely sunlight deprived. Living and working indoors has drastically reduced the amount of sun exposure modern day humans receive compared to our ancestors. The result is consistent, predictable, preventable and ubiquitous diseases and bodily degeneration. Re-introducing the amounts of sunlight required for normal bodily functions (naturally through the sun, or artificially mimicking the important wavelengths of sunlight through LEDs) has such a profound effect on humans. Alzheimer&#39;s, MS, cancers, heart disease, osteoporosis and so many more are treatable and / or preventable with proper light exposure. I encourage anyone to read through the 6,750+ worldwide clinical studies compiled in this database to prove these claims. <Link color="secondary" href={pbmDatabaseLink}>6,750+ worldwide clinical studies compiled in this database</Link> to prove these claims.
                <br/><br/>
                <picture>
                  <source srcSet={justlightSunflower} type="image/webp"/>
                  <source srcSet={justlightSunflowerFallback} type="image/jpg"/>
                  <img
                    srcSet={[justlightSunflower, justlightSunflowerFallback]}
                    className={classes.sunflower}
                    alt="JustLight Sunflower"
                  />
                </picture>
                <br/><br/>
                I played a pivotal role in the invention of Sunflower, developing the software integral to Sunflower&#39;s operation. The device was carefully designed to consumerize what we know scientifically into a form factor that fits in as many people&#39;s homes as possible. Ideally, people would spend enough time outside to get the amount of sunlight that their body needs. Unfortunately, in most cases this isn&#39;t possible because of our indoor lifestyles, far from the equator. Knowing that this isn&#39;t possible leads to the suggestion of some sort of indoor chamber where people can soak up their daily dosage of light and continue their normal life. This is certainly possible,, but is infeasible as a consumer product at the moment. Hence Sunflower. The flexible neck allows it to be pointed at whatever part of the body is experiencing the most issues (ex. head for Alzheimer&#39;s, the hand for arthritis, etc.) and the red and infrared lights are 100% safe even in extreme dosages. That leads us to device usability, which is where my software comes in...
                <br/><br/>
                The Sunflower device has a circuit board that enables it as a Bluetooth Low Energy peripheral device. In tandem with our manufacturer and another software engineer, I designed the protocol between the Sunflower device and an Android and iOS app. The app was designed to be more than just a remote control to the Sunflower device. It is designed to show users how to use it, the science behind why it works, let them set schedules and so much more. In order to do this I needed a little more firepower, so I got a few <i><b>fantastic</b></i> software engineers on my team and we were off!
                <br></br>
                There are two consumer products and one internal product that my software department manages: the consumer Android application (<Link color="secondary" href={sunflowerAndroidLink}>check it out here</Link>), the consumer iOS application (<Link color="secondary" href={sunfloweriOSLink}>check it out here</Link>) and the internal React web admin portal.
                <br/><br/>
                The Android app was built with Kotlin and takes advantage of a majority of the Jetpack and Android architecture components (with the exception of Jetpack Compose, that is a future project). The architecture of the app was carefully planned out with consideration of future features and minimal tech debt. We use Flow and StateFlow components to send data from the Firebase database / internal database back to the UI layer. After hitting the Repository layer, the data is translated to LiveData or MutableLiveData in the viewmodels and data binded to the XML views or observed from the Fragments. Settings are stored in SharedPreferences, navigation is controlled by a navigation graph, common utilities are extracted into helper classes and there is a single activity that is replaced by full screen fragments. Testing is done via unit tests, automated UI tests and manual smoke tests at the end. It is designed to scale to fit any sized Android phone or tablet.
                <br/><br/>
                <picture>
                  <source srcSet={justlightScreenshotSeven} type="image/webp"/>
                  <source srcSet={justlightScreenshotSevenFallback} type="image/jpg"/>
                  <img
                    srcSet={[justlightScreenshotSeven, justlightScreenshotSevenFallback]}
                    className={classes.androidScreenshot}
                    alt="JustLight screenshot 7"
                  />
                </picture>
                <picture>
                  <source srcSet={justlightScreenshotEight} type="image/webp"/>
                  <source srcSet={justlightScreenshotEightFallback} type="image/jpg"/>
                  <img
                    srcSet={[justlightScreenshotEight, justlightScreenshotEightFallback]}
                    className={classes.androidScreenshot}
                    alt="JustLight screenshot 8"
                  />
                </picture>
                <picture>
                  <source srcSet={justlightScreenshotNine} type="image/webp"/>
                  <source srcSet={justlightScreenshotNineFallback} type="image/jpg"/>
                  <img
                    srcSet={[justlightScreenshotNine, justlightScreenshotNineFallback]}
                    className={classes.androidScreenshot}
                    alt="JustLight screenshot 9"
                  />
                </picture>
                <picture>
                  <source srcSet={justlightScreenshotTen} type="image/webp"/>
                  <source srcSet={justlightScreenshotTenFallback} type="image/jpg"/>
                  <img
                    srcSet={[justlightScreenshotTen, justlightScreenshotTenFallback]}
                    className={classes.androidScreenshot}
                    alt="JustLight screenshot 10"
                  />
                </picture>
                <picture>
                  <source srcSet={justlightScreenshotEleven} type="image/webp"/>
                  <source srcSet={justlightScreenshotElevenFallback} type="image/jpg"/>
                  <img
                    srcSet={[justlightScreenshotEleven, justlightScreenshotElevenFallback]}
                    className={classes.androidScreenshot}
                    alt="JustLight screenshot 11"
                  />
                </picture>
                <picture>
                  <source srcSet={justlightScreenshotTwelve} type="image/webp"/>
                  <source srcSet={justlightScreenshotTwelveFallback} type="image/jpg"/>
                  <img
                    srcSet={[justlightScreenshotTwelve, justlightScreenshotTwelveFallback]}
                    className={classes.androidScreenshot}
                    alt="JustLight screenshot 12"
                  />
                </picture>
                <br/><br/>
                The iOS app is written primarily by two other very talented engineers under my management. It is written in Swift and SwiftUI, which allows for a very condensed codebase. It is scaled to fit any size iOS device, with a few views that have separate functionality on iPad and iPhones. It uses View / ViewModel / Service architecture, similar to the Android codebase, except it uses less of the observable pattern for better code readability. iOS is the bulk of our user base; about 70% of users are on iOS, as we are a United States product right now. Like Android, the iOS app supports light and dark mode and has consistent JustLight brand theming in fonts, colors and buttons throughout.
                <br/><br/>
                <picture>
                  <source srcSet={justlightScreenshotOne} type="image/webp"/>
                  <source srcSet={justlightScreenshotOneFallback} type="image/jpg"/>
                  <img
                    srcSet={[justlightScreenshotOne, justlightScreenshotOneFallback]}
                    className={classes.iosScreenshot}
                    alt="JustLight screenshot 1"
                  />
                </picture>
                <picture>
                  <source srcSet={justlightScreenshotTwo} type="image/webp"/>
                  <source srcSet={justlightScreenshotTwoFallback} type="image/jpg"/>
                  <img
                    srcSet={[justlightScreenshotTwo, justlightScreenshotTwoFallback]}
                    className={classes.iosScreenshot}
                    alt="JustLight screenshot 2"
                  />
                </picture>
                <picture>
                  <source srcSet={justlightScreenshotThree} type="image/webp"/>
                  <source srcSet={justlightScreenshotThreeFallback} type="image/jpg"/>
                  <img
                    srcSet={[justlightScreenshotThree, justlightScreenshotThreeFallback]}
                    className={classes.iosScreenshot}
                    alt="JustLight screenshot 3"
                  />
                </picture>
                <picture>
                  <source srcSet={justlightScreenshotFour} type="image/webp"/>
                  <source srcSet={justlightScreenshotFourFallback} type="image/jpg"/>
                  <img
                    srcSet={[justlightScreenshotOne, justlightScreenshotOneFallback]}
                    className={classes.iosScreenshot}
                    alt="JustLight screenshot 4"
                  />
                </picture>
                <picture>
                  <source srcSet={justlightScreenshotFive} type="image/webp"/>
                  <source srcSet={justlightScreenshotFiveFallback} type="image/jpg"/>
                  <img
                    srcSet={[justlightScreenshotFive, justlightScreenshotFiveFallback]}
                    className={classes.iosScreenshot}
                    alt="JustLight screenshot 5"
                  />
                </picture>
                <picture>
                  <source srcSet={justlightScreenshotSix} type="image/webp"/>
                  <source srcSet={justlightScreenshotSixFallback} type="image/jpg"/>
                  <img
                    srcSet={[justlightScreenshotSix, justlightScreenshotSixFallback]}
                    className={classes.iosScreenshot}
                    alt="JustLight screenshot 6"
                  />
                </picture>
                <br/><br/>
                The admin web portal was made out of necessity. Our Firebase Firestore database holds the data model for each &#34;Routine&#34; that the user uses in the app. We did not want to go in and modify the parameters of each Routine ourselves, and we wanted the science team at the company to be able to update the treatments dynamically. One of our main value propositions was the result of putting our Routine data in Firestore so that it would not require a client update to refresh. This meant that we had less regulatory hurdles (if there was an issue, we could fix it without dealing with legacy versions of the data floating around) and a more unified customer experience. Also, less tech debt! The admin portal allows authenticated internal administrators to edit this data as new science or customer demand comes in. React fortunately has many tools baked in to make this a relatively simple codebase.
                <br/><br/>
                <picture>
                  <source srcSet={justlightScreenshotThirteen} type="image/webp"/>
                  <source srcSet={justlightScreenshotThirteenFallback} type="image/jpg"/>
                  <img
                    srcSet={[justlightScreenshotThirteen, justlightScreenshotThirteenFallback]}
                    className={classes.webScreenshot}
                    alt="JustLight screenshot 13"
                  />
                </picture>
                <br/><br/>
                I learn a ton at JustLight while tackling new coding challenges and designing a software team from scratch. The challenges posed are always interesting: What are customers thinking? What tools does the software team need? What is our security strategy? How are people enjoying themselves? Where can I provide the most value? These are all questions that I find myself tackling on a daily basis. In addition, it feels great to be working on something that I know will inevitably help millions with their diseases and pain. It is an exciting time to be alive!
              </Typography>
            </CardContent>
          </AccordionDetails>
        </Accordion>
      </Card>
    );
  }
}

JustlightCard.propTypes = {
  classes: PropTypes.object.isRequired,
  isDarkTheme: PropTypes.bool.isRequired,
};

export default withStyles(styles)(JustlightCard);
