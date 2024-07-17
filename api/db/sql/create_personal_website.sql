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
