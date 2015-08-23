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
var Engine = (function () {
    function Engine() {
    }
    __decorate([
        index_1.annotations.string.string()
    ], Engine.prototype, "type");
    __decorate([
        index_1.annotations.number.number()
    ], Engine.prototype, "serialNumber");
    Engine = __decorate([
        index_1.annotations.object.and('type', 'serialNumber')
    ], Engine);
    return Engine;
})();
var Car = (function () {
    function Car() {
    }
    __decorate([
        index_1.annotations.object.required(),
        index_1.annotations.object.validate(Engine)
    ], Car.prototype, "engine");
    return Car;
})();
describe('car', function () {
    beforeEach(function () {
        var engine = new Engine();
        engine.type = 'boxer';
        engine.serialNumber = 1234;
        var car = new Car();
        car.engine = engine;
        _this.error = null;
        _this.test = car;
    });
    it('should be valid', function () {
        _this.error = Joi.validate(_this.test).error;
        expect(_this.error).toBeNull();
    });
    it('should not be valid (serialnumber missing)', function () {
        delete _this.test.engine.serialNumber;
        _this.error = Joi.validate(_this.test).error;
        expect(_this.error).not.toBeNull();
    });
    it('should not be valid (serialnumber is of wrong type)', function () {
        _this.test.engine.serialNumber = 'A341';
        _this.error = Joi.validate(_this.test).error;
        expect(_this.error).not.toBeNull();
    });
    it('should not be valid (engine is missing)', function () {
        delete _this.test.engine;
        _this.error = Joi.validate(_this.test).error;
        expect(_this.error).not.toBeNull();
    });
});
