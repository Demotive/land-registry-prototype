$(function() {
  
  $('#tabs').tabs();

  $('.help-inner').hide();
  $('.help .secondary').on('click', function(e) {
    e.preventDefault();
    $('.help-inner').toggle();
  });

  $('#resultsGoMapView').on('click', function(e) {
    e.preventDefault();
    $('a[href="#tabs-2"]').click();
  });

  /*var map = L.map('map').setView([51.505, -0.09], 1);
  L.tileLayer('http://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 18,
        attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://cloudmade.com">CloudMade</a>'
  }).addTo(map);*/


});