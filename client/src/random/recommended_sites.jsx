import React from 'react';
import './recommended_sites.css';
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

class RecommendedSitesTable extends React.Component {
  render() {
    const jacobFedrigonLink = `http://www-personal.umich.edu/~jacobfed/`;
    const johnFonteLink = `http://johnfonte.com/`;
    const nathanJohnsonLink = `https://nathanieljohnson.me/`;
    const seanBarberLink = `https://seanbarber.me/`;
    const salvadorVillalonLink = `https://salvillalon45.github.io/`;

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
    ];
    return (
      <div>
        <Card raised={true} className="card">
          <CardHeader
            title="Recommended Sites"
            subheader="Check out these amazing people's websites!"
          />
          <CardContent>
            <div id="recommended-sites-wrapper">
              <Table>
                <TableBody>
                  {rows.map((row, i) => (
                    <TableRow key={i}>
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

export default RecommendedSitesTable;
