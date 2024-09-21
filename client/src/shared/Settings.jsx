import React, { useState, useEffect } from 'react';
import { Card, Typography, Switch, Tooltip, Snackbar, Alert, CardHeader, Box } from '@mui/material';

const getCookie = require('./util/Cookies.js').getCookie;
const setCookie = require('./util/Cookies.js').setCookie;

const styles = {
  flatCard: {
    padding: '12px',
    margin: '8px',
  },
  switchContent: {
    display: 'flex',
    flexDirection: 'row',
    margin: '8px',
    width: '100%',
    justifyContent: 'space-between',
  },
  switchTitle: {
    alignSelf: 'center',
  },
  switch: {
    alignSelf: 'flex-end',
  },
};

export default function Settings() {
  const [rainbow, setRainbow] = useState(true);
  const [ads, setAds] = useState(false);

  useEffect(() => {
    if (getCookie('rainbow') === 'true') {
      setRainbow(true);
    } else if (getCookie('rainbow') === 'false') {
      setRainbow(false);
    } else {
      setRainbow(false);
      setCookie('rainbow', 'false', 1000);
    }
  }, []);

  const handleRainbowChange = () => {
    if (!rainbow) {
      setRainbow(true);
      setCookie('rainbow', 'true', 1000);
    } else {
      setRainbow(false);
      setCookie('rainbow', 'false', 1000);
    }
    window.location.reload();
  };

  const handleAdsChange = () => {
    if (!ads) {
      setAds(true);
    }
  };

  const handleAdsSnackbarClose = (_, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setAds(false);
  };

  return (
    <Card sx={styles.flatCard}>
      <CardHeader
        className="card-header"
        title="Settings"
      />
      <Box sx={styles.switchContent}>
        <Typography sx={styles.switchTitle} variant="subtitle1">
          rainbow mode
        </Typography>
        <Tooltip placement="right" arrow title={rainbow ? "turn off 🌈 mode" : "turn on 🌈 mode"}>
          <Switch
            checked={rainbow}
            onClick={handleRainbowChange}
            sx={styles.switch}
            inputProps={{ 'aria-label': 'primary checkbox' }}
            color="secondary"
          />
        </Tooltip>
      </Box>
      <Box sx={styles.switchContent}>
        <Typography sx={styles.switchTitle} variant="subtitle1">
          show advertisements
        </Typography>
        <Tooltip placement="right" arrow title={ads ? "" : "show ads"}>
          <Switch
            checked={ads}
            onClick={handleAdsChange}
            sx={styles.switch}
            inputProps={{ 'aria-label': 'primary checkbox' }}
            color="secondary"
          />
        </Tooltip>
      </Box>
      <Snackbar
        open={ads}
        autoHideDuration={4000}
        onClose={handleAdsSnackbarClose}>
        <Alert
          onClose={handleAdsSnackbarClose}
          severity="success"
          variant="filled"
        >
          Just kidding! I don&#39;t have ads. Thanks for the support though 🙂
        </Alert>
      </Snackbar>
    </Card >
  );
};
