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
var ref_1 = require('./ref');
var meta_1 = require('./meta');
var any_1 = require('./any');
var date_1 = require('./date');
var func_1 = require('./func');
var array_1 = require('./array');
var object_1 = require('./object');
var string_1 = require('./string');
var number_1 = require('./number');
var binary_1 = require('./binary');
var boolean_1 = require('./boolean');
var schemabuilder_1 = require('./schemabuilder');
var alternatives_1 = require('./alternatives');
var validate = Joi.validate;
Joi.validate = function (value, schema, options, callback) {
    var prototype;
    if (value && typeof value == 'object' && !schema)
        prototype = Object.getPrototypeOf(value);
    if (prototype && meta_1.Meta.hasMetadata(prototype))
        schema = schemabuilder_1.SchemaBuilder.build(prototype);
    var rest = [];
    if (options)
        rest.push(options);
    if (callback)
        rest.push(callback);
    return validate.apply(void 0, [value, schema].concat(rest));
};
var assert = Joi.assert;
Joi.assert = function (value, schema, message) {
    var prototype;
    if (value && typeof value == 'object' && !schema)
        prototype = Object.getPrototypeOf(value);
    if (prototype && meta_1.Meta.hasMetadata(prototype))
        schema = schemabuilder_1.SchemaBuilder.build(prototype);
    var rest = [];
    if (message)
        rest.push(message);
    return assert.apply(void 0, [value, schema].concat(rest));
};
var any = new any_1.AnyAnnotations(), date = new date_1.DateAnnotations(), func = new func_1.FuncAnnotations(), array = new array_1.ArrayAnnotations(), object = new object_1.ObjectAnnotations(), string = new string_1.StringAnnotations(), number = new number_1.NumberAnnotations(), binary = new binary_1.BinaryAnnotations(), boolean = new boolean_1.BooleanAnnotations(), alternatives = new alternatives_1.AlternativesAnnotations();
exports.annotations = {
    ref: ref_1.ref,
    any: any,
    func: func,
    date: date,
    array: array,
    bool: boolean,
    object: object,
    string: string,
    number: number,
    binary: binary,
    boolean: boolean,
    alt: alternatives,
    alternatives: alternatives
};
var Phone = (function () {
    function Phone() {
    }
    return Phone;
})();
var Person = (function () {
    function Person() {
    }
    __decorate([
        exports.annotations.object.validate(Phone)
    ], Person.prototype, "phone");
    return Person;
})();
var phone = new Phone();
var person = new Person();
person.phone = phone;
console.log(Joi.validate(person));
/*class Test {
    public test: string;
}

class Node {
    @annotations.string.required()
    public name: string;

    // schema has isJoi, test if i can use it

    //need to make something like this
    //@annotation.object.resource(Test)
    //only pass prototype to schemaBuilder.build because I only need the prototype
    @annotations.object.validate()
    public next: Test;
}



let node1 = new Node();
node1.name = 'node1';
//node1.next = new Test();

console.log(Joi.validate(node1));*/ 
