$(document).ready(function(){
  var thermostat = new Thermostat();
  $('.temp_display').text(thermostat.getTemp());

  $('.decrease').on('click', function(){
    thermostat.decreaseTemp(1);
    $('.temp_display').text(thermostat.getTemp());
  })
});
