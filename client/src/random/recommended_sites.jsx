import React from 'react';
import './recommended_sites.css';
import 'typeface-roboto';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import {Typography} from '@material-ui/core';
import Link from '@material-ui/core/Link';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';

class RecommendedSitesTable extends React.Component {
  render () {
    const jacobFedrigonLink = `http://www-personal.umich.edu/~jacobfed/`;
    const johnFonteLink = `http://johnfonte.com/`;
    const nathanJohnsonLink = `http://www-personal.umich.edu/~jacobfed/`;
    const seanBarberLink = `https://seanbarber.me/`;

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
                  {rows.map ((row, i) => (
                    <TableRow key={i}>
                      <TableCell component="th" scope="row" align="center">
                        <Link href={row.link}>
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
