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
    let prototype;
    if ( value && typeof value == 'object' && !schema )
        prototype = Object.getPrototypeOf(value);

    if ( prototype && Meta.hasMetadata(prototype) )
        schema = SchemaBuilder.build(prototype);

    let rest = [];
    if ( options ) rest.push(options);
    if ( callback ) rest.push(callback);

    return validate(value, schema, ...rest);
};

let assert = Joi.assert;
Joi.assert = function(value, schema, message) {
    let prototype;
    if ( value && typeof value == 'object' && !schema )
        prototype = Object.getPrototypeOf(value);

    if ( prototype && Meta.hasMetadata(prototype) ) 
        schema = SchemaBuilder.build(prototype);

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

class Phone {
}

class Person {
    @annotations.object.validate(Phone)
    public phone: Phone;
}

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