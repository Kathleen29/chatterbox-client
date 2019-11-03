var Messages = {

  _data: {},

  add: function(messages) {
    _.each(messages, function(message) {
      Messages._data[message.objectId] = message;
    })
    MessagesView.render(Messages._data);
  },

  update: function(message) {
    Messages._data[message.objectId] = message;
}

};