import Ember from 'ember';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
    model() {
        return this.store.findAll('defaultLocation');
    },
    redirect() {
        var first = this.modelFor('index').get('firstObject');
        this.transitionTo('defaultLocation', first);
    },
    isCurrent(params) {
        return params.id == this.modelFor('defaultLocation').get('id');
    }

});
