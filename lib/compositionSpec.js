///<reference path="references.ts" />
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var Joi = require('joi');
var index_1 = require('./index');
var Resource = (function () {
    function Resource() {
    }
    __decorate([
        index_1.annotations.string.string()
    ], Resource.prototype, "propA");
    __decorate([
        index_1.annotations.string.string()
    ], Resource.prototype, "propB");
    Resource = __decorate([
        index_1.annotations.object.and('propA', 'propB')
    ], Resource);
    return Resource;
})();
var CompositionTest = (function () {
    function CompositionTest() {
    }
    __decorate([
        index_1.annotations.object.validate()
    ], CompositionTest.prototype, "resource");
    return CompositionTest;
})();
var test, error;
describe("annotation", function () {
    describe("validate", function () {
        it("should validate composed object", function () {
            test = new CompositionTest();
            test.resource = new Resource();
            test.resource.propA = 'abc';
            test.resource.propB = 'def';
            error = Joi.validate(test).error;
            expect(error).toBeNull();
            test = new CompositionTest();
            test.resource = new Resource();
            test.resource.propA = 'abc';
            error = Joi.validate(test).error;
            expect(error).not.toBeNull();
        });
    });
});
