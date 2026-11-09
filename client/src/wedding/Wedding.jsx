import React, { Suspense, lazy, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Navigate, Outlet, Route, Routes, useOutletContext } from "react-router-dom";
import {
  Alert,
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Divider,
  IconButton,
  InputAdornment,
  Link,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import weddingCover from "../static/photos/wedding_cover.webp";
import { weddingPhotoUrl, weddingPost, weddingRequest } from "./api.js";
import WeddingLoading from "./WeddingLoading.jsx";
import WeddingNav, { weddingPages } from "./WeddingNav.jsx";

const weddingViews = {
  rsvp: lazy(() => import("./WeddingRsvp.jsx")),
  photos: lazy(() => import("./WeddingPhotos.jsx")),
  registry: lazy(() => import("./WeddingRegistry.jsx")),
};

const styles = {
  root: {
    display: "flex",
    justifyContent: "center",
    minHeight: "50vh",
  },
  card: {
    margin: "auto",
    maxWidth: "640px",
    width: "100%",
  },
  page: {
    display: "flex",
    flexDirection: "column",
    minHeight: "50vh",
  },
  pageCard: {
    width: "100%",
  },
  sectionCard: {
    width: "100%",
    paddingTop: "16px",
  },
  cover: {
    width: "100%",
    maxHeight: "360px",
    objectFit: "cover",
  },
  coverTitle: {
    textAlign: "center",
    paddingTop: "24px",
    paddingBottom: "8px",
  },
  description: {
    marginBottom: "16px",
  },
  entry: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "4px",
  },
  entryPhoto: {
    width: "96px",
    height: "96px",
    marginBottom: "8px",
  },
  details: {
    whiteSpace: "pre-line",
  },
  divider: {
    marginTop: "24px",
    marginBottom: "24px",
  },
  entryLink: {
    marginTop: "8px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "16px",
  },
};

function loginErrorMessage(error) {
  if (error.message === "too-many") {
    return "Too many attempts. Try again later.";
  }
  if (error.message === "unauthorized") {
    return "Incorrect password";
  }
  return "Something went wrong. Try again.";
}

function mapsUrl(address) {
  return (
    "https://www.google.com/maps/search/?api=1&query=" +
    encodeURIComponent(address)
  );
}

function WeddingHome() {
  const { content } = useOutletContext();
  const home = content.home || {};
  return (
    <Box sx={styles.page}>
      <Card raised className="large-card" sx={styles.pageCard}>
        <CardMedia
          component="img"
          image={weddingCover}
          alt="Wedding cover photo"
          sx={styles.cover}
        />
        <CardHeader
          title={home.date || "Coming soon."}
          subheader={home.location}
          sx={styles.coverTitle}
        />
        {home.message ? (
          <CardContent>
            <Typography variant="body1" sx={styles.details}>
              {home.message}
            </Typography>
          </CardContent>
        ) : null}
      </Card>
    </Box>
  );
}

function WeddingEntry({ entry }) {
  return (
    <Box sx={styles.entry}>
      {entry.photo ? (
        <Avatar
          src={weddingPhotoUrl(entry.photo)}
          alt=""
          slotProps={{ img: { loading: "lazy" } }}
          sx={styles.entryPhoto}
        />
      ) : null}
      {entry.title ? <Typography variant="h6">{entry.title}</Typography> : null}
      {entry.subtitle ? (
        <Typography variant="subtitle1" color="text.secondary">
          {entry.subtitle}
        </Typography>
      ) : null}
      {entry.address ? (
        <Link color="secondary" href={mapsUrl(entry.address)}>
          {entry.address}
        </Link>
      ) : null}
      {entry.details ? (
        <Typography variant="body1" sx={styles.details}>
          {entry.details}
        </Typography>
      ) : null}
      {entry.link ? (
        <Button
          variant="outlined"
          color="secondary"
          href={entry.link.url}
          sx={styles.entryLink}
        >
          {entry.link.label}
        </Button>
      ) : null}
    </Box>
  );
}

WeddingEntry.propTypes = {
  entry: PropTypes.shape({
    photo: PropTypes.string,
    title: PropTypes.string,
    subtitle: PropTypes.string,
    address: PropTypes.string,
    details: PropTypes.string,
    link: PropTypes.shape({
      label: PropTypes.string,
      url: PropTypes.string,
    }),
  }).isRequired,
};

export function WeddingPage({ title, children }) {
  return (
    <Box sx={styles.page}>
      <Card raised className="large-card" sx={styles.sectionCard}>
        <CardHeader className="card-header" title={title} />
        <CardContent>{children}</CardContent>
      </Card>
    </Box>
  );
}

WeddingPage.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

function WeddingSection({ title, segment }) {
  const { content } = useOutletContext();
  const entries = Array.isArray(content[segment]) ? content[segment] : [];
  return (
    <WeddingPage title={title}>
      {entries.length > 0 ? (
        entries.map((entry, index) => (
          <React.Fragment key={index}>
            {index > 0 && !entries[index - 1].heading ? <Divider sx={styles.divider} /> : null}
            {entry.heading ? (
              <Typography variant="h5" color="secondary" gutterBottom>
                {entry.heading}
              </Typography>
            ) : (
              <WeddingEntry entry={entry} />
            )}
          </React.Fragment>
        ))
      ) : (
        <Typography variant="body1">Coming soon.</Typography>
      )}
    </WeddingPage>
  );
}

WeddingSection.propTypes = {
  title: PropTypes.string.isRequired,
  segment: PropTypes.string.isRequired,
};

export default function Wedding({ onAuthenticated = () => {} }) {
  const [status, setStatus] = useState("loading");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [content, setContent] = useState(null);

  useEffect(() => {
    document.title = "Ellie & Mark";

    const robots = document.createElement("meta");
    robots.name = "robots";
    robots.content = "noindex, nofollow";
    document.head.appendChild(robots);

    const abortController = new window.AbortController();
    weddingRequest("content", {
      method: "get",
      signal: abortController.signal,
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("unauthorized");
        }
        return response.json();
      })
      .then((data) => {
        setContent(data);
        setStatus("authed");
        onAuthenticated();
      })
      .catch((err) => {
        if (err.name === "AbortError") {
          return;
        }
        setStatus("login");
      });

    return () => {
      abortController.abort();
      document.head.removeChild(robots);
    };
  }, [onAuthenticated]);

  const handleLogin = (event) => {
    event.preventDefault();
    setError("");
    setStatus("submitting");
    weddingPost("login", { password })
      .then((response) => {
        if (response.status === 429) {
          throw new Error("too-many");
        }
        if (!response.ok) {
          throw new Error("unauthorized");
        }
        return response.json();
      })
      .then((data) => {
        setContent(data);
        setPassword("");
        setStatus("authed");
        onAuthenticated();
      })
      .catch((err) => {
        setError(loginErrorMessage(err));
        setStatus("login");
      });
  };

  if (status === "loading") {
    return <WeddingLoading />;
  }

  if (status === "authed" && content) {
    return (
      <>
        <WeddingNav />
        <Suspense fallback={<WeddingLoading />}>
          <Routes>
            <Route element={<Outlet context={{ content }} />}>
              <Route index element={<WeddingHome />} />
              {weddingPages.filter((page) => page.segment).map((page) => {
                const View = weddingViews[page.segment];
                return (
                  <Route
                    key={page.segment}
                    path={page.segment}
                    element={View ? <View /> : <WeddingSection title={page.name} segment={page.segment} />}
                  />
                );
              })}
              <Route path="*" element={<Navigate to="/ellie" replace />} />
            </Route>
          </Routes>
        </Suspense>
      </>
    );
  }

  const visibilityLabel = showPassword ? "Hide password" : "Show password";

  return (
    <Box sx={styles.root}>
      <Card raised className="large-card" sx={styles.card}>
        <CardMedia
          component="img"
          image={weddingCover}
          alt="Wedding cover photo"
          sx={styles.cover}
        />
        <CardHeader title="Ellie & Mark's Wedding" sx={styles.coverTitle} />
        <CardContent>
          <Typography variant="body1" sx={styles.description}>
            Welcome! Please enter the password to continue. If you&#39;re stuck,
            reach out to one of us ❤️
          </Typography>
          <Box component="form" sx={styles.form} onSubmit={handleLogin}>
            {error ? <Alert severity="error">{error}</Alert> : null}
            <TextField
              autoFocus
              fullWidth
              type={showPassword ? "text" : "password"}
              label="Password"
              autoComplete="current-password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              slotProps={{
                input: {
                  endAdornment: (
                    <InputAdornment position="end">
                      <Tooltip title={visibilityLabel} arrow>
                        <IconButton
                          type="button"
                          aria-label={visibilityLabel}
                          onClick={() => setShowPassword(!showPassword)}
                          onMouseDown={(event) => event.preventDefault()}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </Tooltip>
                    </InputAdornment>
                  ),
                },
              }}
            />
            <Button
              type="submit"
              variant="contained"
              color="secondary"
              disabled={status === "submitting" || !password}
            >
              Enter
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}

Wedding.propTypes = {
  onAuthenticated: PropTypes.func,
};
