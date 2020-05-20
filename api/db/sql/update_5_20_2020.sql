-- May 20th, 2020
-- 
-- Page names are now 'projects' and 'extra', condensed from
-- 'past_projects', 'current_work' and 'extra'. This script updates
-- the database structure to reflect this change. 

INSERT INTO pages
    (pagename)
VALUES
    ('projects');

INSERT INTO pages
    (pagename)
VALUES
    ('extra');


INSERT INTO likes
    (pagename, numlikes)
VALUES
    ('projects', 0);

INSERT INTO likes
    (pagename, numlikes)
VALUES
    ('extra', 0);
