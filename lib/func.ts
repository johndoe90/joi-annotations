import {Meta} from './meta';
import {AnyAnnotations} from './any';

export class FuncAnnotations extends AnyAnnotations {
	protected _type: string = 'func';

	public func() {
		return Meta.addMetadata({
            type: this._type
        });
	}
}