import {Meta} from './meta';
import {params} from './util';
import {AnyAnnotations} from './any';

export interface IObjectAnnotations {

}

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

	public pattern(pattern: RegExp, name?: string) {
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

	public rename(from: string, to: string, options?: { alias?: boolean, multiple?: boolean, override?: boolean, ignoreUndefined?: boolean}) {
		return Meta.addMetadata({
            type: this._type,
            validatorName: 'rename',
            validatorParameters: params(from, to, options)
        });
	}

	public assert(key: string, schema: any, message?: string) {
		return Meta.addMetadata({
            type: this._type,
            validatorName: 'assert',
            validatorParameters: params(key, schema, message)
        });
	}

	public unknown(allow?: boolean) {
		return Meta.addMetadata({
            type: this._type,
            validatorName: 'unknown',
            validatorParameters: params(allow)
        });
	}

	public type(constructor: () => any, name?: string) {
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

    public validate(type) {
        return Meta.addMetadata({
            priority: 3,
            type: this._type,
            validatorName: 'resource',
            validatorParameters: [type.prototype]
        });
    }
}