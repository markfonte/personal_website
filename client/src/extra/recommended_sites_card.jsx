import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableRow,
  Card,
  CardContent,
  CardHeader,
  Button,
  Link,
  Typography,
  Tooltip,
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  IconButton,
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import sarahKoopScreenshot
  from '../static/images/screenshots/sarah_website_screenshot.webp';
import sarahKoopScreenshotFallback
  from '../static/images/screenshots/sarah_website_screenshot.png';

import salvadorVillalonScreenshot
  from '../static/images/screenshots/sal_website_screenshot.webp';
import salvadorVillalonScreenshotFallback
  from '../static/images/screenshots/sal_website_screenshot.png';

import jacobFedrigonScreenshot
  from '../static/images/screenshots/jacob_website_screenshot.webp';
import jacobFedrigonScreenshotFallback
  from '../static/images/screenshots/jacob_website_screenshot.png';

import seanBarberScreenshot
  from '../static/images/screenshots/sean_website_screenshot.webp';
import seanBarberScreenshotFallback
  from '../static/images/screenshots/sean_website_screenshot.png';

import nathanJohnsonScreenshot
  from '../static/images/screenshots/nathan_website_screenshot.webp';
import nathanJohnsonScreenshotFallback
  from '../static/images/screenshots/nathan_website_screenshot.png';

import {withStyles} from '@material-ui/styles';
import PropTypes from 'prop-types';

const styles = {
  websiteScreenshot: {
    width: '100%',
    maxWidth: '400px',
  },
  websiteButton: {
    margin: '4px',
    textTransform: 'none',
  },
  nameText: {
    marginBottom: '4px',
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
};

class RecommendedSitesCard extends React.Component {
  render() {
    const {classes} = this.props;
    const jacobFedrigonLink = `http://www-personal.umich.edu/~jacobfed/`;
    const nathanJohnsonLink = `https://nathanieljohnson.me/`;
    const seanBarberLink = `https://seanbarber.me/`;
    const salvadorVillalonLink = `https://salvillalon45.github.io/`;
    const sarahKoopLink = `http://sarah-koop.com/`;

    const rows = [
      {
        name: 'Jacob Fedrigon',
        title: `Go To Jacob's Website`,
        link: jacobFedrigonLink,
        image: jacobFedrigonScreenshot,
        fallbackImage: jacobFedrigonScreenshotFallback,
      },
      {
        name: 'Nathan Johnson',
        title: `Go To Nathan's Website`,
        link: nathanJohnsonLink,
        image: nathanJohnsonScreenshot,
        fallbackImage: nathanJohnsonScreenshotFallback,
      },
      {
        name: 'Salvador Villalon',
        title: `Go To Sal's Website`,
        link: salvadorVillalonLink,
        image: salvadorVillalonScreenshot,
        fallbackImage: salvadorVillalonScreenshotFallback,
      },
      {
        name: 'Sarah Koop',
        title: `Go To Sarah's Website`,
        link: sarahKoopLink,
        image: sarahKoopScreenshot,
        fallbackImage: sarahKoopScreenshotFallback,
      },
      {
        name: 'Sean Barber',
        title: `Go To Sean's Website`,
        link: seanBarberLink,
        image: seanBarberScreenshot,
        fallbackImage: seanBarberScreenshotFallback,
      },
    ];
    return (
      <Card raised={true} className="card">
        <ExpansionPanel
          TransitionProps={{unmountOnExit: true}}>
          <ExpansionPanelSummary
            aria-label="Recommended Sites"
            aria-controls="recommended-sites-content"
            id="recommended-sites-header"
            expandIcon={
              <Tooltip
                title="Expand/collapse card"
                arrow>
                <IconButton>
                  <ExpandMoreIcon />
                </IconButton>
              </Tooltip>
            }>
            <a name="recommended_sites_card" href="#recommended_sites_card" className="gone">
            Recommended Sites Card
            </a>
            <div
              className={classes.expansionHeaderContainer}>
              <CardHeader
                title="🌐 Recommended Websites"
                subheader="Check out these amazing people's websites!"
              />
            </div>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <CardContent className={classes.cardContent}>
              <Table>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow key={row.title}>
                      <TableCell component="th" scope="row" align="center">
                        <Typography
                          className={classes.nameText}
                          variant="h5"
                          paragraph>
                          {row.name}
                        </Typography>
                        <div>
                          <Link href={row.link}>
                            <picture>
                              <source srcSet={row.image} type="image/webp"/>
                              <source srcSet={row.fallbackImage} type="image/png"/>
                              <Tooltip
                                placement="right"
                                title={row.title} >
                                <img
                                  srcSet={[row.image, row.fallbackImage]}
                                  className={classes.websiteScreenshot}
                                  alt="row.name + '\'s website'"
                                />
                              </Tooltip>
                            </picture>
                          </Link>
                        </div>
                        <Tooltip title={row.title} >
                          <Button
                            className={classes.websiteButton}
                            variant="outlined"
                            color="secondary"
                            href={row.link}
                          >
                            {row.title}
                          </Button>
                        </Tooltip>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </Card>
    );
  }
}

RecommendedSitesCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RecommendedSitesCard);
