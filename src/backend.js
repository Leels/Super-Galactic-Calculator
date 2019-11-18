//Backend logic for Super Galactic Age Calculator--

export function GalacticAge(birthdate, sex, smoker) {
  this.birthdate =  birthdate,
  this.sex = sex,
  this.smoker = smoker,
  this.earthAge = 0,
  this.mercuryAge = 0,
  this.venusAge = 0,
  this.marsAge = 0,
  this.jupiterAge = 0,
  this.saturnAge = 0,
  this.lifeExpectancy = 79;
}

GalacticAge.prototype.calculateEarthAge = function(birthdate) {
  let dateParseMethod = Date.parse(birthdate);
  let dateNowMethod = Date.now();
  let ageInMilliseconds = dateNowMethod - dateParseMethod;
  let second = 1000;
  let minute = second*60;
  let hour = minute*60;
  let day = hour*24;
  let year = day*365;
  let ageInYears = Math.floor(ageInMilliseconds/year);
  this.earthAge = ageInYears;
  return this.earthAge;
};

GalacticAge.prototype.calculateMercuryAge = function(birthdate) {
  let dateParseMethod = Date.parse(birthdate);
  let dateNowMethod = Date.now();
  let ageInMilliseconds = dateNowMethod - dateParseMethod;
  //8.64e+7 = second*minute*hour*day in e notation--
  let ageInMercuryYears = Math.floor((ageInMilliseconds/8.64e+7)/88);
  this.mercuryAge = ageInMercuryYears;
  return this.mercuryAge;
};

GalacticAge.prototype.calculateVenusAge = function(birthdate) {
  let dateParseMethod = Date.parse(birthdate);
  let dateNowMethod = Date.now();
  let ageInMilliseconds = dateNowMethod - dateParseMethod;
  let ageInVenusYears = Math.floor((ageInMilliseconds/8.64e+7)/225);
  this.venusAge = ageInVenusYears;
  return this.venusAge;
};

GalacticAge.prototype.calculateMarsAge = function(birthdate) {
  let dateParseMethod = Date.parse(birthdate);
  let dateNowMethod = Date.now();
  let ageInMilliseconds = dateNowMethod - dateParseMethod;
  let ageInMarsYears = Math.floor((ageInMilliseconds/8.64e+7)/687);
  this.marsAge = ageInMarsYears;
  return this.marsAge;
};

GalacticAge.prototype.calculateJupiterAge = function(birthdate) {
  let dateParseMethod = Date.parse(birthdate);
  let dateNowMethod = Date.now();
  let ageInMilliseconds = dateNowMethod - dateParseMethod;
  let ageInJupiterYears = Math.floor((ageInMilliseconds/8.64e+7)/4307);
  this.jupiterAge = ageInJupiterYears;
  return this.jupiterAge;
};

GalacticAge.prototype.calculateSaturnAge = function(birthdate) {
  let dateParseMethod = Date.parse(birthdate);
  let dateNowMethod = Date.now();
  let ageInMilliseconds = dateNowMethod - dateParseMethod;
  let ageInSaturnYears = Math.floor((ageInMilliseconds/8.64e+7)/10731);
  this.saturnAge = ageInSaturnYears;
  return this.saturnAge;
};

GalacticAge.prototype.calculateYearsLeft = function(sex, smoker) {
  if (this.sex === "female" || this.sex === "ftm") {
    this.lifeExpectancy +=2;
  } else if (this.sex === "male" || this.sex === "mtf") {
    this.lifeExpectancy -=2;
  }
  if (this.smoker === "yes") {
    this.lifeExpectancy -=10;
  }
  return this.lifeExpectancy;
};

GalacticAge.prototype.calculateEarthYearsLeft = function() {
  let earthYearsLeft = this.lifeExpectancy - this.earthAge;
  return earthYearsLeft;
};

GalacticAge.prototype.calculateMercuryYearsLeft = function() {
  let mercuryYearsLeft = this.lifeExpectancy - this.mercuryAge;
  return mercuryYearsLeft;
};

GalacticAge.prototype.calculateMarsYearsLeft = function() {
  let marsYearsLeft = this.lifeExpectancy - this.marsAge;
  return marsYearsLeft;
};

GalacticAge.prototype.calculateVenusYearsLeft = function() {
  let venusYearsLeft = this.lifeExpectancy - this.venusAge;
  return venusYearsLeft;
};

GalacticAge.prototype.calculateJupiterYearsLeft = function() {
  let jupiterYearsLeft = this.lifeExpectancy - this.jupiterAge;
  return jupiterYearsLeft;
};

GalacticAge.prototype.calculateSaturnYearsLeft = function() {
  let saturnYearsLeft = this.lifeExpectancy - this.saturnAge;
  return saturnYearsLeft;
};
