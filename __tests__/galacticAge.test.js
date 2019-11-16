import { GalacticAge } from './../src/backend.js';


describe ('GalacticAge', () => {
  const newGalacticAge = new GalacticAge("September 19, 1987");

  test('should correctly determine users age in earth years from birthdate input', () => {
    newGalacticAge.calculateEarthAge("September 19, 1987");
    expect(newGalacticAge.earthAge).toEqual(32);
  });

  test('should correctly determine users age in mercury years from birthdate input', () => {
    newGalacticAge.calculateMercuryAge("September 19, 1987");
    expect(newGalacticAge.mercuryAge).toEqual(133);
  });

  test('should correctly determine users age in venus years from birthdate input', () => {
    newGalacticAge.calculateVenusAge("September 19, 1987");
    expect(newGalacticAge.venusAge).toEqual(52);
  });

  test('should correctly determine users age in mars years from birthdate input', () => {
    newGalacticAge.calculateMarsAge("September 19, 1987");
    expect(newGalacticAge.marsAge).toEqual(17);
  });

  test('should correctly determine users age in jupiter years from birthdate input', () => {
    newGalacticAge.calculateJupiterAge("September 19, 1987");
    expect(newGalacticAge.jupiterAge).toEqual(2);
  });

  test('should correctly determine how many earth years the user has left', () => {
    let earthYearsLeft = 79 - newGalacticAge.earthAge;
    newGalacticAge.calculateEarthYearsLeft("September 19, 1987");
    expect(earthYearsLeft).toEqual(47);
  });

  test('should correctly determine how many mercury years the user has left', () => {
    let mercuryYearsLeft = 79 - newGalacticAge.mercuryAge;
    newGalacticAge.calculateEarthYearsLeft("September 19, 1987");
    expect(mercuryYearsLeft).toEqual(-54);
  });

  test('should correctly determine how many venus years the user has left', () => {
    let venusYearsLeft = 79 - newGalacticAge.venusAge;
    newGalacticAge.calculateVenusYearsLeft("September 19, 1987");
    expect(venusYearsLeft).toEqual(27);
  });

  test('should correctly determine how many mars years the user has left', () => {
    let marsYearsLeft = 79 - newGalacticAge.marsAge;
    newGalacticAge.calculateMarsYearsLeft("September 19, 1987");
    expect(marsYearsLeft).toEqual(62);
  });

  test('should correctly determine how many jupiter years the user has left', () => {
    let jupiterYearsLeft = 79 - newGalacticAge.jupiterAge;
    newGalacticAge.calculateJupiterYearsLeft("September 19, 1987");
    expect(jupiterYearsLeft).toEqual(77);
  });
});
