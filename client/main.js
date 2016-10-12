import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

Template.hello.onCreated(function helloOnCreated() {
  // counter starts at 0
  // this.counter = new ReactiveVar(0);
  Session.setDefault('activeStep', 1);
  Session.set('activeStep', 1);
});

Template.hello.helpers({
  activeStep() {
    return Session.get('activeStep');
  },
  step1() {
    return Session.get('activeStep') === 1;
  },
  step2() {
    return Session.get('activeStep') === 2;
  },
  step3() {
    return Session.get('activeStep') === 3;
  },
});

Template.hello.events({
  'click button.continue'(event, instance) {
    let currentStep = Session.get('activeStep');

    Session.set('activeStep', currentStep + 1);
  }
});
