CREATE TABLE moment (
    id UUID NOT NULL DEFAULT uuid_generate_v4() PRIMARY KEY,
    created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
    subject TEXT NOT NULL,
    body TEXT NOT NULL,
    date TIMESTAMPTZ NOT NULL);

CREATE TABLE destination (
    moment_id UUID NOT NULL REFERENCES moment(id),
    created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
    address TEXT NOT NULL);
