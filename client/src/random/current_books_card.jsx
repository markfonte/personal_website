import React from 'react';
import './current_books_card.css';
import howWouldYouMoveMountFujiImage
  from '../static/images/book_covers/how_would_you_move_mount_fuji.jpg';
import {
  Typography,
  Card,
  CardContent,
  CardHeader,
  Link,
} from '@material-ui/core';

class CurrentBooksCard extends React.Component {
  render() {
    const jacobFedrigonWebsiteLink = `http://www-personal.umich.edu/~jacobfed/books.html`;
    const currentBooks = [
      {
        image: howWouldYouMoveMountFujiImage,
        title: 'How Would You Move Mount Fuji?',
        author: 'William Poundstone',
        link: `https://www.amazon.com/How-Would-Move-Mount-Fuji/dp/0316778494`,
      },
    ];

    return (
      <div>
        <Card raised={true} className="card">
          <CardHeader title="Books I&#39;m Reading" subheader="July 2019" />
          <CardContent>
            {currentBooks.map((currentBook, i) => (
              <Card key={i} className="book-cover">
                <img
                  src={currentBook.image}
                  width="320"
                  height="auto"
                  title={currentBook.title}
                  alt={currentBook.title}
                />
                <br />
                <Link href={currentBook.link} color="textPrimary" variant="h6">
                  {currentBook.title}
                </Link>
                <Typography variant="subtitle1">
                  {currentBook.author}
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

export default CurrentBooksCard;
