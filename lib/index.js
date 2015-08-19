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
var validate = Joi.validate;
Joi.validate = function (value, schema, options, callback) {
    if (typeof value == 'object' && !schema && meta_1.Meta.hasMetadata(value))
        schema = schemabuilder_1.SchemaBuilder.build(value);
    var rest = [];
    if (options)
        rest.push(options);
    if (callback)
        rest.push(callback);
    return validate.apply(void 0, [value, schema].concat(rest));
};
var assert = Joi.assert;
Joi.assert = function (value, schema, message) {
    if (typeof value == 'object' && !schema && meta_1.Meta.hasMetadata(value))
        schema = schemabuilder_1.SchemaBuilder.build(value);
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
