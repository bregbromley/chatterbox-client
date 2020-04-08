var App = {

  $spinner: $('.spinner img'),

  username: 'anonymous',

  initialize: function() {
    App.username = window.location.search.substr(10);

    FormView.initialize();
    RoomsView.initialize();
    MessagesView.initialize();

    // Fetch initial batch of messages
    App.startSpinner();
    App.fetch(App.stopSpinner);

    // Poll for new messages every 3 sec
  //    setInterval(App.fetch, 3000);
  },
  // var message = {
  //   username: 'shawndrost',
  //   text: 'trololo',
  //   roomname: '4chan'
  // };


  /*
  1. Call Parse.read all to get the data
  2. Save message into model
  3. Render the updated data into the DOM

  */
  fetch: function(callback = ()=>{}) {
    Parse.readAll((data) => {
      // examine the response from the server request://parse first and check data. error catching>> msg update and room view
      // get all the data.
      // we will update the values in models such as messages, rooms, and friends

      if (!data.results || !data.results.length) {
        return;
      }

      Rooms.update(data.results, RoomsView.render);
      Messages.update(data.results, MessagesView.render);

      console.log('data', data);

      callback();
    });
  },

  //call creact function.

  // $(".fresh").click(console.log('working'));

  startSpinner: function() {
    App.$spinner.show();
    FormView.setStatus(true);
  },

  stopSpinner: function() {
    App.$spinner.fadeOut('fast');
    FormView.setStatus(false);
  }
};



// // loop throough msgs
// for (var i = 0; i < data.results.length; i++) {
//   var $chats = $('#chats');
//   var $message = $('<div class = msg></div>');
//   var $user = $('<div class = user></div>');
//   $message.text(data.results[i].text);
//   $user.text(data.results[i].username + ' said: ');
//   // $tweet = $('<div class = tweet></div>')
//   // $tweet.text
//   // $message.prepend("Name " + $user + " : ");
//   $chats.append('<p>', $user, $message, '</p>');
//   // $chats.append('<br>')
// }
// // document.body.addEventListener('click', () => { console.log('hey man'); });
