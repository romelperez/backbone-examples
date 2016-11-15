import Model from '../models/Color';

const Collection = Backbone.Collection.extend({
    url: '/api/colors',
    model: Model
});

export default Collection;
