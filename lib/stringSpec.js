///<reference path="references.ts" />
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var _this = this;
var Joi = require('joi');
var index_1 = require('./index');
var MinTest = (function () {
    function MinTest(prop) {
        this.prop = prop;
    }
    __decorate([
        index_1.annotations.string.min(5, 'utf8')
    ], MinTest.prototype, "prop");
    return MinTest;
})();
var InsensitiveTest = (function () {
    function InsensitiveTest(prop) {
        this.prop = prop;
    }
    __decorate([
        index_1.annotations.string.valid('a'),
        index_1.annotations.string.insensitive()
    ], InsensitiveTest.prototype, "prop");
    return InsensitiveTest;
})();
var MaxTest = (function () {
    function MaxTest(prop) {
        this.prop = prop;
    }
    __decorate([
        index_1.annotations.string.max(5, 'utf8')
    ], MaxTest.prototype, "prop");
    return MaxTest;
})();
var CreditCardTest = (function () {
    function CreditCardTest(prop) {
        this.prop = prop;
    }
    __decorate([
        index_1.annotations.string.creditCard()
    ], CreditCardTest.prototype, "prop");
    return CreditCardTest;
})();
var LengthTest = (function () {
    function LengthTest(prop) {
        this.prop = prop;
    }
    __decorate([
        index_1.annotations.string.length(5, 'utf8')
    ], LengthTest.prototype, "prop");
    return LengthTest;
})();
var AlphanumTest = (function () {
    function AlphanumTest(prop) {
        this.prop = prop;
    }
    __decorate([
        index_1.annotations.string.alphanum()
    ], AlphanumTest.prototype, "prop");
    return AlphanumTest;
})();
var RegexTest = (function () {
    function RegexTest(prop) {
        this.prop = prop;
    }
    __decorate([
        index_1.annotations.string.regex(/([a-z])/, 'regex')
    ], RegexTest.prototype, "prop");
    return RegexTest;
})();
var ReplaceTest = (function () {
    function ReplaceTest(prop) {
        this.prop = prop;
    }
    __decorate([
        index_1.annotations.string.replace(/b/gi, 'x')
    ], ReplaceTest.prototype, "prop");
    return ReplaceTest;
})();
var TokenTest = (function () {
    function TokenTest(prop) {
        this.prop = prop;
    }
    __decorate([
        index_1.annotations.string.token()
    ], TokenTest.prototype, "prop");
    return TokenTest;
})();
var UriTest = (function () {
    function UriTest(prop) {
        this.prop = prop;
    }
    __decorate([
        index_1.annotations.string.uri()
    ], UriTest.prototype, "prop");
    return UriTest;
})();
var GuidTest = (function () {
    function GuidTest(prop) {
        this.prop = prop;
    }
    __decorate([
        index_1.annotations.string.guid()
    ], GuidTest.prototype, "prop");
    return GuidTest;
})();
var HexTest = (function () {
    function HexTest(prop) {
        this.prop = prop;
    }
    __decorate([
        index_1.annotations.string.hex()
    ], HexTest.prototype, "prop");
    return HexTest;
})();
var HostnameTest = (function () {
    function HostnameTest(prop) {
        this.prop = prop;
    }
    __decorate([
        index_1.annotations.string.hostname()
    ], HostnameTest.prototype, "prop");
    return HostnameTest;
})();
var LowercaseTest = (function () {
    function LowercaseTest(prop) {
        this.prop = prop;
    }
    __decorate([
        index_1.annotations.string.lowercase()
    ], LowercaseTest.prototype, "prop");
    return LowercaseTest;
})();
var UppercaseTest = (function () {
    function UppercaseTest(prop) {
        this.prop = prop;
    }
    __decorate([
        index_1.annotations.string.uppercase()
    ], UppercaseTest.prototype, "prop");
    return UppercaseTest;
})();
var TrimTest = (function () {
    function TrimTest(prop) {
        this.prop = prop;
    }
    __decorate([
        index_1.annotations.string.trim()
    ], TrimTest.prototype, "prop");
    return TrimTest;
})();
var IsoDateTest = (function () {
    function IsoDateTest(prop) {
        this.prop = prop;
    }
    __decorate([
        index_1.annotations.string.isoDate()
    ], IsoDateTest.prototype, "prop");
    return IsoDateTest;
})();
describe('annotation', function () {
    describe('insensitive', function () {
        beforeEach(function () {
            _this.error = null;
            _this.test = new InsensitiveTest('a');
        });
        it('should allow "a"', function () {
            _this.error = Joi.validate(_this.test).error;
            expect(_this.error).toBeNull();
        });
        it('should also allow "A"', function () {
            _this.test.prop = 'A';
            _this.error = Joi.validate(_this.test).error;
            expect(_this.error).toBeNull();
        });
    });
    describe('min', function () {
        beforeEach(function () {
            _this.error = null;
            _this.test = new MinTest('abcdef');
        });
        it('should allow values longer than 5 characters', function () {
            _this.error = Joi.validate(_this.test).error;
            expect(_this.error).toBeNull();
        });
        it('should enforce minumum length of 5 characters', function () {
            _this.test.prop = 'abcd';
            _this.error = Joi.validate(_this.test).error;
            expect(_this.error).not.toBeNull();
        });
    });
    describe('max', function () {
        beforeEach(function () {
            _this.error = null;
            _this.test = new MaxTest('abcd');
        });
        it('should allow values shorter than 5 characters', function () {
            _this.error = Joi.validate(_this.test).error;
            expect(_this.error).toBeNull();
        });
        it('should enforce maximum length of 5 characters', function () {
            _this.test.prop = 'abcdef';
            _this.error = Joi.validate(_this.test).error;
            expect(_this.error).not.toBeNull();
        });
    });
    describe('creditCard', function () {
        beforeEach(function () {
            _this.error = null;
            _this.test = new CreditCardTest('5105105105105100');
        });
        it('should allow valid credit card numbers', function () {
            _this.error = Joi.validate(_this.test).error;
            expect(_this.error).toBeNull();
        });
        it("should make sure value is valid credit card number", function () {
            _this.test.prop = '1235104575105100';
            _this.error = Joi.validate(_this.test).error;
            expect(_this.error).not.toBeNull();
        });
    });
    describe('length', function () {
        beforeEach(function () {
            _this.error = null;
            _this.test = new LengthTest('abcde');
        });
        it('should allow a length of 5', function () {
            _this.error = Joi.validate(_this.test).error;
            expect(_this.error).toBeNull();
        });
        it('should enforce length of 5', function () {
            _this.test.prop = 'abcd';
            _this.error = Joi.validate(_this.test).error;
            expect(_this.error).not.toBeNull();
        });
    });
    describe('alphanum', function () {
        beforeEach(function () {
            _this.error = null;
            _this.test = new AlphanumTest('abc123def456');
        });
        it('should allow alphanumeric values', function () {
            _this.error = Joi.validate(_this.test).error;
            expect(_this.error).toBeNull();
        });
        it('should only allow alphanumeric values', function () {
            _this.test.prop = 'abc123def456!';
            _this.error = Joi.validate(_this.test).error;
            expect(_this.error).not.toBeNull();
        });
    });
    describe('regex', function () {
        beforeEach(function () {
            _this.error = null;
            _this.test = new RegexTest('abcdef');
        });
        it('should allow matching values', function () {
            _this.error = Joi.validate(_this.test).error;
            expect(_this.error).toBeNull();
        });
        it('should only allow matching values', function () {
            _this.test.prop = 'ABCDEF';
            _this.error = Joi.validate(_this.test).error;
            expect(_this.error).not.toBeNull();
        });
    });
    describe('replace', function () {
        beforeEach(function () {
            _this.error = null;
            _this.test = new ReplaceTest('abBc');
        });
        it('should replace matching values', function () {
            var result = Joi.validate(_this.test);
            expect(result.error).toBeNull();
            expect(result.value.prop).toBe('axxc');
        });
    });
    describe('token', function () {
        beforeEach(function () {
            _this.error = null;
            _this.test = new TokenTest('abcDEF_0123');
        });
        it('should allow valid token', function () {
            _this.error = Joi.validate(_this.test).error;
            expect(_this.error).toBeNull();
        });
        it('should only allow valid token', function () {
            _this.test.prop += '!';
            _this.error = Joi.validate(_this.test).error;
            expect(_this.error).not.toBeNull();
        });
    });
    describe('uri', function () {
        beforeEach(function () {
            _this.error = null;
            _this.test = new UriTest('http://www.git.com');
        });
        it('should allow valid uri', function () {
            _this.error = Joi.validate(_this.test).error;
            expect(_this.error).toBeNull();
        });
        it('should only allow valid uri', function () {
            _this.test.prop = 'www.git.com';
            _this.error = Joi.validate(_this.test).error;
            expect(_this.error).not.toBeNull();
        });
    });
    describe('guid', function () {
        beforeEach(function () {
            _this.error = null;
            _this.test = new GuidTest('23030b8a-2f87-4d0a-86fa-10ef97b594ad');
        });
        it('should allow valid guid', function () {
            _this.error = Joi.validate(_this.test).error;
            expect(_this.error).toBeNull();
        });
        it('should only allow valid guid', function () {
            _this.test.prop = 'safasdf';
            _this.error = Joi.validate(_this.test).error;
            expect(_this.error).not.toBeNull();
        });
    });
    describe('hex', function () {
        beforeEach(function () {
            _this.error = null;
            _this.test = new HexTest('12AB');
        });
        it('should allow valid hex values', function () {
            _this.error = Joi.validate(_this.test).error;
            expect(_this.error).toBeNull();
        });
        it('should only allow valid hex values', function () {
            _this.test.prop = '13G3';
            _this.error = Joi.validate(_this.test).error;
            expect(_this.error).not.toBeNull();
        });
    });
    describe('hostname', function () {
        beforeEach(function () {
            _this.error = null;
            _this.test = new HostnameTest('wikipedia.org');
        });
        it('should allow valid hostnames', function () {
            _this.error = Joi.validate(_this.test).error;
            expect(_this.error).toBeNull();
        });
        it('should only allow valid hostnames', function () {
            _this.test.prop = 'wikipedia.';
            _this.error = Joi.validate(_this.test).error;
            expect(_this.error).not.toBeNull();
        });
    });
    describe('lowercase', function () {
        beforeEach(function () {
            _this.error = null;
            _this.test = new LowercaseTest('abcdefg');
        });
        it('should allow lowercase letters', function () {
            _this.error = Joi.validate(_this.test, null, { convert: false }).error;
            expect(_this.error).toBeNull();
        });
        it('should only allow lowercase letters', function () {
            _this.test.prop = 'abcdefG';
            _this.error = Joi.validate(_this.test, null, { convert: false }).error;
            expect(_this.error).not.toBeNull();
        });
    });
    describe('uppercase', function () {
        beforeEach(function () {
            _this.error = null;
            _this.test = new UppercaseTest('ABCDEF');
        });
        it('should allow uppercase letters', function () {
            _this.error = Joi.validate(_this.test, null, { convert: false }).error;
            expect(_this.error).toBeNull();
        });
        it('should only allow uppercase letters', function () {
            _this.test.prop = 'ABcDEF';
            _this.error = Joi.validate(_this.test, null, { convert: false }).error;
            expect(_this.error).not.toBeNull();
        });
    });
    describe('trim', function () {
        beforeEach(function () {
            _this.error = null;
            _this.test = new TrimTest('hello world');
        });
        it('should allow strings without whitespace', function () {
            _this.error = Joi.validate(_this.test, null, { convert: false }).error;
            expect(_this.error).toBeNull();
        });
        it('should only allow strings without whitespace', function () {
            _this.test.prop = ' hello world ';
            _this.error = Joi.validate(_this.test, null, { convert: false }).error;
            expect(_this.error).not.toBeNull();
        });
    });
    describe('isoDate', function () {
        beforeEach(function () {
            _this.error = null;
            _this.test = new IsoDateTest('2015-08-16T08:47+02:00');
        });
        it('should allow valid dates', function () {
            _this.error = Joi.validate(_this.test).error;
            expect(_this.error).toBeNull();
        });
        it('should only allow valid dates', function () {
            _this.test.prop = '2015-14-08';
            _this.error = Joi.validate(_this.test).error;
            expect(_this.error).not.toBeNull();
        });
    });
});
