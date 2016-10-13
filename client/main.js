import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

Template.hello.onCreated(function helloOnCreated() {
  // counter starts at 0
  // this.counter = new ReactiveVar(0);
  Session.setDefault('activeStep', 0);
  Session.setDefault('showThumbs', true);
  Session.setDefault('activePicture', '/.ring.jpeg');
});

Template.hello.onRendered(function helloOnRendered() {
  Session.set('activeStep', 0);
  Session.set('showThumbs', true);
  Session.set('activePicture', '/.ring.jpeg');
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
  showThumbs() {
    return Session.get('showThumbs');
  },
  activePicture() {
    return Session.get('activePicture');
  }
});

Template.hello.events({
  'click button.continue'(event, instance) {
    let currentStep = Session.get('activeStep');

    Session.set('activeStep', currentStep + 1);
  },
  'click button.back'(event, instance) {
    let currentStep = Session.get('activeStep');

    Session.set('activeStep', currentStep - 1);
  },
  'click .img-thumb'(e, t) {
    let activePicture = e.currentTarget.src;
    Session.set('showThumbs', false);
    console.log(activePicture)
    Session.set('activePicture', activePicture);
  }
});
