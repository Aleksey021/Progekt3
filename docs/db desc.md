MySQL DB

В базе данных мы храним несколько таблиц:
1.User-таблица о всех пользователях зарегестрированных в игре.
2.Statistic-таблица со статистикой о пройденных уровнях пользователями.
3.Quiz_answer_generator-таблица которая присваивает каждому уровню случайно задание из списка.
4.Quiz_ag_instance-таблица которая добавляет случайные целочисленные не верные ответы.
5.Quiz-таблица о количестве уровней и допуске к этим уровням.
6.Quiz_item-таблица со списком заданий для каждого уровня.

Шаблон таблицы User:
{
"id",//id пользователя, число
"email",//email пользователя, строка
"password",//пароль пользователя зашифрованный SHA1, строка
"status",//статус пользователя , строка
"photo",//фотография пользователя,
"lastaccess",//время последней авторизации, дата
"modified",//дата изменений в аккаунте, дата
"created",//дата создания аккаунта, дата
}

Шаблон таблицы Statistic:
{
"id",//id результатов прохождения уровней, число
"user",//id пользователя взятое из таблицы User, число
"quiz",//максимальный пройденный уровень, число
"score",//количество очков набранных за всё время, число
"status",//статус пользователя , строка
"started",//время начала, дата
"finished",//время окончания, дата
}

Щаблон таблицы Quiz_answer_generator:
{
"id",//id присвоенное примеру случайно выбранному из таблицы Quiz_item, число
"identifier",//пример идентифицированный из таблицы Quiz_item, строка
"name",//имя пользователя которому присваивается этот пример, строка
}

Шаблон таблицы Quiz_ag_instance:
{
"id",//id присвоенное примеру случайно выбранному из таблицы Quiz_item, число
"generator",//генератор не верных целочисленных ответов к отдельному примеру, число
"name",//имя пользователя которому присваивается этот генератор, строка
"settings",//настройки генератора позволяющие определить , что все числа целочисленные, строка
}

Шаблон таблицы Quiz:
{
"id",//id уровня, число
"level",//номер уровня, число
"minlevel",//минимальный уровень необдходимы для допуска к этому уровню, число
"name",//название уровня, строка
}

Шаблон таблицы Quiz_item:
{
"id",//id примера, число
"quiz",// уровень к которому относится пример, число
"question",// пример математических действий, строка
"score",// количество очков получаемых при правильном ответе, число
"answer",// правильный ответ к примеру, строка
"ag_instance",// не правильнные ответы к примеру взятые из таблицы Quiz_ag_instance, число
}


