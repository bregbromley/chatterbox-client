var FormView = {

  $form: $('form'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function(event) {

    // Stop the browser from submitting the form
    event.preventDefault();
    var text = $("#message").val();
    var user = window.location.search.substr(10);
    var message = {
      username: user,
      text: text,
      roomname: '4chan'
    };
    Parse.create(message);

    console.log('im a cow');
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};