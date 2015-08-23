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
var _this = this;
var Joi = require('joi');
var index_1 = require('./index');
var Address = (function () {
    function Address() {
    }
    __decorate([
        index_1.annotations.string.string()
    ], Address.prototype, "streetname");
    __decorate([
        index_1.annotations.number.number()
    ], Address.prototype, "streetnumber");
    Address = __decorate([
        index_1.annotations.object.and('streetname', 'streetnumber')
    ], Address);
    return Address;
})();
var Person = (function () {
    function Person() {
    }
    __decorate([
        index_1.annotations.string.string()
    ], Person.prototype, "firstname");
    __decorate([
        index_1.annotations.string.string()
    ], Person.prototype, "lastname");
    __decorate([
        index_1.annotations.object.required(),
        index_1.annotations.object.validate(Address)
    ], Person.prototype, "address");
    Person = __decorate([
        index_1.annotations.object.and('firstname', 'lastname')
    ], Person);
    return Person;
})();
var Employee = (function (_super) {
    __extends(Employee, _super);
    function Employee() {
        _super.apply(this, arguments);
    }
    __decorate([
        index_1.annotations.string.valid('Programmer', 'Assistant')
    ], Employee.prototype, "job");
    return Employee;
})(Person);
describe('employee', function () {
    beforeEach(function () {
        var address = new Address();
        address.streetname = '2nd Street';
        address.streetnumber = 123;
        var employee = new Employee();
        employee.firstname = 'Thomas';
        employee.lastname = 'Cook';
        employee.job = 'Assistant';
        employee.address = address;
        _this.error = null;
        _this.test = employee;
    });
    it('should be valid', function () {
        _this.error = Joi.validate(_this.test).error;
        expect(_this.error).toBeNull();
    });
    it('should not be valid (invalid address)', function () {
        delete _this.test.address.streetname;
        _this.error = Joi.validate(_this.test).error;
        expect(_this.error).not.toBeNull();
    });
    it('should not be valid (lastname missing)', function () {
        delete _this.test.lastname;
        _this.error = Joi.validate(_this.test).error;
        expect(_this.error).not.toBeNull();
    });
    it('should not be valid (lastname is of wrong type)', function () {
        _this.test.lastname = 234;
        _this.error = Joi.validate(_this.test).error;
        expect(_this.error).not.toBeNull();
    });
    it('should not be valid (invalid job)', function () {
        _this.test.job = 'Plumber';
        _this.error = Joi.validate(_this.test).error;
        expect(_this.error).not.toBeNull();
    });
});
