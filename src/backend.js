//Backend logic for Super Galactic Age Calculator//
export function GalacticAge(birthdate) {
  this.birthdate =  birthdate,
  this.age = 0;
}

GalacticAge.prototype.calculateAge = function(birthdate) {
  let dateParseMethod = Date.parse(birthdate);
  let dateNowMethod = Date.now();
  let ageInMilliseconds = dateNowMethod - dateParseMethod;
  let second = 1000;
  let minute = second*60;
  let hour = minute*60;
  let day = hour*24;
  var year = day*365;
  var ageInYears = Math.round(ageInMilliseconds/year);
  this.age = ageInYears;
  return this.age;
};
