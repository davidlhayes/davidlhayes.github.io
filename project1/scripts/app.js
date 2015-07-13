$(document).ready(function() {

  console.log("All resources are loaded");

// contact submit event handler
  $('#form_send').on('click',function() {
    var formdata = app.createFormObject();
    console.log('Clicked form submit...');
  });

    // $.ajax


});

var app = app || {};
app.createFormObject = function() {

  var retJson = {};

  retJson.first_name = $('#first_name').val();
  retJson.last_name = $('#last_name').val();
  retJson.user_email = $('#user_email').val();
  retJson.user_phone = $('#user_phone').val();
  retJson.movie = $('#movie').val();
  retJson.adventure = $('#heist').val();

  // test...comment out when done;
  console.log(retJson);

  return retJson;

}
