CREATE DATABASE IF NOT EXISTS db_hmz;

/*
Descomentar para criar a tabela caso não tenha atualizado como recomendado no README.md 
e inserir os dados , a senha de todos é 12345
*/

/* 
USE db_hmz;

CREATE TABLE IF NOT EXISTS `users` (
  `Id` int NOT NULL AUTO_INCREMENT,
  `Avatar` longtext,
  `FirstName` longtext NOT NULL,
  `LastName` longtext NOT NULL,
  `Email` varchar(255) NOT NULL,
  `Password` longtext NOT NULL,
  PRIMARY KEY (`Id`),
  UNIQUE KEY `IX_Users_Email` (`Email`)
);

INSERT INTO users (Email, firstName, lastName, Avatar, Password) VALUES
('george.bluth1@reqres.in', 'George', 'Bluth', 'https://reqres.in/img/faces/1-image.jpg', '12345'),
('janet.weaver2@reqres.in', 'Janet', 'Weaver', 'https://reqres.in/img/faces/2-image.jpg', '12345'),
('emma.wong3@reqres.in', 'Emma', 'Wong', 'https://reqres.in/img/faces/3-image.jpg', '12345'),
('eve.holt4@reqres.in', 'Eve', 'Holt', 'https://reqres.in/img/faces/4-image.jpg', '12345'),
('charles.morris5@reqres.in', 'Charles', 'Morris', 'https://reqres.in/img/faces/5-image.jpg', '12345'),
('tracey.ramos6@reqres.in', 'Tracey', 'Ramos', 'https://reqres.in/img/faces/6-image.jpg', '12345'),
('michael.lawson7@reqres.in', 'Michael', 'Lawson', 'https://reqres.in/img/faces/7-image.jpg', '12345'),
('lindsay.ferguson8@reqres.in', 'Lindsay', 'Ferguson', 'https://reqres.in/img/faces/8-image.jpg', '12345'),
('tobias.funke9@reqres.in', 'Tobias', 'Funke', 'https://reqres.in/img/faces/9-image.jpg', '12345'),
('byron.fields10@reqres.in', 'Byron', 'Fields', 'https://reqres.in/img/faces/10-image.jpg', '12345'),
('jonathan.edwards11@reqres.in', 'Jonathan', 'Edwards', 'https://reqres.in/img/faces/11-image.jpg', '12345'),
('rachel.howell12@reqres.in', 'Rachel', 'Howell', 'https://reqres.in/img/faces/12-image.jpg', '12345'),
('michael.pearson13@reqres.in', 'Michael', 'Pearson', 'https://www.bestrandoms.com/Face//male/male2015108358948920.jpg', '12345'),
('lindsay.patterson14@reqres.in', 'Lindsay', 'Patterson', 'https://www.bestrandoms.com/Face//male/male2017108399196558.jpg', '12345'),
('georgia.lewis15@reqres.in', 'Georgia', 'Lewis', 'https://www.bestrandoms.com/Face//female/female20141023905490814.jpg', '12345'),
('raquel.lopez16@reqres.in', 'Raquel', 'Lopez', 'https://www.bestrandoms.com/Face//female/female1022777354370.jpg', '12345'),
('travis.martin17@reqres.in', 'Travis', 'Martin', 'https://www.bestrandoms.com/Face//male/male1085718109314.jpg', '12345'),
('michelle.green18@reqres.in', 'Michelle', 'Green', 'https://www.bestrandoms.com/Face//female/female1022697610992.jpg', '12345'),
('ryan.johnson19@reqres.in', 'Ryan', 'Johnson', 'https://www.bestrandoms.com/Face//male/male1084584362183.jpg', '12345'),
('linda.anderson20@reqres.in', 'Linda', 'Anderson', 'https://www.bestrandoms.com/Face//female/female1021981161316.jpg', '12345'),
('gregory.jackson21@reqres.in', 'Gregory', 'Jackson', 'https://www.bestrandoms.com/Face//female/female1022571170655.jpg', '12345'),
('michelle.miller22@reqres.in', 'Michelle', 'Miller', 'https://www.bestrandoms.com/Face//female/female20161024954810089.jpg', '12345'),
('rebecca.davis23@reqres.in', 'Rebecca', 'Davis', 'https://www.bestrandoms.com/Face//female/female20171026166672180.jpg', '12345'),
('lance.martinez24@reqres.in', 'Lance', 'Martinez', 'https://www.bestrandoms.com/Face//male/male1085553424713.jpg', '12345'),
('grace.hernandez25@reqres.in', 'Grace', 'Hernandez', 'https://www.bestrandoms.com/Face//female/female1022700744873.jpg', '12345'),
('matthew.nguyen26@reqres.in', 'Matthew', 'Nguyen', 'https://www.bestrandoms.com/Face//male/male20171084027661377.jpg', '12345'),
('robert.roberts27@reqres.in', 'Robert', 'Roberts', 'https://www.bestrandoms.com/Face//female/female1022287157349.jpg', '12345'),
('linda.garcia28@reqres.in', 'Linda', 'Garcia', 'https://www.bestrandoms.com/Face//female/female20171026159390717.jpg', '12345'),
('gregory.gonzalez29@reqres.in', 'Gregory', 'Gonzalez', 'https://www.bestrandoms.com/Face//male/male1084393313629.jpg', '12345');

*/