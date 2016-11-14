module.exports = function (app, mdb) {

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
};
