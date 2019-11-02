var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    MessagesView.$chats.empty();
  },

  render: function(messages) {
    // appends message to $chats
    _.each(messages, function(message, key) {
      MessageView.render({username: messages.username, text: messages.text});
    //$($chats).html('Message.text')
    });
  },

  renderMessage: function(object) {
    // appends message to $chats
    MessagesView.$chats.prepend((MessagesView.render(object)));
  }

};
// render: function(messages) {
//   _.each(messages, function(message) {
//     MessagesView.renderMessage({username: message.username, text: message.text});
//   });
// },