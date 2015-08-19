///<reference path="references.ts" />

import {Meta} from './meta';
import {params} from './util';

export function ref(key: string, options?: {separator: string, context: {}}) {
	return Meta.addMetadata({
		validatorName: 'ref',
		validatorParameters: params(key, options)
	});
}