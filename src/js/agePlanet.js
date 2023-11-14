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
    earthMercury() {
      let ageOnMercury = this.convertAge(.24);
      return ageOnMercury;
    }

    earthVenus() {
      let ageOnVenus = this.convertAge(.62);
      return ageOnVenus;
    }
}


