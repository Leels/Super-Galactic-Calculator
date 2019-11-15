//Backend logic for Super Galactic Age Calculator//


export function GalacticAge(birthdate) {
  this.birthdate =  birthdate,
  this.earthAge = 0,
  this.mercuryAge = 0,
  this.venusAge = 0,
  this.marsAge = 0;
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
  //8.64e+7=second*minute*hour*day in e notation
  var ageInMercuryYears = Math.round((ageInMilliseconds/8.64e+7)/88);
  this.mercuryAge = ageInMercuryYears;
  return this.mercuryAge;
};

GalacticAge.prototype.calculateVenusAge = function(birthdate) {
  let dateParseMethod = Date.parse(birthdate);
  let dateNowMethod = Date.now();
  let ageInMilliseconds = dateNowMethod - dateParseMethod;
  var ageInVenusYears = Math.round((ageInMilliseconds/8.64e+7)/225);
  this.venusAge = ageInVenusYears;
  return this.venusAge;
};

GalacticAge.prototype.calculateMarsAge = function(birthdate) {
  let dateParseMethod = Date.parse(birthdate);
  let dateNowMethod = Date.now();
  let ageInMilliseconds = dateNowMethod - dateParseMethod;
  var ageInMarsYears = Math.round((ageInMilliseconds/8.64e+7)/687);
  this.marsAge = ageInMarsYears;
  return this.marsAge;
};
