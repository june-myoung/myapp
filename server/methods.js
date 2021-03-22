import { Meteor } from 'meteor/meteor';

Meteor.methods({
    getList(a) {
        console.log(a);
        return [
            {name: 'june', age: 29, number: 1},
            {name: 'leokim', age: 29, number: 2},
            {name: 'wade', age: 29, number: 3},
            {name: 'scholes', age: 29, number: 4},
            {name: 'rita', age: 20, number: 5},
            {name: 'ed', age: 20, number: 6},
        ]
    }
});