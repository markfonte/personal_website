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
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import newsArticle1
    from '../static/photos/news_article_1.webp';
import newsArticle2
    from '../static/photos/news_article_2.webp';
import newsArticle3
    from '../static/photos/news_article_3.webp';
import newsArticle4
    from '../static/photos/news_article_4.webp';
import newsArticle5
    from '../static/photos/news_article_5.webp';
import newsArticle6
    from '../static/photos/news_article_6.webp';

import LikeButton from '../shared/LikeButton';

const articles = [

    {
        id: 2,
        title: 'Tesla diagnostics over OBD port',
        link: 'https://n.news.naver.com/mnews/article/029/0002817931',
        cover: newsArticle2,
        date: 'June 06, 2023',
        blurb: `I helped implement the service that implements the DoIP Protocol (ISO 13400-2) to support these Korean regulations`,
        isQuote: false,
    },
    {
        id: 1,
        title: 'Tesla LinkedIn announcement',
        link: 'https://www.linkedin.com/posts/mark-fonte_im-excited-to-share-that-ive-started-a-activity-7025561418129186816-G3Z6',
        cover: newsArticle1,
        date: 'January 23, 2023',
        blurb: `I'm excited to share that I've started a new position as a Software Engineer at Tesla working on onboard diagnostics firmware! Life is good!`,
        isQuote: true,
    },
    {
        id: 6,
        title: 'Eypex performs hostile takeover of JustLight',
        link: 'https://www.businesswire.com/news/home/20230328005203/en/Automotive-Lighting-Supplier-Eypex-Corporation-Enters-Consumer-Market-Through-Acquisition-of-JustLight%E2%84%A2',
        cover: newsArticle6,
        date: 'March 28, 2023',
        blurb: <>Eypex Corporation, an automotive supplier and early investor in us at JustLight, performed a hostile takeover using the U.S. court system and their willingness to lie, steal, forge documents, threaten, intimidate and perform illegal acts. Their owner, CEO, head of engineering, and many more spearheaded this effort. They built our first generation product, which was riddled with defects, extremely expensive, and neither FDA nor FCC compliant (and still isn&apos;t)... so we found a much better manufacturer in Light Tree Ventures. With other revenue streams to fund their legal misdoings and an aptitude for vengeance, they filed bogus claims against us in court - then lost, appealed, and waited until they had bled us dry of legal fees and investor confidence. Eventually they bought our assets out of bankruptcy and pretended it was an acquisition. <br /><b>It was not.</b></>,
        isQuote: false,
    },
    {
        id: 5,
        title: 'JustLight launches FDA clinical trials',
        link: 'https://www.medicaldevice-network.com/news/justlight-sunflower-rx-alzheimers-disease/',
        cover: newsArticle5,
        date: 'April 07, 2022',
        blurb: `JustLight has launched clinical trials to evaluate its Sunflower Rx medical device, which provides smart photobiomodulation (PBM) treatment for Alzheimer's disease. PBM is the medicinal use of red or near-infrared light for repairing, energising and healing cells in the body without any side effects. The device uses specific wavelengths of near-infrared light to bypass the skull and be directly absorbed by the brain ... Developed in partnership with Kaiyan Medical and Light Tree Ventures, the technology aims to be the first US Food and Drug Administration (FDA)-approved safe and effective medical device for Alzheimer's in the world.`,
        isQuote: true,
    },
    {
        id: 4,
        title: 'Juwan Howard!',
        link: 'https://www.mlive.com/wolverines/2022/04/michigan-basketball-2023-recruiting-board.html',
        cover: newsArticle4,
        date: 'April 07, 2022',
        blurb: `A candid picture of Juwan watching a Michigan women's basketball game with us. He's the best!`,
        isQuote: false,
    },
    {
        id: 3,
        title: 'MI Symptoms app',
        link: 'https://cse.engin.umich.edu/stories/students-lead-the-way-on-state-of-michigan-web-application-to-help-curb-the-spread-of-covid-19',
        cover: newsArticle3,
        date: 'June 22, 2020',
        blurb: 'I helped other University of Michigan engineering students build an application during the early days of Covid that was used by the State of Michigan to track symptoms',
        isQuote: false,
    }

];

const styles = {
    newsBanner: {
        width: '100%',
        marginTop: '4px',
        marginBottom: '0px',
        padding: '0px',
    },
    expansionHeaderContainer: {
        display: 'flex',
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
    },
    articleCover: {
        maxWidth: '365px',
        width: '100%',
    },
    article: {
        maxWidth: '385px',
        width: '100%',
        margin: '8px',
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

export default function NewsCard() {
    return (
        <Card raised className="large-card">
            <Accordion slotProps={{ transition: { unmountOnExit: true } }}>
                <AccordionSummary
                    aria-label="News"
                    aria-controls="news-content"
                    id="news-header"
                    expandIcon={
                        <Tooltip
                            title="expand/collapse card"
                            arrow>
                            <IconButton size="small">
                                <ExpandMoreIcon />
                            </IconButton>
                        </Tooltip>
                    }>
                    <a name="news_card" href="#news_card" className="gone">
                        News Card
                    </a>
                    <Box sx={styles.expansionHeaderContainer}>
                        <CardHeader
                            className="card-header"
                            title={"News 📰"}
                            subheader="" />
                        <CardMedia
                            sx={styles.newsBanner}
                            image="/media/news_banner.webp"
                            title="News banner"
                            alt="News banner"
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
                                        {article.isQuote ? <i>&quot;{article.blurb}&quot;</i> : article.blurb} {article.isQuote ? <Link href={article.link} underline="hover"> […]</Link> : <Link href={article.link} underline="hover"> [view article] </Link>}
                                    </Typography>
                                </Card>
                            ))}
                        </Box>
                    </CardContent>
                </AccordionDetails>
            </Accordion>
            <CardActions sx={{ justifyContent: 'flex-end' }}>
                <LikeButton likeType='card' likeName='news_card' />
            </CardActions>
        </Card >
    );
};