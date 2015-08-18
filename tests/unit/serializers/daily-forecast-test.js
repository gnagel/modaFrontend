import { moduleForModel, test } from 'ember-qunit';

moduleForModel('daily-forecast', 'Unit | Serializer | daily forecast', {
  // Specify the other units that are required for this test.
  needs: ['serializer:daily-forecast']
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  var record = this.subject();

  var serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
