import React from 'react';
import {
  Typography,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Link,
  Card,
  CardContent,
  CardHeader,
} from '@material-ui/core';
import {withStyles} from '@material-ui/styles';
import PropTypes from 'prop-types';

const styles = {
  recommendedSitesWrapper: {
    overflowX: 'auto',
  },
};

class RecommendedSitesTable extends React.Component {
  render() {
    const {classes} = this.props;
    const jacobFedrigonLink = `http://www-personal.umich.edu/~jacobfed/`;
    const johnFonteLink = `http://johnfonte.com/`;
    const nathanJohnsonLink = `https://nathanieljohnson.me/`;
    const seanBarberLink = `https://seanbarber.me/`;
    const salvadorVillalonLink = `https://salvillalon45.github.io/`;
    const sarahKoopLink = `http://sarah-koop.com/`;

    const rows = [
      {
        title: `Jacob Fedrigon's Website`,
        link: jacobFedrigonLink,
      },
      {
        title: `John Fonte's Website`,
        link: johnFonteLink,
      },
      {
        title: `Nathan Johnson's Website`,
        link: nathanJohnsonLink,
      },
      {
        title: `Salvador Villalon's Website`,
        link: salvadorVillalonLink,
      },
      {
        title: `Sean Barber's Website`,
        link: seanBarberLink,
      },
      {
        title: `Sarah Koop's Website`,
        link: sarahKoopLink,
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
                        <Link color="textPrimary" href={row.link}>
                          <Typography variant="h6" color="textPrimary">
                            {row.title}
                          </Typography>
                        </Link>
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
