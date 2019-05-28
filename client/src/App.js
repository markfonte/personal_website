import React from 'react';
import reactLogo from './static/vectors/react_logo.svg';
import profilePicture from './static/images/mark_circle.jpg';
import './App.css';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import About from './about/about.jsx';
import Contact from './contact/contact.jsx';
import Resume from './resume/resume.jsx';
import Home from './home/home.jsx';
import Button from '@material-ui/core/Button';
import LinkStyle from '@material-ui/core/Link';
import {Typography} from '@material-ui/core';
import 'typeface-roboto';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {apiResponse: false};
  }

  checkForAPIHeartbeat() {
    fetch(process.env.REACT_APP_API_URL + 'api_heartbeat')
        .then((res) => res.text())
        .then((res) => this.setState({apiResponse: res === 'success'}))
        .catch((err) => {
          this.setState({apiResponse: false});
          console.log(err);
        }
        );
  }

  componentDidMount() {
    this.checkForAPIHeartbeat();

    const timeoutInterval = 30000; // check for API heartbeat every 30 seconds
    setInterval(function() {
      this.checkForAPIHeartbeat();
    }.bind(this), timeoutInterval);
  }

  render() {
    const routes = [
      {name: 'Home', path: '/'},
      {name: 'About', path: '/about'},
      {name: 'Resume', path: '/resume'},
      {name: 'Contact', path: '/contact'},
    ];
    return (
      <div className="App">
        <Router>
          <img src={profilePicture} className="profile-logo" alt="profile" />
          <Typography variant="h3">Mark Fonte</Typography>
          <nav className="primary-nav">
            <ul>
              {routes.map( (route, i) => (
                <li key={i} >
                  <LinkStyle component={Link} to={route.path}>
                    <Button variant="contained" color="primary">
                      {route.name}
                    </Button>
                  </LinkStyle>
                </li>
              ))}
            </ul>
          </nav>

          <Route path="/" exact component={Home} />
          <Route path="/home" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/resume" component={Resume} />
        </Router>
        { this.state.apiResponse ? (
                    <img src={reactLogo} className="App-logo" alt="logo" />
                ) : (
                    <p> {
                      /*
                        TODO: Display something ie "send report to me" & "retry"
                        */
                    }</p> )
        }
      </div>
    );
  }
}

export default App;
