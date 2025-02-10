import React from 'react';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  Link,
  Tooltip,
  Typography,
  Box,
} from '@mui/material';
import WebIcon from '@mui/icons-material/Web';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import sammyArticle1
  from '../static/photos/sammy_article_1.webp';
import sammyArticle2
  from '../static/photos/sammy_article_2.webp';
import sammyArticle3
  from '../static/photos/sammy_article_3.webp';
import sammyArticle4
  from '../static/photos/sammy_article_4.webp';
import sammyArticle5
  from '../static/photos/sammy_article_5.webp';
import LikeButton from '../shared/LikeButton';

const articles = [
  {
    id: 5,
    title: 'Hey hey, ho ho, humans of GEO',
    link: 'https://www.michigandaily.com/statement/hey-hey-ho-ho-humans-of-geo/',
    cover: sammyArticle5,
    date: 'May 16, 2023',
    blurb: 'It wasn\'t until March 15 that the news of the then-impending strike truly hit me — just five days before the successful vote to start the strike authorization process. My favorite Graduate Student Instructor suspiciously ended our discussion 10 minutes early to make an \"announcement.\" As I recall, the first thing she did in',
  },
  {
    id: 4,
    title: 'The gory, less greedy, Midas touch',
    link: 'https://www.michigandaily.com/statement/the-gory-less-greedy-midas-touch/',
    cover: sammyArticle4,
    date: 'March 21, 2023',
    blurb: 'The Journal of Psychiatric Research asserts that 2.82% of 18 to 29 year olds have a skin picking disorder, which makes skin picking most prevalent among college-age students. By my count, as someone with a skin picking disorder, I\'m about one in 35. That\'s maybe someone in your first-year writing class. Or your two hour',
  },
  {
    id: 3,
    title: 'Team 47 and my urge to cartwheel',
    link: 'https://www.michigandaily.com/statement/team-47-and-my-urge-to-cartwheel/',
    cover: sammyArticle3,
    date: 'March 8, 2023',
    blurb: 'Most days I don\'t have time to, but when I can manage it, I like to go home for lunch. It\'s a good break, not only from the competitive atmosphere of our campus, but also from all the responsibilities that hang over my head. Since I live near the Athletic Campus, I usually feel awkward walking back to my afternoon classes',
  },
  {
    id: 2,
    title: 'Academia\'s cartel norm: Theories and origins of plagiarism rules',
    link: 'https://www.michigandaily.com/statement/academias-cartel-norm-theories-and-origins-of-plagiarism-rules/',
    cover: sammyArticle2,
    date: 'February 15, 2023',
    blurb: 'How many unique words in a row must I write before I have created a de facto attribution right? For every twist I take, a source or example will be cited, due to the intrinsic attribution right granted to every author and for the reader\'s benefit. But, if I forgot to cite, my journalistic career and I are screwed',
  },
  {
    id: 1,
    title: 'On casual homophobia at the University of Michigan',
    link: 'https://www.michigandaily.com/statement/on-casual-homophobia-at-the-university-of-michigan/',
    cover: sammyArticle1,
    date: 'January 24, 2023',
    blurb: 'As a student at the University of Michigan, I\'ve rarely witnessed overt homophobia on campus, though I know it exists. Still, I feel inexplicably unsafe in most spaces on campus. Sometimes, I even slyly shuffle back into the closet to protect myself (the morality of which I cannot stop thinking about). But why do I feel safer',
  },
];

const styles = {
  michiganDailyBanner: {
    width: '100%',
    maxWidth: '600px',
    margin: '8px',
  },
  expansionHeaderContainer: {
    display: 'flex',
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  articleCover: {
    maxWidth: '520px',
    width: '100%',
  },
  article: {
    maxWidth: '402px',
    width: '100%',
    margin: '8px',
    padding: '4px',
  },
  articles: {
    display: 'flex',
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
};

export default function SammyCard() {
  return (
    <Card raised className="large-card">
      <Accordion slotProps={{ transition: { unmountOnExit: true } }}>
        <AccordionSummary
          aria-label="Sammy"
          aria-controls="sammy-content"
          id="sammy-header"
          expandIcon={
            <Tooltip title="expand/collapse card" arrow>
              <ExpandMoreIcon />
            </Tooltip>
          }>
          <a name="sammy_card" href="#sammy_card" className="gone">
            Sammy Card
          </a>
          <Box sx={styles.expansionHeaderContainer}>
            <CardHeader
              className="card-header"
              title="Sammy Fonte"
              subheader="check out my brother's articles" />
            <CardMedia
              sx={styles.michiganDailyBanner}
              image="/media/michigan_daily_logo.png"
              title="Michigan Daily banner"
              alt="Michigan Daily banner"
              component="img"
            />
          </Box>
        </AccordionSummary>
        <AccordionDetails sx={{ padding: 0 }}>
          <CardContent sx={{ padding: 0 }}>
            <Box sx={styles.articles}>
              {articles.map((article) => (
                <Card raised key={article.id} sx={styles.article}>
                  <img src={article.cover} style={styles.articleCover} />
                  <br />
                  <Link variant="h5" href={article.link} underline="hover">
                    {article.title}
                  </Link>
                  <Typography variant="subtitle1">
                    {'📅 ' + article.date}
                  </Typography>
                  <Typography variant="body1" paragraph>
                    {article.blurb}{' '} <Link href={article.link} underline="hover">[…]</Link>
                  </Typography>
                </Card>
              ))}
            </Box>
          </CardContent>
        </AccordionDetails>
      </Accordion>
      <CardActions sx={{ justifyContent: 'flex-end' }}>
        <Tooltip
          title="see all articles"
          arrow>
          <IconButton aria-label="Go to website" href="https://www.michigandaily.com/author/sfonteumich-edu/" size="medium">
            <WebIcon />
          </IconButton>
        </Tooltip>
        <LikeButton likeType='card' likeName='sammy_card' />
      </CardActions>
    </Card>
  );
};