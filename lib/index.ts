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
Joi.validate = function(...args) {
    if ( args[0] && typeof args[0] === 'object' ) {
        let prototype;

        if ( args.length === 1 || !args[1] ) {
            prototype = Object.getPrototypeOf(args[0]);

            if ( prototype && Meta.hasMetadata(prototype) ) 
                args[1] = SchemaBuilder.build(prototype);
        } else if ( typeof args[1] === 'function' && Meta.hasMetadata(args[1].prototype) )
            args[1] = SchemaBuilder.build(args[1].prototype);
    } 
    
    return validate(...args);
}

let assert = Joi.assert;
Joi.assert = function(...args) {
    if ( args[0] && typeof args[0] === 'object' ) {
        let prototype;

        if ( args.length === 1 || !args[1] ) {
            prototype = Object.getPrototypeOf(args[0]);

            if ( prototype && Meta.hasMetadata(prototype) ) 
                args[1] = SchemaBuilder.build(prototype);
        } else if ( typeof args[1] === 'function' && Meta.hasMetadata(args[1].prototype) )
            args[1] = SchemaBuilder.build(args[1].prototype);
    }

    return assert(...args);
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