
create database restApi;
use restApi;
CREATE TABLE Movies(
id int primary key not null,
title Varchar(30),
principal_Actor Varchar(30)
);
INSERT INTO movies(id,title,principal_Actor) VALUES(1 , "Harry Potter", "Daniel");
INSERT INTO movies(id,title,principal_Actor) VALUES(2 , "Animales fantasticos", "Grindewall");
INSERT INTO movies(id,title,principal_Actor) VALUES(3 , "Bajo cero", "Perros");
INSERT INTO movies(id,title,principal_Actor) VALUES(4 , "Soy leyenda", "Will");
INSERT INTO movies(id,title,principal_Actor) VALUES(5 , "Kiki el amor de hace", "Paco leon");

show tables;

select id , title , principal_Actor from movies;

ALTER USER 'rmateost'@'localhost' IDENTIFIED WITH mysql_native_password BY 'Sevillamalo16';

flush privileges;



