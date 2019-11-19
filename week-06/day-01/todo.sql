CREATE TABLE IF NOT EXISTS Todo (
  item TEXT,
  finished BOOLEAN
);

INSERT INTO Todo (item, finished)
VALUES ("Wake up", 1),
("Do some work", 0),
("Make slides for demo", 0),
("Prepare for the demo", 0),
("Rehearse it", 0),
("Nail it", 0);

SELECT item FROM Todo
WHERE finished = 0;

UPDATE Todo
SET finished = 1
WHERE item = "Do some work";


DELETE FROM Todo
WHERE finished = 1;