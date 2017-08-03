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

  $('#citylist li > a').click(function(event) {
    event.preventDefault();
    var city = this.innerHTML;
    $('.city-name-display').text(city);
    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=f3e1a3d7664ef2fc739d65e8419409d9&units=metric', function(data) {
      $('.weather-status').text(Math.round(data.main.temp) + " °C");
      $('.humidity-status').text('Humidity ' + data.main.humidity + " %");
    });
  });

  $('.city').click(function(event){
    event.preventDefault();
    var city = ($('input:text').val());
    $('.city-name-display').text(city);
    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=f3e1a3d7664ef2fc739d65e8419409d9&units=metric', function(data) {
      $('.weather-status').text(Math.round(data.main.temp) + " °C");
      $('.humidity-status').text('Humidity ' + data.main.humidity + " %");
    });
  });

});
