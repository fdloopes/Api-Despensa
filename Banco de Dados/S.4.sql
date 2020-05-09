/* QUERIE QUE TRAZ TODOS OS PRODUTOS PRESENTES NA DESPENSA */

SELECT DISTINCT p.name AS Nome, c.name AS Categoria, pa.name AS Despensa, pp.validity AS Validade, pp.amount AS Quantidade FROM Products AS p, Categories AS c, Pantries AS pa, PantryProducts AS pp WHERE p.id = pp.idProduct and c.id = p.idCategory and pa.id = pp.idPantry ORDER BY pa.name DESC;
