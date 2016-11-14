module.exports = function (app, mdb) {

    app.get('/api/cars', function (req, res, next) {
        mdb.getAll('cars').then(cars => res.json(cars), err => res.status(500).end());
    });

    app.get('/api/cars/:id', function (req, res, next) {
        var id = Number(req.params.id);
        mdb.getById('cars', id).then(car => res.json(car), err => res.status(500).end());
    });

    app.post('/api/cars', function (req, res, next) {
        var data = req.body;
        mdb.create('cars', data).then(car => res.json(car), e => res.status(500).end());
    });

    app.put('/api/cars/:id', function (req, res, next) {
        var id = Number(req.params.id);
        var data = req.body;
        mdb.updateById('cars', id, data).then(car => res.json(car), e => res.status(500).end());
    });

    app.delete('/api/cars/:id', function (req, res, next) {
        var id = Number(req.params.id);
        mdb.removeById('cars', id).then(() => res.end(), e => res.status(500).end());
    });
};
