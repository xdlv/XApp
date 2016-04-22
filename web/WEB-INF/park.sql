drop table IF EXISTS MapLiceAndPosition;
create table MapLiceAndPosition(
    PositionNum int not null primary key,
    CarLicense VARCHAR(100),
    CarPicPath VARCHAR(150)
);

drop table IF EXISTS MapPositionAndQueryPic;
create table MapPositionAndQueryPic(
    PositionNum int not null primary key,
    QueryPlace int not null,
    RoadPicPath VARCHAR(150)
);

insert into MapLiceAndPosition values(1,'À’A12345','img1.jpg');
insert into MapPositionAndQueryPic values(1,2,'img2.jpg');
