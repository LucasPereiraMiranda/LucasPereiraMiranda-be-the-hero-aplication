const express = require('express');
const routes = require('./routes');
const cors = require('cors');
const { errors } = require('celebrate')
const app = express();

const port = 3333;

app.use(cors());
app.use(express.json());
app.use(routes);
app.use(errors())

module.exports = app;


/**
 *  Rota / Recurso
 */

 /**
  * Metodos HTTP:
  * 
  * GET: Buscar uma informação no backend
  * POST: Criar/mandar uma informação no backend
  * PUT: Alterar uma informação no backend
  * DELETE: deletar uma informação no backend
  */

  /**
   * Tipos de parâmetros:
   * 
   * Query params: Parâmetros nomeados enviados na rota apos "?" (filtros, paginação...)
   * Route params: Parâmetros utilizados para identificar recursos
   * Request params: Corpo da requisição utiilizado para criar ou alterar recursos
   */
