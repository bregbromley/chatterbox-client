var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    //empty - need to fill out
    //4th
    MessagesView.$chats.on('click', '.username', MessagesView.handleClick);
  },

  render: function() {

    MessagesView.$chats.html('');
    Messages
      .items()
      .filter(message => Rooms.isSelected(message.roomname))
      .each(message => MessagesView.renderMessage(message));
  },

  renderMessage: function(message, username) {
    var $message = MessageView.render(message);
    MessagesView.$chats.prepend($message);
  },

  handleClick: function() {
    Friends.toggleStatus();
    // console.log('event', event);
    if (event === undefined) { return; }
    var username = $(event.target).data('username');
    if (username === undefined) { return; }

    Friends.toggleStatus(username, MessagesView.render);
  }

};

// var $message = $('<div class = tweet></div>');
// $message.text(message);
// $message.appendTo('#chats');
// var $user = $('<div class = user></div>');
// $user.text(username);
// $user.appendTo('#chats');
// console.log($message);

//>>push data into dom

// var message = {
//   username: 'shawndrost',
//   text: 'trololo',
//   roomname: '4chan'
// };