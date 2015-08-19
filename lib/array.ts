///<reference path="references.ts" />

import {Meta} from './meta';
import {params} from './util';
import {AnyAnnotations} from './any';

export interface IArrayAnnotations {
	unique();
	min(limit: number);
	max(limit: number);
	items(...type: any[]);
	length(limit: number);
	sparse(enabled: boolean);
	single(enabled: boolean);
}

export class ArrayAnnotations extends AnyAnnotations {
	protected _type: string = 'array';

    public array() {
        return Meta.addMetadata({
            type: this._type
        });
    }

	public sparse(enabled: boolean) {
        return Meta.addMetadata({
            type: this._type,
            validatorName: 'sparse',
            validatorParameters: [enabled]
        });
    }

    public single(enabled: boolean) {
        return Meta.addMetadata({
            type: this._type,
            validatorName: 'single',
            validatorParameters: [enabled]
        });
    }

    public items(...types: any[]) {
        return Meta.addMetadata({
            type: this._type,
            validatorName: 'items',
            validatorParameters: [...types]
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

    public unique() {
        return Meta.addMetadata({
            type: this._type,
            validatorName: 'unique',
        });
    }
}