import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Outlet, useOutletContext } from "react-router-dom";
import {
  Alert,
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  CircularProgress,
  IconButton,
  InputAdornment,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import weddingCover from "../static/photos/wedding_cover.webp";
import { weddingRequest } from "./api.js";
import WeddingNav from "./WeddingNav.jsx";

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
  cover: {
    width: "100%",
    maxHeight: "360px",
    objectFit: "cover",
  },
  loginTitle: {
    textAlign: "center",
    paddingTop: "24px",
    paddingBottom: "8px",
  },
  description: {
    marginBottom: "16px",
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

export function WeddingHome() {
  const { content } = useOutletContext();
  return (
    <Box sx={styles.root}>
      <Card raised className="large-card" sx={styles.card}>
        <CardHeader className="card-header" title={content.title} />
        <CardContent>
          <Typography variant="body1">{content.body}</Typography>
        </CardContent>
      </Card>
    </Box>
  );
}

export function WeddingSection({ title }) {
  return (
    <Box sx={styles.root}>
      <Card raised className="large-card" sx={styles.card}>
        <CardHeader className="card-header" title={title} />
        <CardContent>
          <Typography variant="body1">Coming soon.</Typography>
        </CardContent>
      </Card>
    </Box>
  );
}

WeddingSection.propTypes = {
  title: PropTypes.string.isRequired,
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
    weddingRequest("login", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ password }),
    })
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
    return (
      <Box sx={styles.root}>
        <CircularProgress color="secondary" />
      </Box>
    );
  }

  if (status === "authed" && content) {
    return (
      <>
        <WeddingNav />
        <Outlet context={{ content }} />
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
        <CardHeader title="Ellie & Mark's Wedding" sx={styles.loginTitle} />
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
