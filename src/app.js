// força o javascrip a ser mais criterioso em relação a sintaxe 
'use strict'

const express = require('express');

const app = express();
const router = express.Router();


const route = router.get('/', (requestAnimationFrame, res, next) =>{
    res.status(200).send({
        title: "Node Store API",
        version: "0.0.1"
    });
});

app.use('/', route);

module.exports = app;
