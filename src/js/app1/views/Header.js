const controller = require('../controller');
const template = _.template(require('../templates/header.html'));


module.exports = Backbone.View.extend({

    template,
    tagName: 'header',
    className: 'header',

    events: {
        'change select': 'onSelect'
    },

    initialize () {
        this.listenTo(controller.state, 'change:color', this.render);
        this.render();
    },

    render () {
        const data = this.getData();
        const html = this.template(data);
        this.$el.html(html);
    },

    getData () {
        const currentColor = controller.colors.find(color => {
            return color.id === controller.state.get('color');
        });
        const data = {
            colorClass: 'color_'+ currentColor.get('name'),
            currentColor: currentColor.toJSON(),
            colors: controller.colors.toJSON()
        };
        return data;
    },

    onSelect (e) {
        const color = Number(this.$('select').val());
        controller.state.set({ color });
    }
});
