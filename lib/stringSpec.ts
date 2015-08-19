///<reference path="references.ts" />

import * as Joi from 'joi';
import {annotations} from './index';

class MinTest {
    @annotations.string.min(5, 'utf8')
    public prop: string;

    constructor(prop: string) {
        this.prop = prop;
    }
}

class InsensitiveTest {
    @annotations.string.valid('a')
    @annotations.string.insensitive()
    public prop: string;

    constructor(prop: string) {
        this.prop = prop;
    }
}

class MaxTest {
    @annotations.string.max(5, 'utf8')
    public prop: string;

    constructor(prop: string) {
        this.prop = prop;
    }
}

class CreditCardTest {
    @annotations.string.creditCard()
    public prop: string;

    constructor(prop: string) {
        this.prop = prop;
    }
}

class LengthTest {
    @annotations.string.length(5, 'utf8')
    public prop: string;

    constructor(prop: string) {
        this.prop = prop;
    }
}

class AlphanumTest {
    @annotations.string.alphanum()
    public prop: string;

    constructor(prop: string) {
        this.prop = prop;
    }
}

class RegexTest {
    @annotations.string.regex(/([a-z])/, 'regex')
    public prop: string;

    constructor(prop: string) {
        this.prop = prop;
    }
}

class ReplaceTest {
    @annotations.string.replace(/b/gi, 'x')
    public prop: string;

    constructor(prop: string) {
        this.prop = prop;
    }
}

class TokenTest {
    @annotations.string.token()
    public prop: string;

    constructor(prop: string) {
        this.prop = prop;
    }
}

class UriTest {
    @annotations.string.uri()
    public prop: string;

    constructor(prop: string) {
        this.prop = prop;
    }
}

class GuidTest {
    @annotations.string.guid()
    public prop: string;

    constructor(prop: string) {
        this.prop = prop;
    }
}

class HexTest {
    @annotations.string.hex()
    public prop: string;

    constructor(prop: string) {
        this.prop = prop;
    }
}

class HostnameTest {
    @annotations.string.hostname()
    public prop: string;

    constructor(prop: string) {
        this.prop = prop;
    }
}

class LowercaseTest {
    @annotations.string.lowercase()
    public prop: string;

    constructor(prop: string) {
        this.prop = prop;
    }
}

class UppercaseTest {
    @annotations.string.uppercase()
    public prop: string;

    constructor(prop: string) {
        this.prop = prop;
    }
}

class TrimTest {
    @annotations.string.trim()
    public prop: string;

    constructor(prop: string) {
        this.prop = prop;
    }
}

class IsoDateTest {
    @annotations.string.isoDate()
    public prop: string;

    constructor(prop: string) {
        this.prop = prop;
    }
}

describe('annotation', () => {
    describe('insensitive', () => {
        beforeEach(() => {
            this.error = null;
            this.test = new InsensitiveTest('a');
        });

        it('should allow "a"', () => {
            this.error = Joi.validate(this.test).error;

            expect(this.error).toBeNull();
        });

        it('should also allow "A"', () => {
            this.test.prop = 'A';
            this.error = Joi.validate(this.test).error;

            expect(this.error).toBeNull();
        });
    });

    describe('min', () => {
        beforeEach(() => {
            this.error = null;
            this.test = new MinTest('abcdef');
        });

        it('should allow values longer than 5 characters', () => {
            this.error = Joi.validate(this.test).error;

            expect(this.error).toBeNull();
        });

        it('should enforce minumum length of 5 characters', () => {
            this.test.prop = 'abcd';
            this.error = Joi.validate(this.test).error;

            expect(this.error).not.toBeNull();
        });
    });

    describe('max', () => {
        beforeEach(() => {
            this.error = null;
            this.test = new MaxTest('abcd');
        });

        it('should allow values shorter than 5 characters', () => {
            this.error = Joi.validate(this.test).error;

            expect(this.error).toBeNull();
        });

        it('should enforce maximum length of 5 characters', () => {
            this.test.prop = 'abcdef';
            this.error = Joi.validate(this.test).error;

            expect(this.error).not.toBeNull();
        });
    });

    describe('creditCard', () => {
        beforeEach(() => {
            this.error = null;
            this.test = new CreditCardTest('5105105105105100');
        });

        it('should allow valid credit card numbers', () => {
            this.error = Joi.validate(this.test).error;

            expect(this.error).toBeNull();
        });

        it("should make sure value is valid credit card number", () => {
            this.test.prop = '1235104575105100';
            this.error = Joi.validate(this.test).error;

            expect(this.error).not.toBeNull();
        });
    });

    describe('length', () => {
        beforeEach(() => {
            this.error = null;
            this.test = new LengthTest('abcde');
        });

        it('should allow a length of 5', () => {
            this.error = Joi.validate(this.test).error;

            expect(this.error).toBeNull();
        });

        it('should enforce length of 5', () => {
            this.test.prop = 'abcd';
            this.error = Joi.validate(this.test).error;

            expect(this.error).not.toBeNull();
        });
    });

    describe('alphanum', () => {
        beforeEach(() => {
            this.error = null;
            this.test = new AlphanumTest('abc123def456');
        });

        it('should allow alphanumeric values', () => {
            this.error = Joi.validate(this.test).error;

            expect(this.error).toBeNull();
        });

        it('should only allow alphanumeric values', () => {
            this.test.prop = 'abc123def456!';
            this.error = Joi.validate(this.test).error;

            expect(this.error).not.toBeNull();
        });
    });

    describe('regex', () => {
        beforeEach(() => {
            this.error = null;
            this.test = new RegexTest('abcdef');
        });

        it('should allow matching values', () => {
            this.error = Joi.validate(this.test).error;

            expect(this.error).toBeNull();
        });

        it('should only allow matching values', () => {
            this.test.prop = 'ABCDEF';
            this.error = Joi.validate(this.test).error;

            expect(this.error).not.toBeNull();
        });
    });

    describe('replace', () => {
        beforeEach(() => {
            this.error = null;
            this.test = new ReplaceTest('abBc');
        });

        it('should replace matching values', () => {
            let result = Joi.validate(this.test);

            expect(result.error).toBeNull();
            expect(result.value.prop).toBe('axxc');
        });
    });

    describe('token', () => {
        beforeEach(() => {
            this.error = null;
            this.test = new TokenTest('abcDEF_0123');
        });

        it('should allow valid token', () => {
            this.error = Joi.validate(this.test).error;

            expect(this.error).toBeNull();
        });

        it('should only allow valid token', () => {
            this.test.prop += '!';
            this.error = Joi.validate(this.test).error;

            expect(this.error).not.toBeNull();
        });
    });

    describe('uri', () => {
        beforeEach(() => {
            this.error = null;
            this.test = new UriTest('http://www.git.com');
        });

        it('should allow valid uri', () => {
            this.error = Joi.validate(this.test).error;

            expect(this.error).toBeNull();
        });

        it('should only allow valid uri', () => {
            this.test.prop = 'www.git.com';
            this.error = Joi.validate(this.test).error;

            expect(this.error).not.toBeNull();
        });
    });

    describe('guid', () => {
        beforeEach(() => {
            this.error = null;
            this.test = new GuidTest('23030b8a-2f87-4d0a-86fa-10ef97b594ad');
        });

        it('should allow valid guid', () => {
            this.error = Joi.validate(this.test).error;

            expect(this.error).toBeNull();
        });

        it('should only allow valid guid', () => {
            this.test.prop = 'safasdf';
            this.error = Joi.validate(this.test).error;

            expect(this.error).not.toBeNull();
        });
    });

    describe('hex', () => {
        beforeEach(() => {
            this.error = null;
            this.test = new HexTest('12AB');
        });

        it('should allow valid hex values', () => {
            this.error = Joi.validate(this.test).error;

            expect(this.error).toBeNull();
        });

        it('should only allow valid hex values', () => {
            this.test.prop = '13G3';
            this.error = Joi.validate(this.test).error;

            expect(this.error).not.toBeNull();
        });
    });

    describe('hostname', () => {
        beforeEach(() => {
            this.error = null;
            this.test = new HostnameTest('wikipedia.org');
        });

        it('should allow valid hostnames', () => {
            this.error = Joi.validate(this.test).error;

            expect(this.error).toBeNull();
        });

        it('should only allow valid hostnames', () => {
            this.test.prop = 'wikipedia.';
            this.error = Joi.validate(this.test).error;

            expect(this.error).not.toBeNull();
        });
    });

    describe('lowercase', () => {
        beforeEach(() => {
            this.error = null;
            this.test = new LowercaseTest('abcdefg');
        });

        it('should allow lowercase letters', () => {
            this.error = Joi.validate(this.test, null, {convert: false}).error;

            expect(this.error).toBeNull();
        });

        it('should only allow lowercase letters', () => {
            this.test.prop = 'abcdefG';
            this.error = Joi.validate(this.test, null, {convert: false}).error;

            expect(this.error).not.toBeNull();
        });
    });

    describe('uppercase', () => {
        beforeEach(() => {
            this.error = null;
            this.test = new UppercaseTest('ABCDEF');
        });

        it('should allow uppercase letters', () => {
            this.error = Joi.validate(this.test, null, {convert: false}).error;

            expect(this.error).toBeNull();
        });

        it('should only allow uppercase letters', () => {
            this.test.prop = 'ABcDEF';
            this.error = Joi.validate(this.test, null, {convert: false}).error;

            expect(this.error).not.toBeNull();
        });
    });

    describe('trim', () => {
        beforeEach(() => {
            this.error = null;
            this.test = new TrimTest('hello world');
        });

        it('should allow strings without whitespace', () => {
            this.error = Joi.validate(this.test, null, {convert: false}).error;

            expect(this.error).toBeNull();
        });

        it('should only allow strings without whitespace', () => {
            this.test.prop = ' hello world ';
            this.error = Joi.validate(this.test, null, {convert: false}).error;

            expect(this.error).not.toBeNull();
        });
    });

    describe('isoDate', () => {
        beforeEach(() => {
            this.error = null;
            this.test = new IsoDateTest('2015-08-16T08:47+02:00');
        });

        it('should allow valid dates', () => {
            this.error = Joi.validate(this.test).error;

            expect(this.error).toBeNull();
        });

        it('should only allow valid dates', () => {
            this.test.prop = '2015-14-08';
            this.error = Joi.validate(this.test).error;

            expect(this.error).not.toBeNull();
        });
    });
});
