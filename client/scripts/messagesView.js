var MessagesView = {

  $chats: $('#chats'),
  initialize: function () {
    //not sure what to initialize here
  },

  render: function (room) {
    for (var i = 0; i < Messages.storage.length; i++) {
      var $tweet = $(MessageView.render(Messages.storage[i]));
      MessagesView.$chats.append($tweet);
    }
  },
};
