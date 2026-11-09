-- Wedding RSVPs. The guest list lives in api/wedding_guests.json on the server,
-- so these tables only hold answers, keyed by the ids in that file.

-- One row per party that has responded
CREATE TABLE rsvp_parties
(
    partyid VARCHAR(100) PRIMARY KEY,
    note TEXT,
    song TEXT,
    updated TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- One row per guest in a party that has responded. name is only set for plus-ones.
CREATE TABLE rsvp_guests
(
    guestid VARCHAR(100) PRIMARY KEY,
    partyid VARCHAR(100) NOT NULL,
    attending INTEGER NOT NULL,
    name TEXT,
    dietary TEXT,
    updated TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY(partyid) REFERENCES rsvp_parties(partyid) ON DELETE CASCADE
);
