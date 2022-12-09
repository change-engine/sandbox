DO $$
DECLARE moment UUID;
BEGIN

INSERT INTO moment (subject, body, date)
VALUES ('Test Moment', 'FooBar', '2022/04//24')
RETURNING ID
INTO moment;

INSERT INTO destination (moment_id, address)
VALUES
    (moment, 'support@changeengine.com'),
    (moment, 'help@changeengine.com');

END;
$$;