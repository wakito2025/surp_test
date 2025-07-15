$(document).ready(function() {
  $("#icurp-horizontal-nav").on('click', 'li a', function(e) { 
    e.preventDefault();
    $("#home-banner").hide();
  });
});