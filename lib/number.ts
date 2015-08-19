///<reference path="references.ts" />

import {Meta} from './meta';
import {AnyAnnotations} from './any';

export interface INumberAnnotations {
	integer();
	positive();
	negative();
	min(limit: number);
	max(limit: number);
	less(limit: number);
	multiple(base: number);
	greater(limit: number);
	precision(limit: number);
}

export class NumberAnnotations extends AnyAnnotations {
	public _type: string = 'number';
    
    public number() {
        return Meta.addMetadata({
            type: this._type
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

    public greater(limit: number) {
        return Meta.addMetadata({
            type: this._type,
            validatorName: 'greater',
            validatorParameters: [limit]
        });
    }

    public less(limit: number) {
        return Meta.addMetadata({
            type: this._type,
            validatorName: 'less',
            validatorParameters: [limit]
        });
    }

    public integer() {
        return Meta.addMetadata({
            type: this._type,
            validatorName: 'integer'
        });
    }

    public precision(limit: number) {
        return Meta.addMetadata({
            type: this._type,
            validatorName: 'precision',
            validatorParameters: [limit]
        });
    }

    public multiple(base: number) {
        return Meta.addMetadata({
            type: this._type,
            validatorName: 'multiple',
            validatorParameters: [base]
        });
    }

    public positive() {
        return Meta.addMetadata({
            type: this._type,
            validatorName: 'positive'
        });
    }

    public negative() {
        return Meta.addMetadata({
            type: this._type,
            validatorName: 'negative'
        });
    }
}