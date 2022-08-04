Drop table if exists beer;







CREATE table beers (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    name VARCHAR NOT NULL,
    type VARCHAR NOT NULL,
    manufactured VARCHAR NOT NULL
);


INSERT INTO beers (name, type, manufactured) VALUES 
('star dust', 'IPA', '2020'),
('black hole', 'stout', '2021'),
('pine ale', 'IPA', '2022'),
('the kings mead', 'IPA', '1775');