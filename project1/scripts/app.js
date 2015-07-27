    $(window).load(function(){
      $('#cubeSpinner').impulseslider({
            height: 250,
            width: 250,
          depth:125,
          perspective:600
      });
    });

  $(document).ready(function() {

    $("#top-nav").velocity({ translateY: "75px"}, {duration: "slow"},"spring");


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

// buttons
  $('#inquiries').click(function() {
    $('#contact_form_wrapper').hide().slideDown('slow');
  });
  $('#contact_dismiss').click(function() {
    $('#contact_form_wrapper').show().slideUp('slow');
  });
  $('#pricing_select').click(function() {
    $('#pricing').hide().slideDown('slow');
  });
  $('#pricing_dismiss').click(function() {
    $('#pricing').show().slideUp('slow');
  });
  $('nav li, nav li a').mouseover(function(){
    $(this).css("color","white");
  });
  $('nav li, nav li a').mouseout(function() {
    $(this).css("color","rgb(223, 201, 87)");
  });

// Adventure data

var pirate = { adv_img : "pirate-action.png", adv_text : "Want to live in a world that resembles some popular Johnny Depp movies? Enticed by the idea of obscene treasure? There’s plenty of adventure aboard our pirate ship. You may be a captain or you may lead the mutiny, but somebody is definitely walking the plank!"};
var heist = { adv_img : "heist-action.png", adv_text : "Banks these days tend to be so, so secure. It’s a good thing you’ll have the technology, the tools, and the support team to plan a robbery of staggering proportions. We can’t promise you’ll succeed or walk home with millions of dollars to stash in a mattress, but the adrenaline rush will be amazing!" };
var spy = { adv_img : "spy-action.png", adv_text : "We’ll spill the beans right now. This experience starts with a kidnapping: yours. Rest assured, one way or another, you’ll escape, but in the process you’ll learn of larger threat and you’ll be the only one who can stop it." };
var phonebooth = { adv_img : "time-action.png", adv_text : "Professor Copernicus Von Braun has converted a London call box into a working time machine. The trouble is that it’s hard to say exactly where you’ll end up. Rest assured, you’ll have the “time” of your life AND a return trip to the present is guaranteed" };

var htmlstring = "";

$('.one').click(function() {
  $('#descr-right').fadeTo(200,0);
  htmlstring = '<img src="assets/images/' + phonebooth.adv_img
    + '"><p>"' + phonebooth.adv_text + '"</p>';
  console.log(htmlstring);
  $('#descr-left').html(htmlstring);
  $('#descr-left').fadeTo(2000,1);
});

$('.two').click(function() {
  $('#descr-right').fadeTo(200,0);
  htmlstring = '<img src="assets/images/' + spy.adv_img
    + '"><p>"' + spy.adv_text + '"</p>';
  console.log(htmlstring);
  $('#descr-left').html(htmlstring);
  $('#descr-left').fadeTo(2000,1);
});

$('.three').click(function() {
  $('#descr-left').fadeTo(200,0);
  htmlstring = '<img src="assets/images/' + pirate.adv_img
    + '"><p>"' + pirate.adv_text + '"</p>';
  console.log(htmlstring);
  $('#descr-right').html(htmlstring);
  $('#descr-right').fadeTo(2000,1);
});

$('.four').click(function() {
  $('#descr-left').fadeTo(200,0);
  htmlstring = '<img src="assets/images/' + heist.adv_img
    + '"><p>"' + heist.adv_text + '"</p>';
  console.log(htmlstring);
  $('#descr-right').html(htmlstring);
  $('#descr-right').fadeTo(2000,1);
});

// Phone functions (simple buttons instead of the rotating cube)
$('#ph1').click(function() {
  htmlstring = '<img src="assets/images/' + phonebooth.adv_img
    + '"><p>"' + phonebooth.adv_text + '"</p>';
  console.log(htmlstring);
  $('#phone_descr').html(htmlstring);
  $('#phone_descr').fadeTo(2000,1);
});

$('#ph2').click(function() {
  htmlstring = '<img src="assets/images/' + spy.adv_img
    + '"><p>"' + spy.adv_text + '"</p>';
  console.log(htmlstring);
  $('#phone_descr').html(htmlstring);
  $('#phone_descr').fadeTo(2000,1);
});

$('#ph3').click(function() {
  htmlstring = '<img src="assets/images/' + pirate.adv_img
    + '"><p>"' + pirate.adv_text + '"</p>';
  console.log(htmlstring);
  $('#phone_descr').html(htmlstring);
  $('#phone_descr').fadeTo(2000,1);
});

$('#ph4').click(function() {
  htmlstring = '<img src="assets/images/' + heist.adv_img
    + '"><p>"' + heist.adv_text + '"</p>';
  console.log(htmlstring);
  $('#phone_descr').html(htmlstring);
  $('#phone_descr').fadeTo(2000,1);
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
