Table-Authorization

First field:Name- id_auth int;Primary key, not null - номер аккаунта в списке БД 

Second field:Name- login varchar(45);not null, unique - логин для входа в аккаунт

Third field:Name- password char(40);not null - пароль для входа в аккаунт

Fourth field:Name- name varchar(45);not null - имя отображаемое в таблице рекордов

Table-example

First field:Name- id_exapmle int;primary key, not null - номер примера в БД

Second field:Name- example char(40);not null - пример для решения

Third field:Name- answer int;not null - ответ к примеру

Table-score

First field:Name- id_score int;primary key, not null - номер рекорда в БД

Second field:Name- name varchar(45);not null - имя отображаемое в таблице рекордов
Third field:Name- score int; not null - количество пройденных уровней
