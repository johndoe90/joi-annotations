///<reference path="references.ts" />

let Joi = require('joi');
import {ref} from './ref';
import {Meta} from './meta';
import {AnyAnnotations} from './any';
import {DateAnnotations} from './date';
import {FuncAnnotations} from './func';
import {ArrayAnnotations} from './array';
import {ObjectAnnotations} from './object';
import {StringAnnotations} from './string';
import {NumberAnnotations} from './number';
import {BinaryAnnotations} from './binary';
import {BooleanAnnotations} from './boolean';
import {SchemaBuilder} from './schemabuilder';
import {AlternativesAnnotations} from './alternatives';

let validate = Joi.validate;
Joi.validate = function(value, schema, options, callback) {
    if ( typeof value == 'object' && !schema && Meta.hasMetadata(value) )
        schema = SchemaBuilder.build(value);

    let rest = [];
    if ( options ) rest.push(options);
    if ( callback ) rest.push(callback);

    return validate(value, schema, ...rest);
};

let assert = Joi.assert;
Joi.assert = function(value, schema, message) {
    if ( typeof value == 'object' && !schema && Meta.hasMetadata(value) ) 
        schema = SchemaBuilder.build(value);

    let rest = [];
    if ( message ) rest.push(message);

    return assert(value, schema, ...rest);
};

let any = new AnyAnnotations(),
    date = new DateAnnotations(),
    func = new FuncAnnotations(),
    array = new ArrayAnnotations(),
    object = new ObjectAnnotations(),
    string = new StringAnnotations(),
    number = new NumberAnnotations(),
    binary = new BinaryAnnotations(),
    boolean = new BooleanAnnotations(),
    alternatives = new AlternativesAnnotations();

export var annotations = {
    ref: ref,
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