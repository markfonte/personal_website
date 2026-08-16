import React, { useEffect, useState } from 'react';
import { Box, Fab, Tooltip, Zoom } from '@mui/material';
import KeyboardArrowUp from '@mui/icons-material/KeyboardArrowUp';

const SHOW_AFTER_PX = 240;

const styles = {
  fab: {
    position: 'fixed',
    bottom: 24,
    right: 24,
    zIndex: 1200,
  },
};

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > SHOW_AFTER_PX);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = () => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({
      top: 0,
      behavior: reduceMotion ? 'auto' : 'smooth',
    });
  };

  return (
    <Zoom in={visible} unmountOnExit>
      <Box sx={styles.fab}>
        <Tooltip title="back to top" arrow>
          <Fab
            color="secondary"
            size="medium"
            aria-label="back to top"
            onClick={scrollToTop}
          >
            <KeyboardArrowUp />
          </Fab>
        </Tooltip>
      </Box>
    </Zoom>
  );
}
