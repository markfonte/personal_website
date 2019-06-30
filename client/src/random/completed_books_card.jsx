import React from 'react';
import './completed_books_card.css';
import theStartUpOfYou from '../static/images/book_covers/the_start_up_of_you.jpg';
import thePhoenixProject from '../static/images/book_covers/the_phoenix_project.jpg';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import {Typography} from '@material-ui/core';
import Link from '@material-ui/core/Link';

class CompletedBooksCard extends React.Component {
  render() {
    const jacobFedrigonWebsiteLink = `http://www-personal.umich.edu/~jacobfed/books.html`;
    const completedBooks = [
      {
        image: thePhoenixProject,
        title: 'The Phoenix Project',
        author: 'Gene Kim',
        link: `https://www.amazon.com/Phoenix-Project-DevOps-Helping-Business/dp/0988262592`,
      },
      {
        image: theStartUpOfYou,
        title: 'The Start-up of You',
        author: 'Reid Hoffman',
        link: `https://www.amazon.com/Start-up-You-Future-Yourself-Transform-ebook/dp/B0050DIWHU`,
      },
    ];

    return (
      <div>
        <Card raised={true} className="card">
          <CardHeader title="Books I Would Recommend" subheader="June 2019" />
          <CardContent>
            {completedBooks.map((completedBook, i) => (
              <Card key={i} className="book-cover">
                <img
                  src={completedBook.image}
                  width="320"
                  height="auto"
                  title={completedBook.title}
                  alt={completedBook.title}
                />
                <br />
                <Link
                  href={completedBook.link}
                  color="textPrimary"
                  variant="h6"
                >
                  {completedBook.title}
                </Link>
                <Typography variant="subtitle1">
                  {completedBook.author}
                </Typography>
              </Card>
            ))}
            <br />
            <Link
              href={jacobFedrigonWebsiteLink}
              variant="caption"
              color="textSecondary"
            >
              credit: jacob fedrigon&#34;s website
            </Link>
          </CardContent>
        </Card>
      </div>
    );
  }
}

export default CompletedBooksCard;
