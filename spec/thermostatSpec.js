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
  });
});
