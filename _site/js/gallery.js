$(document).ready( function() {
  console.log('document loaded');

  $('.project').on('mouseenter', function() {
      $(this).children('.curtain').fadeTo("slow",.8);
      $(this).children('.description').fadeTo("slow",1);

  }).on('mouseleave', function() {
      $(this).children('.curtain').fadeTo("slow",0);
      $(this).children('.description').fadeTo("slow",0);
  });

  $("a[href^='#']").click(function(e) {
      e.preventDefault();
      var dest = $(this).attr('href');
      console.log(dest);
      if ($(dest).offset()==undefined) {
        $('html,body').animate({
           scrollTop: $('body').offset().top},'slow');
      } else {
        $('html,body').animate({
           scrollTop: $(dest).offset().top},'slow');
      }
  });

});
