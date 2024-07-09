import React, { useState, useEffect } from 'react';
import './App.css';
import profilePicture
  from './static/photos/mark_circle.svg';
import WorkPage from './work/Work.jsx';
import ContactPage from './contact/Contact.jsx';
import HomePage from './home/Home.jsx';
import Blog from './blog/Blog.jsx';
import Footer from './footer/Footer.jsx';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { createTheme, StyledEngineProvider, ThemeProvider } from '@mui/material/styles';
import { LightMode, DarkMode, Home, Work, Call } from '@mui/icons-material';
import {
  Typography,
  Tabs,
  Tab,
  CssBaseline,
  Grid,
  Tooltip,
  IconButton,
} from '@mui/material';
import ScrollUpButton from 'react-scroll-up-button';

const getCookie = require('./shared/util/Cookies.js').getCookie;
const setCookie = require('./shared/util/Cookies.js').setCookie;

const routes = [
  { name: 'Home', path: '/', index: 0, icon: <Home /> },
  { name: 'Work', path: '/work', index: 1, icon: <Work /> },
  { name: 'Contact', path: '/contact', index: 2, icon: <Call /> },
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
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '12px',
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
    margin: '4px',
  },
  routerLink: {
    textDecoration: 'none',
  },
  navTab: {
  },
  toggleThemeButton: {
    padding: '20px',
    alignSelf: 'flex-start',
  },
};

export default function App() {
  const [theme, setTheme] = useState(lightTheme);
  const [proud, setProud] = useState(false);
  const [currentlySelected, setCurrentlySelected] = useState(0);
  const [logoSpinning, setLogoSpinning] = useState(false);

  const toggleTheme = () => {
    if (theme === lightTheme) {
      setTheme(darkTheme);
      setCookie('app_theme', 'dark_theme', 1000);
    } else {
      setTheme(lightTheme);
      setCookie('app_theme', 'light_theme', 1000);
    }
  }

  const findCurrentRoute = (value) => {
    if (value.path === window.location.pathname) {
      setCurrentlySelected(value.index);
    }
  }

  const profilePictureClicked = () => {
    setLogoSpinning(!logoSpinning);
  }

  const handleTabChange = (event, newValue) => {
    setCurrentlySelected(newValue);
  };

  useEffect(() => {
    routes.forEach(findCurrentRoute);

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
    setTheme(initialTheme);
    setProud(proud);
  }, []);

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />

        <Grid sx={styles.root}>
          {proud ? <header style={styles.headerRoot} /> : null}
          <Tooltip title={theme === darkTheme ? "Enter light theme" : "Enter dark theme"} arrow>
            <IconButton onClick={toggleTheme} style={styles.toggleThemeButton}>
              {theme === darkTheme ? <LightMode /> : <DarkMode />}
            </IconButton>
          </Tooltip>
          <Router>
            <Tooltip title={logoSpinning ? 'weeeeeeeeeee!!' : 'Click me!'} arrow>
              <img
                onClick={profilePictureClicked}
                srcSet={[profilePicture]}
                style={logoSpinning ? styles.profileLogoSpinning : styles.profileLogo}
                alt="headshot"
              />
            </Tooltip>
            <Typography sx={styles.mainTitle} variant="h3">Mark Fonte</Typography>
            <nav style={styles.primaryNav}>
              <Tabs value={currentlySelected} onChange={handleTabChange} indicatorColor="secondary">
                {routes.map((route, _) => (
                  <Tooltip key={route.name} title={'Navigate to ' + route.name} arrow>
                    <Tab key={route.name} component={Link} to={route.path} label={route.name}
                      sx={{
                        ...styles.navTab,
                        '&.Mui-selected': {
                          color: theme.palette.secondary.main,
                          fontWeight: 'bold',
                        },
                      }}
                      icon={route.icon} />
                  </Tooltip>
                ))}
              </Tabs>
            </nav>

            <Routes>
              <Route path="/" exact element={<HomePage isDarkTheme={theme === darkTheme} />} />
              <Route path="home" element={<HomePage isDarkTheme={theme === darkTheme} />} />
              <Route path="work" element={<WorkPage isDarkTheme={theme === darkTheme} />} />
              <Route path="contact" element={<ContactPage />} />
              <Route path="blog" element={<Blog />} />
            </Routes>
          </Router>
          <ScrollUpButton />
          <Footer />
        </Grid>
        {proud ? <footer style={styles.footerRoot} /> : null}
      </ThemeProvider>
    </StyledEngineProvider>
  );
};
