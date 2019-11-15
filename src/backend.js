//Backend logic for Super Galactic Age Calculator//


export function GalacticAge(birthdate) {
  this.birthdate =  birthdate,
  this.earthAge = 0,
  this.mercuryAge = 0;
}


GalacticAge.prototype.calculateEarthAge = function(birthdate) {
  let dateParseMethod = Date.parse(birthdate);
  let dateNowMethod = Date.now();
  let ageInMilliseconds = dateNowMethod - dateParseMethod;
  let second = 1000;
  let minute = second*60;
  let hour = minute*60;
  let day = hour*24;
  var year = day*365;
  var ageInYears = Math.round(ageInMilliseconds/year);
  this.earthAge = ageInYears;
  return this.earthAge;
};

GalacticAge.prototype.calculateMercuryAge = function(birthdate) {
  let dateParseMethod = Date.parse(birthdate);
  let dateNowMethod = Date.now();
  let ageInMilliseconds = dateNowMethod - dateParseMethod;
  let second = 1000;
  let minute = second*60;
  let hour = minute*60;
  let day = hour*24;
  var ageInMercuryYears = Math.round((ageInMilliseconds/day)/88);
  this.mercuryAge = ageInMercuryYears;
  return this.mercuryAge;
};
