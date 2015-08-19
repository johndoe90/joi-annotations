///<reference path="references.ts" />

import * as Joi from 'joi';
import {annotations} from './index';

class DateTest {
  @annotations.date.date()
  public prop: Date;

  constructor(prop: Date) {
    this.prop = prop;
  }
}

class FormatTest {
  @annotations.date.format('YYYY/MM/DD')
  public prop: string;

  constructor(prop: string) {
    this.prop = prop;
  }
}

class MinTest {
  @annotations.date.min('now')
  public prop: Date;

  constructor(prop: Date) {
    this.prop = prop;
  }
}

class MaxTest {
  @annotations.date.max('now')
  public prop: Date;

  constructor(prop: Date) {
    this.prop = prop;
  }
}

class IsoTest {
  @annotations.date.iso()
  public prop: string;

  constructor(prop: string) {
    this.prop = prop;
  }
}

describe('annotation', () => {
  describe('date', () => {
    beforeEach(() => {
      this.error = null;
      this.test = new DateTest(new Date());
    });

    it('should allow dates', () => {
      this.error = Joi.validate(this.test).error;

      expect(this.error).toBeNull();
    });

    it('should only allow dates', () => {
      this.test.prop = /fff/;
      this.error = Joi.validate(this.test).error;

      expect(this.error).not.toBeNull();
    });
  });

  describe('min', () => {
    beforeEach(() => {
    	let now = (new Date()).getTime();

      this.error = null;
      this.test = new MinTest(new Date(now + 10000));
    });

    it('should allow dates after now', () => {
      this.error = Joi.validate(this.test).error;

      expect(this.error).toBeNull();
    });

    it('should only allow dates after now', () => {
    	let now = (new Date()).getTime();

      this.test.prop = new Date(now - 10000);
      this.error = Joi.validate(this.test).error;

      expect(this.error).not.toBeNull();
    });
  });

  describe('max', () => {
    beforeEach(() => {
    	let now = (new Date()).getTime();

      this.error = null;
      this.test = new MaxTest(new Date(now - 10000));
    });

    it('should allow dates before now', () => {
      this.error = Joi.validate(this.test).error;

      expect(this.error).toBeNull();
    });

    it('should only allow dates before now', () => {
    	let now = (new Date()).getTime();

      this.test.prop = new Date(now + 10000);
      this.error = Joi.validate(this.test).error;

      expect(this.error).not.toBeNull();
    });
  });

  describe('iso', () => {
    beforeEach(() => {
      this.error = null;
      this.test = new IsoTest('2009-01-01T12:00:00+01:00');
    });

    it('should allow valid ISO 8601 strings', () => {
      this.error = Joi.validate(this.test).error;

      expect(this.error).toBeNull();
    });

    it('should only allow valid ISO 8601 strings', () => {
      this.test.prop = '2009-01-0112:00:00+01:00';
      this.error = Joi.validate(this.test).error;

      expect(this.error).not.toBeNull();
    });
  });

  describe('format', () => {
    beforeEach(() => {
      this.error = null;
      this.test = new FormatTest('2009/04/22');
    });

    it('should allow string that conforms to format', () => {
      this.error = Joi.validate(this.test).error;

      expect(this.error).toBeNull();
    });

    it('should only allow string that conforms to format', () => {
      this.test.prop = '04/22/2009';
      this.error = Joi.validate(this.test).error;

      expect(this.error).not.toBeNull();
    });
  });
});