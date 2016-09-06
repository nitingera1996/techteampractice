$( ".button" ).mouseover(function() {
  $("#static").hide();
  $("#hover").show();
    $( ".button" ).mouseout(function() {
      $("#static").show();
      $("#hover").hide();
    });
});