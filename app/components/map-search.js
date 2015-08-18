import Ember from 'ember';

export default Ember.Component.extend({
    insertSearch: function() {
        var input = this.$('input.searchTextField')[0];
        var autocomplete;
        var options = {

        };
        var options = {
          types: ['(cities)']
        };

        autocomplete = new google.maps.places.Autocomplete(input, options);
        var that = this;
        autocomplete.addListener('place_changed', function() {
            var data = autocomplete.getPlace();
            var info = {
                name: data.formatted_address,
                latitude: data.geometry.location.lat(),
                longitude: data.geometry.location.lng()
            };
            that.set('query', info);
            var input = that.$('input.searchTextField')[0];
            $(input).val('');
            that.sendAction();
        });
    }.on('didInsertElement')
});
