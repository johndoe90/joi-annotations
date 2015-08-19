///<reference path="references.ts" />
var uuid = require('uuid');
require('reflect-metadata');
var Meta = (function () {
    function Meta() {
    }
    Meta.hasMetadata = function (obj) {
        return Meta.hasClassMetadata(obj) || Meta.hasPropertyMetadata(obj);
    };
    Meta.hasPropertyMetadata = function (obj) {
        var prototype = Object.getPrototypeOf(obj);
        while (prototype) {
            if (Reflect.hasOwnMetadata(Meta.METADATA, prototype))
                return true;
            prototype = Object.getPrototypeOf(prototype);
        }
        return false;
    };
    Meta.hasOwnPropertyMetadata = function (obj) {
        return obj && Reflect.hasOwnMetadata(Meta.METADATA, obj);
    };
    Meta.getOwnPropertyMetadata = function (obj) {
        return Reflect.getOwnMetadata(Meta.METADATA, obj);
    };
    Meta.hasClassMetadata = function (obj) {
        var prototype = Object.getPrototypeOf(obj);
        var constructor = prototype ? prototype.constructor : null;
        while (prototype && constructor) {
            if (Reflect.hasOwnMetadata(Meta.METADATA, constructor))
                return true;
            prototype = Object.getPrototypeOf(prototype);
            constructor = prototype ? prototype.constructor : null;
        }
        return false;
    };
    Meta.hasOwnClassMetadata = function (obj) {
        var constructor = obj.hasOwnProperty('constructor') ? obj.constructor : null;
        return constructor && Reflect.hasOwnMetadata(Meta.METADATA, constructor);
    };
    Meta.getOwnClassMetadata = function (obj) {
        var constructor = obj.constructor;
        return Reflect.getOwnMetadata(Meta.METADATA, constructor);
    };
    Meta.getFirstMetadata = function (obj) {
        var prototype = Object.getPrototypeOf(obj);
        while (prototype) {
            if (Meta.hasOwnPropertyMetadata(prototype))
                return Meta.getOwnPropertyMetadata(prototype);
            if (Meta.hasOwnClassMetadata(prototype))
                return Meta.getOwnClassMetadata(prototype);
            prototype = Object.getPrototypeOf(prototype);
        }
    };
    Meta.getOrCreateMetadata = function (metaKey, target) {
        var metadata = {};
        if (!Reflect.hasOwnMetadata(metaKey, target))
            Reflect.defineMetadata(metaKey, metadata, target);
        else
            metadata = Reflect.getOwnMetadata(metaKey, target);
        return metadata;
    };
    Meta.addPropertyMetadata = function (target, property, type, priority, validatorName, validatorParameters) {
        //check if the target already has metadata, if not create it
        var metadata = Meta.getOrCreateMetadata(Meta.METADATA, target);
        // make sure that the target metadata has an entry for the current property
        if (!metadata.hasOwnProperty(property))
            metadata[property] = { schema: [] };
        // add the actual metadata info which is processed later on
        metadata[property].type = type;
        if (priority && validatorName) {
            metadata[property].schema.push({
                priority: priority,
                name: validatorName,
                parameters: validatorParameters
            });
        }
    };
    Meta.addClassMetadata = function (target, validatorName, validatorParameters) {
        var metadata = Meta.getOrCreateMetadata(Meta.METADATA, target);
        if (!metadata.hasOwnProperty(validatorName))
            metadata[validatorName] = [];
        metadata[validatorName].push(validatorParameters);
    };
    Meta.addMetadata = function (options) {
        options.priority = options.priority || 1;
        options.validatorParameters = options.validatorParameters || [];
        return function (target, property) {
            if (typeof target == 'object')
                Meta.addPropertyMetadata(target, property, options.type, options.priority, options.validatorName, options.validatorParameters);
            else if (typeof target == 'function')
                Meta.addClassMetadata(target, options.validatorName, options.validatorParameters);
        };
    };
    Meta.METADATA = 'joi-metadata';
    return Meta;
})();
exports.Meta = Meta;
