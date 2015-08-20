///<reference path="references.ts" />

import * as Joi from 'joi';
import {annotations} from './index';

class ArrayTest {
  @annotations.array.array()
  public prop: any[];

  constructor(prop: any[]) {
    this.prop = prop;
  }
}

class SparseTest {
  @annotations.array.sparse(true)
  public prop: any[];

  constructor(prop: any[]) {
    this.prop = prop;
  }
}

class SingleTest {
  @annotations.array.single(true)
  public prop: any[];

  constructor(prop: any[]) {
    this.prop = prop;
  }
}

class ItemsTest {
  @annotations.array.items(Joi.number(), Joi.string())
  public prop: any[];

  constructor(prop: any[]) {
    this.prop = prop;
  }
}

class MinTest {
  @annotations.array.min(5)
  public prop: any[];

  constructor(prop: any[]) {
    this.prop = prop;
  }
}

class MaxTest {
  @annotations.array.max(5)
  public prop: any[];

  constructor(prop: any[]) {
    this.prop = prop;
  }
}

class LengthTest {
  @annotations.array.length(5)
  public prop: any[];

  constructor(prop: any[]) {
    this.prop = prop;
  }
}

class UniqueTest {
  @annotations.array.unique()
  public prop: any[];

  constructor(prop: any[]) {
    this.prop = prop;
  }
}

describe('annotation', () => {
  describe('array', () => {
    beforeEach(() => {
      this.error = null;
      this.test = new ArrayTest([1,2,3]);
    });

    it('should allow arrays', () => {
      this.error = Joi.validate(this.test).error;

      expect(this.error).toBeNull();
    });

    it('should only allow arrays', () => {
      this.test.prop = 'abc';
      this.error = Joi.validate(this.test).error;

      expect(this.error).not.toBeNull();
    });
  });

  describe('sparse', () => {
    beforeEach(() => {
      this.error = null;
      this.test = new SparseTest([1,2,3]);
    });

    it('should allow arrays with no undefined values', () => {
      this.error = Joi.validate(this.test).error;

      expect(this.error).toBeNull();
    });

    it('should allow arrays with undefined values', () => {
      this.test.prop = [1,2, undefined, 3];
      this.error = Joi.validate(this.test).error;

      expect(this.error).toBeNull();
    });
  });

  describe('single', () => {
    beforeEach(() => {
      this.error = null;
      this.test = new SingleTest([1,2,3]);
    });

    it('should allow arrays', () => {
      this.error = Joi.validate(this.test).error;

      expect(this.error).toBeNull();
    });

    it('should allow single values', () => {
      this.test.prop = 1;
      this.error = Joi.validate(this.test).error;

      expect(this.error).toBeNull();
    });
  });

  describe('items', () => {
    beforeEach(() => {
      this.error = null;
      this.test = new ItemsTest([1,2,'hello']);
    });

    it('should allow specified types', () => {
      this.error = Joi.validate(this.test).error;

      expect(this.error).toBeNull();
    });

    it('should only allow specified types', () => {
      this.test.prop = [1, 2, 'hello', /fff/];
      this.error = Joi.validate(this.test).error;

      expect(this.error).not.toBeNull();
    });
  });

  describe('min', () => {
    beforeEach(() => {
      this.error = null;
      this.test = new MinTest([1,2,3,4,5]);
    });

    it('should allow arrays with length greater or equal to 5', () => {
      this.error = Joi.validate(this.test).error;

      expect(this.error).toBeNull();
    });

    it('should only allow arrays with length greater or equal to 5', () => {
      this.test.prop = [1,2,3,4];
      this.error = Joi.validate(this.test).error;

      expect(this.error).not.toBeNull();
    });
  });

  describe('max', () => {
    beforeEach(() => {
      this.error = null;
      this.test = new MaxTest([1,2,3,4,5]);
    });

    it('should allow arrays with length less or equal to 5', () => {
      this.error = Joi.validate(this.test).error;

      expect(this.error).toBeNull();
    });

    it('should only allow arrays with length less or equal to 5', () => {
      this.test.prop = [1,2,3,4,5,6];
      this.error = Joi.validate(this.test).error;

      expect(this.error).not.toBeNull();
    });
  });

  describe('length', () => {
    beforeEach(() => {
      this.error = null;
      this.test = new LengthTest([1,2,3,4,5]);
    });

    it('should allow arrays with length  5', () => {
      this.error = Joi.validate(this.test).error;

      expect(this.error).toBeNull();
    });

    it('should only allow arrays with length 5', () => {
      this.test.prop = [1,2,3,4,5,6];
      this.error = Joi.validate(this.test).error;

      expect(this.error).not.toBeNull();
    });
  });

  describe('unique', () => {
    beforeEach(() => {
      this.error = null;
      this.test = new UniqueTest([1,2,3,4,5]);
    });

    it('should allow arrays with unique values', () => {
      this.error = Joi.validate(this.test).error;

      expect(this.error).toBeNull();
    });

    it('should only allow arrays with unique values', () => {
      this.test.prop = [1,2,3,4,5,1];
      this.error = Joi.validate(this.test).error;

      expect(this.error).not.toBeNull();
    });
  });
});