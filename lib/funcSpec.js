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
var FuncTest = (function () {
    function FuncTest(prop) {
        this.prop = prop;
    }
    __decorate([
        index_1.annotations.func.func()
    ], FuncTest.prototype, "prop");
    return FuncTest;
})();
describe('annotation', function () {
    describe('func', function () {
        beforeEach(function () {
            _this.error = null;
            _this.test = new FuncTest(function () { });
        });
        it('should allow functions', function () {
            _this.error = Joi.validate(_this.test).error;
            expect(_this.error).toBeNull();
        });
        it('should only allow functions', function () {
            _this.test.prop = 'abc';
            _this.error = Joi.validate(_this.test).error;
            expect(_this.error).not.toBeNull();
        });
    });
});
