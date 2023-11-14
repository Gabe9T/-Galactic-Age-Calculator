export class Input {
  constructor(age, futureBirthday, pastBirthday) {
    this.age = age;
    this.futureBirthday = futureBirthday;
    this.pastBirthday = pastBirthday;
  }

  convertAge(solarYear) {
    const ageOnPlanet = parseInt(this.age) / solarYear;
    return Math.round(ageOnPlanet * 100) / 100;
  }
  //years to
  earthMercury() {
    let ageOnMercury = this.convertAge(.24);
    return ageOnMercury;
  }

  earthVenus() {
    let ageOnVenus = this.convertAge(.62);
    return ageOnVenus;
  }

  earthMars() {
    let ageOnMars = this.convertAge(1.88);
    return ageOnMars;
  }

  earthJupiter() {
    let ageOnJupiter = this.convertAge(11.86);
    return ageOnJupiter;
  }
  //years past 
  
  yearsPastBirthday() {
    const earthPast = parseInt(this.pastBirthday - this.age );
    return earthPast;
  }

  yearsMercury() {
    this.age = this.yearsPastBirthday();
    const pastMercury = this.earthMercury();
    return pastMercury;
  }

  yearsVenus() {
    this.age = this.yearsPastBirthday();
    const pastVenus = this.earthVenus();
    return pastVenus; 
  }

}


