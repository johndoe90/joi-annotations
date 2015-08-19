import {Meta} from './meta';
import {AnyAnnotations} from './any';
import {IAnyAnnotations} from './any';

export interface IBinaryAnnotations extends IAnyAnnotations {
	min(limit: number);
	max(limit: number);
	length(limit: number);
	encoding(encoding: string);
}

export class BinaryAnnotations extends AnyAnnotations implements IBinaryAnnotations {
	protected _type: string = 'binary';

	public binary() {
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

	public length(limit: number) {
		return Meta.addMetadata({
            type: this._type,
            validatorName: 'length',
            validatorParameters: [limit]
        });
	}

	public encoding(encoding: string) {
		return Meta.addMetadata({
            type: this._type,
            validatorName: 'encoding',
            validatorParameters: [encoding]
        });
	}
}