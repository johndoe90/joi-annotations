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
var AnyTest = (function () {
    function AnyTest(prop) {
        this.prop = prop;
    }
    __decorate([
        index_1.annotations.any.any()
    ], AnyTest.prototype, "prop");
    return AnyTest;
})();
var ValidTest = (function () {
    function ValidTest(prop) {
        this.prop = prop;
    }
    __decorate([
        index_1.annotations.any.valid(['a', 'b', 3])
    ], ValidTest.prototype, "prop");
    return ValidTest;
})();
var OnlyTest = (function () {
    function OnlyTest(prop) {
        this.prop = prop;
    }
    __decorate([
        index_1.annotations.any.only('a', 'b', 3)
    ], OnlyTest.prototype, "prop");
    return OnlyTest;
})();
var EqualTest = (function () {
    function EqualTest(prop) {
        this.prop = prop;
    }
    __decorate([
        index_1.annotations.any.equal('a', 'b', 3)
    ], EqualTest.prototype, "prop");
    return EqualTest;
})();
var InvalidTest = (function () {
    function InvalidTest(prop) {
        this.prop = prop;
    }
    __decorate([
        index_1.annotations.any.invalid(['a', 'b', 3])
    ], InvalidTest.prototype, "prop");
    return InvalidTest;
})();
var DisallowTest = (function () {
    function DisallowTest(prop) {
        this.prop = prop;
    }
    __decorate([
        index_1.annotations.any.disallow('a', 'b', 3)
    ], DisallowTest.prototype, "prop");
    return DisallowTest;
})();
var NotTest = (function () {
    function NotTest(prop) {
        this.prop = prop;
    }
    __decorate([
        index_1.annotations.any.not('a', 'b', 3)
    ], NotTest.prototype, "prop");
    return NotTest;
})();
var RequiredTest = (function () {
    function RequiredTest(prop) {
        this.prop = prop;
    }
    __decorate([
        index_1.annotations.any.required()
    ], RequiredTest.prototype, "prop");
    return RequiredTest;
})();
var OptionalTest = (function () {
    function OptionalTest() {
    }
    __decorate([
        index_1.annotations.any.optional()
    ], OptionalTest.prototype, "prop");
    return OptionalTest;
})();
var ForbiddenTest = (function () {
    function ForbiddenTest() {
    }
    __decorate([
        index_1.annotations.any.forbidden()
    ], ForbiddenTest.prototype, "prop");
    return ForbiddenTest;
})();
var StripTest = (function () {
    function StripTest(prop) {
        this.prop = prop;
    }
    __decorate([
        index_1.annotations.any.strip()
    ], StripTest.prototype, "prop");
    return StripTest;
})();
describe('annotation', function () {
    describe('any', function () {
        beforeEach(function () {
            _this.error = null;
            _this.test = new AnyTest('');
        });
        it('should allow any type', function () {
            _this.test.prop = 'data';
            expect(Joi.validate(_this.test).error).toBeNull();
            _this.test.prop = 33;
            expect(Joi.validate(_this.test).error).toBeNull();
            _this.test.prop = [1, '3'];
            expect(Joi.validate(_this.test).error).toBeNull();
        });
    });
    describe('valid', function () {
        beforeEach(function () {
            _this.error = null;
            _this.test = new ValidTest('a');
        });
        it('should allow specified values', function () {
            _this.error = Joi.validate(_this.test).error;
            expect(_this.error).toBeNull();
        });
    });
    describe('valid', function () {
        beforeEach(function () {
            _this.error = null;
            _this.test = new ValidTest(3);
        });
        it('should allow specified values', function () {
            ['a', 'b', 3].forEach(function (value) {
                _this.test.prop = value;
                _this.error = Joi.validate(_this.test).error;
                expect(_this.error).toBeNull();
            });
        });
        it('should only allow specified values', function () {
            _this.test.prop = 4;
            _this.error = Joi.validate(_this.test).error;
            expect(_this.error).not.toBeNull();
        });
    });
    describe('equal', function () {
        beforeEach(function () {
            _this.error = null;
            _this.test = new EqualTest(3);
        });
        it('should allow specified values', function () {
            ['a', 'b', 3].forEach(function (value) {
                _this.test.prop = value;
                _this.error = Joi.validate(_this.test).error;
                expect(_this.error).toBeNull();
            });
        });
        it('should only allow specified values', function () {
            _this.test.prop = 4;
            _this.error = Joi.validate(_this.test).error;
            expect(_this.error).not.toBeNull();
        });
    });
    describe('only', function () {
        beforeEach(function () {
            _this.error = null;
            _this.test = new OnlyTest(3);
        });
        it('should allow specified values', function () {
            ['a', 'b', 3].forEach(function (value) {
                _this.test.prop = value;
                _this.error = Joi.validate(_this.test).error;
                expect(_this.error).toBeNull();
            });
        });
        it('should only allow specified values', function () {
            _this.test.prop = 4;
            _this.error = Joi.validate(_this.test).error;
            expect(_this.error).not.toBeNull();
        });
    });
    describe('invalid', function () {
        beforeEach(function () {
            _this.error = null;
            _this.test = new InvalidTest(4);
        });
        it('should allow not specified values', function () {
            _this.error = Joi.validate(_this.test).error;
            expect(_this.error).toBeNull();
        });
        it('should only allow not specified values', function () {
            _this.test.prop = 'b';
            _this.error = Joi.validate(_this.test).error;
            expect(_this.error).not.toBeNull();
        });
    });
    describe('disallow', function () {
        beforeEach(function () {
            _this.error = null;
            _this.test = new DisallowTest(4);
        });
        it('should allow not specified values', function () {
            _this.error = Joi.validate(_this.test).error;
            expect(_this.error).toBeNull();
        });
        it('should only allow not specified values', function () {
            _this.test.prop = 3;
            _this.error = Joi.validate(_this.test).error;
            expect(_this.error).not.toBeNull();
        });
    });
    describe('not', function () {
        beforeEach(function () {
            _this.error = null;
            _this.test = new NotTest(4);
        });
        it('should allow not specified values', function () {
            _this.error = Joi.validate(_this.test).error;
            expect(_this.error).toBeNull();
        });
        it('should only allow not specified values', function () {
            _this.test.prop = 'a';
            _this.error = Joi.validate(_this.test).error;
            expect(_this.error).not.toBeNull();
        });
    });
    describe('required', function () {
        beforeEach(function () {
            _this.error = null;
            _this.test = new RequiredTest(4);
        });
        it('should allow defined values', function () {
            _this.error = Joi.validate(_this.test).error;
            expect(_this.error).toBeNull();
        });
        it('should only allow defined values', function () {
            _this.test.prop = undefined;
            _this.error = Joi.validate(_this.test).error;
            expect(_this.error).not.toBeNull();
        });
    });
    describe('optional', function () {
        beforeEach(function () {
            _this.error = null;
            _this.test = new OptionalTest();
        });
        it('should allow undefined values', function () {
            _this.error = Joi.validate(_this.test, null, { presence: 'required' }).error;
            expect(_this.error).toBeNull();
        });
    });
    describe('forbidden', function () {
        beforeEach(function () {
            _this.error = null;
            _this.test = new ForbiddenTest();
        });
        it('should allow undefined values', function () {
            _this.test.prop = undefined;
            _this.error = Joi.validate(_this.test).error;
            expect(_this.error).toBeNull();
        });
        it('should only allow undefined values', function () {
            _this.test.prop = '';
            _this.error = Joi.validate(_this.test).error;
            expect(_this.error).not.toBeNull();
        });
    });
    describe('strip', function () {
        beforeEach(function () {
            _this.error = null;
            _this.test = new StripTest('value');
        });
        it('should strip values from result', function () {
            var result = Joi.validate(_this.test);
            expect(result.error).toBeNull();
            expect(result.value.prop).not.toBeDefined();
        });
    });
});
