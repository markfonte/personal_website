import React from 'react';
import './current_books_card.css';
import digitalMinimalismImage from '../static/images/digital_minimalism.jpg';
import theDevopsHandbookImage from '../static/images/the_devops_handbook.jpg';
import howWouldYouMoveMountFujiImage
  from '../static/images/how_would_you_move_mount_fuji.jpg';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import {Typography} from '@material-ui/core';
import Link from '@material-ui/core/Link';

class CurrentBooksCard extends React.Component {
  render () {
    const jacobFedrigonWebsiteLink = `http://www-personal.umich.edu/~jacobfed/books.html`;
    const currentBooks = [
      {
        image: theDevopsHandbookImage,
        title: 'The DevOps Handbook',
        author: 'Gene Kim',
        link: `https://www.amazon.com/DevOps-Handbook-World-Class-Reliability-Organizations-ebook/dp/B01M9ASFQ3`,
      },
      {
        image: digitalMinimalismImage,
        title: 'Digital Minimalism',
        author: 'Cal Newport',
        link: `https://www.amazon.com/Digital-Minimalism-Choosing-Focused-Noisy/dp/0525536515`,
      },
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
          <CardHeader title="Books I&#39;m Reading" subheader="June 2019" />
          <CardContent>
            {currentBooks.map ((currentBook, i) => (
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
