-- CREATE SCHEMA --

CREATE TABLE pages
(
    pageid INTEGER PRIMARY KEY,
    pagename VARCHAR(30) NOT NULL
);

-- One row per page, updated every time it is liked. Unique users are "enforced" by using cookies
CREATE TABLE likes
(
    likeid INTEGER PRIMARY KEY,
    pageid INTEGER NOT NULL,
    numlikes INTEGER NOT NULL,
    updated TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY(pageid) REFERENCES pages(pageid) ON DELETE CASCADE
);

-- One row per comment
CREATE TABLE comments
(
    commentid INTEGER PRIMARY KEY,
    pageid INTEGER NOT NULL,
    owner VARCHAR(50) NOT NULL,
    text VARCHAR(1024) NOT NULL,
    created TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY(pageid) REFERENCES pages(pageid) ON DELETE CASCADE
);


-- INSERT DEFAULT VALUES --

INSERT INTO pages
    (pagename)
VALUES
    ('home');

INSERT INTO pages
    (pagename)
VALUES
    ('current_work');

INSERT INTO pages
    (pagename)
VALUES
    ('past_projects');

INSERT INTO pages
    (pagename)
VALUES
    ('random');

INSERT INTO pages
    (pagename)
VALUES
    ('contact');