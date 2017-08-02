function Thermostat(){
  this.temperature = 20;
}

Thermostat.prototype.getTemp = function(){
  return this.temperature;
};

Thermostat.prototype.increaseTemp = function(amount){
  this.temperature += amount;
};
