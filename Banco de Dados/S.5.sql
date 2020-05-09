/* QUERIE QUE TRAZ TODOS OS USUARIOS DE UMA DESPENSA */

SELECT DISTINCT u.name AS Nome, p.name AS Despensa FROM Users AS u, Pantries AS p, SharedPantries AS sp WHERE (p.id = sp.idPantry and u.id = sp.idUser and p.shared = true) or (p.shared = false and u.id = p.idOwner) ORDER BY p.name DESC;
