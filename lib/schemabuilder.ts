///<reference path="references.ts" />

var uuid = require('uuid');
import Joi = require('joi');
import {Meta} from './meta';
require('reflect-metadata');

export class SchemaBuilder {

    private static schemaCache = {};

    private static extendSchemaMap(toExtend: Joi.SchemaMap, extension: Joi.SchemaMap) {
        Object.keys(extension).forEach((key) => {
            toExtend[key] = extension[key];
        });
    }

    private static buildSchemaMap(meta): Joi.SchemaMap {
        let schemaMap: Joi.SchemaMap = {};

        let validator, propInfo;
        Object.keys(meta).forEach((propName) => {
            propInfo = meta[propName];

            if ( propInfo.type === 'resource' ) {
                for ( let i = 0; i < propInfo.schema.length; i++ ) {
                    if ( propInfo.schema[i].name === 'resource' ) {
                        validator = SchemaBuilder.build(propInfo.schema[i].parameters[0]);
                        break;
                    }
                }

                //validator = SchemaBuilder.build(obj[propName]);
            } else {
                validator = propInfo.type ? Joi[propInfo.type]() : Joi;

                propInfo.schema.sort((a, b) => {
                    return b.priority - a.priority;
                });

                propInfo.schema.forEach((validatorInfo) => {
                    validator = validator[validatorInfo.name](...validatorInfo.parameters);
                });
            }

            schemaMap[propName] = validator;
        });

        return schemaMap;
    }

    private static applyPropertyMetadata(schemaMap: Joi.SchemaMap, prototype: {}): Joi.SchemaMap {
        let meta = [];

        while ( prototype ) {
            if ( Meta.hasOwnPropertyMetadata(prototype) ) 
                meta.push(Meta.getOwnPropertyMetadata(prototype) ) 

            prototype = Object.getPrototypeOf(prototype);
        }

        let metadata;
        while ( meta.length ) {
            metadata = meta.pop();

            SchemaBuilder.extendSchemaMap(schemaMap, SchemaBuilder.buildSchemaMap(metadata));
        }

        return schemaMap;
    }

    private static applyClassMetadata(schema: Joi.ObjectSchema, prototype: {}): Joi.ObjectSchema {
        let meta = [];

        while ( prototype ) {
            if ( Meta.hasOwnClassMetadata(prototype) ) 
                meta.push(Meta.getOwnClassMetadata(prototype));

            prototype = Object.getPrototypeOf(prototype);
        }

        let metadata;
        while ( meta.length ) {
            metadata = meta.pop();

            Object.keys(metadata).forEach((key) => {
                metadata[key].forEach((cur) => {
                    schema = schema[key](...cur);
                });
            });
        }

        return schema;
    }

    public static build(prototype): Joi.ObjectSchema {
        let schema: Joi.ObjectSchema;
        let schemaMap: Joi.SchemaMap = {};

        let firstMetadata = Meta.getFirstMetadata(prototype);
        let id = firstMetadata ? firstMetadata._id : null;

        if ( id && SchemaBuilder.schemaCache.hasOwnProperty(id) ) {
            schema = SchemaBuilder.schemaCache[id];
        } else {
            if ( Meta.hasPropertyMetadata(prototype) ) 
                schemaMap = SchemaBuilder.applyPropertyMetadata(schemaMap, prototype);

            schema = Joi.object().keys(schemaMap);

            if ( Meta.hasClassMetadata(prototype) ) 
               schema = SchemaBuilder.applyClassMetadata(schema, prototype);

            id = uuid.v4();
            Object.defineProperty(firstMetadata, '_id', {
                value: id
            });

            SchemaBuilder.schemaCache[id] = schema;
        }

        return schema;
    }
}