var RoomsView = {

  $button: $('#rooms-button'),
  $select: $('#rooms-select'),

  initialize: function () {

    for (room in Rooms) {
      var room = Rooms[room];
      RoomsView.$select.append($(`<option value="${room}">${room}</option>`))
    }
    RoomsView.$select.change(function () {
      RoomsView.render($('#rooms-select').val())
    });
    RoomsView.$button.click(function () {
      var promptRoom = prompt('Please enter a room')
      RoomsView.render(promptRoom)
    })

  },

  render: function (room) {
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




{/* <div class="dropdown">
  <button onclick="myFunction()" class="dropbtn">Dropdown</button>
  <div id="myDropdown" class="dropdown-content">
    <a href="#">Link 1</a>
    <a href="#">Link 2</a>
    <a href="#">Link 3</a>
  </div>
</div> */}
