create table users(
    id int auto_increment not null,
    login varchar(100) null,
    senha varchar(100) null,
    email varchar(200) null,
    primary key(id)
)

select * from users;