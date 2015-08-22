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

    private static buildSchemaMap(meta: {}, prototype: {}, before: any[]): Joi.SchemaMap {
        let schemaMap: Joi.SchemaMap = {};

        let validator, propInfo;
        Object.keys(meta).forEach((propName) => {
            propInfo = meta[propName];
            validator = propInfo.type ? Joi[propInfo.type]() : Joi;

            propInfo.schema.sort((a, b) => {
                return b.priority - a.priority;
            });

            let validatorInfo;
            for ( let i = 0; i < propInfo.schema.length; i++ ) {
                validatorInfo = propInfo.schema[i];

                if ( validatorInfo.name === 'resource' ) {
                    let proto = validatorInfo.parameters[0];

                    if ( proto && before.indexOf(proto) === -1 && Meta.hasMetadata(proto) ) {
                        let loopProtection = before.slice();
                        loopProtection.push(prototype);

                        validator = SchemaBuilder.build(proto, loopProtection);
                    } else {
                        validator = Joi.any();
                        break;
                    }
                } else if ( validatorInfo.name === 'items' ) {
                    var loopProtection = before.slice();
                    loopProtection.push(prototype);

                    let types = validatorInfo.parameters.map((type) => {
                        if ( type.isJoi )
                            return type;

                        if ( type && typeof type == 'function' && Meta.hasMetadata(type.prototype) )
                            return SchemaBuilder.build(type.prototype, loopProtection);

                        return null;
                    }).filter((type) => {
                        return type;
                    });

                    validator = validator[validatorInfo.name](types);
                } else {
                    validator = validator[validatorInfo.name](...validatorInfo.parameters);
                }
            }

            schemaMap[propName] = validator;
        });

        return schemaMap;
    }

    private static applyPropertyMetadata(schemaMap: Joi.SchemaMap, prototype: {}, before: any[]): Joi.SchemaMap {
        let meta = [];

        while ( prototype ) {
            if ( Meta.hasOwnPropertyMetadata(prototype) ) {
                meta.push({
                    prototype: prototype,
                    data: Meta.getOwnPropertyMetadata(prototype)
                });
            }

            prototype = Object.getPrototypeOf(prototype);
        }

        let metadata;
        while ( meta.length ) {
            metadata = meta.pop();

            SchemaBuilder.extendSchemaMap(schemaMap, SchemaBuilder.buildSchemaMap(metadata.data, metadata.prototype, before));
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

    public static build(prototype, before: any[] = []): Joi.ObjectSchema {
        let schema: Joi.ObjectSchema;
        let schemaMap: Joi.SchemaMap = {};

        let firstMetadata = Meta.getFirstMetadata(prototype);
        let id = firstMetadata._id;

        if ( id && SchemaBuilder.schemaCache.hasOwnProperty(id) ) {
            schema = SchemaBuilder.schemaCache[id];
        } else {
            if ( Meta.hasPropertyMetadata(prototype) ) 
                schemaMap = SchemaBuilder.applyPropertyMetadata(schemaMap, prototype, before);

            schema = Joi.object().keys(schemaMap);

            if ( Meta.hasClassMetadata(prototype) ) 
               schema = SchemaBuilder.applyClassMetadata(schema, prototype);

            if ( before.length == 0 ) {
                id = uuid.v4();
                Object.defineProperty(firstMetadata, '_id', {
                    value: id
                });

                SchemaBuilder.schemaCache[id] = schema;
            }
        }

        return schema;
    }
}