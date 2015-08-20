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
    SchemaBuilder.buildSchemaMap = function (meta) {
        var schemaMap = {};
        var validator, propInfo;
        Object.keys(meta).forEach(function (propName) {
            propInfo = meta[propName];
            if (propInfo.type === 'resource') {
                for (var i = 0; i < propInfo.schema.length; i++) {
                    if (propInfo.schema[i].name === 'resource') {
                        validator = SchemaBuilder.build(propInfo.schema[i].parameters[0]);
                        break;
                    }
                }
            }
            else {
                validator = propInfo.type ? Joi[propInfo.type]() : Joi;
                propInfo.schema.sort(function (a, b) {
                    return b.priority - a.priority;
                });
                propInfo.schema.forEach(function (validatorInfo) {
                    validator = validator[validatorInfo.name].apply(validator, validatorInfo.parameters);
                });
            }
            schemaMap[propName] = validator;
        });
        return schemaMap;
    };
    SchemaBuilder.applyPropertyMetadata = function (schemaMap, prototype) {
        var meta = [];
        while (prototype) {
            if (meta_1.Meta.hasOwnPropertyMetadata(prototype))
                meta.push(meta_1.Meta.getOwnPropertyMetadata(prototype));
            prototype = Object.getPrototypeOf(prototype);
        }
        var metadata;
        while (meta.length) {
            metadata = meta.pop();
            SchemaBuilder.extendSchemaMap(schemaMap, SchemaBuilder.buildSchemaMap(metadata));
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
    SchemaBuilder.build = function (prototype) {
        var schema;
        var schemaMap = {};
        var firstMetadata = meta_1.Meta.getFirstMetadata(prototype);
        var id = firstMetadata ? firstMetadata._id : null;
        if (id && SchemaBuilder.schemaCache.hasOwnProperty(id)) {
            schema = SchemaBuilder.schemaCache[id];
        }
        else {
            if (meta_1.Meta.hasPropertyMetadata(prototype))
                schemaMap = SchemaBuilder.applyPropertyMetadata(schemaMap, prototype);
            schema = Joi.object().keys(schemaMap);
            if (meta_1.Meta.hasClassMetadata(prototype))
                schema = SchemaBuilder.applyClassMetadata(schema, prototype);
            id = uuid.v4();
            Object.defineProperty(firstMetadata, '_id', {
                value: id
            });
            SchemaBuilder.schemaCache[id] = schema;
        }
        return schema;
    };
    SchemaBuilder.schemaCache = {};
    return SchemaBuilder;
})();
exports.SchemaBuilder = SchemaBuilder;
