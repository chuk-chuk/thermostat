function Thermostat(){
  this.temperature = 20;
}

Thermostat.prototype.getTemp = function(){
  return this.temperature;
};

Thermostat.prototype.increaseTemp = function(amount){
  this.temperature += amount;
};

Thermostat.prototype.decreaseTemp = function(amount){
  if (this.getTemp() - amount < 10){
    this.temperature = 10;
  } else {
    this.temperature -= amount;
  }
};
