import Ember from 'ember';

export default Ember.Controller.extend({
    queryParams: ['latitude', 'longitude', 'name'],
    latitude: null,
    longitude: null,
    name: null,

    actions: {
        favorite(params) {
             var data = {
                name: params.get('name'),
                longitude: params.get('longitude'),
                latitude: params.get('latitude')
            };
            data = JSON.stringify(data);
            var store = this.store;
            var that = this;
            Ember.$.ajax({
                type: 'POST',
                data: data,
                url: '/favorites',
                dataType: 'json',
                contentType: 'application/json',
                async: true,
                success: function(response) {
                    that.transitionTo('favorites');
                    store.pushPayload(response);
                },
                error: function(response) {
                    this.transitionTo('favorites');
                }
            });

        }
    }

});
