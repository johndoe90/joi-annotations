import * as Joi from 'joi';
import {Meta} from './meta';
import {params} from './util';
import {AnyAnnotations} from './any';

export class ObjectAnnotations extends AnyAnnotations {
	public _type: string = 'object';

	public object() {
		return Meta.addMetadata({
            type: this._type
        });
	}

	public keys(schema?: {}): any {
		return Meta.addMetadata({
            priority: 2,
            type: this._type,
            validatorName: 'keys',
            validatorParameters: params(schema)
        });
	}

	public min(limit: number) {
		return Meta.addMetadata({
            type: this._type,
            validatorName: 'min',
            validatorParameters: [limit]
        });
	}

	public max(limit: number) {
		return Meta.addMetadata({
            type: this._type,
            validatorName: 'max',
            validatorParameters: [limit]
        });
	}

	public length(limit: number) {
		return Meta.addMetadata({
            type: this._type,
            validatorName: 'length',
            validatorParameters: [limit]
        });
	}

	public pattern(pattern: RegExp, name?: Joi.Schema) {
		return Meta.addMetadata({
            type: this._type,
            validatorName: 'pattern',
            validatorParameters: params(pattern, name)
        });
	}

	public and(...peers: (string|string[])[]): any {
		return Meta.addMetadata({
            type: this._type,
            validatorName: 'and',
            validatorParameters: peers
        });
	}

	public nand(...peers: (string|string[])[]) {
		return Meta.addMetadata({
            type: this._type,
            validatorName: 'nand',
            validatorParameters: peers
        });
	}

	public or(...peers: (string|string[])[]) {
		return Meta.addMetadata({
            type: this._type,
            validatorName: 'or',
            validatorParameters: peers
        });
	}

	public xor(...peers: (string|string[])[]) {
		return Meta.addMetadata({
            type: this._type,
            validatorName: 'xor',
            validatorParameters: peers
        });
	}

	public with(key: string, peers: string|string[]) {
		return Meta.addMetadata({
            type: this._type,
            validatorName: 'with',
            validatorParameters: params(key, peers)
        });
	}

	public without(key: string, peers: string|string[]) {
		return Meta.addMetadata({
            type: this._type,
            validatorName: 'without',
            validatorParameters: params(key, peers)
        });
	}

	public rename(from: string, to: string, options?: Joi.RenameOptions) {
		return Meta.addMetadata({
            type: this._type,
            validatorName: 'rename',
            validatorParameters: params(from, to, options)
        });
	}

	public assert(ref: string|Joi.Reference, schema: any, message?: string) {
		return Meta.addMetadata({
            type: this._type,
            validatorName: 'assert',
            validatorParameters: params(ref, schema, message)
        });
	}

	public unknown(allow?: boolean) {
		return Meta.addMetadata({
            type: this._type,
            validatorName: 'unknown',
            validatorParameters: params(allow)
        });
	}

	public type(constructor: Function, name?: string) {
		return Meta.addMetadata({
            type: this._type,
            validatorName: 'type',
            validatorParameters: params(constructor, name)
        });
	}

	public requiredKeys(...children: (string|string[])[]) {
		return Meta.addMetadata({
            type: this._type,
            validatorName: 'requiredKeys',
            validatorParameters: children
        });
	}

	public optionalKeys(...children: (string|string[])[]) {
		return Meta.addMetadata({
            type: this._type,
            validatorName: 'optionalKeys',
            validatorParameters: children
        });
	}

    public valid(...values: any[]) {
        if ( values.length === 1 && typeof values[0] === 'function' && Meta.hasMetadata(values[0].prototype) ) {
            return Meta.addMetadata({
                priority: 3,
                type: this._type,
                validatorName: 'resource',
                validatorParameters: [values[0].prototype]
            });
        } else {
            return super.valid(values);
        }
    }
}