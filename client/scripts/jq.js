$(document).ready(function() {
  console.log('page load');
  //  $("input").click(console.log('working'));

  $(document).on('click', '.refresh', function(e) {
    location.reload();
  });


  $(document).on('click', '.submit', function(e) {

    console.log('im working');
  });

});

