import React from "react";
import { useOutletContext } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import { weddingPhotoUrl } from "./api.js";
import { WeddingPage } from "./Wedding.jsx";

const styles = {
  photos: {
    columnCount: { xs: 1, sm: 2 },
    columnGap: "16px",
  },
  figure: {
    breakInside: "avoid",
    margin: "0 0 16px",
  },
  photo: {
    display: "block",
    width: "100%",
    height: "auto",
    borderRadius: "4px",
  },
  caption: {
    marginTop: "4px",
  },
};

export default function WeddingPhotos() {
  const { content } = useOutletContext();
  const photos = Array.isArray(content.photos) ? content.photos : [];
  return (
    <WeddingPage title="Photos">
      {photos.length > 0 ? (
        <Box sx={styles.photos}>
          {photos.map((photo) => (
            <Box component="figure" key={photo.file} sx={styles.figure}>
              <Box
                component="img"
                src={weddingPhotoUrl(photo.file)}
                alt={photo.caption || "Ellie and Mark"}
                width={photo.width}
                height={photo.height}
                loading="lazy"
                sx={styles.photo}
              />
              {photo.caption ? (
                <Typography component="figcaption" variant="body2" color="text.secondary" sx={styles.caption}>
                  {photo.caption}
                </Typography>
              ) : null}
            </Box>
          ))}
        </Box>
      ) : (
        <Typography variant="body1">Coming soon.</Typography>
      )}
    </WeddingPage>
  );
}
