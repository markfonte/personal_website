import React from "react";
import { Box, CircularProgress } from "@mui/material";

const styles = {
  root: {
    display: "flex",
    justifyContent: "center",
    minHeight: "50vh",
  },
};

export default function WeddingLoading() {
  return (
    <Box sx={styles.root}>
      <CircularProgress color="secondary" />
    </Box>
  );
}
