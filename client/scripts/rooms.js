var Rooms = {
  storage: {},
  render: function () {
    for (var i = 0; i < Messages.storage.length; i++) {
      if (Rooms.storage[Messages.storage[i]['roomname']] === undefined) {
        Rooms.storage[Messages.storage[i]['roomname']] = Messages.storage[i]['roomname'];
      }
    }
    for (roomLocation in Rooms.storage) {
      var room = Rooms.storage[roomLocation];
      RoomsView.$select.append($(`<option value="${room}">${room}</option>`));
    }
  }

};