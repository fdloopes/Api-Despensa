const express = require('express');
const CategoryController = require('./controllers/CategoryController');
const ProductController = require('./controllers/ProductController');
const UserController = require('./controllers/UserController');
const PantryController = require('./controllers/PantryController');
const SharedPantryController = require('./controllers/SharedPantryController');
const PantryProductController = require('./controllers/PantryProductController');

const routes = express.Router();

// Rotas Categorias
routes.get('/categories',CategoryController.all);
routes.get('/categories/:id',CategoryController.show);
routes.post('/categories',CategoryController.create);
routes.put('/categories/:id',CategoryController.update);
routes.delete('/categories/:id',CategoryController.delete);

// Rotas Produtos
routes.get('/products', ProductController.all);
routes.get('/products/:id', ProductController.show);
routes.post('/products', ProductController.create);
routes.put('/products/:id', ProductController.update);
routes.delete('/products/:id', ProductController.delete);

// Rotas Usuarios
routes.get('/users', UserController.all);
routes.get('/users/:id', UserController.show);
routes.post('/users', UserController.create);
routes.put('/users/:id', UserController.update);
routes.delete('/users/:id', UserController.delete);

// Rotas Despensas
routes.get('/pantries',PantryController.all);
routes.get('/pantries/:id',PantryController.show);
routes.post('/pantries',PantryController.create);
routes.put('/pantries/:id',PantryController.update);
routes.delete('/pantries/:id',PantryController.delete);

// Rotas Despensas Compartilhadas
routes.get('/sharedPantries',SharedPantryController.all);
routes.get('/sharedPantries/:idUser/:idPantry?',SharedPantryController.show);
routes.post('/sharedPantries',SharedPantryController.create);
routes.put('/sharedPantries/:idUser/:idPantry',SharedPantryController.update);
routes.delete('/sharedPantries/:idUser/:idPantry',SharedPantryController.delete);

// Rotas Despensas Produtos
routes.get('/pantryProducts',PantryProductController.all);
routes.get('/pantryProducts/:idProduct?/:idPantry?',PantryProductController.show);
routes.post('/pantryProducts',PantryProductController.create);
routes.put('/pantryProducts/:idProduct/:idPantry',PantryProductController.update);
routes.delete('/pantryProducts/:idProduct/:idPantry',PantryProductController.delete);

module.exports = routes;