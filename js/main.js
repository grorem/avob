$(function() {
  $(".menuIcon").click(function(){
    $(".continents").slideToggle(200);
    $(".countries").delay(350).slideToggle(200);

  });
});


$(function() {
  $(".container-fluid").click(function(){
    $(".continents").hide(200);
    $(".countries").delay(350).hide(200);

  });
});
