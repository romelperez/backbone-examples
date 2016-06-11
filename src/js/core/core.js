window.$ = window.jQuery = require('jquery');
window._ = require('underscore');
window.Backbone = require('backbone');

_.templateSettings = {
    evaluate    : /{{([\s\S]+?)}}/g,
    interpolate : /{{=([\s\S]+?)}}/g,
    escape      : /{{-([\s\S]+?)}}/g
};
