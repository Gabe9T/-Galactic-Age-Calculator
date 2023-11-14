
import { Input } from '../src/js/agePlanet.js'

describe('Input', () => {
  let person;

  beforeEach(() => {
    person = new Input(19, 2, 23);
  });  

  test('create a object with Input to get age in earth years', () => {
    expect(person.age).toEqual(19);
  });

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

});