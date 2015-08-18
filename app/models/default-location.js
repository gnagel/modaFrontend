import DS from 'ember-data';

export default DS.Model.extend({
    location: DS.belongsTo('location')
});
