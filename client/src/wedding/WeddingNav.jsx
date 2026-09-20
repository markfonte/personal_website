import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Box, Tab, Tabs } from "@mui/material";
import { useTheme } from "@mui/material/styles";

export const weddingPages = [
  { name: "Home", path: "/ellie" },
  { name: "Schedule", path: "/ellie/schedule", segment: "schedule" },
  { name: "Hotels", path: "/ellie/hotels", segment: "hotels" },
  { name: "Things To Do", path: "/ellie/things-to-do", segment: "things-to-do" },
  { name: "FAQs", path: "/ellie/faqs", segment: "faqs" },
  { name: "RSVP", path: "/ellie/rsvp", segment: "rsvp" },
  { name: "Registry", path: "/ellie/registry", segment: "registry" },
];

const styles = {
  nav: {
    display: "flex",
    justifyContent: "center",
    marginBottom: "12px",
    width: "100%",
  },
  tabs: {
    maxWidth: "100%",
  },
  tab: {
    minWidth: "auto",
    paddingLeft: "12px",
    paddingRight: "12px",
  },
};

export default function WeddingNav() {
  const theme = useTheme();
  const { pathname } = useLocation();
  const current = weddingPages.findIndex((page) => page.path === pathname);
  const value = current === -1 ? false : current;

  return (
    <Box component="nav" sx={styles.nav}>
      <Tabs
        value={value}
        onChange={() => {}}
        variant="scrollable"
        scrollButtons="auto"
        allowScrollButtonsMobile
        indicatorColor="secondary"
        sx={styles.tabs}
      >
        {weddingPages.map((page) => (
          <Tab
            key={page.path}
            component={Link}
            to={page.path}
            label={page.name}
            sx={{
              ...styles.tab,
              "&.Mui-selected": {
                color: theme.palette.secondary.main,
                fontWeight: "bold",
              },
            }}
          />
        ))}
      </Tabs>
    </Box>
  );
}
