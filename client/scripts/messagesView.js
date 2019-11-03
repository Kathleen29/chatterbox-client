var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    MessagesView.$chats.empty();
  },

  render: function(messages) {
    // appends message to $chats
    _.each(messages, function(message, key) {
      MessagesView.renderMessage({username: message.username, text: message.text});
    //$($chats).html('Message.text')
    });
  },

  renderMessage: function(object) {
    // appends message to $chats
    MessagesView.$chats.append((MessageView.render(object)));
  }

};
