const controller = require('./controller');
const Main = require('./views/Main');

const el = $('#app');
const view = new Main({ el });

controller.view = view;
