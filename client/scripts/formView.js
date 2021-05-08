var FormView = {

  $form: $('form'),

  initialize: function () {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function (event) {
    event.preventDefault();
    var message = {};
    message.username = App.username;
    message.text = $('#message').val();
    message.roomname = '';
    Parse.create(message, function () { console.log('chatterbox: Message Sent!'); });

    console.log('click!');
  },

  setStatus: function (active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};