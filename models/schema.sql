CREATE DATABASE whats_your_flavor;
USE whats_your_flavor;

CREATE TABLE IF NOT EXISTS `users` (
  id int(5) NOT NULL AUTO_INCREMENT,
  first_name text NOT NULL,
  last_name text NOT NULL,
  mob_no int(11) NOT NULL,
  user_name varchar(20) NOT NULL,
  password varchar(15) NOT NULL,
  PRIMARY KEY (`id`)
); 