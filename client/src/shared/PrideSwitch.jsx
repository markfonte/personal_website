import React, { useState, useEffect } from 'react';
import { Card, Typography, Switch, Tooltip } from '@mui/material';

const getCookie = require('./util/Cookies.js').getCookie;
const setCookie = require('./util/Cookies.js').setCookie;

const styles = {
  flatCard: {
    padding: '12px',
    margin: '8px',
  },
  prideSwitchContent: {
    display: 'flex',
    flexDirection: 'row',
    margin: '8px',
    width: '100%',
    justifyContent: 'space-between',
  },
  prideTitle: {
    alignSelf: 'center',
  },
  prideSwitch: {
    alignSelf: 'flex-end',
  },
};

export default function PrideSwitch() {
  const [proud, setProud] = useState(true);

  useEffect(() => {
    if (getCookie('pride') === 'true') {
      setProud(true);
    } else if (getCookie('pride') === 'false') {
      setProud(false);
    } else {
      setProud(false);
      setCookie('pride', 'false', 1000);
    }
  }, []);

  const handleChange = () => {
    if (!proud) {
      setProud(true);
      setCookie('pride', 'true', 1000);
    } else {
      setProud(false);
      setCookie('pride', 'false', 1000);
    }
    window.location.reload();
  };

  return (
    <Card sx={styles.flatCard}>
      <div style={styles.prideSwitchContent}>
        <Typography sx={styles.prideTitle} variant="subtitle1">
          Rainbow mode
        </Typography>
        <Tooltip placement="top" arrow title="Toggle rainbow mode!">
          <Switch
            checked={proud}
            onClick={handleChange}
            sx={styles.prideSwitch}
            inputProps={{ 'aria-label': 'primary checkbox' }}
            color="secondary"
          />
        </Tooltip>
      </div>
    </Card>
  );
};
