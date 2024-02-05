CREATE TABLE league (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    country_id INT NOT NULL,
    code VARCHAR(10) NOT NULL,
);

CREATE TABLE team (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    league_id INT NOT NULL,
    code VARCHAR(3) NOT NULL,
    FOREIGN KEY (league_id) REFERENCES league(id)
);

CREATE TABLE player (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    team_id INT NOT NULL,
    position VARCHAR(10) NOT NULL,
    goals INT NOT NULL,
    FOREIGN KEY (team_id) REFERENCES team(id)
);

CREATE TABLE match (
    id SERIAL PRIMARY KEY,
    home_team_id INT NOT NULL,
    away_team_id INT NOT NULL,
    home_team_goals INT NOT NULL,
    away_team_goals INT NOT NULL,
    date DATE NOT NULL,
    season_id INT NOT NULL,
    FOREIGN KEY (season_id) REFERENCES season(id),
    FOREIGN KEY (home_team_id) REFERENCES team(id),
    FOREIGN KEY (away_team_id) REFERENCES team(id)
);

CREATE TABLE referee (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL
    match_id INT
    FOREIGN KEY (match_id) REFERENCES match(id)
);

CREATE TABLE goals (
    id SERIAL PRIMARY KEY,
    player_id INT NOT NULL,
    match_id INT NOT NULL,
    FOREIGN KEY (player_id) REFERENCES player(id),
    FOREIGN KEY (match_id) REFERENCES match(id)
);

CREATE TABLE lineups (
    id SERIAL PRIMARY KEY,
    player_id INT NOT NULL,
    match_id INT NOT NULL,
    FOREIGN KEY (player_id) REFERENCES player(id),
    FOREIGN KEY (match_id) REFERENCES match(id)
);

CREATE TABLE season(
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    start_date DATE NOT NULL,
    end_date DATE NOT NULL
);

CREATE TABLE results (
    id SERIAL PRIMARY KEY,
    match_id INT NOT NULL,
    team_id INT NOT NULL,
    result VARCHAR(10) NOT NULL,
    FOREIGN KEY (team_id) REFERENCES team(id),
    FOREIGN KEY (match_id) REFERENCES match(id)
);

