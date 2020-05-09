/* QUERIE QUE TRAZ TODOS OS RESPONSAVEIS PELAS DESPENSAS */

SELECT u.name AS Responsavel, p.name AS Despensa, p.shared AS Compartilhada FROM Users AS u, Pantries AS p WHERE u.id = p.idOwner;
