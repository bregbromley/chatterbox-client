var FormView = {

  $form: $('form'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function(event) {

    // Stop the browser from submitting the form
    event.preventDefault();
    var text = $('#message').val();
    var user = App.username;
    var message = {
      username: user,
      text: text,
      roomname: Rooms.selected || 'lobby'
    };
    Parse.create(message, (data) => {
      _.extend(message, data);
      Messages.add(message, MessagesView.render);
    });

    console.log('im a cow');
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};