import { GalacticAge } from './../src/backend.js';


describe ('GalacticAge', () => {
  test('should correctly determine users age in earth from birthdate input', () => {
    const newGalacticAge = new GalacticAge("September 19, 1987");
    newGalacticAge.calculateAge("September 19, 1987");
    expect(newGalacticAge.age).toEqual(32);
  });
});
