DROP TABLE IF EXISTS users CASCADE;



CREATE TABLE users (
  user_id SERIAL PRIMARY KEY NOT NULL,
  username VARCHAR(255) UNIQUE,
  nominations json
);
