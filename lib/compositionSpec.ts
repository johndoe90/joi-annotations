///<reference path="references.ts" />

import * as Joi from 'joi';
import {annotations} from './index';

@annotations.object.and('type', 'serialNumber')
class Engine {
	@annotations.string.string()
	public type: string;

	@annotations.number.number()
	public serialNumber: number;
}

class Car {
  @annotations.object.required()
	@annotations.object.validate(Engine)
	public engine: Engine;
}

describe('car', () => {
  beforeEach(() => {
    let engine = new Engine();
    engine.type = 'boxer';
    engine.serialNumber = 1234;

    let car = new Car();
    car.engine = engine;

    this.error = null;
    this.test = car;
  });

  it('should be valid', () => {
    this.error = Joi.validate(this.test).error;

    expect(this.error).toBeNull();
  });

  it('should not be valid (serialnumber missing)', () => {
    delete this.test.engine.serialNumber;

    this.error = Joi.validate(this.test).error;

    expect(this.error).not.toBeNull();
  });

  it('should not be valid (serialnumber is of wrong type)', () => {
    this.test.engine.serialNumber = 'A341';

    this.error = Joi.validate(this.test).error;

    expect(this.error).not.toBeNull();
  });

  it('should not be valid (engine is missing)', () => {
    delete this.test.engine;

    this.error = Joi.validate(this.test).error;

    expect(this.error).not.toBeNull();
  });
})