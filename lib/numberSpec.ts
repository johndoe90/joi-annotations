///<reference path="references.ts" />

import * as Joi from 'joi';
import {annotations} from './index';

class NumberTest {
	@annotations.number.number()
	public prop: number;

	constructor(prop: number) {
		this.prop = prop;
	}
}

class MinTest {
	@annotations.number.min(5)
	public prop: number;

	constructor(prop: number) {
		this.prop = prop;
	}
}

class MaxTest {
	@annotations.number.max(5)
	public prop: number;

	constructor(prop: number) {
		this.prop = prop;
	}
}

class GreaterTest {
	@annotations.number.greater(5)
	public prop: number;

	constructor(prop: number) {
		this.prop = prop;
	}
}

class LessTest {
	@annotations.number.less(5)
	public prop: number;

	constructor(prop: number) {
		this.prop = prop;
	}
}

class IntegerTest {
	@annotations.number.integer()
	public prop: number;

	constructor(prop: number) {
		this.prop = prop;
	}
}

class PrecisionTest {
	@annotations.number.precision(2)
	public prop: number;

	constructor(prop: number) {
		this.prop = prop;
	}
}

class MultipleTest {
	@annotations.number.multiple(5)
	public prop: number;

	constructor(prop: number) {
		this.prop = prop;
	}
}

class PositiveTest {
	@annotations.number.positive()
	public prop: number;

	constructor(prop: number) {
		this.prop = prop;
	}
}

class NegativeTest {
	@annotations.number.negative()
	public prop: number;

	constructor(prop: number) {
		this.prop = prop;
	}
}

describe('annotation', () => {
	describe('number', () => {
    beforeEach(() => {
      this.error = null;
      this.test = new NumberTest(5);
    });

    it('should allow numbers', () => {
      this.error = Joi.validate(this.test).error;

      expect(this.error).toBeNull();
    });

    it('should only allow numbers', () => {
      this.test.prop = 'abc';
      this.error = Joi.validate(this.test).error;

      expect(this.error).not.toBeNull();
    });
  });

  describe('min', () => {
    beforeEach(() => {
      this.error = null;
      this.test = new MinTest(5);
    });

    it('should allow values greater or equal to 5', () => {
      this.error = Joi.validate(this.test).error;

      expect(this.error).toBeNull();
    });

    it('should only allow values greater or equal to 5', () => {
      this.test.prop = 4;
      this.error = Joi.validate(this.test).error;

      expect(this.error).not.toBeNull();
    });
  });

describe('max', () => {
    beforeEach(() => {
      this.error = null;
      this.test = new MaxTest(5);
    });

    it('should allow values less or equal to 5', () => {
      this.error = Joi.validate(this.test).error;

      expect(this.error).toBeNull();
    });

    it('should only allow values less or equal to 5', () => {
      this.test.prop = 6;
      this.error = Joi.validate(this.test).error;

      expect(this.error).not.toBeNull();
    });
  });

describe('greater', () => {
    beforeEach(() => {
      this.error = null;
      this.test = new GreaterTest(6);
    });

    it('should allow values greater than 5', () => {
      this.error = Joi.validate(this.test).error;

      expect(this.error).toBeNull();
    });

    it('should only allow values greater than 5', () => {
      this.test.prop = 5;
      this.error = Joi.validate(this.test).error;

      expect(this.error).not.toBeNull();
    });
  });

describe('less', () => {
    beforeEach(() => {
      this.error = null;
      this.test = new LessTest(4);
    });

    it('should allow values less than 5', () => {
      this.error = Joi.validate(this.test).error;

      expect(this.error).toBeNull();
    });

    it('should only allow values less than 5', () => {
      this.test.prop = 5;
      this.error = Joi.validate(this.test).error;

      expect(this.error).not.toBeNull();
    });
  });

describe('integer', () => {
    beforeEach(() => {
      this.error = null;
      this.test = new IntegerTest(4);
    });

    it('should allow integer values', () => {
      this.error = Joi.validate(this.test).error;

      expect(this.error).toBeNull();
    });

    it('should only allow integer values', () => {
      this.test.prop = 4.1;
      this.error = Joi.validate(this.test).error;

      expect(this.error).not.toBeNull();
    });
  });

describe('multiple', () => {
    beforeEach(() => {
      this.error = null;
      this.test = new MultipleTest(455);
    });

    it('should allow multiples of 5', () => {
      this.error = Joi.validate(this.test).error;

      expect(this.error).toBeNull();
    });

    it('should only allow multiples of 5', () => {
      this.test.prop = 456;
      this.error = Joi.validate(this.test).error;

      expect(this.error).not.toBeNull();
    });
  });

describe('precision', () => {
    beforeEach(() => {
      this.error = null;
      this.test = new PrecisionTest(455.63);
    });

    it('should allow values with a precision of 2 or less', () => {
      this.error = Joi.validate(this.test).error;

      expect(this.error).toBeNull();
    });

    it('should only allow values with a precision of 2 or less', () => {
      this.test.prop = 455.633;
      this.error = Joi.validate(this.test, null, {convert: false}).error;

      expect(this.error).not.toBeNull();
    });
  });

describe('positive', () => {
    beforeEach(() => {
      this.error = null;
      this.test = new PositiveTest(1);
    });

    it('should allow positive values', () => {
      this.error = Joi.validate(this.test).error;

      expect(this.error).toBeNull();
    });

    it('should only allow positive values', () => {
      this.test.prop = -1;
      this.error = Joi.validate(this.test, null, {convert: false}).error;

      expect(this.error).not.toBeNull();
    });
  });

describe('negative', () => {
    beforeEach(() => {
      this.error = null;
      this.test = new NegativeTest(-1);
    });

    it('should allow negative values', () => {
      this.error = Joi.validate(this.test).error;

      expect(this.error).toBeNull();
    });

    it('should only allow negative values', () => {
      this.test.prop = 1;
      this.error = Joi.validate(this.test, null, {convert: false}).error;

      expect(this.error).not.toBeNull();
    });
  });
});