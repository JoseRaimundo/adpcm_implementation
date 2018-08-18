'use strict';

// const mongoose = require('mongoose');
// const Estado = mongoose.model('Estado');
const {Client} = require('pg');
const connectionString = 'postgresql://postgres:projeto4d@localhost:5432/aguadoce';
const client = new Client({
    connectionString: connectionString,
  })

client.connect();


exports.get = (req, response, next) => {
    var teste = "";
    client.query('SELECT * FROM Municipio', (err, res) => {
        if (err) {
          console.log(err.stack);
        } else {
            teste = res.rows[0].nome;
            // response.status(200).send({
            // municipios: res.rows
            // });
            return response.json(res.rows);
        }
      })

    
    
    console.log("Entrou no get");
}

exports.post = (req, res, next) => {
    // var estado = new Estado();
    // console.log("Entrou aqui " + req.body.nome);
    // estado.nome = req.body.nome;
    // estado.codigo = req.body.codigo;
    // estado.save().then(x => {
    //     res.status(201).send({
    //         message: "Estado cadastrado com sucesso!"
    //     }); 
    // }).catch(e => {
    //     res.status(400).send({
    //         message: "Erro ao cadastrar estado!",
    //         data: e
    //     }); 
    // });

}