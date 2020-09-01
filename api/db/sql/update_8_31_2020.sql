-- August 31st, 2020
--
-- Added 'blog' page with likes. This script updates
-- the database structure to reflect this change.

INSERT INTO pages
    (pagename)
VALUES
    ('blog');

INSERT INTO likes
    (pagename, numlikes)
VALUES
    ('blog', 0);
