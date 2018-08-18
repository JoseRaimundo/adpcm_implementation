// força o javascrip a ser mais criterioso em relação a sintaxe 
'use strict'

const express = require('express');
// const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const pg = require('pg');


const app = express();
const router = express.Router();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));


// Conxão com o banco



// mongoose.connect('mongodb://projeto4d:projeto4d@ds123822.mlab.com:23822/aguadoce');

// Carregar models
const Estado = require('./models/estado');


// Carrega as Rotas
const index = require('./routers/index-route');
const estados = require('./routers/estado-route');



app.use('/', index);
app.use('/estados', estados) ;

module.exports = app;
