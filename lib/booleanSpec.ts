///<reference path="references.ts" />

import * as Joi from 'joi';
import {annotations} from './index';

class BoolTest {
	@annotations.bool.bool()
	public prop: boolean;

	constructor(prop: boolean) {
		this.prop = prop;
	}
}

class BooleanTest {
	@annotations.boolean.boolean()
	public prop: boolean;

	constructor(prop: boolean) {
		this.prop = prop;
	}
}

describe('annotation', () => {
  describe('boolean', () => {
    beforeEach(() => {
      this.error = null;
      this.test = new BooleanTest(true);
    });

    it('should allow boolean values', () => {
      this.error = Joi.validate(this.test).error;

      expect(this.error).toBeNull();
    });

    it('should only allow boolean values', () => {
      this.test.prop = 2;
      this.error = Joi.validate(this.test).error;

      expect(this.error).not.toBeNull();
    });
  });
});

describe('annotation', () => {
  describe('boolean', () => {
    beforeEach(() => {
      this.error = null;
      this.test = new BoolTest(true);
    });

    it('should allow boolean values', () => {
      this.error = Joi.validate(this.test).error;

      expect(this.error).toBeNull();
    });

    it('should only allow boolean values', () => {
      this.test.prop = 2;
      this.error = Joi.validate(this.test).error;

      expect(this.error).not.toBeNull();
    });
  });
});