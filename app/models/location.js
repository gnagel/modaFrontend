import DS from 'ember-data';

export default DS.Model.extend({
    name: DS.attr(),
    longitude: DS.attr(),
    latitude: DS.attr(),
    belongsTo: DS.attr('defaultLocation'),
    belongsTo: DS.attr('favorite'),
    currentForecast: DS.belongsTo('currentForecast'),
    dailyForecast: DS.hasMany('dailyForecast')

});
