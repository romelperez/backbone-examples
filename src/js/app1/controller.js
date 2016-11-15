const async = require('async');
const settings = require('appSettings');
const Colors = require('collections/Colors');
const Cars = require('collections/Cars');
const State = require('models/State');


module.exports = {

    view: null,

    colors: new Colors(),

    cars: new Cars(),

    state: new State(),

    init (everythingComplete) {
        async.parallel({
            getColors: complete => {
                $.ajax('/api/colors').then(result => {
                    this.colors.reset(result);
                    complete();
                }, complete);
            },
            getCurrentColor: complete => {
                const userId = settings.APP1.USER;
                $.ajax(`/api/colors/current/${userId}`).then(result => {
                    this.state.set('color', result.color);
                    complete();
                }, complete);
            },
            getCars: complete => {
                $.ajax('/api/cars').then(result => {
                    this.cars.reset(result);
                    complete();
                }, complete);
            }
        }, everythingComplete);
    },

    getCurrentCars () {
        const color = this.state.get('color');
        return this.cars.filter(carModel => carModel.get('color') === color);
    }
};
