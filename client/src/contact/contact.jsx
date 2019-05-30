import React from 'react';
import './contact.css';
import {Typography} from '@material-ui/core';

class Contact extends React.Component {
  // constructor(props) {
  //     super(props);
  //     this.state = {apiResponse: ""};
  // }

  // fetchInfo() {
  //     fetch(process.env.REACT_APP_API_URL + "contact", {credentials: 'same-origin' })
  //     .then(res => res.text())
  //     .then(res => this.setState({apiResponse: res}))
  //     .catch(error => console.log(error));
  // }

  // componentDidMount() {
  //     this.fetchInfo();
  // }

  render () {
    return (
      <div>
        <Typography variant="h6">
          Contact page coming soon...
        </Typography>
        {/* <form
          action="mailto:mark@fonte.com?subject=yup"
          method="post"
          enctype="text/plain"
        >
          Name:<br />
          <input type="text" name="name" /><br />
          E-mail:<br />
          <input type="text" name="mail" /><br />
          Subject:<br />
          <input type="text" name="subject" /><br />
          Comment:<br />
          <input type="text" name="comment" size="50" /><br /><br />
          <input type="submit" value="Send" />
          <input type="reset" value="Reset" />
        </form> */}

      </div>
    );
  }
}

export default Contact;
