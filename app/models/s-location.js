import DS from 'ember-data';

export default DS.Model.extend({
    name: DS.attr(),
    longitutde: DS.attr(),
    latitude: DS.attr(),
    sCurrent: DS.belongsTo('sCurrent'),
    sDays: DS.hasMany('sDaily')

});
