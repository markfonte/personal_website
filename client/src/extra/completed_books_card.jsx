import React from 'react';
import dontMakeMeThinkRevisited from '../static/images/book_covers/dont_make_me_think_revisited.webp';
import theDevopsHandbookImage
  from '../static/images/book_covers/the_devops_handbook.webp';
import digitalMinimalismImage
  from '../static/images/book_covers/digital_minimalism.webp';
import theStartUpOfYou
  from '../static/images/book_covers/the_start_up_of_you.webp';
import thePhoenixProject
  from '../static/images/book_covers/the_phoenix_project.webp';
import {
  Typography,
  Card,
  CardContent,
  CardHeader,
  Link,
} from '@material-ui/core';

import {withStyles} from '@material-ui/styles';
import PropTypes from 'prop-types';

const styles = {};

class CompletedBooksCard extends React.Component {
  render() {
    const jacobFedrigonWebsiteLink = `http://www-personal.umich.edu/~jacobfed/books.html`;
    const completedBooks = [
      {
        image: dontMakeMeThinkRevisited,
        title: `Don't Make Me Think`,
        author: 'Steve Krug',
        link: `https://www.amazon.com/Dont-Make-Think-Revisited-Usability/dp/0321965515`,
      },
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
          <CardHeader title="Books I Would Recommend" subheader="September 2019" />
          <CardContent>
            {completedBooks.map((completedBook) => (
              <Card key={completedBook.title} className="book-cover">
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

CompletedBooksCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CompletedBooksCard);
