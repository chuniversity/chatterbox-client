var Messages = {
  storage: [],
  add: function (data) {
    for (var i = 0; i < data.length; i++) {
      //TO PREVENT XSS INJECTION
      //if username, text, or roomname includes "<" ignore
      if (data[i].text !== null) {
        if (data[i].roomname === null) {
          data[i].roomname = 'Lobby';
        }
        if (data[i].text.indexOf("<")) {
          Messages.storage.push(data[i]);
        }
      }
    }
  },
  empty: function () {
    Messages.storage = [];
  }
  // update: function () {
  //   setInterval(function () {
  //     App.fetch(App.stopSpinner);
  //   }, 3000)
  // }
};



// we can have post methods here too

// may have to build some methods, that tie into message view. will do the mapping to where we want content.
// render data method
// iterate over objects
// if (!message ID) then push into storage.
// else do nothing



//this file is to store all of our GET messages