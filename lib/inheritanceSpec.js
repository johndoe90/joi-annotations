///<reference path="references.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var index_1 = require('./index');
var Employee = (function () {
    function Employee() {
    }
    __decorate([
        index_1.annotations.string.required()
    ], Employee.prototype, "firstname");
    __decorate([
        index_1.annotations.string.required()
    ], Employee.prototype, "lastname");
    return Employee;
})();
var Programmer = (function (_super) {
    __extends(Programmer, _super);
    function Programmer() {
        _super.apply(this, arguments);
    }
    return Programmer;
})(Employee);
var Assistant = (function (_super) {
    __extends(Assistant, _super);
    function Assistant() {
        _super.apply(this, arguments);
    }
    return Assistant;
})(Employee);
/*describe('', () => {

});*/ 
