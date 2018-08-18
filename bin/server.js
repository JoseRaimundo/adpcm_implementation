// força o javascrip a ser mais criterioso em relação a sintaxe 
'use strict'

const app   = require('../src/app');
const http = require('http');
const debug = require('debug')('aguadoce:server');
// const express = require('express');

// const app = express();
const port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

const server = http.createServer(app);

server.listen(port);
server.on('error', onError);
server.on('listening', onListening);

console.log("API RODANDO NA PORTA" + port);

// const router = express.Router();

function normalizePort(val){
    const port = parseInt(val, 10);
     if (isNaN(port)){
        return val;
    }
    if (port >= 0){
        return port;
    }
    return false;
}


function onError(error){
    if (error.syscall !== 'listen'){
        throw error;
    }

    const bind = typeof port === 'string' ?
        'Pipe ' + port :
        'Port ' + port;

    switch (error.code) {
        case 'EACCES': //erro de permissão
            console.error(bind + ' requiser elevated privileges');
            process.exit(1);
            break;
        case 'EADDRINUSE': //erro de endereço inválido
            console.error(bind + 'is already in use');
            process.exit(1);
            break;
        default:
            throw error;
    }
}

function onListening(){
    const addr = server.address();
    const bind = typeof addr === 'string'
        ? 'pipe ' + addr 
        : 'port ' + addr.port;

    debug('Listening on ' + bind);
}