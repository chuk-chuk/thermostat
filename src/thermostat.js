function Thermostat(){
  this.DEFAULT_TEMP = 20;
  this.MINIMUM_TEMPERATURE = 10;
  this.temperature = this.DEFAULT_TEMP;
  this.powerSavingMode = true;
  this.maxTemp = 25;
}

Thermostat.prototype.getTemp = function(){
  return this.temperature;
};

Thermostat.prototype.increaseTemp = function(amount){
  if(this.temperature + amount > this.maxTemp){
    this.temperature = this.maxTemp;
  } else {
    this.temperature += amount;
  }
};

Thermostat.prototype.decreaseTemp = function(amount){
  if (this.getTemp() - amount < this.MINIMUM_TEMPERATURE){
    this.temperature = this.MINIMUM_TEMPERATURE;
  } else {
    this.temperature -= amount;
  }
};
Thermostat.prototype.isPowerSavingModeOn = function(){
  return this.powerSavingMode;
};

Thermostat.prototype.setPowerSavingModeOff = function(){
  this.powerSavingMode = false;
  this.maxTemp = 32;
};

Thermostat.prototype.setPowerSavingModeOn = function(){
  this.powerSavingMode = true;
  this.maxTemp = 25;
};

Thermostat.prototype.reset = function(){
  this.temperature = this.DEFAULT_TEMP;
};

Thermostat.prototype.getEnergyUsage = function(){
  if(this.temperature < 18 ){
    return 'low-usage';
  } else if(this.temperature < 25 ) {
    return 'medium-usage';
  } else {
    return 'high-usage';
  }
};
