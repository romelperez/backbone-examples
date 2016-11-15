import Model from '../models/Car';

const Collection = Backbone.Collection.extend({
    url: '/api/cars',
    model: Model
});

export default Collection;
