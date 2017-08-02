$(document).ready(function(){
  var thermostat = new Thermostat();

  $('.temp_display').text(thermostat.getTemp());

  $('.decrease').on('click', function(){
    thermostat.decreaseTemp(1);
    $('.temp_display').text(thermostat.getTemp());
  });

  $('.increase').on('click', function(){
    thermostat.increaseTemp(1);
    $('.temp_display').text(thermostat.getTemp());
  });

  $('.reset').on('click', function(){
    thermostat.reset();
    $('.temp_display').text(thermostat.getTemp());
  });

  $('.psm_on').on('click', function(){
    thermostat.setPowerSavingModeOn();
    $('.psm_display').text('Power saving mode is on');
  });

  $('.psm_off').on('click', function(){
    thermostat.setPowerSavingModeOff();
    $('.psm_display').text('Power saving mode is off');
  });
});
