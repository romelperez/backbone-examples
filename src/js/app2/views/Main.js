import Car          from './Car';
import data         from '../data';
import src          from '../templates/main.html';
import CarColl      from '../../collections/Cars';
import ColorColl    from '../../collections/Colors';

const View = Backbone.View.extend({

    template: _.template(src),

    events: {
        'click .add': 'onAdd'
    },

    initialize () {

        data.cars = new CarColl();
        data.colors = new ColorColl();

        data.cars.on('add remove change', this.render.bind(this));
        data.colors.on('add remove change', this.render.bind(this));

        // First fetch colors, then cars, in serie.
        data.colors.
            fetch().
            then(function () {
                data.cars.fetch();
            });
    },

    render () {

        const html = this.template();
        this.$el.html(html);

        data.cars.forEach(this.renderCar.bind(this));
    },

    renderCar (carModel) {

        carModel.view = new Car({ model: carModel });

        this.$('.list').append(carModel.view.el);
    },

    onAdd (e) {
        data.cars.create({
            name: 'NAME',  // Default name
            color: 27,  // Default color (blue)
            price: 0
        }, {
            wait: true
        });
    }
});

export default View;
