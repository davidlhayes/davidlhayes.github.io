$(document).ready(function() {

  console.log("All resources are loaded");

  // hide status messages
  $('.loading').hide();
  $('.success').hide();
  $('.error').hide();

  // contact submit event handler
  $('#form_send').on('click', function() {
    var formdata = app.createFormObject();
    console.log(formdata);
    console.log('Clicked form submit...');
    app.sendEmail(formdata);

  });

});

var app = app || {};
app.createFormObject = function() {

  var retJson = {};

  retJson.userName = $('#user_name').val();
  retJson.userEmail = $('#user_email').val();
  retJson.request = $('#user_request').val();

  // testing... comment out when done
  //console.log(retJson);

  return retJson;

}
app.sendEmail = function(emailData) {

  // display loading info...
  $('.loading').slideDown(); // .show()
  // hide old messages... because this is a NEW request
  $('.success').hide();
  $('.error').hide();

  // ajax argument
  var ajaxData = {
    url: 'http://imperialholonet.herokuapp.com/api/mail',
    type: 'POST',
    data: emailData,
    success: function(data) {
      console.log(data);
      $('.loading').slideUp(); // .hide()
      $('.success').show(); // .slideDown()
    },
    error: function(err) {
      console.log(err);
      $('.loading').slideUp(); // .hide()
      $('.error').show();
    }

  };

  $.ajax(ajaxData);

}

  // retJson.first_name = $('#first_name').val();
  // retJson.last_name = $('#last_name').val();
  // retJson.user_email = $('#user_email').val();
  // retJson.user_phone = $('#user_phone').val();
  // retJson.movie = $('#movie').val();
  // retJson.adventure = $('#heist').val();
