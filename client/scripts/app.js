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

  },
  // var message = {
  //   username: 'shawndrost',
  //   text: 'trololo',
  //   roomname: '4chan'
  // };
  fetch: function(callback = ()=>{}) {
    Parse.readAll((data) => {
      // examine the response from the server request://parse first and check data. error catching>> msg update and room view

      if (!data.results || !data.results.length) {
        return;
      }
      // loop throough msgs
      for (var i = 0; i < data.results.length; i++) {
        var $chats = $('#chats')
        var $message = $('<div class = msg></div>')
        var $user = $('<div class = user></div>');
        $message.text(data.results[i].text);
        $user.text(data.results[i].username + ' said: ');
        $tweet = $('<div class = tweet></div>')
        $tweet.text
        // $message.prepend("Name " + $user + " : ");
        $chats.append('<p>', $user, $message, '</p>');
        // $chats.append('<br>')
      }
      document.body.addEventListener('click', () => {console.log('hey man')})

      console.log(data);

      callback();
    });
  },

  startSpinner: function() {
    App.$spinner.show();
    FormView.setStatus(true);
  },

  stopSpinner: function() {
    App.$spinner.fadeOut('fast');
    FormView.setStatus(false);
  }
};
