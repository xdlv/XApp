drop table IF EXISTS t_grade;
create table t_grade(

    user_name varchar(32) not null,
    city varchar(32) not null,
    right_count int,
    fail_count int,
    upload_time TIMESTAMP
);

select * from t_grade;