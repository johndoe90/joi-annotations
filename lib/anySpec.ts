///<reference path="references.ts" />

import * as Joi from 'joi';
import {annotations} from './index';

class AnyTest {
	@annotations.any.any()
	public prop: any;

	constructor ( prop: any ) {
		this.prop = prop;
	}
}

class ValidTest {
	@annotations.any.valid(['a', 'b', 3])
	public prop: any;

	constructor ( prop: any ) {
		this.prop = prop;
	}
}

class OnlyTest {
	@annotations.any.only('a', 'b', 3)
	public prop: any;

	constructor ( prop: any ) {
		this.prop = prop;
	}
}

class EqualTest {
	@annotations.any.equal('a', 'b', 3)
	public prop: any;

	constructor ( prop: any ) {
		this.prop = prop;
	}
} 

class InvalidTest {
	@annotations.any.invalid(['a', 'b', 3])
	public prop: any;

	constructor ( prop: any ) {
		this.prop = prop;
	}
}

class DisallowTest {
	@annotations.any.disallow('a', 'b', 3)
	public prop: any;

	constructor ( prop: any ) {
		this.prop = prop;
	}
}

class NotTest {
	@annotations.any.not('a', 'b', 3)
	public prop: any;

	constructor ( prop: any ) {
		this.prop = prop;
	}
}

class RequiredTest {
	@annotations.any.required()
	public prop: any;

	constructor ( prop: any ) {
		this.prop = prop;
	}
}

class OptionalTest {
	@annotations.any.optional()
	public prop: any;
}

class ForbiddenTest {
	@annotations.any.forbidden()
	public prop: any;
}

class StripTest {
	@annotations.any.strip()
	public prop: any;

	constructor ( prop: any ) {
		this.prop = prop;
	}
}

describe('annotation', () => {
  describe('any', () => {
    beforeEach(() => {
      this.error = null;
      this.test = new AnyTest('');
    });

    it('should allow any type', () => {
    	this.test.prop = 'data';
    	expect(Joi.validate(this.test).error).toBeNull();

    	this.test.prop = 33;
    	expect(Joi.validate(this.test).error).toBeNull();

    	this.test.prop = [1, '3'];
    	expect(Joi.validate(this.test).error).toBeNull();
    });
  });

  describe('valid', () => {
    beforeEach(() => {
      this.error = null;
      this.test = new ValidTest('a');
    });

    it('should allow specified values', () => {
    	this.error = Joi.validate(this.test).error;

    	expect(this.error).toBeNull();
    });
  });

  describe('valid', () => {
    beforeEach(() => {
      this.error = null;
      this.test = new ValidTest(3);
    });

    it('should allow specified values', () => {
    	['a', 'b', 3].forEach((value) => {
    		this.test.prop = value;
    		this.error = Joi.validate(this.test).error;

    		expect(this.error).toBeNull();
    	});
    });

    it('should only allow specified values', () => {
    	this.test.prop = 4;
    	this.error = Joi.validate(this.test).error;

    	expect(this.error).not.toBeNull();
    });
  });

  describe('equal', () => {
    beforeEach(() => {
      this.error = null;
      this.test = new EqualTest(3);
    });

    it('should allow specified values', () => {
    	['a', 'b', 3].forEach((value) => {
    		this.test.prop = value;
    		this.error = Joi.validate(this.test).error;

    		expect(this.error).toBeNull();
    	});
    });

    it('should only allow specified values', () => {
    	this.test.prop = 4;
    	this.error = Joi.validate(this.test).error;

    	expect(this.error).not.toBeNull();
    });
  });

  describe('only', () => {
    beforeEach(() => {
      this.error = null;
      this.test = new OnlyTest(3);
    });

    it('should allow specified values', () => {
    	['a', 'b', 3].forEach((value) => {
    		this.test.prop = value;
    		this.error = Joi.validate(this.test).error;

    		expect(this.error).toBeNull();
    	});
    });

    it('should only allow specified values', () => {
    	this.test.prop = 4;
    	this.error = Joi.validate(this.test).error;

    	expect(this.error).not.toBeNull();
    });
  });

  describe('invalid', () => {
    beforeEach(() => {
      this.error = null;
      this.test = new InvalidTest(4);
    });

    it('should allow not specified values', () => {
    	this.error = Joi.validate(this.test).error;

    	expect(this.error).toBeNull();
    });

    it('should only allow not specified values', () => {
    	this.test.prop = 'b';
    	this.error = Joi.validate(this.test).error;

    	expect(this.error).not.toBeNull();
    });
  });

  describe('disallow', () => {
    beforeEach(() => {
      this.error = null;
      this.test = new DisallowTest(4);
    });

    it('should allow not specified values', () => {
    	this.error = Joi.validate(this.test).error;

    	expect(this.error).toBeNull();
    });

    it('should only allow not specified values', () => {
    	this.test.prop = 3;
    	this.error = Joi.validate(this.test).error;

    	expect(this.error).not.toBeNull();
    });
  });

  describe('not', () => {
    beforeEach(() => {
      this.error = null;
      this.test = new NotTest(4);
    });

    it('should allow not specified values', () => {
    	this.error = Joi.validate(this.test).error;

    	expect(this.error).toBeNull();
    });

    it('should only allow not specified values', () => {
    	this.test.prop = 'a';
    	this.error = Joi.validate(this.test).error;

    	expect(this.error).not.toBeNull();
    });
  });

  describe('required', () => {
    beforeEach(() => {
      this.error = null;
      this.test = new RequiredTest(4);
    });

    it('should allow defined values', () => {
    	this.error = Joi.validate(this.test).error;

    	expect(this.error).toBeNull();
    });

    it('should only allow defined values', () => {
    	this.test.prop = undefined;
    	this.error = Joi.validate(this.test).error;

    	expect(this.error).not.toBeNull();
    });
  });

  describe('optional', () => {
    beforeEach(() => {
      this.error = null;
      this.test = new OptionalTest();
    });

    it('should allow undefined values', () => {
    	this.error = Joi.validate(this.test, null, {presence: 'required'}).error;

    	expect(this.error).toBeNull();
    });
  });

  describe('forbidden', () => {
    beforeEach(() => {
      this.error = null;
      this.test = new ForbiddenTest();
    });

    it('should allow undefined values', () => {
    	this.test.prop = undefined;
    	this.error = Joi.validate(this.test).error;

    	expect(this.error).toBeNull();
    });

    it('should only allow undefined values', () => {
    	this.test.prop = '';
    	this.error = Joi.validate(this.test).error;

    	expect(this.error).not.toBeNull();
    });
  });

  describe('strip', () => {
    beforeEach(() => {
      this.error = null;
      this.test = new StripTest('value');
    });

    it('should strip values from result', () => {
    	let result = Joi.validate(this.test);

    	expect(result.error).toBeNull();
    	expect(result.value.prop).not.toBeDefined();
    });
  });
});
