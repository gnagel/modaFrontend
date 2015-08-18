import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        delete(params) {
            this.store.findRecord('favorite').then(function(favorite) {
                favorite.destroyRecord();
            });
        }
    }

});
