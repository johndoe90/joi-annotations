///<reference path="references.ts" />

import * as Joi from 'joi';
import {annotations} from './index';

class FuncTest {
	@annotations.func.func()
	public prop: Function;

	constructor(prop: Function) {
		this.prop = prop;
	}
}

describe('annotation', () => {
  describe('func', () => {
    beforeEach(() => {
      this.error = null;
      this.test = new FuncTest(function() {});
    });

    it('should allow functions', () => {
      this.error = Joi.validate(this.test).error;

      expect(this.error).toBeNull();
    });

    it('should only allow functions', () => {
      this.test.prop = 'abc';
      this.error = Joi.validate(this.test).error;

      expect(this.error).not.toBeNull();
    });
  });
});