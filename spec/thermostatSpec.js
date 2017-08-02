describe ("Thermostat", function(){
  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat();
  });

  describe('getTemp', function(){
    it('returns a temp value', function(){
      expect(thermostat.getTemp()).toEqual(20);
    });
  });

  describe('increaseTemp', function(){
    it('increases the current temperature', function(){
      thermostat.increaseTemp(1);
      expect(thermostat.getTemp()).toEqual(21);
    });
  });

  describe('decreaseTemp', function(){
    it('decreases the current temperature', function(){
      thermostat.decreaseTemp(1);
      expect(thermostat.getTemp()).toEqual(19);
    });

    it("won't decrease the temperature below 10", function(){
      thermostat.decreaseTemp(11);
      expect(thermostat.getTemp()).toEqual(10);
    });
  });

  describe('power saving mode', function(){
    it('the power saving mode is on by default', function(){
      expect(thermostat.isPowerSavingModeOn()).toBe(true);
    });

    it('sets the power saving mode off', function(){
      thermostat.setPowerSavingModeOff();
      expect(thermostat.isPowerSavingModeOn()).toBe(false);
    });

    it('sets the power saving mode on', function(){
      thermostat.setPowerSavingModeOff();
      thermostat.setPowerSavingModeOn();
      expect(thermostat.isPowerSavingModeOn()).toBe(true);
    });

    it('limits the temp to 25 if psm is on',function(){
      thermostat.setPowerSavingModeOn();
      thermostat.increaseTemp(6);
      expect(thermostat.getTemp()).toEqual(25);
    });

    it('limits the temp to 32 if psm is off',function(){
      thermostat.setPowerSavingModeOff();
      thermostat.increaseTemp(13);
      expect(thermostat.getTemp()).toEqual(32);
    });


  });

});
