var FormView = {

  $form: $('form'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function(event) {
    // Stop the browser from submitting the form
    //event.preventDefault();
    // var newMessage = Messages;
   var newMessage = {
    username: App.username,
    text: $('#message').val(),
    roomname: 'lobby'
   }
    debugger;


    Parse.create((newMessage), () => {
      console.log('Yay!!!!!');
      debugger;
      MessagesView.renderMessage(newMessage);
    });

  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};