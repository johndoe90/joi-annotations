///<reference path="references.ts" />

import * as Joi from 'joi';
import {Meta} from './meta';
import {AnyAnnotations} from './any';

export interface IDateAnnotations {
	iso();
	min(date: Date|string|Joi.Reference);
	max(date: Date|string|Joi.Reference);
	format(format: string|string[]);
}

export class DateAnnotations extends AnyAnnotations implements IDateAnnotations {
	protected _type: string = 'date';

	public date() {
		return Meta.addMetadata({
            type: this._type
        });
	}

	public min(date: Date|string|Joi.Reference) {
		return Meta.addMetadata({
            type: this._type,
            validatorName: 'min',
            validatorParameters: [date]
        });
	}
 
 	public max(date: Date|string|Joi.Reference) {
 		return Meta.addMetadata({
            type: this._type,
            validatorName: 'max',
            validatorParameters: [date]
        });
 	}

 	public format(format: string|string[]) {
 		return Meta.addMetadata({
            type: this._type,
            validatorName: 'format',
            validatorParameters: [format]
        });
 	}

    public iso() {
        return Meta.addMetadata({
            type: this._type,
            validatorName: 'iso'
        });
    }
}