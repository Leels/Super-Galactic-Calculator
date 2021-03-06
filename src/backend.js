//Backend logic for Super Galactic Age Calculator--
export class GalacticAge {
  constructor(birthdate, sex, smoker) {
    this.birthdate = birthdate;
    this.sex = sex;
    this.smoker = smoker;
    this.earthAge = 0;
    this.mercuryAge = 0;
    this.venusAge = 0;
    this.marsAge = 0;
    this.jupiterAge = 0;
    this.saturnAge = 0;
    this.lifeExpectancy = 80;
  }

  calculateEarthAge(birthdate) {
    let dateParseMethod = Date.parse(birthdate);
    let dateNowMethod = Date.now();
    let ageInMilliseconds = dateNowMethod - dateParseMethod;
    let second = 1000;
    let minute = second * 60;
    let hour = minute * 60;
    let day = hour * 24;
    let year = day * 365;
    let ageInYears = Math.floor(ageInMilliseconds / year);
    this.earthAge = ageInYears;
    return this.earthAge;
  }

  calculateYearsLeft() {
    if (this.sex === "female") {
      this.lifeExpectancy += 2;
    } else if (this.sex === "male") {
      this.lifeExpectancy -= 2;
    }
    if (this.smoker === "yes") {
      this.lifeExpectancy -= 10;
    }
    return this.lifeExpectancy;
  }

  calculateMercuryAge() {
    this.mercuryAge = Math.floor(this.earthAge / .24);
    return this.mercuryAge;
  }

  calculateVenusAge() {
    this.venusAge = Math.floor(this.earthAge / .62);
    return this.venusAge;
  }

  calculateMarsAge() {
    this.marsAge = Math.floor(this.earthAge / 1.88);
    return this.marsAge;
  }

  calculateJupiterAge() {
    this.jupiterAge = Math.floor(this.earthAge / 11.86);
    return this.jupiterAge;
  }

  calculateSaturnAge() {
    this.saturnAge = Math.floor(this.earthAge / 29.5);
    return this.saturnAge;
  }


  calculateEarthYearsLeft() {
    let earthYearsLeft = this.lifeExpectancy - this.earthAge;
    if (earthYearsLeft < 0) {
      earthYearsLeft = `Holy crap you're old! You've outlived your life expectancy by ${Math.abs(this.earthYearsLeft)} years!`;
    }
    return earthYearsLeft;
  }

  calculateMercuryYearsLeft() {
    let mercuryYearsLeft = this.lifeExpectancy - this.mercuryAge;
    if (mercuryYearsLeft < 0) {
      mercuryYearsLeft = `Holy crap you're old! You've outlived your life expectancy by ${Math.abs(mercuryYearsLeft)} years!`;
    }
    return mercuryYearsLeft;
  }

  calculateMarsYearsLeft() {
    let marsYearsLeft = this.lifeExpectancy - this.marsAge;
    if (marsYearsLeft < 0) {
      marsYearsLeft = `Holy crap you're old! You've outlived your life expectancy by ${Math.abs(marsYearsLeft)} years!`;
    }
    return marsYearsLeft;
  }

  calculateVenusYearsLeft() {
    let venusYearsLeft = this.lifeExpectancy - this.venusAge;
    if (venusYearsLeft < 0) {
      venusYearsLeft = `Holy crap you're old! You've outlived your life expectancy by ${Math.abs(venusYearsLeft)} years!`;
    }
    return venusYearsLeft;
  }

  calculateJupiterYearsLeft() {
    let jupiterYearsLeft = this.lifeExpectancy - this.jupiterAge;
    if (jupiterYearsLeft < 0) {
      jupiterYearsLeft = `Holy crap you're old! You've outlived your life expectancy by ${Math.abs(jupiterYearsLeft)} years!`;
    }
    return jupiterYearsLeft;
  }

  calculateSaturnYearsLeft() {
    let saturnYearsLeft = this.lifeExpectancy - this.saturnAge;
    if (saturnYearsLeft < 0) {
      saturnYearsLeft = `Holy crap you're old! You've outlived your life expectancy by ${Math.abs(saturnYearsLeft)} years!`;
    }
    return saturnYearsLeft;
  }

}
