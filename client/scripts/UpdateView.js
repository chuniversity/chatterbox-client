var UpdateView = {

  $update: $('#update'),

  initialize: function () {
    UpdateView.$update.on('click', UpdateView.handleSubmit);
  },

  handleSubmit: function (event) {
    event.preventDefault();
    MessagesView.$chats.empty();
    Messages.storage = [];
    $('#rooms-select').empty();
    Rooms.storage = [];
    App.fetch();
  }
};