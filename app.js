'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const MDB = require('prhone-mdb');
const api = {
    cars: require('./api/cars'),
    colors: require('./api/colors')
};

const port = process.env.PORT || 7777;
const app = express();
const mdb = new MDB(__dirname +'/database.json');

app.set('view engine', 'ejs');
app.set('views', './views');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname +'/assets'));

// Define API route handlers.
for (let i in api) {
    api[i](app, mdb);
}

app.get('/app1', (req, res) => res.render('app1'));
app.get('/app2', (req, res) => res.render('app2'));

app.listen(port, function(err) {
    if (err) throw err;
    console.log('Server running at http://127.0.0.1:'+ port);
});
