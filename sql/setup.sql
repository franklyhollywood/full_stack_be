-- Use this file to define your SQL tables
-- The SQL in this file will be executed when you run `npm run setup-db`
DROP TABLE IF EXISTS time_card_users, time_card_posts CASCADE;

CREATE TABLE time_card_users (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    username TEXT NOT NULL,
    email TEXT NOT NULL,
    password_hash TEXT NOT NULL
);

INSERT INTO time_card_users (username, email, password_hash)
VALUES ('Frank', 'frank@frank.com', 'password_hash');

CREATE TABLE time_card_posts (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    beginning_time BIGINT NOT NULL,
    end_time BIGINT NOT NULL,
    posted_by BIGINT NOT NULL,
    FOREIGN KEY (posted_by) REFERENCES time_card_users(id)
);

INSERT INTO time_card_posts (beginning_time, end_time, posted_by)
VALUES ('1650310243831', '1650321043831', '1')