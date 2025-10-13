import React from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  IconButton,
  Link,
  Tooltip,
  Typography,
  Box,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import newsArticle1 from "../static/photos/news_article_1.webp";
import newsArticle2 from "../static/photos/news_article_2.webp";
import newsArticle3 from "../static/photos/news_article_3.webp";
import newsArticle4 from "../static/photos/news_article_4.webp";
import newsArticle5 from "../static/photos/news_article_5.webp";
import newsArticle6 from "../static/photos/news_article_6.webp";
import newsArticle7 from "../static/photos/news_article_7.webp";
import newsArticle8 from "../static/photos/news_article_8.webp";
import newsArticle9 from "../static/photos/news_article_9.webp";
import newsArticle10 from "../static/photos/news_article_10.webp";
import newsArticle11 from "../static/photos/news_article_11.webp";
import newsArticle13 from "../static/photos/news_article_13.webp";
import newsArticle14 from "../static/photos/news_article_14.webp";
import newsArticle15 from "../static/photos/news_article_15.webp";
import newsArticle16 from "../static/photos/news_article_16.webp";
import newsArticle17 from "../static/photos/news_article_17.webp";
import PropTypes from "prop-types";

import LikeButton from "../shared/LikeButton";

import githubLogoLight from "../static/logos/github_logo_light.svg";
import githubLogoDark from "../static/logos/github_logo_dark.svg";
import linkedinLogo from "../static/logos/linkedin_logo.svg";
import instagramLogo from "../static/logos/instagram_logo.svg";
import twitterLogo from "../static/logos/twitter_logo.svg";

const highlightedArticles = [
  {
    id: 16,
    title: "I'm hiring!",
    link: "https://www.linkedin.com/posts/mark-fonte_backend-engineer-diagnostics-vehicle-software-activity-7378258360573489152-symS",
    date: "October 5, 2025",
    cover: (
      <iframe
        src="https://www.linkedin.com/embed/feed/update/urn:li:share:7378258359910633473"
        style={{ height: 520, maxWidth: 377, width: "100%" }}
        allowFullScreen
        frameBorder="0"
        title="Mark Fonte's job posting"
      />
    ),
    blurb: `Come join my team 🫡`,
    isQuote: false,
    isEmbedded: true,
    relationship: "I am the team lead and hiring manager for these positions",
  },
  {
    id: 17,
    title: "InsideEVs' Toolbox breakdown",
    date: "August 26, 2025",
    link: "https://insideevs.com/news/770132/tesla-toolbox-diagnostic-software-mechanic/",
    cover: newsArticle17,
    blurb: `Everything is possible, from resetting the latch sensors to performing a fluid flush and refill procedure. These systems are what mechanics use to get pin-level data about where electrical faults occur, and detailed breakdowns of fault code set criteria. Drive unit replacements and high-voltage battery replacements are also possible using Tesla Toolbox 3, because it's exactly the same software that Tesla uses at its Service Centers. It's great that Tesla offers an official diagnostics tool. There are also service manuals available for free. If you're willing to learn, though, there's no reason that you can't keep these cars running yourself.`,
    isQuote: true,
    relationship: "I am the team lead for the Tesla Toolbox software team",
  },
];

const articles = [
  {
    id: 16,
    title: "Maintenance Summary feature",
    date: "August 2, 2025",
    link: "https://www.notateslaapp.com/news/2629/teslas-maintenance-summary-teslas-digital-service-records",
    cover: newsArticle16,
    blurb:
      "Late last year, Tesla added a new feature called Maintenance Summary that makes it easier to keep track of your vehicle's maintenance. These are digital records that are kept with your vehicle, even after you sell it or trade it in.\nThis is an excellent feature for owners to be familiar with, not only to be reminded of upcoming maintenance but also to let future owners of the vehicle know the maintenance that has been performed.",
    isQuote: true,
    relationship:
      "Antoine Desanti and I built and own Maintenance Summary on all Tesla vehicles",
  },
  {
    id: 15,
    title: "Robotaxi launch in Austin!",
    link: "https://x.com/srihari__/status/1936884576661704904",
    date: "June 22, 2025",
    cover: newsArticle15,
    blurb: `@Tesla_AI is the most hardcore AI team on earth. A decade of hard work on to building best AI software and hardware to start @robotaxi service for the public. Today establishes the new era of physical AI dominance for Tesla. So grateful to be part of this mission!`,
    isQuote: true,
    relationship:
      "Antoine Desanti, Leon Vieth and I built and own the software that the Tesla Robotaxi fleet uses to maintenance the vehicles each night",
  },
  {
    id: 14,
    title: "Tesla mobile app v4.43.5",
    link: "https://www.notateslaapp.com/tesla-app-updates/version/4.43.5/release-notes",
    date: "March 28, 2025",
    cover: newsArticle14,
    blurb: `See some of the Service Improvements shipped in this release`,
    isQuote: false,
    relationship:
      "I was on the Service mobile app team and wrote some of the features mentioned here",
  },
  {
    id: 13,
    title: "Tesla mobile app v4.42.5",
    link: "https://www.notateslaapp.com/tesla-app-updates/version/4.42.5/release-notes",
    date: "March 05, 2025",
    cover: newsArticle13,
    blurb: `See some of the Service Improvements shipped in this release`,
    isQuote: false,
    relationship:
      "I was on the Service mobile app team and wrote some of the features mentioned here",
  },
  {
    id: 11,
    title: "Tesla mobile app v4.41.5",
    link: "https://www.notateslaapp.com/tesla-app-updates/version/4.41.5/release-notes",
    cover: newsArticle11,
    date: "January 31, 2025",
    blurb: `See some of the Service Improvements shipped in this release`,
    isQuote: false,
    relationship:
      "I was on the Service mobile app team and wrote some of the features mentioned here",
  },
  {
    id: 8,
    title: "Maintenance Summary feature",
    link: "https://x.com/tesla_raj/status/1865275664481587253",
    cover: newsArticle8,
    date: "December 07, 2024",
    blurb: `Antoine Desanti and I released a customer-facing extension of the Service History panel, called Maintenance Summary, which shows a simplified view of the last time each category of maintenance was performed on the vehicle. It's easily accessible in the Service tab on the vehicle touchscreen.`,
    isQuote: false,
  },
  {
    id: 7,
    title: "Service History feature",
    link: "https://www.notateslaapp.com/news/2367/first-look-at-teslas-new-service-history-feature-photos",
    cover: newsArticle7,
    date: "November 12, 2024",
    blurb: `Antoine Desanti and I released a panel on all vehicles in Service Mode that allows to users to view and record the physical maintenance that was performed on it. This adds transparency and even persists change of ownership and factory reset.`,
    isQuote: false,
  },
  {
    id: 9,
    title: "Service Mode Plus via mobile app",
    link: "https://service.tesla.com/docs/ModelY/ServiceManual/en-us/GUID-AF834DEF-F232-4A61-8248-98612C2AD7E7.html",
    cover: newsArticle9,
    date: "May 16, 2024",
    blurb: `Sam Charles and I released a feature on the Vehicle Ops mobile app that enters the vehicle into Service Mode Plus and unlocks the Gateway with a single button click. Since it uses Bluetooth, a technician no longer needs to have wired connection to the vehicle in order to enter into this state!`,
    isQuote: false,
  },
  {
    id: 10,
    title: "Screenshots via ODIN / Toolbox",
    link: "https://www.youtube.com/watch?v=kynjY6b31og",
    cover: newsArticle10,
    date: "February 05, 2024",
    blurb: `Learn how to take a screenshot of your Tesla's center display. This new screenshot feature is enabled on vehicles with Tesla firmware 2024.2.2.1 and above using Tesla's Toolbox software. See service.tesla.com for prices and access`,
    isQuote: true,
    relationship:
      "Harsha Laxman and I wrote and shipped this small feature for ODIN (on the vehicle) and Toolbox (web app)",
  },
  {
    id: 2,
    title: "Tesla diagnostics over OBD port",
    link: "https://n.news.naver.com/mnews/article/029/0002817931",
    cover: newsArticle2,
    date: "June 06, 2023",
    blurb: `I helped implement the service that implements the DoIP Protocol (ISO 13400-2) to support these Korean regulations`,
    isQuote: false,
  },
  // {
  //     id: 1,
  //     title: 'Tesla LinkedIn announcement',
  //     link: 'https://www.linkedin.com/posts/mark-fonte_im-excited-to-share-that-ive-started-a-activity-7025561418129186816-G3Z6',
  //     cover: newsArticle1,
  //     date: 'January 23, 2023',
  //     blurb: `I'm excited to share that I've started a new position as a Software Engineer at Tesla working on onboard diagnostics firmware! Life is good!`,
  //     isQuote: true,
  // },
  {
    id: 6,
    title: "Eypex performs hostile takeover of JustLight",
    link: "https://www.businesswire.com/news/home/20230328005203/en/Automotive-Lighting-Supplier-Eypex-Corporation-Enters-Consumer-Market-Through-Acquisition-of-JustLight%E2%84%A2",
    cover: newsArticle6,
    date: "March 28, 2023",
    blurb: (
      <>
        Eypex Corporation, an automotive supplier and early investor in us at
        JustLight, performed a hostile takeover using the U.S. court system and
        their willingness to lie, steal, forge documents, threaten, intimidate
        and perform illegal acts. Their owner, CEO, head of engineering, and
        many more spearheaded this effort. They built our first generation
        product, which was riddled with defects, extremely expensive, and
        neither FDA nor FCC compliant (and still isn&apos;t)... so we found a
        much better manufacturer in Light Tree Ventures. With other revenue
        streams to fund their legal misdoings and an aptitude for vengeance,
        they filed bogus claims against us in court - then lost, appealed, and
        waited until they had bled us dry of legal fees and investor confidence.
        Eventually they bought our assets out of bankruptcy and pretended it was
        an acquisition. <b>It was not.</b>
      </>
    ),
    isQuote: false,
    relationship:
      "I was the software engineering team lead at JustLight, and a minority shareholder in the company. I was in the room with them and our exec team as they lied, cheated and performed illegal acts. Best of luck to them 😆",
  },
  {
    id: 5,
    title: "JustLight launches FDA clinical trials",
    link: "https://www.medicaldevice-network.com/news/justlight-sunflower-rx-alzheimers-disease/",
    cover: newsArticle5,
    date: "April 07, 2022",
    blurb: `JustLight has launched clinical trials to evaluate its Sunflower Rx medical device, which provides smart photobiomodulation (PBM) treatment for Alzheimer's disease. PBM is the medicinal use of red or near-infrared light for repairing, energising and healing cells in the body without any side effects. The device uses specific wavelengths of near-infrared light to bypass the skull and be directly absorbed by the brain ... Developed in partnership with Kaiyan Medical and Light Tree Ventures, the technology aims to be the first US Food and Drug Administration (FDA)-approved safe and effective medical device for Alzheimer's in the world.`,
    isQuote: true,
    relationship:
      "I was the software engineering team lead at JustLight, and a minority shareholder in the company. This was a major step for the company at the time, and would have passed clinical trials if it wasn't for Eypex's ineptitude",
  },
  // {
  //     id: 4,
  //     title: 'Juwan Howard!',
  //     link: 'https://www.mlive.com/wolverines/2022/04/michigan-basketball-2023-recruiting-board.html',
  //     cover: newsArticle4,
  //     date: 'April 07, 2022',
  //     blurb: `Watching a Michigan women's basketball game with Juwan. He's the best! 〽️`,
  //     isQuote: false,
  // },
  // {
  //     id: 3,
  //     title: 'MI Symptoms app',
  //     link: 'https://cse.engin.umich.edu/stories/students-lead-the-way-on-state-of-michigan-web-application-to-help-curb-the-spread-of-covid-19',
  //     cover: newsArticle3,
  //     date: 'June 22, 2020',
  //     blurb: 'I helped other University of Michigan engineering students build an application during the early days of Covid that was used by the State of Michigan to track symptoms',
  //     isQuote: false,
  // }
];

const githubLink = `https://github.com/markfonte`;
const linkedinLink = `https://linkedin.com/in/mark-fonte/`;
const instagramLink = `https://www.instagram.com/mark_fonte21/`;
const twitterLink = `https://x.com/mark_fonte21`;

const links = [
  {
    name: "GitHub",
    image: githubLogoLight,
    imageDark: githubLogoDark,
    link: githubLink,
  },
  {
    name: "LinkedIn",
    image: linkedinLogo,
    link: linkedinLink,
  },
  {
    name: "Instagram",
    image: instagramLogo,
    link: instagramLink,
  },
  {
    name: "Twitter",
    image: twitterLogo,
    link: twitterLink,
  },
];

const styles = {
  newsBanner: {
    width: "100%",
    marginTop: "4px",
    marginBottom: "0px",
    padding: "0px",
  },
  cardActionIcon: {
    width: "24px",
    height: "24px",
  },
  expansionHeaderContainer: {
    display: "flex",
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  articleCover: {
    maxWidth: "385px",
    width: "100%",
  },
  highlightedArticle: {
    maxWidth: "374px",
    margin: "8px",
    padding: "4px",
  },
  article: {
    maxWidth: "385px",
    width: "100%",
    margin: "8px",
    padding: "4px",
  },
  articles: {
    display: "flex",
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    flexWrap: "wrap",
  },
};

export default function NewsCard({ isDarkTheme }) {
  return (
    <Card raised className="large-card">
      <Accordion>
        <AccordionSummary
          aria-label="News"
          aria-controls="news-content"
          id="news-header"
          expandIcon={
            <Tooltip title="expand / collapse card" arrow>
              <ExpandMoreIcon />
            </Tooltip>
          }
        >
          <a name="news_card" href="#news_card" className="gone">
            News Card
          </a>
          <Box sx={styles.expansionHeaderContainer}>
            <CardHeader
              className="card-header"
              title={"Recent News 📰"}
              subheader="expand to see more! →"
            />

            <Box sx={styles.articles}>
              {highlightedArticles.map((article) => (
                <Card raised key={article.id} sx={styles.highlightedArticle}>
                  {article.isEmbedded === true ? (
                    article.cover
                  ) : (
                    <img
                      src={article.cover}
                      style={styles.articleCover}
                      loading="lazy"
                    />
                  )}
                  <br />
                  <Link variant="h5" href={article.link} underline="hover">
                    {article.title}
                  </Link>
                  <Typography variant="subtitle1">
                    {"📅 " + article.date}
                  </Typography>
                  <Typography variant="body1" paragraph>
                    {article.isQuote ? (
                      <i>&quot;{article.blurb}&quot;</i>
                    ) : (
                      article.blurb
                    )}{" "}
                    {article.isQuote ? (
                      <Link href={article.link} underline="hover">
                        {" "}
                        […]
                      </Link>
                    ) : (
                      <Link href={article.link} underline="hover">
                        {" "}
                        [view article]{" "}
                      </Link>
                    )}
                  </Typography>
                  {article.relationship && (
                    <Box onClick={(e) => e.stopPropagation()}>
                      <Accordion
                        sx={{
                          boxShadow: "none",
                          "&:before": { display: "none" },
                        }}
                      >
                        <AccordionSummary
                          expandIcon={<ExpandMoreIcon />}
                          sx={{
                            padding: "0 8px",
                            minHeight: "40px !important",
                            "& .MuiAccordionSummary-content": {
                              margin: "8px 0 !important",
                            },
                          }}
                        >
                          <Typography variant="button" color="primary">
                            Why is this relevant to me?
                          </Typography>
                        </AccordionSummary>
                        <AccordionDetails sx={{ padding: "0 16px 16px" }}>
                          <Typography variant="body2" color="text.secondary">
                            {article.relationship}
                          </Typography>
                        </AccordionDetails>
                      </Accordion>
                    </Box>
                  )}
                </Card>
              ))}
            </Box>
          </Box>
        </AccordionSummary>
        <AccordionDetails sx={{ padding: 0 }}>
          <CardContent sx={{ padding: 0 }}>
            <Box sx={styles.articles}>
              {articles.map((article) => (
                <Card raised key={article.id} sx={styles.article}>
                  <img
                    src={article.cover}
                    style={styles.articleCover}
                    loading="lazy"
                  />
                  <br />
                  <Link variant="h5" href={article.link} underline="hover">
                    {article.title}
                  </Link>
                  <Typography variant="subtitle1">
                    {"📅 " + article.date}
                  </Typography>
                  <Typography variant="body1" paragraph>
                    {article.isQuote ? (
                      <i>&quot;{article.blurb}&quot;</i>
                    ) : (
                      article.blurb
                    )}{" "}
                    {article.isQuote ? (
                      <Link href={article.link} underline="hover">
                        {" "}
                        […]
                      </Link>
                    ) : (
                      <Link href={article.link} underline="hover">
                        {" "}
                        [view article]{" "}
                      </Link>
                    )}
                  </Typography>
                  {article.relationship && (
                    <Box onClick={(e) => e.stopPropagation()}>
                      <Accordion
                        sx={{
                          boxShadow: "none",
                          "&:before": { display: "none" },
                        }}
                      >
                        <AccordionSummary
                          expandIcon={<ExpandMoreIcon />}
                          sx={{
                            padding: "0 8px",
                            minHeight: "40px !important",
                            "& .MuiAccordionSummary-content": {
                              margin: "8px 0 !important",
                            },
                          }}
                        >
                          <Typography variant="button" color="primary">
                            Why is this relevant to me?
                          </Typography>
                        </AccordionSummary>
                        <AccordionDetails sx={{ padding: "0 16px 16px" }}>
                          <Typography variant="body2" color="text.secondary">
                            {article.relationship}
                          </Typography>
                        </AccordionDetails>
                      </Accordion>
                    </Box>
                  )}
                </Card>
              ))}
            </Box>
          </CardContent>
        </AccordionDetails>
      </Accordion>
      <CardActions sx={{ justifyContent: "flex-end" }}>
        {links.map((link) => (
          <Tooltip title={"see my " + link.name} key={link.name} arrow>
            <IconButton aria-label={link.name} href={link.link} size="medium">
              <img
                src={
                  !isDarkTheme && link.imageDark ? link.imageDark : link.image
                }
                style={styles.cardActionIcon}
                alt={link.name + " button"}
              />
            </IconButton>
          </Tooltip>
        ))}
        <LikeButton likeType="card" likeName="news_card" />
      </CardActions>
    </Card>
  );
}

NewsCard.propTypes = {
  isDarkTheme: PropTypes.bool.isRequired,
};
