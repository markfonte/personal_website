import React from 'react';
import profilePicture from './static/images/mark_circle.jpg';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import CurrentWork from './current_work/current_work.jsx';
import PastProjects from './past_projects/past_projects.jsx';
import Random from './random/random.jsx';
import Contact from './contact/contact.jsx';
import Home from './home/home.jsx';
import Button from '@material-ui/core/Button';
import LinkStyle from '@material-ui/core/Link';
import Footer from './footer/footer.jsx';
import {Typography} from '@material-ui/core';
import './App.css';
import 'typeface-roboto';

class App extends React.Component {
  render () {
    const routes = [
      {name: 'Home', path: '/'},
      {name: 'Current Work', path: '/current_work'},
      {name: 'Past Projects', path: '/past_projects'},
      {name: 'Random', path: '/random'},
      {name: 'Contact', path: '/contact'},
    ];
    return (
      <div className="App">
        <Router>
          <img src={profilePicture} className="profile-logo" alt="profile" />
          <Typography variant="h3">Mark Fonte</Typography>
          <nav className="primary-nav">
            <ul>
              {routes.map ((route, i) => (
                <li key={i}>
                  <LinkStyle component={Link} to={route.path}>
                    <Button
                      variant="contained"
                      color="primary"
                      style={{marginTop: 8, marginBottom: 8}}
                    >
                      {route.name}
                    </Button>
                  </LinkStyle>
                </li>
              ))}
            </ul>
          </nav>

          <Route path="/" exact component={Home} />
          <Route path="/home" component={Home} />
          <Route path="/current_work" component={CurrentWork} />
          <Route path="/past_projects" component={PastProjects} />
          <Route path="/random" component={Random} />
          <Route path="/contact" component={Contact} />
        </Router>
        <Footer />
      </div>
    );
  }
}

export default App;
