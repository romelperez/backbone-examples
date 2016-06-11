var express = require('express');
var MDB = require('prhone-mdb');

var app = express();
var port = process.env.PORT || 7777;
var mdb = new MDB(__dirname +'/database.json');

app.use(express.static(__dirname + '/assets'));

app.get('/api/cars', function (req, res, next) {
    mdb.getAll('cars').then(cars => res.json(cars), err => res.status(500).end());
});

app.get('/api/colors', function (req, res, next) {
    mdb.getAll('colors').then(colors => res.json(colors), err => res.status(500).end());
});

app.get('/api/colors/current/:userId', function (req, res, next) {
    var userId = Number(req.params.userId);
    mdb.getById('currentColor', userId).then(currentColor => {
        res.json({ color: currentColor.color });
    }, err => {
        res.status(500).end();
    });
});

app.listen(port, function(err) {
    if (err) throw err;
    console.log('Server running at http://127.0.0.1:'+ port);
});
