import R from "ramda";
import moment from "moment";

export const propMerge = R.curry(function(key1, key2, array1, array2) {
    return R.values(R.mergeWith(R.mergeDeepLeft,
        R.indexBy(R.prop(key1), array1),
        R.indexBy(R.prop(key2), array2)));
});

const rem = R.filter(R.prop('message'));
const order = R.sort(R.descend(R.prop('timestamp')));
const sel = R.map(R.pick(['messageId', 'userId','fullName', 'timestamp', 'email', 'message', 'avatar']));
const dates = R.map(x => R.assoc('timestamp', moment(x['timestamp']).format("Do MMM YYYY, HH:mma"), x));
const fullNames = R.map(x => R.assoc('fullName', x.firstName + ' ' +  x.lastName, x));

export const MessageIds = R.map(x => R.assoc('messageId', x.id, x));

export default R.compose(
    sel,
    fullNames,
    dates,
    order,
    rem,
    propMerge
);