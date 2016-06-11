const controller = require('../controller');
const Body = require('./Body');
const Header = require('./Header');


module.exports = Backbone.View.extend({

    initialize () {

        controller.init(err => {
            if (err) return alert('Error: '+ err.status);
            this.render();
        });
    },

    render () {

        this.header = new Header();
        this.$el.append(this.header.el);

        this.body = new Body();
        this.$el.append(this.body.el);
    }
});
