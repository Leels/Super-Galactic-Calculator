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
});
