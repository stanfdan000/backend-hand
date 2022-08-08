Drop table if exists beers;
Drop table if exists branches;
Drop table if exists cars;
Drop table if exists games;
Drop table if exists movies;


CREATE table beers (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    name VARCHAR NOT NULL,
    type VARCHAR NOT NULL,
    manufactured VARCHAR NOT NULL,
    calories VARCHAR NOT NULL,
    oz VARCHAR NOT NULL
);


INSERT INTO beers (name, type, manufactured, calories, oz) VALUES 
('star dust', 'IPA', '2020', '260', '16'),
('black hole', 'stout', '2021', '260', '16'),
('pine ale', 'IPA', '2022', '260', '16'),
('the kings mead', 'IPA', '1775', '260', '16');



CREATE table branches (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    name VARCHAR NOT NULL,
    age VARCHAR NOT NULL,
    dob VARCHAR NOT NULL
);


INSERT INTO branches (name, age, dob) VALUES 
('THE UNITED STATES ARMY', '247', 'june, 14, 1775'),
('THE UNITED STATES MARINE CORPS', '246', 'NOV, 10, 1775'),
('THE UNITED STATES NAVY', '243', 'COT, 13, 1775'),
('THE UNITED STATES CHAIR FORCE', '74', 'SEP, 18, 1947');



CREATE table cars (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    name VARCHAR NOT NULL,
    type VARCHAR NOT NULL,
    manufactured VARCHAR NOT NULL
);


INSERT INTO cars (name, type, manufactured) VALUES 
('thunder bird', 'ford', '1957'),
('coronet', 'dodge', '1968'),
('cj-7', 'jeep', '1985'),
('gto', 'pontiac', '1965');



CREATE table games (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    name VARCHAR NOT NULL,
    type VARCHAR NOT NULL,
    year VARCHAR NOT NULL
);


INSERT INTO games (name, type, year) VALUES 
('Halo', 'Action', '2000'),
('Gears Of War', 'Action', '2006'),
('Hit Man', 'Action', '2016'),
('BorderLands', 'Action', '2015');


CREATE table movies (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    name VARCHAR NOT NULL,
    type VARCHAR NOT NULL,
    year VARCHAR NOT NULL
);


INSERT INTO movies (name, type, year) VALUES 
('war of the worlds', 'sci-fi', '2005'),
('oblivion', 'Action', '2013'),
('elysium', 'Action', '2013'),
('chappie', 'crime', '2015');
