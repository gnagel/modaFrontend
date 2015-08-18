import Ember from 'ember';

export function isActiveLink(params/*, hash*/) {
  return params[0] == this.modelFor(params[1]).get('id');
}

export default Ember.Helper.helper(isActiveLink);
