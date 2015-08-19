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
var DateTest = (function () {
    function DateTest(prop) {
        this.prop = prop;
    }
    __decorate([
        index_1.annotations.date.date()
    ], DateTest.prototype, "prop");
    return DateTest;
})();
var FormatTest = (function () {
    function FormatTest(prop) {
        this.prop = prop;
    }
    __decorate([
        index_1.annotations.date.format('YYYY/MM/DD')
    ], FormatTest.prototype, "prop");
    return FormatTest;
})();
var MinTest = (function () {
    function MinTest(prop) {
        this.prop = prop;
    }
    __decorate([
        index_1.annotations.date.min('now')
    ], MinTest.prototype, "prop");
    return MinTest;
})();
var MaxTest = (function () {
    function MaxTest(prop) {
        this.prop = prop;
    }
    __decorate([
        index_1.annotations.date.max('now')
    ], MaxTest.prototype, "prop");
    return MaxTest;
})();
var IsoTest = (function () {
    function IsoTest(prop) {
        this.prop = prop;
    }
    __decorate([
        index_1.annotations.date.iso()
    ], IsoTest.prototype, "prop");
    return IsoTest;
})();
describe('annotation', function () {
    describe('date', function () {
        beforeEach(function () {
            _this.error = null;
            _this.test = new DateTest(new Date());
        });
        it('should allow dates', function () {
            _this.error = Joi.validate(_this.test).error;
            expect(_this.error).toBeNull();
        });
        it('should only allow dates', function () {
            _this.test.prop = /fff/;
            _this.error = Joi.validate(_this.test).error;
            expect(_this.error).not.toBeNull();
        });
    });
    describe('min', function () {
        beforeEach(function () {
            var now = (new Date()).getTime();
            _this.error = null;
            _this.test = new MinTest(new Date(now + 10000));
        });
        it('should allow dates after now', function () {
            _this.error = Joi.validate(_this.test).error;
            expect(_this.error).toBeNull();
        });
        it('should only allow dates after now', function () {
            var now = (new Date()).getTime();
            _this.test.prop = new Date(now - 10000);
            _this.error = Joi.validate(_this.test).error;
            expect(_this.error).not.toBeNull();
        });
    });
    describe('max', function () {
        beforeEach(function () {
            var now = (new Date()).getTime();
            _this.error = null;
            _this.test = new MaxTest(new Date(now - 10000));
        });
        it('should allow dates before now', function () {
            _this.error = Joi.validate(_this.test).error;
            expect(_this.error).toBeNull();
        });
        it('should only allow dates before now', function () {
            var now = (new Date()).getTime();
            _this.test.prop = new Date(now + 10000);
            _this.error = Joi.validate(_this.test).error;
            expect(_this.error).not.toBeNull();
        });
    });
    describe('iso', function () {
        beforeEach(function () {
            _this.error = null;
            _this.test = new IsoTest('2009-01-01T12:00:00+01:00');
        });
        it('should allow valid ISO 8601 strings', function () {
            _this.error = Joi.validate(_this.test).error;
            expect(_this.error).toBeNull();
        });
        it('should only allow valid ISO 8601 strings', function () {
            _this.test.prop = '2009-01-0112:00:00+01:00';
            _this.error = Joi.validate(_this.test).error;
            expect(_this.error).not.toBeNull();
        });
    });
    describe('format', function () {
        beforeEach(function () {
            _this.error = null;
            _this.test = new FormatTest('2009/04/22');
        });
        it('should allow string that conforms to format', function () {
            _this.error = Joi.validate(_this.test).error;
            expect(_this.error).toBeNull();
        });
        it('should only allow string that conforms to format', function () {
            _this.test.prop = '04/22/2009';
            _this.error = Joi.validate(_this.test).error;
            expect(_this.error).not.toBeNull();
        });
    });
});
