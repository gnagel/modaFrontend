import DS from 'ember-data';

export default DS.Model.extend({
    time: DS.attr(),
    summary: DS.attr(),
    icon: DS.attr(),
    nearestStormDistance: DS.attr(),
    nearestStormBearing: DS.attr(),
    precipIntensity: DS.attr(),
    precipProbability: DS.attr(),
    temperature: DS.attr(),
    temperatureMax: DS.attr(),
    temperatureMin: DS.attr(),
    apparentTemperature: DS.attr(),
    dewPoint: DS.attr(),
    humidity: DS.attr(),
    windSpeed: DS.attr(),
    windBearing: DS.attr(),
    visibility: DS.attr(),
    cloudCover: DS.attr(),
    pressure: DS.attr(),
    ozone: DS.attr(),
    sLocation: DS.belongsTo('sLocation')

});
