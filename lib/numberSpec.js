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
var NumberTest = (function () {
    function NumberTest(prop) {
        this.prop = prop;
    }
    __decorate([
        index_1.annotations.number.number()
    ], NumberTest.prototype, "prop");
    return NumberTest;
})();
var MinTest = (function () {
    function MinTest(prop) {
        this.prop = prop;
    }
    __decorate([
        index_1.annotations.number.min(5)
    ], MinTest.prototype, "prop");
    return MinTest;
})();
var MaxTest = (function () {
    function MaxTest(prop) {
        this.prop = prop;
    }
    __decorate([
        index_1.annotations.number.max(5)
    ], MaxTest.prototype, "prop");
    return MaxTest;
})();
var GreaterTest = (function () {
    function GreaterTest(prop) {
        this.prop = prop;
    }
    __decorate([
        index_1.annotations.number.greater(5)
    ], GreaterTest.prototype, "prop");
    return GreaterTest;
})();
var LessTest = (function () {
    function LessTest(prop) {
        this.prop = prop;
    }
    __decorate([
        index_1.annotations.number.less(5)
    ], LessTest.prototype, "prop");
    return LessTest;
})();
var IntegerTest = (function () {
    function IntegerTest(prop) {
        this.prop = prop;
    }
    __decorate([
        index_1.annotations.number.integer()
    ], IntegerTest.prototype, "prop");
    return IntegerTest;
})();
var PrecisionTest = (function () {
    function PrecisionTest(prop) {
        this.prop = prop;
    }
    __decorate([
        index_1.annotations.number.precision(2)
    ], PrecisionTest.prototype, "prop");
    return PrecisionTest;
})();
var MultipleTest = (function () {
    function MultipleTest(prop) {
        this.prop = prop;
    }
    __decorate([
        index_1.annotations.number.multiple(5)
    ], MultipleTest.prototype, "prop");
    return MultipleTest;
})();
var PositiveTest = (function () {
    function PositiveTest(prop) {
        this.prop = prop;
    }
    __decorate([
        index_1.annotations.number.positive()
    ], PositiveTest.prototype, "prop");
    return PositiveTest;
})();
var NegativeTest = (function () {
    function NegativeTest(prop) {
        this.prop = prop;
    }
    __decorate([
        index_1.annotations.number.negative()
    ], NegativeTest.prototype, "prop");
    return NegativeTest;
})();
describe('annotation', function () {
    describe('number', function () {
        beforeEach(function () {
            _this.error = null;
            _this.test = new NumberTest(5);
        });
        it('should allow numbers', function () {
            _this.error = Joi.validate(_this.test).error;
            expect(_this.error).toBeNull();
        });
        it('should only allow numbers', function () {
            _this.test.prop = 'abc';
            _this.error = Joi.validate(_this.test).error;
            expect(_this.error).not.toBeNull();
        });
    });
    describe('min', function () {
        beforeEach(function () {
            _this.error = null;
            _this.test = new MinTest(5);
        });
        it('should allow values greater or equal to 5', function () {
            _this.error = Joi.validate(_this.test).error;
            expect(_this.error).toBeNull();
        });
        it('should only allow values greater or equal to 5', function () {
            _this.test.prop = 4;
            _this.error = Joi.validate(_this.test).error;
            expect(_this.error).not.toBeNull();
        });
    });
    describe('max', function () {
        beforeEach(function () {
            _this.error = null;
            _this.test = new MaxTest(5);
        });
        it('should allow values less or equal to 5', function () {
            _this.error = Joi.validate(_this.test).error;
            expect(_this.error).toBeNull();
        });
        it('should only allow values less or equal to 5', function () {
            _this.test.prop = 6;
            _this.error = Joi.validate(_this.test).error;
            expect(_this.error).not.toBeNull();
        });
    });
    describe('greater', function () {
        beforeEach(function () {
            _this.error = null;
            _this.test = new GreaterTest(6);
        });
        it('should allow values greater than 5', function () {
            _this.error = Joi.validate(_this.test).error;
            expect(_this.error).toBeNull();
        });
        it('should only allow values greater than 5', function () {
            _this.test.prop = 5;
            _this.error = Joi.validate(_this.test).error;
            expect(_this.error).not.toBeNull();
        });
    });
    describe('less', function () {
        beforeEach(function () {
            _this.error = null;
            _this.test = new LessTest(4);
        });
        it('should allow values less than 5', function () {
            _this.error = Joi.validate(_this.test).error;
            expect(_this.error).toBeNull();
        });
        it('should only allow values less than 5', function () {
            _this.test.prop = 5;
            _this.error = Joi.validate(_this.test).error;
            expect(_this.error).not.toBeNull();
        });
    });
    describe('integer', function () {
        beforeEach(function () {
            _this.error = null;
            _this.test = new IntegerTest(4);
        });
        it('should allow integer values', function () {
            _this.error = Joi.validate(_this.test).error;
            expect(_this.error).toBeNull();
        });
        it('should only allow integer values', function () {
            _this.test.prop = 4.1;
            _this.error = Joi.validate(_this.test).error;
            expect(_this.error).not.toBeNull();
        });
    });
    describe('multiple', function () {
        beforeEach(function () {
            _this.error = null;
            _this.test = new MultipleTest(455);
        });
        it('should allow multiples of 5', function () {
            _this.error = Joi.validate(_this.test).error;
            expect(_this.error).toBeNull();
        });
        it('should only allow multiples of 5', function () {
            _this.test.prop = 456;
            _this.error = Joi.validate(_this.test).error;
            expect(_this.error).not.toBeNull();
        });
    });
    describe('precision', function () {
        beforeEach(function () {
            _this.error = null;
            _this.test = new PrecisionTest(455.63);
        });
        it('should allow values with a precision of 2 or less', function () {
            _this.error = Joi.validate(_this.test).error;
            expect(_this.error).toBeNull();
        });
        it('should only allow values with a precision of 2 or less', function () {
            _this.test.prop = 455.633;
            _this.error = Joi.validate(_this.test, null, { convert: false }).error;
            expect(_this.error).not.toBeNull();
        });
    });
    describe('positive', function () {
        beforeEach(function () {
            _this.error = null;
            _this.test = new PositiveTest(1);
        });
        it('should allow positive values', function () {
            _this.error = Joi.validate(_this.test).error;
            expect(_this.error).toBeNull();
        });
        it('should only allow positive values', function () {
            _this.test.prop = -1;
            _this.error = Joi.validate(_this.test, null, { convert: false }).error;
            expect(_this.error).not.toBeNull();
        });
    });
    describe('negative', function () {
        beforeEach(function () {
            _this.error = null;
            _this.test = new NegativeTest(-1);
        });
        it('should allow negative values', function () {
            _this.error = Joi.validate(_this.test).error;
            expect(_this.error).toBeNull();
        });
        it('should only allow negative values', function () {
            _this.test.prop = 1;
            _this.error = Joi.validate(_this.test, null, { convert: false }).error;
            expect(_this.error).not.toBeNull();
        });
    });
});
