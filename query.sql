CREATE DATABASE ItemsDB use ItemsDb;

create table Users(ID int identity(1,1) primary key, FirstName varchar(100),LastName varchar(100),Passward varchar(100),Email varchar(100),Fund decimal(18,2),Type varchar(100),Statue int,CreatedON datetime);

create table Items(ID int identity(1,1) primary key, Name varchar(100), Manufacturer varchar(100), UnitPrice decimal(18,2), Discount decimal(18,2), Quantity int, ExpDate datetime,ImageUrl varchar(100), Status int);

create table Carts(ID int identity(1,1) primary key,UserID int, ItemsID int, UnitPrice decimal(18,0), Discount decimal(18,0), Quantity int, Price decimal(38,0));

create table Orders(ID int identity(1,1) primary key,  UserId int, ItemsId int, UnitPrice decimal(18,2), Discountl decimal(15,2), Quantity int, TotalPrice decimal(18,2));

create table OrdersItems(ID int identity(1,1) primary key, OrderID int,ItemID int, UnitPrice decimal(18,2), Discount decimal(18,2), Quantity int, TotalPrice decimal(18,2));

create table Persons(ID int identity(1,1) primary key, LastName varchar(255),FirstName varchar(255), Address varchar(255),