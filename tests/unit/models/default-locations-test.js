import { moduleForModel, test } from 'ember-qunit';

moduleForModel('default-locations', 'Unit | Model | default locations', {
  // Specify the other units that are required for this test.
  needs: []
});

test('it exists', function(assert) {
  var model = this.subject();
  // var store = this.store();
  assert.ok(!!model);
});
