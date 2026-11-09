import React, { useEffect, useRef, useState } from "react";
import { Box, Button, Typography, Zoom } from "@mui/material";
import { CardGiftcard } from "@mui/icons-material";
import { WeddingPage } from "./Wedding.jsx";

const styles = {
  page: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "16px",
  },
  sike: {
    fontWeight: "bold",
    // Focus only moves here so screen readers announce the reveal.
    outline: "none",
  },
};

export default function WeddingRegistry() {
  const [revealed, setRevealed] = useState(false);
  const sikeRef = useRef(null);

  useEffect(() => {
    if (revealed) {
      sikeRef.current.focus();
    }
  }, [revealed]);

  return (
    <WeddingPage title="Registry">
      <Box sx={styles.page}>
        {revealed ? (
          <>
            <Zoom in>
              <Typography ref={sikeRef} tabIndex={-1} variant="h2" color="secondary" sx={styles.sike}>
                SIKE!
              </Typography>
            </Zoom>
            <Typography variant="body1">
              There&#39;s no registry. Your presence is the best present we could ask for!
            </Typography>
            <Typography variant="body1">
              <em>Seriously... no gifts.</em>
            </Typography>
          </>
        ) : (
          <Button
            variant="contained"
            color="secondary"
            startIcon={<CardGiftcard />}
            onClick={() => setRevealed(true)}
          >
            View our registry
          </Button>
        )}
      </Box>
    </WeddingPage>
  );
}
