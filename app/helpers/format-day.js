import Ember from 'ember';

export function formatDay(params/*, hash*/) {
    if (moment.unix(params[0]).isSame(moment().startOf('day'))) {
        return "Today";
    } else {
        return moment.unix(params[0]).format('dddd');
    }
}

export default Ember.Helper.helper(formatDay);
