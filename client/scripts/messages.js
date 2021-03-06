var Messages = {
  storage: {},

  _data: {},

  items: function() {
    return _.chain(Object.values(Messages._data)).sortBy('createdAt');
  },

  add: function(message, callback = ()=>{}) {
    Messages._data[message.objectId] = message;
    callback(Messages.items());
  },

  update: function(messages, callback = ()=>{}) {
    var length = Object.keys(Messages._data).length;

    for (let message of messages) {
      Messages._data[message.objectId] = Messages._conform(message);
    }

    // only invoke the callback if something changed
    if (Object.keys(Messages._data).length !== length) {
      callback(Messages.items());
    }
  },


  _conform: function(message) {
    message.text = message.text || '';
    message.username = message.username || '';
    message.roomname = message.roomname || '';
    return message;
  }
};


// a fews:
//username: default
//text:default
//roomname:defaul
// username: 'default name'
//  text: 'default text'
//  roomname: 'default room'

//somehow update Messages.username, Messages.text, Messages.roomname

//get username method
//get text method
//get roommnme method

//these methods will be invoked when user press 'submit' button
//then the default values in messages will be chagned to the new values.

///add methods
//those methods are going to create new children of messages.


//DOM  >> giving controller input such as entering username, text submit, and selecting roomname
//once the user clicks submit.
//DOM will send the input controller.
//controller will invoke  models' methods (i.e. get user method) to change the default value to the current value.
//model will update the view >>  the view will renter to DOM.
//



// var message = {
//   username: 'shawndrost',
//   text: 'trololo',
//   roomname: '4chan'
// };

// this is how we get the message from the input box
//var message = $("#message").val();