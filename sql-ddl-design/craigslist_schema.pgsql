CREATE TABLE regions (
  region_id INT  SERIAL PRIMARY KEY,
  region_name VARCHAR(30)
);

CREATE TABLE user(
    user_id INT SERIAL PRIMARY KEY,
    user_name VARCHAR(30),
    pref_region_id INT,
    FOREIGN KEY (region_id) REFERENCES regions(region_id)
    );

CREATE TABLE posts(
    post_id INT SERIAL PRIMARY KEY, 
    user_id INT, ON DELETE CASCADE,
    post_title VARCHAR(1000),
    post_text VARCHAR(100),
    post_date DATE,
    location_id INT,
    cat_id INT,
    FOREIGN KEY (cat_id) REFERENCES catigories(cat_id),
    FOREIGN KEY (location_id) REFERENCES regions(region_id),
    FOREIGN KEY (user_id) REFERENCES user(user_id)
    );

CREATE TABLE catigories(
    cat_id INT SERIAL PRIMARY KEY,
    cat_name VARCHAR(30)
    );