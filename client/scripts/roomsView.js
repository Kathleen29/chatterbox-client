var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    RoomsView.$select.empty();
  },

  render: function(messages) {
    _.each(messages, function(message, key) {
      if (Rooms.allRooms.indexOf(message.roomname) === -1) {
        Rooms.allRooms.push(message.roomname);
      RoomsView.renderRoom({roomname: message.roomname});
      }
    });
  },

  renderRoom: function(object) {
    // test is passing in a string, but Rooms.render expects an object ({roomname: roomname})
    if(typeof object === 'string') {
      object = {roomname: object};
    }
    RoomsView.$select.append((Rooms.render(object)));
  }

};
