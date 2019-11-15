import { GalacticAge } from './../src/backend.js';


describe ('GalacticAge', () => {
  test('should correctly determine users age in earth years from birthdate input', () => {
    const newGalacticAge = new GalacticAge("September 19, 1987");
    newGalacticAge.calculateEarthAge("September 19, 1987");
    expect(newGalacticAge.earthAge).toEqual(32);
  });

  test('should correctly determine users age in mercury years from birthdate input', () => {
    const newGalacticAge = new GalacticAge("September 19, 1987");
    newGalacticAge.calculateMercuryAge("September 19, 1987");
    expect(newGalacticAge.mercuryAge).toEqual(133);
  });

  test('should correctly determine users age in venus years from birthdate input', () => {
    const newGalacticAge = new GalacticAge("September 19, 1987");
    newGalacticAge.calculateVenusAge("September 19, 1987");
    expect(newGalacticAge.mercuryAge).toEqual(52);
  });
});
