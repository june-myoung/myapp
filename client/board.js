import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { Session } from 'meteor/session';
import { Meteor } from 'meteor/meteor';

Template.board.onCreated(function () {
    // counter starts at 0
    // this.counter = new ReactiveVar(0);
    Session.set("a", 1);
});

Template.board.onRendered(function () {
    // counter starts at 0
    // this.counter = new ReactiveVar(0);
    Session.get("a");
    Meteor.call("getList", 1, (result, error) => {
        console.log(result || error);
    })
});

Template.board.onDestroyed(function () {
    // counter starts at 0
    // this.counter = new ReactiveVar(0);
    Session.set("a", 2)
});

Template.board.helpers({
    lists() {
        return [
            {name: 'june', age: 29, number: 1},
            {name: 'leokim', age: 29, number: 2},
            {name: 'wade', age: 29, number: 3},
            {name: 'scholes', age: 29, number: 4},
            {name: 'rita', age: 20, number: 5},
            {name: 'ed', age: 20, number: 6},
        ]
        // return Template.instance().counter.get();
    },
});

Template.board.events({
    'click button'(event, instance) {
        // increment the counter when button is clicked
        // instance.counter.set(instance.counter.get() + 1);
    },
});
