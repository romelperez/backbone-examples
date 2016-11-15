import data from '../data';
import src from '../templates/car.html';

const View = Backbone.View.extend({

    tagName: 'section',
    className: 'car',
    template: _.template(src),

    events: {
        'change input': 'onChange',
        'change select': 'onChange',
        'click .remove': 'onRemove'
    },

    initialize () {
        this.render();
    },

    render () {

        const resources = this.getResources();
        const html = this.template(resources);

        this.$el.html(html);

        this.updateColor();
    },

    getResources () {
        return {
            car: this.model.toJSON(),
            colors: data.colors.toJSON()
        };
    },

    updateColor () {

        const colorId = this.model.get('color');
        const color = data.colors.get(colorId);

        this.$el.css('background-color', color.get('hex'));
    },

    onChange (e) {

        const name = this.$('.name').val();
        const price = +this.$('.price').val();
        const color = +this.$('.color').val();

        this.model.set({ name, price, color });
        this.model.save();

        this.updateColor();
    },

    onRemove (e) {
        this.model.destroy();
    }
});

export default View;
