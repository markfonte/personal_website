import React from 'react';
import './App.css';
import PropTypes from 'prop-types';
import profilePicture
  from './static/images/photos/mark_circle.webp';
import profilePictureFallback
  from './static/images/photos/mark_circle.png';
import Projects from './projects/projects.jsx';
import Extra from './extra/extra.jsx';
import Contact from './contact/contact.jsx';
import Home from './home/home.jsx';
import Blog from './blog/blog.jsx';
import Footer from './footer/footer.jsx';
import LinkStyle from '@material-ui/core/Link';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import {createMuiTheme} from '@material-ui/core/styles';
import {ThemeProvider, withStyles} from '@material-ui/styles';
import {WbSunny} from '@material-ui/icons';
import {
  Typography,
  Button,
  CssBaseline,
  List,
  ListItem,
  Grid,
  Tooltip,
} from '@material-ui/core';
import ScrollUpButton from 'react-scroll-up-button';

const getCookie = require('./shared/util/cookies.js').getCookie;
const setCookie = require('./shared/util/cookies.js').setCookie;

const routes = [
  {name: 'Home', path: '/', index: 0},
  {name: 'My Thoughts', path: '/blog', index: 1},
  {name: 'Projects', path: '/projects', index: 2},
  {name: 'Extra', path: '/extra', index: 3},
  {name: 'Contact', path: '/contact', index: 4},
];

const darkTheme = createMuiTheme({
  palette: {
    type: 'dark',
    secondary: {
      main: '#FFCb05', // maize
    },
    background: {
      default: '#212121',
      paper: '#313131',
    },
  },
});

const lightTheme = createMuiTheme({
  palette: {
    type: 'light',
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
      default: '#DEDEDE',
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
    if (getCookie('app_theme') === 'light_theme') {
      initialTheme = lightTheme;
    } else if (getCookie('app_theme') === 'dark_theme') {
      initialTheme = darkTheme;
    } else {
      setCookie('app_theme', 'dark_theme', 1000);
    }
    this.setState({
      theme: initialTheme,
      proud: proud,
    });
  }

  toggleTheme() {
    if (this.state.theme === lightTheme) {
      this.setState({theme: darkTheme});
      setCookie('app_theme', 'dark_theme', 1000);
    } else {
      this.setState({theme: lightTheme});
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
          <Tooltip title="Toggle light/dark mode" arrow onClick={this.toggleTheme}>
            <WbSunny />
          </Tooltip>
          <Router>
            <picture>
              <source srcSet={profilePicture} type="image/webp"/>
              <source srcSet={profilePictureFallback} type="image/png"/>
              <img
                srcSet={[profilePicture, profilePictureFallback]}
                className={classes.profileLogo}
                title="headshot"
                alt="headshot"
              />
            </picture>
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
            <Route path="/blog" component={Blog} />
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
