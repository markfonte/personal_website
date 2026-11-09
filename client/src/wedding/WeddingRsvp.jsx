import React, { useState } from "react";
import PropTypes from "prop-types";
import { useOutletContext } from "react-router-dom";
import {
  Alert,
  Box,
  Button,
  Checkbox,
  Divider,
  FormControlLabel,
  Grow,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
import { weddingPhotoUrl, weddingPost } from "./api.js";
import { WeddingPage } from "./Wedding.jsx";

// Matches the limits the API enforces in api/db/rsvp.js.
const LIMITS = { name: 100, dietary: 300, song: 200, note: 1000 };

const styles = {
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "16px",
  },
  guest: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "8px",
  },
  choices: {
    justifyContent: "center",
  },
  actions: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "8px",
  },
  thanksPhoto: {
    alignSelf: "center",
    maxWidth: "100%",
    maxHeight: "400px",
    borderRadius: "4px",
  },
};

function attendingValue(attending) {
  if (attending === null) {
    return "";
  }
  return attending ? "yes" : "no";
}

function GuestAnswer({ guest, answer, autoFocus, onChange }) {
  const headingId = "rsvp-guest-" + guest.id;
  return (
    <Box sx={styles.guest}>
      <Typography variant="h6" id={headingId}>
        {guest.plusOne ? "Your guest" : guest.name}
      </Typography>
      <RadioGroup
        row
        aria-labelledby={headingId}
        value={attendingValue(answer.attending)}
        onChange={(event) => onChange({ attending: event.target.value === "yes" })}
        sx={styles.choices}
      >
        <FormControlLabel
          value="yes"
          control={<Radio color="secondary" autoFocus={autoFocus} />}
          label="Attending"
        />
        <FormControlLabel value="no" control={<Radio color="secondary" />} label="Not attending" />
      </RadioGroup>
      {answer.attending && guest.plusOne ? (
        <TextField
          fullWidth
          required
          label="Guest's name"
          value={answer.name}
          onChange={(event) => onChange({ name: event.target.value })}
          slotProps={{ htmlInput: { maxLength: LIMITS.name } }}
        />
      ) : null}
      {answer.attending ? (
        <TextField
          fullWidth
          label="Dietary needs (optional)"
          value={answer.dietary}
          onChange={(event) => onChange({ dietary: event.target.value })}
          slotProps={{ htmlInput: { maxLength: LIMITS.dietary } }}
        />
      ) : null}
    </Box>
  );
}

GuestAnswer.propTypes = {
  guest: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    plusOne: PropTypes.bool.isRequired,
  }).isRequired,
  answer: PropTypes.shape({
    attending: PropTypes.bool,
    name: PropTypes.string.isRequired,
    dietary: PropTypes.string.isRequired,
  }).isRequired,
  autoFocus: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default function WeddingRsvp() {
  const { content } = useOutletContext();
  const [step, setStep] = useState("find");
  const [name, setName] = useState("");
  const [party, setParty] = useState(null);
  const [answers, setAnswers] = useState({});
  const [song, setSong] = useState("");
  const [note, setNote] = useState("");
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);
  const [thanksPhoto, setThanksPhoto] = useState(null);
  const [noGifts, setNoGifts] = useState(false);

  if (!content.rsvpOpen) {
    return (
      <WeddingPage title="RSVP">
        <Typography variant="body1">Coming soon.</Typography>
      </WeddingPage>
    );
  }

  const startOver = () => {
    setStep("find");
    setName("");
    setParty(null);
    setError("");
  };

  const handleFind = (event) => {
    event.preventDefault();
    setError("");
    setBusy(true);
    weddingPost("rsvp/find", { name })
      .then((response) => {
        if (response.status === 404) {
          throw new Error("not-found");
        }
        if (!response.ok) {
          throw new Error("failed");
        }
        return response.json();
      })
      .then((data) => {
        setParty(data.party);
        setAnswers(Object.fromEntries(data.party.guests.map((guest) => [
          guest.id,
          { attending: guest.attending, name: guest.name, dietary: guest.dietary },
        ])));
        setSong(data.party.song);
        setNote(data.party.note);
        setNoGifts(false);
        setStep("form");
      })
      .catch((err) => {
        setError(err.message === "not-found"
          ? "We couldn't find that name. Try it exactly as it's written on your invitation, or reach out to us."
          : "Something went wrong. Try again.");
      })
      .finally(() => setBusy(false));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setError("");
    setBusy(true);
    weddingPost("rsvp", {
      partyId: party.id,
      guests: party.guests.map((guest) => ({ id: guest.id, ...answers[guest.id] })),
      song,
      note,
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("failed");
        }
        const photos = Array.isArray(content.photos) ? content.photos : [];
        setThanksPhoto(photos[Math.floor(Math.random() * photos.length)] || null);
        setParty({ ...party, responded: true });
        setStep("done");
      })
      .catch(() => setError("Something went wrong, so your RSVP wasn't saved. Try again."))
      .finally(() => setBusy(false));
  };

  if (step === "done") {
    return (
      <WeddingPage title="RSVP">
        <Box sx={styles.form}>
          <Alert severity="success">Thank you! Your RSVP is saved.</Alert>
          {thanksPhoto ? (
            <Grow in>
              <Box
                component="img"
                src={weddingPhotoUrl(thanksPhoto.file)}
                alt={thanksPhoto.caption || "Ellie and Mark"}
                sx={styles.thanksPhoto}
              />
            </Grow>
          ) : null}
          <Box sx={styles.actions}>
            <Button autoFocus variant="outlined" color="secondary" onClick={() => setStep("form")}>
              Change your RSVP
            </Button>
            <Button color="secondary" onClick={startOver}>
              RSVP for someone else
            </Button>
          </Box>
        </Box>
      </WeddingPage>
    );
  }

  if (step === "form") {
    const anyoneAttending = party.guests.some((guest) => answers[guest.id].attending);
    const complete = (noGifts || !anyoneAttending) && party.guests.every((guest) => {
      const answer = answers[guest.id];
      return answer.attending !== null && !(guest.plusOne && answer.attending && !answer.name.trim());
    });
    return (
      <WeddingPage title="RSVP">
        <Box component="form" sx={styles.form} onSubmit={handleSubmit}>
          {party.responded ? (
            <Alert severity="info">We have your RSVP. Change anything below and send it again.</Alert>
          ) : null}
          {party.guests.map((guest, index) => (
            <GuestAnswer
              key={guest.id}
              guest={guest}
              answer={answers[guest.id]}
              autoFocus={index === 0}
              onChange={(change) => setAnswers({
                ...answers,
                [guest.id]: { ...answers[guest.id], ...change },
              })}
            />
          ))}
          <Divider />
          <TextField
            label="Song request (optional)"
            value={song}
            onChange={(event) => setSong(event.target.value)}
            slotProps={{ htmlInput: { maxLength: LIMITS.song } }}
          />
          <TextField
            multiline
            minRows={3}
            label="Note to Ellie & Mark (optional)"
            value={note}
            onChange={(event) => setNote(event.target.value)}
            slotProps={{ htmlInput: { maxLength: LIMITS.note } }}
          />
          {anyoneAttending ? (
            <FormControlLabel
              required
              control={
                <Checkbox
                  color="secondary"
                  checked={noGifts}
                  onChange={(event) => setNoGifts(event.target.checked)}
                />
              }
              label="I will NOT bring any gift of monetary value. Ellie and Mark are honored that I would attend at all!"
            />
          ) : null}
          {error ? <Alert severity="error">{error}</Alert> : null}
          <Box sx={styles.actions}>
            <Button color="secondary" onClick={startOver}>
              Not you?
            </Button>
            <Button type="submit" variant="contained" color="secondary" disabled={busy || !complete}>
              Send RSVP
            </Button>
          </Box>
        </Box>
      </WeddingPage>
    );
  }

  return (
    <WeddingPage title="RSVP">
      <Box component="form" sx={styles.form} onSubmit={handleFind}>
        <Typography variant="body1">
          Enter your first and last name as they appear on your invitation.
        </Typography>
        {error ? <Alert severity="error">{error}</Alert> : null}
        <TextField
          autoFocus
          label="Full name"
          autoComplete="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <Button type="submit" variant="contained" color="secondary" disabled={busy || !name.trim()}>
          Find my invitation
        </Button>
      </Box>
    </WeddingPage>
  );
}
