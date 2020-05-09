/* Script de inserção de dados nas tabelas */

/* INSERÇÃO TABELA CATEGORIES */
INSERT INTO Categories(name,updatedAt) VALUES ('Alimentos',now());
INSERT INTO Categories(name,updatedAt) VALUES ('Bebidas',now());
INSERT INTO Categories(name,updatedAt) VALUES ('Higiene',now());
INSERT INTO Categories(name,updatedAt) VALUES ('Limpeza',now());
INSERT INTO Categories(name,updatedAt) VALUES ('Carnes',now());
INSERT INTO Categories(name,updatedAt) VALUES ('Frios e Laticínios',now());
INSERT INTO Categories(name,updatedAt) VALUES ('Padaria e Outros',now());
INSERT INTO Categories(name,updatedAt) VALUES ('Frutas, Legumes e Verduras',now());
INSERT INTO Categories(name,updatedAt) VALUES ('Temperos',now());

/* INSERÇÃO TABELA PRODUCTS */
INSERT INTO Products(name,idCategory,updatedAt) VALUES ('Café Mellita Forte 500g',1,now());
INSERT INTO Products(name,idCategory,updatedAt) VALUES ('Coca-Cola 2L',1,now());
INSERT INTO Products(name,idCategory,updatedAt) VALUES ('Coração de Galinha congelado 1kg',5,now());
INSERT INTO Products(name,idCategory,updatedAt) VALUES ('Banana Prata 1kg',8,now());
INSERT INTO Products(name,idCategory,updatedAt) VALUES ('Chimichurri 20g',9,now());
INSERT INTO Products(name,idCategory,updatedAt) VALUES ('Detergente 500ml',4,now());
INSERT INTO Products(name,idCategory,updatedAt) VALUES ('Corona 355ml',2,now());
INSERT INTO Products(name,idCategory,updatedAt) VALUES ('Pão de sanduíche 500g',7,now());
INSERT INTO Products(name,idCategory,updatedAt) VALUES ('Papel Higiênico 4 rolos',3,now());
INSERT INTO Products(name,idCategory,updatedAt) VALUES ('Presunto 200g',6,now());

/* INSERÇÃO TABELA USERS */
INSERT INTO Users(id,name,password,email,updatedAt) VALUES (1,'Renato Medeiros',1234,'renato@gmail.com',now());
INSERT INTO Users(id,name,password,email,updatedAt) VALUES (2,'Juca da Silva',1234,'juca@gmail.com',now());
INSERT INTO Users(id,name,password,email,updatedAt) VALUES (3,'Daniel Gonçalves',1234,'daniel@gmail.com',now());
INSERT INTO Users(id,name,password,email,updatedAt) VALUES (4,'Gabriel Pinheiro',1234,'gabriel@gmail.com',now());
INSERT INTO Users(id,name,password,email,updatedAt) VALUES (5,'Derpino Ficticio',1234,'derpino@gmail.com',now());
INSERT INTO Users(id,name,password,email,updatedAt) VALUES (6,'Felipe Lopes',1234,'fdloopes@gmail.com',now());
INSERT INTO Users(id,name,password,email,updatedAt) VALUES (7,'Solange Dias',1234,'solange@gmail.com',now());

/* INSERÇÃO TABELA PANTRIES */
INSERT INTO Pantries(name,shared,idOwner,updatedAt) VALUES ('Despensa',false,1,now());
INSERT INTO Pantries(name,shared,idOwner,updatedAt) VALUES ('Compartilhada',true,6,now());
INSERT INTO Pantries(name,shared,idOwner,updatedAt) VALUES ('Felipe',false,6,now());
INSERT INTO Pantries(name,shared,idOwner,updatedAt) VALUES ('Qualquer',false,7,now());

/* INSERÇÃO TABELA SHARED PANTRIES */
INSERT INTO SharedPantries(idPantry,idUser,updatedAt) VALUES (2,6,now());
INSERT INTO SharedPantries(idPantry,idUser,updatedAt) VALUES (2,7,now());
INSERT INTO SharedPantries(idPantry,idUser,updatedAt) VALUES (2,2,now());
INSERT INTO SharedPantries(idPantry,idUser,updatedAt) VALUES (2,1,now());
INSERT INTO SharedPantries(idPantry,idUser,updatedAt) VALUES (2,4,now());

/* INSERÇÃO TABELA PANTRY PRODUCTS */
INSERT INTO PantryProducts(idPantry,idProduct,validity,amount,updatedAt) VALUES (2,3,"2020-06-02",2,now());
INSERT INTO PantryProducts(idPantry,idProduct,validity,amount,updatedAt) VALUES (2,5,"2020-10-22",1,now());
INSERT INTO PantryProducts(idPantry,idProduct,validity,amount,updatedAt) VALUES (2,1,"2020-12-22",3,now());
INSERT INTO PantryProducts(idPantry,idProduct,validity,amount,updatedAt) VALUES (2,7,"2020-11-23",4,now());
INSERT INTO PantryProducts(idPantry,idProduct,validity,amount,updatedAt) VALUES (2,4,"2020-06-11",1,now());
INSERT INTO PantryProducts(idPantry,idProduct,validity,amount,updatedAt) VALUES (2,8,"2021-08-11",1,now());
INSERT INTO PantryProducts(idPantry,idProduct,validity,amount,updatedAt) VALUES (2,2,"2020-09-09",1,now());
INSERT INTO PantryProducts(idPantry,idProduct,validity,amount,updatedAt) VALUES (2,9,"2020-06-21",1,now());
INSERT INTO PantryProducts(idPantry,idProduct,validity,amount,updatedAt) VALUES (2,10,"2021-03-21",3,now());
INSERT INTO PantryProducts(idPantry,idProduct,validity,amount,updatedAt) VALUES (2,6,"2021-06-21",2,now());
INSERT INTO PantryProducts(idPantry,idProduct,validity,amount,updatedAt) VALUES (1,3,"2021-05-21",1,now());
INSERT INTO PantryProducts(idPantry,idProduct,validity,amount,updatedAt) VALUES (3,2,"2021-07-20",2,now());
INSERT INTO PantryProducts(idPantry,idProduct,validity,amount,updatedAt) VALUES (4,7,"2021-02-12",1,now());
INSERT INTO PantryProducts(idPantry,idProduct,validity,amount,updatedAt) VALUES (3,1,"2021-06-23",2,now());
INSERT INTO PantryProducts(idPantry,idProduct,validity,amount,updatedAt) VALUES (3,3,"2021-05-23",1,now());
INSERT INTO PantryProducts(idPantry,idProduct,validity,amount,updatedAt) VALUES (4,2,"2021-07-23",2,now());
INSERT INTO PantryProducts(idPantry,idProduct,validity,amount,updatedAt) VALUES (1,7,"2021-01-03",1,now());
INSERT INTO PantryProducts(idPantry,idProduct,validity,amount,updatedAt) VALUES (3,5,"2021-06-21",1,now());
INSERT INTO PantryProducts(idPantry,idProduct,validity,amount,updatedAt) VALUES (4,3,"2021-05-23",1,now());
INSERT INTO PantryProducts(idPantry,idProduct,validity,amount,updatedAt) VALUES (1,2,"2021-07-01",2,now());
INSERT INTO PantryProducts(idPantry,idProduct,validity,amount,updatedAt) VALUES (3,7,"2021-03-01",1,now());

/* UPDATES DE TESTE PARA CAMPOS updated_at */
/*
UPDATE Posts SET updated_at = now() where id = 2;
UPDATE Comments SET updated_at = now() where id = 5;
*/
