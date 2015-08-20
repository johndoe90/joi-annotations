///<reference path="references.ts" />
declare var Buffer;
import * as Joi from 'joi';
import {annotations} from './index';

class EncodingTest {
  @annotations.binary.encoding('base64')
  public prop: string;

  constructor(prop: string) {
    this.prop = prop;
  }
}

class MinTest {
  @annotations.binary.min(5)
  public prop: string;

  constructor(prop: string) {
    this.prop = prop;
  }
}

class MaxTest {
  @annotations.binary.max(5)
  public prop: string;

  constructor(prop: string) {
    this.prop = prop;
  }
}

class LengthTest {
  @annotations.binary.length(5)
  public prop: string;

  constructor(prop: string) {
    this.prop = prop;
  }
}

describe('annotation', () => {
  describe('encoding', () => {
    beforeEach(() => {
      this.error = null;
      this.test = new EncodingTest('data');
    });

    it('should convert to Buffer', () => {
      let result = Joi.validate(this.test);

      expect(Buffer.isBuffer(result.value.prop)).toBe(true);
    });
  });

  describe('min', () => {
    beforeEach(() => {
      this.error = null;
      this.test = new MinTest(new Buffer('whatever'));
    });

    it('should allow buffers with size greater than 5', () => {
      this.error = Joi.validate(this.test).error;

      expect(this.error).toBeNull();
    });

    it('should only allow buffers with size greater than 5', () => {
      this.test.prop = new Buffer('abc');
      this.error = Joi.validate(this.test).error;

      expect(this.error).not.toBeNull();
    });
  });

  describe('max', () => {
    beforeEach(() => {
      this.error = null;
      this.test = new MaxTest(new Buffer('abc'));
    });

    it('should allow buffers with size less than 5', () => {
      this.error = Joi.validate(this.test).error;

      expect(this.error).toBeNull();
    });

    it('should only allow buffers with size less than 5', () => {
      this.test.prop = new Buffer('abcdef');
      this.error = Joi.validate(this.test).error;

      expect(this.error).not.toBeNull();
    });
  });

  describe('length', () => {
    beforeEach(() => {
      this.error = null;
      this.test = new LengthTest(new Buffer('abcde'));
    });

    it('should allow buffers with size  5', () => {
      this.error = Joi.validate(this.test).error;

      expect(this.error).toBeNull();
    });

    it('should only allow buffers with size 5', () => {
      this.test.prop = new Buffer('abcdef');
      this.error = Joi.validate(this.test).error;

      expect(this.error).not.toBeNull();
    });
  });
});