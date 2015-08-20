///<reference path="references.ts" />

var uuid = require('uuid');
require('reflect-metadata');

interface Metadata {
    _id: string;
}

interface PropertyMetadata extends Metadata {
    _type: string;
}

interface ClassMetadata extends Metadata {}

export class Meta {
    private static METADATA = 'joi-metadata';

    public static hasMetadata(obj): boolean {
        return Meta.hasClassMetadata(obj) || Meta.hasPropertyMetadata(obj);
    }

    public static hasPropertyMetadata(prototype): boolean {
        while ( prototype ) {
            if ( Reflect.hasOwnMetadata(Meta.METADATA, prototype) )
                return true;

            prototype = Object.getPrototypeOf(prototype);
        }

        return false;
    }

    public static hasOwnPropertyMetadata(obj): boolean {
        return obj && Reflect.hasOwnMetadata(Meta.METADATA, obj);
    }

    public static getOwnPropertyMetadata(obj): PropertyMetadata {
        return Reflect.getOwnMetadata(Meta.METADATA, obj);
    }

    public static hasClassMetadata(prototype): boolean {
        let constructor = prototype ? prototype.constructor : null;
        while ( prototype && constructor ) {
            if ( Reflect.hasOwnMetadata(Meta.METADATA, constructor) )
                return true;

            prototype = Object.getPrototypeOf(prototype);
            constructor = prototype ? prototype.constructor : null;
        }

        return false;
    }

    public static hasOwnClassMetadata(obj): boolean {
        let constructor = obj.hasOwnProperty('constructor') ? obj.constructor : null;

        return constructor && Reflect.hasOwnMetadata(Meta.METADATA, constructor);
    }

    public static getOwnClassMetadata(obj): ClassMetadata {
        let constructor = obj.constructor;
        return Reflect.getOwnMetadata(Meta.METADATA, constructor);
    }

    public static getFirstMetadata(prototype: {}): Metadata {
        while ( prototype ) {
            if ( Meta.hasOwnPropertyMetadata(prototype) )
                return Meta.getOwnPropertyMetadata(prototype);

            if ( Meta.hasOwnClassMetadata(prototype) ) 
                return Meta.getOwnClassMetadata(prototype);

            prototype = Object.getPrototypeOf(prototype);
        }
    }

    private static getOrCreateMetadata(metaKey: string, target: any) {
        let metadata = {};
        if ( !Reflect.hasOwnMetadata(metaKey, target) )
            Reflect.defineMetadata(metaKey, metadata, target);
        else 
            metadata = Reflect.getOwnMetadata(metaKey, target);

        return metadata;
    }

    private static addPropertyMetadata(target: {}, property: string, type: string, priority: number, validatorName: string, validatorParameters: any[]) {
        //check if the target already has metadata, if not create it
        let metadata = Meta.getOrCreateMetadata(Meta.METADATA, target);

        // make sure that the target metadata has an entry for the current property
        if ( !metadata.hasOwnProperty(property) ) 
            metadata[property] = { schema: [] };
        
        // add the actual metadata info which is processed later on
        metadata[property].type = type;

        if ( priority && validatorName ) {
            metadata[property].schema.push({
                priority: priority,
                name: validatorName,
                parameters: validatorParameters
            });
        }
    }

    private static addClassMetadata(target: {}, validatorName: string, validatorParameters: any[]) {
        let metadata = Meta.getOrCreateMetadata(Meta.METADATA, target);

        if ( !metadata.hasOwnProperty(validatorName) ) 
            metadata[validatorName] = [];

        metadata[validatorName].push(validatorParameters);
    }

    public static addMetadata(options: {type?: string, priority?: number, validatorName?: string, validatorParameters?: any[]}) {
        options.priority = options.priority || 1;
        options.validatorParameters = options.validatorParameters || [];

        return function(target, property) {
            if ( typeof target == 'object' )
                Meta.addPropertyMetadata(target, property, options.type, options.priority, options.validatorName, options.validatorParameters);
            else if ( typeof target == 'function' ) 
                Meta.addClassMetadata(target, options.validatorName, options.validatorParameters);
        }
    }
}