import DS from 'ember-data';

export default DS.Model.extend({
    email: DS.attr(),
    favorites: DS.hasMany('favorite')

});
