var RoomsView = {

  $button: $('#rooms-button'),
  $select: $('#rooms-select'),

  initialize: function () {
    RoomsView.$select.change(function () {
      RoomsView.render($('#rooms-select').val());
    });
    RoomsView.$button.click(function () {
      var promptRoom = prompt('Please enter a room');
      if (Rooms.storage[promptRoom] === undefined) {
        Rooms.storage[promptRoom] = promptRoom;
        Rooms.render()
      }
      RoomsView.render(promptRoom);
    });

  },

  render: function (room, promptRoom) {
    MessagesView.$chats.empty();
    // Messages.storage = [];
    for (var i = 0; i < Messages.storage.length; i++) {
      if (Messages.storage[i].roomname === room) {
        var $tweet = $(MessageView.render(Messages.storage[i]));
        MessagesView.$chats.append($tweet);
      }
    }
  }
};
