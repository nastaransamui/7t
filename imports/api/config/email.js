import { Email } from 'meteor/email';

Meteor.startup(()=>{
  process.env.MAIL_URL = Meteor.settings.mail.smtp;
})