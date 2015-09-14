$(document).ready(function() {

  $.ajax({
    method: "GET",
    url: "http://api.brewerydb.com/v2/beers/?key=fdf1b28c011f27510720ab3070943f3e",
    dataType: "json",
    success: function(data) {

      for (var i = 0; i < data.length; i++) {
        $("table").append("<tr><td>" + data[i].nameDisplay + "</td><td>" + data[i].description + "</td></tr>");
      }

    }
  });

});
