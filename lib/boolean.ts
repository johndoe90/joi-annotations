import {Meta} from './meta';
import {AnyAnnotations} from './any';

export class BooleanAnnotations extends AnyAnnotations {
	protected _type: string = 'boolean';

	public bool() {
		return Meta.addMetadata({
            type: this._type
        });
	}

	public boolean() {
		return Meta.addMetadata({
            type: this._type
        });
	}
}