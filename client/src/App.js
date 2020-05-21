import React from 'react';
import './App.css';
import PropTypes from 'prop-types';
import profilePicture from './static/images/photos/mark_circle.webp';
import whiteSunIcon from './static/images/icons/sun_icon_white.svg';
import blackSunIcon from './static/images/icons/sun_icon_black.svg';
import Projects from './projects/projects.jsx';
import Extra from './extra/extra.jsx';
import Contact from './contact/contact.jsx';
import Home from './home/home.jsx';
import Footer from './footer/footer.jsx';
import LinkStyle from '@material-ui/core/Link';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import {createMuiTheme} from '@material-ui/core/styles';
import {ThemeProvider, withStyles} from '@material-ui/styles';
import {Typography, Button, CssBaseline, List, ListItem, Grid, Tooltip} from '@material-ui/core';
import ScrollUpButton from 'react-scroll-up-button';

const getCookie = require('./shared/util/cookies.js').getCookie;
const setCookie = require('./shared/util/cookies.js').setCookie;

const routes = [
  {name: 'Home', path: '/', index: 0},
  {name: 'Projects', path: '/projects', index: 1},
  {name: 'Extra', path: '/extra', index: 2},
  {name: 'Contact', path: '/contact', index: 3},
];

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

const styles = {
  root: {
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    maxWidth: '1200px',
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
  primaryNav: {
    textAlign: 'center',
  },
  toggleThemeIcon: {
    position: 'absolute',
    left: '10%',
    top: '16px',
  },
  /* credit: https://travis-ci.org/account/preferences */
  headerRoot: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
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
    background: 'linear-gradient(to bottom, #e2453c90 0, #e2453c90 16%,'+
        '#e07e3990 16%, #e07e3990 32%, #e5d66790 32%, #e5d66790 48%, #51b95b90 48%,'+
        '#51b95b90 66%, #1e72b790 66%, #1e72b790 86%, #6f5ba790 86%) no-repeat',
  },
  mainTitle: {
    margin: '8px',
  },
  routerLink: {
    textDecoration: 'none',
  },
  routerButton: {
    marginTop: 8, marginBottom: 8,
  },
};

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: darkTheme,
      themeIcon: whiteSunIcon,
      proud: false,
      currentlySelected: -1,
    };
    this.toggleTheme = this.toggleTheme.bind(this);
    this.currentlySelected = this.currentlySelected.bind(this);
    this.findCurrentRoute = this.findCurrentRoute.bind(this);
  }

  currentlySelected(id) {
    this.setState({currentlySelected: id});
  }

  componentDidMount() {
    routes.forEach(this.findCurrentRoute);

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

  findCurrentRoute(value, key, map) {
    if (value.path === window.location.pathname) {
      this.setState({currentlySelected: value.index});
    }
  }

  render() {
    const {classes} = this.props;
    const rainbowHeader = this.state.proud === true ?
      <header className={classes.headerRoot} /> :
      <div />;
    const rainbowFooter = this.state.proud === true ?
      <footer className={classes.footerRoot} /> :
      <div />;
    const currentlySelected = this.state.currentlySelected;
    return (
      <ThemeProvider theme={this.state.theme}>
        <CssBaseline />

        <Grid className={classes.root}>
          {rainbowHeader}
          <Tooltip title="Toggle light/dark mode" arrow>
            <img
              className={classes.toggleThemeIcon}
              src={this.state.themeIcon}
              onClick={this.toggleTheme}
              alt="Toggle light/dark mode"
            />
          </Tooltip>
          <Router>
            <img src={profilePicture} className={classes.profileLogo} alt="headshot" />
            <Typography className={classes.mainTitle} variant="h3">Mark Fonte</Typography>
            <nav className={classes.primaryNav}>
              <List className={classes.AppList}>
                {routes.map((route, i) => (
                  <ListItem className={classes.AppListItem} key={route.name}>
                    <LinkStyle style={{textDecoration: 'none'}}
                      className={classes.routerLink} component={Link} to={route.path}>
                      <Tooltip title={'Go to ' + route.name + ' page'} arrow>
                        <Button
                          onClick={() => this.currentlySelected(i)}
                          variant={currentlySelected === i ? 'contained' : 'outlined'}
                          color="secondary"
                          className={classes.routerButton}
                        >
                          {route.name}
                        </Button>
                      </Tooltip>
                    </LinkStyle>
                  </ListItem>
                ))}
              </List>
            </nav>

            <Route path="/" exact component={Home} />
            <Route path="/home" component={Home} />
            <Route path="/projects" component={Projects} />
            <Route path="/extra" component={Extra} />
            <Route path="/contact" component={Contact} />
          </Router>
          <ScrollUpButton />
          <Footer />
        </Grid>
        {rainbowFooter}
      </ThemeProvider>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);
