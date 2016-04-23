drop table IF EXISTS HJC_ENTEROROUT_RECORD;
create table HJC_ENTEROROUT_RECORD(
    Order_num varchar(24) primary key,
    Car_number varchar(16) not null,
    Enter_or_Out int ,
    Enter_time datetime,
    Out_time datetime,
    Price float,
    fz int,
    msg varchar(512)
);
insert into HJC_ENTEROROUT_RECORD values('2016042310000000','À’A123456',0,now(),null,null,0,null);

insert into HJC_ENTEROROUT_RECORD values('2016042310000001'
  ,'À’A123456',1,now(),now(),1.20,0,null);

drop table IF EXISTS Car_ParkInfo;
create table Car_ParkInfo(
  LeftNum int
);
insert into Car_ParkInfo VALUES (20);



