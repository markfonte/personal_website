import React from 'react';
import './App.css';
import PropTypes from 'prop-types';
import profilePicture
  from './static/photos/mark_circle.svg';
import Work from './work/Work.jsx';
import Contact from './contact/Contact.jsx';
import Home from './home/Home.jsx';
import Blog from './blog/Blog.jsx';
import Footer from './footer/Footer.jsx';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { createTheme, StyledEngineProvider, ThemeProvider } from '@mui/material/styles';
import { WbSunny } from '@mui/icons-material';

import {
  Typography,
  Button,
  CssBaseline,
  LinkStyle,
  List,
  ListItem,
  Grid,
  Tooltip,
} from '@mui/material';
import ScrollUpButton from 'react-scroll-up-button';

const getCookie = require('./shared/util/Cookies.js').getCookie;
const setCookie = require('./shared/util/Cookies.js').setCookie;

const routes = [
  { name: 'Home', path: '/', index: 0 },
  { name: 'Work', path: '/work', index: 1 },
  { name: 'Contact', path: '/contact', index: 2 },
];

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    secondary: {
      main: '#FFCb05',    // maize
    },
    background: {
      default: '#091929', // dark blue
      paper: '#2A2A2A',   // dark gray
    },
  },
  typography: {
    button: {
      textTransform: 'none',
    },
  },
});

const lightTheme = createTheme({
  palette: {
    mode: 'light',
    divider: 'rgba(0, 0, 0, 0.26)',
    text: {
      primary: 'rgba(0, 0, 0, 1.00)',
      secondary: 'rgba(0, 0, 0, 0.70)',
      disabled: 'rgba(0, 0, 0, 0.54)',
    },
    primary: {
      main: '#00274C', // blue
    },
    secondary: {
      main: '#B92C00',
    },
    background: {
      default: '#D7E5F0',
      paper: '#F6F6F6',
    },
    action: {
      active: 'rgba(0, 0, 0, 0.70)',
      hover: 'rgba(0, 0, 0, 0.08)',
      selected: 'rgba(0, 0, 0, 0.12)',
      disabled: 'rgba(0, 0, 0, 0.38)',
      disabledBackground: 'rgba(0, 0, 0, 0.26)',
    },
  },
  typography: {
    button: {
      textTransform: 'none',
    },
  },
});

const styles = {
  root: {
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: '12px',
    margin: 'auto',
  },
  AppList: {
    listStyle: 'none',
    paddingInlineStart: 0,
    paddingInlineEnd: 0,
  },
  AppListItem: {
    display: 'inline',
    margin: '4px',
    paddingInlineStart: 0,
    paddingInlineEnd: 0,
  },
  profileLogo: {
    height: '100px',
    width: '100px',
    alignSelf: 'center',
    zIndex: 2,
  },
  profileLogoSpinning: {
    animation: `react-logo-spin infinite 1s ease-in-out`,
    height: '100px',
    width: '100px',
    alignSelf: 'center',
    zIndex: 2,
  },
  primaryNav: {
    textAlign: 'center',
  },
  /* credit: https://travis-ci.org/account/preferences */
  headerRoot: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: '-100',
    display: 'block',
    height: '112px',
    width: '100%',
    background: 'linear-gradient(to bottom, #e2453c90 0, #e2453c90 16%,' +
      '#e07e3990 16%, #e07e3990 32%, #e5d66790 32%, #e5d66790 48%, #51b95b90 48%,' +
      '#51b95b90 66%, #1e72b790 66%, #1e72b790 86%, #6f5ba790 86%) no-repeat',
  },
  footerRoot: {
    bottom: 0,
    left: 0,
    right: 0,
    height: '20px',
    width: '100%',
    background: 'linear-gradient(to bottom, #e2453c90 0, #e2453c90 16%,' +
      '#e07e3990 16%, #e07e3990 32%, #e5d66790 32%, #e5d66790 48%, #51b95b90 48%,' +
      '#51b95b90 66%, #1e72b790 66%, #1e72b790 86%, #6f5ba790 86%) no-repeat',
  },
  mainTitle: {
    margin: '8px',
  },
  routerLink: {
    textDecoration: 'none',
  },
  routerButton: {
    marginTop: '8px',
    marginBottom: '8px',
  },
  toggleThemeButton: {
    margin: '20px',
  },
};

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: lightTheme,
      proud: false,
      currentlySelected: -1,
      logoSpinning: false,
    };
    this.toggleTheme = this.toggleTheme.bind(this);
    this.currentlySelected = this.currentlySelected.bind(this);
    this.findCurrentRoute = this.findCurrentRoute.bind(this);
    this.profilePictureClicked = this.profilePictureClicked.bind(this);
  }

  currentlySelected(id) {
    this.setState({ currentlySelected: id });
  }

  componentDidMount() {
    routes.forEach(this.findCurrentRoute);

    let proud = false;
    if (getCookie('pride') === 'true') {
      proud = true;
    }
    let initialTheme = lightTheme;
    if (getCookie('app_theme') === 'light_theme') {
      initialTheme = lightTheme;
    } else if (getCookie('app_theme') === 'dark_theme') {
      initialTheme = darkTheme;
    } else {
      setCookie('app_theme', 'light_theme', 1000);
    }
    this.setState({
      theme: initialTheme,
      proud: proud,
    });
  }

  toggleTheme() {
    if (this.state.theme === lightTheme) {
      this.setState({ theme: darkTheme });
      setCookie('app_theme', 'dark_theme', 1000);
    } else {
      this.setState({ theme: lightTheme });
      setCookie('app_theme', 'light_theme', 1000);
    }
  }

  findCurrentRoute(value, key, map) {
    if (value.path === window.location.pathname) {
      this.setState({ currentlySelected: value.index });
    }
  }

  profilePictureClicked() {
    this.setState({ logoSpinning: !this.state.logoSpinning });
  }

  render() {
    return (
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={this.state.theme}>
          <CssBaseline />

          <Grid sx={styles.root}>
            {this.state.proud ? <header style={styles.headerRoot} /> : null}
            <Tooltip title="Toggle light/dark mode" arrow onClick={this.toggleTheme}>
              <WbSunny style={styles.toggleThemeButton} />
            </Tooltip>
            <Router>
              <Tooltip title={this.state.logoSpinning ? 'weeeeeeeeeee!!' : 'Click me!'} arrow>
                <img
                  onClick={() => this.profilePictureClicked()}
                  srcSet={[profilePicture]}
                  style={this.state.logoSpinning ? styles.profileLogoSpinning : styles.profileLogo}
                  alt="headshot"
                />
              </Tooltip>
              <Typography sx={styles.mainTitle} variant="h3">Mark Fonte</Typography>
              <nav style={styles.primaryNav}>
                <List sx={styles.AppList}>
                  {routes.map((route, i) => (
                    <ListItem sx={styles.AppListItem} key={route.name}>
                      <Link style={styles.routerLink} to={route.path}>
                        <Tooltip title={'Navigate to ' + route.name} arrow>
                          <Button
                            onClick={() => this.currentlySelected(i)}
                            variant={this.state.currentlySelected === i ? 'contained' : 'outlined'}
                            color="secondary"
                            sx={styles.routerButton}
                          >
                            {route.name}
                          </Button>
                        </Tooltip>
                      </Link>
                    </ListItem>
                  ))}
                </List>
              </nav>

              <Routes>
                <Route path="/" exact element={<Home />} />
                <Route path="home" element={<Home />} />
                <Route path="work" element={<Work isDarkTheme={this.state.theme === darkTheme} />} />
                <Route path="contact" element={<Contact />} />
                <Route path="blog" element={<Blog />} />
              </Routes>
            </Router>
            <ScrollUpButton />
            <Footer />
          </Grid>
          {this.state.proud ?
            <footer style={styles.footerRoot} /> :
            null}
        </ThemeProvider>
      </StyledEngineProvider>
    );
  }
}


export default App;
