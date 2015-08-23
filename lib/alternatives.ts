///<reference path="references.ts" />

import * as Joi from 'joi';
import {Meta} from './meta';
import {params} from './util';
import {AnyAnnotations} from './any';

export class AlternativesAnnotations extends AnyAnnotations {
	public _type: string = 'alternatives';

	public alt() {
		return Meta.addMetadata({
			type: this._type
		});
	}

	public alternatives() {
		return Meta.addMetadata({
			type: this._type
		});
	}

	public try(schemas: any|any[]) {
		return Meta.addMetadata({
			type: this._type,
			validatorName: 'try',
			validatorParameters: [schemas]
		});
	}

	public when(ref: string|Joi.Reference, options?: Joi.WhenOptions) {
		return Meta.addMetadata({
			type: this._type,
			validatorName: 'when',
			validatorParameters: params(ref, options)
		});
	}
}