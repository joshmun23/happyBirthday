import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

Template.hello.onCreated(function helloOnCreated() {
  // counter starts at 0
  // this.counter = new ReactiveVar(0);
  Session.setDefault('activeStep', 0);
  Session.set('activeStep', 0);
});

Template.hello.helpers({
  step0() {
    return Session.get('activeStep') === 0;
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
  },
  'click button.back'(event, instance) {
    let currentStep = Session.get('activeStep');

    Session.set('activeStep', currentStep - 1);
  }
});
