import Ember from 'ember';

export default Ember.Route.extend({
    queryParams: {
        latitude: {
          refreshModel: true
        },
        longitude: {
            refreshModel: true
        },
        name: {
            refreshModel: true
        }
    },
    beforeModel(params) {
        this.store.unloadAll('search');
    },
    model(params) {
        return this.store.query('search', params);
    },
    setupController: function(controller, model) {
        this.controllerFor('search').set('model', model.get('firstObject'));
    }

});
