var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    //empty - need to fill out
    //4th
  },

  renderMessage: function(message, username) {
    var $message = $('<div class = tweet></div>');
    $message.text(message);
    $message.appendTo('#chats');
    var $user = $('<div class = user></div>');
    $user.text(username);
    $user.appendTo('#chats');
    console.log('im running');
  }

};


// var message = {
//   username: 'shawndrost',
//   text: 'trololo',
//   roomname: '4chan'
// };