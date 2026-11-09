-- CREATE SCHEMA --

CREATE TABLE pages
(
    pagename VARCHAR(30) PRIMARY KEY
);

-- One row per page, updated every time it is liked. Unique users are "enforced" by using cookies
CREATE TABLE likes
(
    likeid INTEGER PRIMARY KEY,
    pagename VARCHAR(30) NOT NULL,
    numlikes INTEGER NOT NULL,
    updated TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY(pagename) REFERENCES pages(pagename) ON DELETE CASCADE
);


-- INSERT DEFAULT VALUES --

INSERT INTO pages
    (pagename)
VALUES
    ('home');

INSERT INTO pages
    (pagename)
VALUES
    ('work');

INSERT INTO pages
    (pagename)
VALUES
    ('contact');

INSERT INTO likes
    (pagename, numlikes)
VALUES
    ('home', 0);

INSERT INTO likes
    (pagename, numlikes)
VALUES
    ('work', 0);

INSERT INTO likes
    (pagename, numlikes)
VALUES
    ('contact', 0);


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
