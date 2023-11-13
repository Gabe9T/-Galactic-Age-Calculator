
import { Input } from '../src/js/agePlanet.js'

describe('Input', () => {
  let person;

  beforeEach(() => {
    person = new Input(19, 2, 23);
  });  

  test('create a object with Input to get age in earth years', () => {
    expect(person.age).toEqual(19);
  });



});