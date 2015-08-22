///<reference path="references.ts" />
var uuid = require('uuid');
var Joi = require('joi');
var meta_1 = require('./meta');
require('reflect-metadata');
var SchemaBuilder = (function () {
    function SchemaBuilder() {
    }
    SchemaBuilder.extendSchemaMap = function (toExtend, extension) {
        Object.keys(extension).forEach(function (key) {
            toExtend[key] = extension[key];
        });
    };
    SchemaBuilder.buildSchemaMap = function (meta, prototype, before) {
        var schemaMap = {};
        var validator, propInfo;
        Object.keys(meta).forEach(function (propName) {
            propInfo = meta[propName];
            validator = propInfo.type ? Joi[propInfo.type]() : Joi;
            propInfo.schema.sort(function (a, b) {
                return b.priority - a.priority;
            });
            var validatorInfo;
            for (var i = 0; i < propInfo.schema.length; i++) {
                validatorInfo = propInfo.schema[i];
                if (validatorInfo.name === 'resource') {
                    var proto = validatorInfo.parameters[0];
                    if (proto && before.indexOf(proto) === -1 && meta_1.Meta.hasMetadata(proto)) {
                        var loopProtection_1 = before.slice();
                        loopProtection_1.push(prototype);
                        validator = SchemaBuilder.build(proto, loopProtection_1);
                    }
                    else {
                        validator = Joi.any();
                        break;
                    }
                }
                else if (validatorInfo.name === 'items') {
                    var loopProtection = before.slice();
                    loopProtection.push(prototype);
                    var types = validatorInfo.parameters.map(function (type) {
                        if (type.isJoi)
                            return type;
                        if (type && typeof type == 'function' && meta_1.Meta.hasMetadata(type.prototype))
                            return SchemaBuilder.build(type.prototype, loopProtection);
                        return null;
                    }).filter(function (type) {
                        return type;
                    });
                    validator = validator[validatorInfo.name](types);
                }
                else {
                    validator = validator[validatorInfo.name].apply(validator, validatorInfo.parameters);
                }
            }
            schemaMap[propName] = validator;
        });
        return schemaMap;
    };
    SchemaBuilder.applyPropertyMetadata = function (schemaMap, prototype, before) {
        var meta = [];
        while (prototype) {
            if (meta_1.Meta.hasOwnPropertyMetadata(prototype)) {
                meta.push({
                    prototype: prototype,
                    data: meta_1.Meta.getOwnPropertyMetadata(prototype)
                });
            }
            prototype = Object.getPrototypeOf(prototype);
        }
        var metadata;
        while (meta.length) {
            metadata = meta.pop();
            SchemaBuilder.extendSchemaMap(schemaMap, SchemaBuilder.buildSchemaMap(metadata.data, metadata.prototype, before));
        }
        return schemaMap;
    };
    SchemaBuilder.applyClassMetadata = function (schema, prototype) {
        var meta = [];
        while (prototype) {
            if (meta_1.Meta.hasOwnClassMetadata(prototype))
                meta.push(meta_1.Meta.getOwnClassMetadata(prototype));
            prototype = Object.getPrototypeOf(prototype);
        }
        var metadata;
        while (meta.length) {
            metadata = meta.pop();
            Object.keys(metadata).forEach(function (key) {
                metadata[key].forEach(function (cur) {
                    schema = schema[key].apply(schema, cur);
                });
            });
        }
        return schema;
    };
    SchemaBuilder.build = function (prototype, before) {
        if (before === void 0) { before = []; }
        var schema;
        var schemaMap = {};
        var firstMetadata = meta_1.Meta.getFirstMetadata(prototype);
        var id = firstMetadata._id;
        if (id && SchemaBuilder.schemaCache.hasOwnProperty(id)) {
            schema = SchemaBuilder.schemaCache[id];
        }
        else {
            if (meta_1.Meta.hasPropertyMetadata(prototype))
                schemaMap = SchemaBuilder.applyPropertyMetadata(schemaMap, prototype, before);
            schema = Joi.object().keys(schemaMap);
            if (meta_1.Meta.hasClassMetadata(prototype))
                schema = SchemaBuilder.applyClassMetadata(schema, prototype);
            if (before.length == 0) {
                id = uuid.v4();
                Object.defineProperty(firstMetadata, '_id', {
                    value: id
                });
                SchemaBuilder.schemaCache[id] = schema;
            }
        }
        return schema;
    };
    SchemaBuilder.schemaCache = {};
    return SchemaBuilder;
})();
exports.SchemaBuilder = SchemaBuilder;
