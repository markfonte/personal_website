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
} from '@mui/material';
import WebIcon from '@mui/icons-material/Web';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import PropTypes from 'prop-types';
import {withStyles} from '@mui/styles';

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
    maxWidth: '540px',
    width: '100%',
    margin: '8px',
    padding: '8px',
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

class SammyCard extends React.Component {
  render() {
    const {classes} = this.props;

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

    return (
      <Card raised={true} className="large-card">
        <Accordion
          TransitionProps={{unmountOnExit: true}}>
          <AccordionSummary
            aria-label="Sammy"
            aria-controls="sammy-content"
            id="sammy-header"
            expandIcon={
              <Tooltip
                title="Expand/collapse card"
                arrow>
                <IconButton size="large">
                  <ExpandMoreIcon />
                </IconButton>
              </Tooltip>
            }>
            <a name="sammy_card" href="#sammy_card" className="gone">
            Sammy Card
            </a>
            <div className={classes.expansionHeaderContainer}>
              <CardHeader
                className="card-header"
                title="Sammy Fonte's Articles"
                subheader="Check out my brother's work!" />
              <CardMedia
                className={classes.michiganDailyBanner}
                image="/media/michigan_daily_logo.png"
                title="Michigan Daily banner"
                alt="Michigan Daily banner"
                component="img"
              />
            </div>
          </AccordionSummary>
          <AccordionDetails>
            <CardContent style={{padding: 0}}>
              <div className={classes.articles}>
                {articles.map((article) => (
                  <div key={article.id} className={classes.article}>
                    <img src={article.cover} className={classes.articleCover} />
                    <br/>
                    <Link variant="h5" href={article.link} underline="hover">
                      {article.title}
                    </Link>
                    <Typography variant="subtitle1" paragraph>
                      {'📅 ' + article.date}
                    </Typography>
                    <Typography variant="body1" paragraph>
                      {article.blurb}{' '} <Link href={article.link} underline="hover">[…]</Link>
                    </Typography>
                    <hr/>
                  </div>
                ))}
              </div>
            </CardContent>
          </AccordionDetails>
        </Accordion>
        <CardActions className={classes.cardActions}>
          <Tooltip
            title="Check out Sammy's Michigan Daily articles"
            arrow>
            <IconButton aria-label="Go to website" href="https://www.michigandaily.com/author/sfonteumich-edu/" size="large">
              <WebIcon />
            </IconButton>
          </Tooltip>
        </CardActions>
      </Card>
    );
  }
}

SammyCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SammyCard);
