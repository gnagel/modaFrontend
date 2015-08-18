import Ember from 'ember';


export default Ember.Controller.extend({
    query: null,
    actions: {
        getWeatherData() {
            this.transitionTo('search', {queryParams: { longitude: this.get('query').longitude,
                              latitude: this.get('query').latitude,
                              name: this.get('query').name }});
        }
    }
});
