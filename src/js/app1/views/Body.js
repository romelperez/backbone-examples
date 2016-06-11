const controller = require('../controller');
const template = _.template(require('../templates/body.html'));
const Car = require('./Car');


module.exports = Backbone.View.extend({

    template,
    className: 'body',
    carsViews: [],

    initialize () {
        this.listenTo(controller.state, 'change:color', this.render);
        this.listenTo(controller.cars, 'add remove reset change', this.render);
        this.render();
    },

    render () {

        this.removePreviousCars();

        const html = this.template();
        this.$el.html(html);

        const currentCars = controller.getCurrentCars();
        currentCars.forEach(carModel => {
            const carView = new Car({ model: carModel });
            this.carsViews.push(carView);
            this.$('.list').append(carView.el);
        });
    },

    removePreviousCars () {
        this.carsViews.forEach(carView => carView.remove());
    },

    remove () {
        this.removePreviousCars();
        Backbone.View.remove.apply(this, arguments);
    }
});
