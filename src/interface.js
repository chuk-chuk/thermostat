$(document).ready(function(){
  var thermostat = new Thermostat();

  $('#temp_display').text(thermostat.getTemp());

  $('.decrease').on('click', function(){
    thermostat.decreaseTemp(1);
    $('#temp_display').text(thermostat.getTemp());
    updateTemperature();
  });

  $('.increase').on('click', function(){
    thermostat.increaseTemp(1);
    $('#temp_display').text(thermostat.getTemp());
    updateTemperature();
  });

  $('.reset').on('click', function(){
    thermostat.reset();
    $('#temp_display').text(thermostat.getTemp());
    updateTemperature();
  });

  $('.psm_on').on('click', function(){
    thermostat.setPowerSavingModeOn();
    $('.psm_display').text('Power saving mode is on');
  });

  $('.psm_off').on('click', function(){
    thermostat.setPowerSavingModeOff();
    $('.psm_display').text('Power saving mode is off');
  });

  function updateTemperature() {
    $('.energy_usage_display').text(thermostat.getEnergyUsage());
    $('#temp_display').attr('class', thermostat.getEnergyUsage());
  }

});
