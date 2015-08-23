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

function processArguments(args) {
    if ( args[0] && typeof args[0] === 'object' ) {
        let prototype;

        if ( args.length === 1 || !args[1] ) {
            prototype = Object.getPrototypeOf(args[0]);

            if ( prototype && Meta.hasMetadata(prototype) ) 
                args[1] = SchemaBuilder.build(prototype);
        } else if ( typeof args[1] === 'function' && Meta.hasMetadata(args[1].prototype) )
            args[1] = SchemaBuilder.build(args[1].prototype);
    }

    return args;
}

let validate = Joi.validate;
Joi.validate = function(...args) {
    args = processArguments(args);
    
    return validate(...args);
}

let assert = Joi.assert;
Joi.assert = function(...args) {
    args = processArguments(args);

    return assert(...args);
};

let boolean = new BooleanAnnotations();
let alt = new AlternativesAnnotations();

export var annotations = {
    ref: ref,
    alt: alt,
    bool: boolean,
    boolean: boolean,
    alternatives: alt,
    any: new AnyAnnotations(),
    func: new FuncAnnotations(),
    date: new DateAnnotations(),
    array: new ArrayAnnotations(),
    object: new ObjectAnnotations(),
    string: new StringAnnotations(),
    number: new NumberAnnotations(),
    binary: new BinaryAnnotations(),
};