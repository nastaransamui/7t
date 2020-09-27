import { Meteor } from 'meteor/meteor';

if (Meteor.isServer) {
  SSR.compileTemplate('htmlContact', Assets.getText('contactForm.html'));
}