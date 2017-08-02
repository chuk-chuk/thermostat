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
});
