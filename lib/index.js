///<reference path="references.ts" />
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
function processArguments(args) {
    if (args[0] && typeof args[0] === 'object') {
        var prototype;
        if (args.length === 1 || !args[1]) {
            prototype = Object.getPrototypeOf(args[0]);
            if (prototype && meta_1.Meta.hasMetadata(prototype))
                args[1] = schemabuilder_1.SchemaBuilder.build(prototype);
        }
        else if (typeof args[1] === 'function' && meta_1.Meta.hasMetadata(args[1].prototype))
            args[1] = schemabuilder_1.SchemaBuilder.build(args[1].prototype);
    }
    return args;
}
var validate = Joi.validate;
Joi.validate = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i - 0] = arguments[_i];
    }
    args = processArguments(args);
    return validate.apply(void 0, args);
};
var assert = Joi.assert;
Joi.assert = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i - 0] = arguments[_i];
    }
    args = processArguments(args);
    return assert.apply(void 0, args);
};
var boolean = new boolean_1.BooleanAnnotations();
var alt = new alternatives_1.AlternativesAnnotations();
exports.annotations = {
    ref: ref_1.ref,
    alt: alt,
    bool: boolean,
    boolean: boolean,
    alternatives: alt,
    any: new any_1.AnyAnnotations(),
    func: new func_1.FuncAnnotations(),
    date: new date_1.DateAnnotations(),
    array: new array_1.ArrayAnnotations(),
    object: new object_1.ObjectAnnotations(),
    string: new string_1.StringAnnotations(),
    number: new number_1.NumberAnnotations(),
    binary: new binary_1.BinaryAnnotations(),
};
