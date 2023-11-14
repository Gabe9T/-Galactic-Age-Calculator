import { Input } from '../src/js/agePlanet.js'

describe('Input', () => {
  let person;

  beforeEach(() => {
    person = new Input(19, 2, 23);
  });  

  test('create a object with Input to get age in earth years', () => {
    expect(person.age).toEqual(19);
  });
//years to 

  describe('solarYear()', () => {
    test('gets input age and convert to mercury solar year', () => {
      expect(person.convertAge(0.24)).toEqual(79.17);
    });
  });

  describe('earthMercury()', () => {
    test('return mercury age in years', () => {
      expect(person.earthMercury()).toEqual(79.17);
    });
  });

  describe('earthVenus()', () => {
    test('return venus age in years', () => {
      expect(person.earthVenus()).toEqual(30.65);
    });
  });

  describe('earthMars()', () => {
    test('return mars age in years', () => {
      expect(person.earthMars()).toEqual(10.11);
    });
  });

  describe('earthJupiter()', () => {
    test('return Jupiter age in years', () => {
      expect(person.earthJupiter()).toEqual(1.60);
    });
  });

//Years past
  describe('yearsPastBirthday()', () => {
    test('returns ammount of Earth years need to have passed from current age to future age', () => {
      expect(person.yearsPastBirthday()).toEqual(4);
    });
  });
});