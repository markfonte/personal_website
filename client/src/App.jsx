import React, { useState, useEffect, useCallback } from 'react';
import './App.css';
import profilePicture
  from './static/photos/mark_circle.svg';
import weddingProfile from './static/photos/wedding_profile.webp';
import WorkPage from './work/Work.jsx';
import ContactPage from './contact/Contact.jsx';
import HomePage from './home/Home.jsx';
import Blog from './blog/Blog.jsx';
import Wedding, { WeddingHome, WeddingSection } from './wedding/Wedding.jsx';
import { weddingPages } from './wedding/WeddingNav.jsx';
import Footer from './footer/Footer.jsx';
import { BrowserRouter as Router, Route, Routes, Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { createTheme, StyledEngineProvider, ThemeProvider } from '@mui/material/styles';
import { LightMode, DarkMode, Home, Computer, Call, Wc, Logout } from '@mui/icons-material';
import {
  Typography,
  Tabs,
  Tab,
  CssBaseline,
  Box,
  Tooltip,
  IconButton,
} from '@mui/material';
import ScrollToTop from './shared/ScrollToTop.jsx';
import PropTypes from 'prop-types';

import { setCookie, getCookie } from './shared/util/Cookies.js';
import { isWeddingPath, weddingRequest } from './wedding/api.js';

const baseRoutes = [
  { name: 'Home', path: '/', icon: <Home /> },
  { name: 'Work', path: '/work', icon: <Computer /> },
  { name: 'Contact', path: '/contact', icon: <Call /> },
];

const weddingRoute = { name: 'Wedding', path: '/ellie', icon: <Wc /> };

function navIndex(pathname, routes) {
  return routes.findIndex((route) => {
    if (route.path === '/') {
      return pathname === '/' || pathname === '/home';
    }
    return pathname === route.path;
  });
}

function PrimaryNav({ showWedding, theme }) {
  const location = useLocation();
  if (isWeddingPath(location.pathname)) {
    return null;
  }
  const routes = showWedding ? [...baseRoutes, weddingRoute] : baseRoutes;
  const currentlySelected = navIndex(location.pathname, routes);

  return (
    <nav style={styles.primaryNav}>
      <Tabs
        value={currentlySelected === -1 ? false : currentlySelected}
        onChange={() => {}}
        indicatorColor="secondary"
      >
        {routes.map((route) => (
          <Tooltip key={route.name} title={'Navigate to ' + route.name} arrow>
            <Tab
              component={Link}
              to={route.path}
              label={route.name}
              sx={{
                '&.Mui-selected': {
                  color: theme.palette.secondary.main,
                  fontWeight: 'bold',
                },
              }}
              icon={route.icon}
            />
          </Tooltip>
        ))}
      </Tabs>
    </nav>
  );
}

function SiteTitle() {
  const { pathname } = useLocation();
  return (
    <Typography sx={styles.mainTitle} variant="h3">
      {isWeddingPath(pathname) ? 'Ellie & Mark' : 'Mark Fonte'}
    </Typography>
  );
}

function ProfilePicture({ spinning, onClick }) {
  const { pathname } = useLocation();
  const wedding = isWeddingPath(pathname);
  return (
    <Tooltip title={spinning ? 'weeeeeeeeeee!!' : 'click me!'} arrow>
      <img
        onClick={onClick}
        src={wedding ? weddingProfile : profilePicture}
        style={spinning ? styles.profileLogoSpinning : styles.profileLogo}
        alt={wedding ? 'Ellie and Mark' : 'headshot'}
      />
    </Tooltip>
  );
}

ProfilePicture.propTypes = {
  spinning: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

function TopLeftControls({ isDarkTheme, onToggleTheme }) {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  return (
    <Box sx={styles.topLeftControls}>
      <Tooltip title={isDarkTheme ? 'enter Light Mode' : 'enter Dark Mode'} arrow>
        <IconButton onClick={onToggleTheme} sx={styles.cornerButton}>
          {isDarkTheme ? <LightMode /> : <DarkMode />}
        </IconButton>
      </Tooltip>
      {isWeddingPath(pathname) ? (
        <Tooltip title="Back to Mark's site" arrow>
          <IconButton
            onClick={() => navigate('/')}
            aria-label="Back to Mark's site"
            sx={styles.cornerButton}
          >
            <Logout />
          </IconButton>
        </Tooltip>
      ) : null}
    </Box>
  );
}

TopLeftControls.propTypes = {
  isDarkTheme: PropTypes.bool.isRequired,
  onToggleTheme: PropTypes.func.isRequired,
};

PrimaryNav.propTypes = {
  showWedding: PropTypes.bool.isRequired,
  theme: PropTypes.object.isRequired,
};

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

const profileLogo = {
  height: '100px',
  width: '100px',
  alignSelf: 'center',
  zIndex: 2,
  borderRadius: '50%',
  objectFit: 'cover',
};

const styles = {
  root: {
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    position: 'relative',
    padding: '4px',
    paddingTop: '28px',
    margin: 'auto',
  },
  profileLogo,
  profileLogoSpinning: {
    ...profileLogo,
    animation: `react-logo-spin infinite 1s ease-in-out`,
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
  topLeftControls: {
    position: 'absolute',
    top: '4px',
    left: '4px',
    zIndex: 3,
    display: 'flex',
    alignItems: 'center',
  },
  cornerButton: {
    padding: '8px',
  },
};

export default function App() {
  const [theme, setTheme] = useState(lightTheme);
  const [rainbow, setRainbow] = useState(false);
  const [showWedding, setShowWedding] = useState(false);
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

  const profilePictureClicked = () => {
    setLogoSpinning(!logoSpinning);
  }

  const revealWeddingNav = useCallback(() => {
    setShowWedding(true);
  }, []);

  useEffect(() => {
    const abortController = new window.AbortController();
    weddingRequest('content', {
      method: 'get',
      signal: abortController.signal,
    })
      .then((response) => {
        if (response.ok) {
          setShowWedding(true);
        }
      })
      .catch((error) => {
        if (error.name === 'AbortError' || error.name === 'TypeError') {
          return;
        }
        console.error(error);
      });

    return () => abortController.abort();
  }, []);

  useEffect(() => {
    let rainbow = false;
    if (getCookie('rainbow') === 'true') {
      rainbow = true;
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
    setRainbow(rainbow);
  }, []);

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box sx={styles.root}>
          {rainbow ? <header style={styles.headerRoot} /> : null}
          <Router>
            <TopLeftControls
              isDarkTheme={theme === darkTheme}
              onToggleTheme={toggleTheme}
            />
            <ProfilePicture spinning={logoSpinning} onClick={profilePictureClicked} />
            <SiteTitle />
            <PrimaryNav showWedding={showWedding} theme={theme} />

            <Routes>
              <Route path="/" exact element={<HomePage isDarkTheme={theme === darkTheme} />} />
              <Route path="home" element={<HomePage isDarkTheme={theme === darkTheme} />} />
              <Route path="work" element={<WorkPage isDarkTheme={theme === darkTheme} />} />
              <Route path="contact" element={<ContactPage />} />
              <Route path="blog" element={<Blog />} />
              <Route path="wedding" element={<Navigate to="/ellie" replace />} />
              <Route path="ellie" element={<Wedding onAuthenticated={revealWeddingNav} />}>
                <Route index element={<WeddingHome />} />
                {weddingPages.filter((page) => page.segment).map((page) => (
                  <Route
                    key={page.segment}
                    path={page.segment}
                    element={<WeddingSection title={page.name} />}
                  />
                ))}
                <Route path="*" element={<Navigate to="/ellie" replace />} />
              </Route>
            </Routes>
            <ScrollToTop />
            <Footer isDarkTheme={theme === darkTheme} />
          </Router>
        </Box>
        {rainbow ? <footer style={styles.footerRoot} /> : null}
      </ThemeProvider>
    </StyledEngineProvider>
  );
};
