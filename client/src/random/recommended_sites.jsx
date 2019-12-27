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
} from '@material-ui/core';
import sarahKoopScreenshot from '../static/images/screenshots/sarah_website_screenshot.png';
import salvadorVillalonScreenshot from '../static/images/screenshots/sal_website_screenshot.png';
import jacobFedrigonScreenshot from '../static/images/screenshots/jacob_website_screenshot.png';
import seanBarberScreenshot from '../static/images/screenshots/sean_website_screenshot.png';
import nathanJohnsonScreenshot from '../static/images/screenshots/nathan_website_screenshot.png';
import {withStyles} from '@material-ui/styles';
import PropTypes from 'prop-types';

const styles = {
  recommendedSitesWrapper: {
    overflowX: 'auto',
  },
  websiteScreenshot: {
    maxWidth: '80%',
    maxHeight: '400px',
  },
  websiteButton: {
    margin: '4px',
    textTransform: 'none',
  },
  nameText: {
    marginBottom: '4px',
  },
};

class RecommendedSitesTable extends React.Component {
  render() {
    const {classes} = this.props;
    const jacobFedrigonLink = `http://www-personal.umich.edu/~jacobfed/`;
    // const johnFonteLink = `http://johnfonte.com/`;
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
      },
      //   {
      //     title: `John Fonte's Website`,
      //     link: johnFonteLink,
      //   },
      {
        name: 'Nathan Johnson',
        title: `Go To Nathan's Website`,
        link: nathanJohnsonLink,
        image: nathanJohnsonScreenshot,
      },
      {
        name: 'Salvador Villalon',
        title: `Go To Sal's Website`,
        link: salvadorVillalonLink,
        image: salvadorVillalonScreenshot,
      },
      {
        name: 'Sarah Koop',
        title: `Go To Sarah's Website`,
        link: sarahKoopLink,
        image: sarahKoopScreenshot,
      },
      {
        name: 'Sean Barber',
        title: `Go To Sean's Website`,
        link: seanBarberLink,
        image: seanBarberScreenshot,
      },
    ];
    return (
      <div>
        <Card raised={true} className="card">
          <CardHeader
            title="Recommended Sites"
            subheader="Check out these amazing people's websites!"
          />
          <CardContent>
            <div className={classes.recommendedSitesWrapper}>
              <Table>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow key={row.title}>
                      <TableCell component="th" scope="row" align="center">
                        <Typography className={classes.nameText} variant="h5">
                          {row.name}
                        </Typography>
                        <div>
                          <Link href={row.link}>
                            <img src={row.image} style={styles.websiteScreenshot} alt={row.Name + '\'s website'} />
                          </Link>
                        </div>
                        <Button
                          className={classes.websiteButton}
                          variant="outlined"
                          color="secondary"
                          href={row.link}
                        >
                          {row.title}
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }
}

RecommendedSitesTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RecommendedSitesTable);
