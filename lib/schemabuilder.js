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
    SchemaBuilder.buildSchemaMap = function (obj, meta) {
        var schemaMap = {};
        var validator, propInfo;
        Object.keys(meta).forEach(function (propName) {
            propInfo = meta[propName];
            if (propInfo.type === 'subresource') {
                validator = SchemaBuilder.build(obj[propName]);
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
    SchemaBuilder.applyPropertyMetadata = function (schemaMap, obj) {
        var meta = [];
        var prototype = Object.getPrototypeOf(obj);
        while (prototype) {
            if (meta_1.Meta.hasOwnPropertyMetadata(prototype))
                meta.push(meta_1.Meta.getOwnPropertyMetadata(prototype));
            prototype = Object.getPrototypeOf(prototype);
        }
        var metadata;
        while (meta.length) {
            metadata = meta.pop();
            SchemaBuilder.extendSchemaMap(schemaMap, SchemaBuilder.buildSchemaMap(obj, metadata));
        }
        return schemaMap;
    };
    SchemaBuilder.applyClassMetadata = function (schema, obj) {
        var meta = [];
        var prototype = Object.getPrototypeOf(obj);
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
    SchemaBuilder.build = function (obj) {
        var schema;
        var schemaMap = {};
        var firstMetadata = meta_1.Meta.getFirstMetadata(obj);
        var id = firstMetadata._id;
        if (id && SchemaBuilder.schemaCache.hasOwnProperty(id)) {
            schema = SchemaBuilder.schemaCache[id];
        }
        else {
            if (meta_1.Meta.hasPropertyMetadata(obj))
                schemaMap = SchemaBuilder.applyPropertyMetadata(schemaMap, obj);
            schema = Joi.object().keys(schemaMap);
            if (meta_1.Meta.hasClassMetadata(obj))
                schema = SchemaBuilder.applyClassMetadata(schema, obj);
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
