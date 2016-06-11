const controller = require('../controller');
const template = _.template(require('../templates/car.html'));


module.exports = Backbone.View.extend({

    template,
    className: 'car',

    initialize () {
        this.listenTo(this.model, 'change', this.render);
        this.render();
    },

    render () {

        const data = this.model.toJSON();
        const html = this.template(data);
        this.$el.html(html);

        const color = controller.colors.find(color => color.id === this.model.get('color'));
        this.$el.addClass('color_'+ color.get('name'));
    }
});
