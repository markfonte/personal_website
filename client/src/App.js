import React from 'react';
import 'typeface-roboto';
import './App.css';
import profilePicture from './static/images/photos/mark_circle.png';
import whiteSunIcon from './static/images/icons/sun_icon_white.svg';
import blackSunIcon from './static/images/icons/sun_icon_black.svg';
import CurrentWork from './current_work/current_work.jsx';
import PastProjects from './past_projects/past_projects.jsx';
import Random from './random/random.jsx';
import Contact from './contact/contact.jsx';
import Home from './home/home.jsx';
import Footer from './footer/footer.jsx';
import LinkStyle from '@material-ui/core/Link';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import {createMuiTheme} from '@material-ui/core/styles';
import {ThemeProvider} from '@material-ui/styles';
import {Typography, Button, CssBaseline} from '@material-ui/core';
const getCookie = require('./shared/util/cookies.js').getCookie;
const setCookie = require('./shared/util/cookies.js').setCookie;

const darkTheme = createMuiTheme({
  palette: {
    type: 'dark',
    secondary: {
      main: '#ffcb05', // blue
    },
  },
});

const lightTheme = createMuiTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#00274c', // maize
    },
  },
});

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: darkTheme,
      themeIcon: whiteSunIcon,
      proud: false,
    };
    this.toggleTheme = this.toggleTheme.bind(this);
  }

  componentDidMount() {
    let proud = false;
    if (getCookie('pride') === 'true') {
      proud = true;
    }
    let initialTheme = darkTheme;
    let initialThemeIcon = whiteSunIcon;
    if (getCookie('app_theme') === 'light_theme') {
      initialTheme = lightTheme;
      initialThemeIcon = blackSunIcon;
    } else if (getCookie('app_theme') === 'dark_theme') {
      initialTheme = darkTheme;
      initialThemeIcon = whiteSunIcon;
    } else {
      setCookie('app_theme', 'dark_theme', 1000);
    }
    this.setState({
      theme: initialTheme,
      themeIcon: initialThemeIcon,
      proud: proud,
    });
  }

  toggleTheme() {
    if (this.state.theme === lightTheme) {
      this.setState({theme: darkTheme, themeIcon: whiteSunIcon});
      setCookie('app_theme', 'dark_theme', 1000);
    } else {
      this.setState({theme: lightTheme, themeIcon: blackSunIcon});
      setCookie('app_theme', 'light_theme', 1000);
    }
  }

  render() {
    const routes = [
      {name: 'Home', path: '/'},
      {name: 'Current Work', path: '/current_work'},
      {name: 'Past Projects', path: '/past_projects'},
      {name: 'Random', path: '/random'},
      {name: 'Contact', path: '/contact'},
    ];
    const rainbowHeader = this.state.proud === true
      ? <header className="header" />
      : <div />;
    const rainbowFooter = this.state.proud === true
      ? <footer className="footer-root" />
      : <div />;
    return (
      <ThemeProvider theme={this.state.theme}>
        <CssBaseline />

        <div className="App">
          {rainbowHeader}
          <img
            id="toggle-theme-icon"
            src={this.state.themeIcon}
            onClick={this.toggleTheme}
            alt="toggle theme icon"
          />
          <Router>
            <img src={profilePicture} className="profile-logo" alt="profile" />
            <Typography id="main-title" variant="h3">Mark Fonte</Typography>
            <nav className="primary-nav">
              <ul>
                {routes.map((route, i) => (
                  <li key={i}>
                    <LinkStyle style={{textDecoration: 'none'}} component={Link} to={route.path}>
                      <Button
                        variant="outlined"
                        color="secondary"
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
        {rainbowFooter}
      </ThemeProvider>
    );
  }
}

export default App;
