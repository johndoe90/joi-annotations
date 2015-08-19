///<reference path="references.ts" />

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

	public when(ref: string|any, options?: {is: any, then: any, otherwise: any}) {
		return Meta.addMetadata({
			type: this._type,
			validatorName: 'when',
			validatorParameters: params(ref, options)
		});
	}
}