var express = require('express');
var router = express.Router();
var ejs = require("ejs")


/* GET home page. */


const pg = require('pg');


var conString = "postgres://postgres:agua@localhost:5432/agua_doce";

const results = [];
// Get a Postgres client from the connection pool
pg.connect(conString, (err, client, done) => {
	// Handle connection errors
	// SQL Query > Select Data
	const query = client.query('SELECT * FROM municipio;');
	// Stream results back one row at a time
	query.on('row', (row) => {
		results.push(row);
	});

});

router.get('/', function(req, res, next) {
  	res.render('mapa', { 'BASE_URL': JSON.stringify(results) });
});



module.exports = router;
