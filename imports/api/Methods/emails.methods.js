import { Meteor } from 'meteor/meteor';
import { Email } from 'meteor/email';
import { check } from 'meteor/check';
if (Meteor.isServer) {
  const To = Meteor.settings.public.Email;
  const MainUrl = Meteor.settings.public.WebUrl;
  const img = Meteor.settings.public.img;
  Meteor.methods({
    sendEmail(values){
      check([
        values.company,
        values.email,
        values.message,
        values.name,
        values.phone
      ], [String]);
      this.unblock();
      try {
        Email.send({
          from: values.email,
          to: To,
          cc: values.email,
          replyTo: values.email,
          subject: 'Contact Form',
          html: SSR.render('htmlContact',{
            us: Meteor.settings.public.name,
            company: values.company,
            name: values.name,
            email: values.email,
            phone: values.phone,
            message: values.message,
            time: function() {return new Date().toString()},
          })
        });
        return true;
      } catch (error) {
        if (error) {
          throw new Meteor.Error(`${error}`)
        }
      }
    }
  })
}