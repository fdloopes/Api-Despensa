const express = require('express');
const routes = require('./src/routes');
const cors = require('cors');

// Iniciando o APP
const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

var port = process.env.PORT || 3001
app.listen(port);