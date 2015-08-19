import {Meta} from './meta';
import {AnyAnnotations} from './any';
import {IAnyAnnotations} from './any';

export interface IBooleanAnnotations extends IAnyAnnotations {}

export class BooleanAnnotations extends AnyAnnotations implements IBooleanAnnotations {
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