import {Meta} from './meta';
import {AnyAnnotations} from './any';
import {IAnyAnnotations} from './any';

export interface IFuncAnnotations extends IAnyAnnotations {}

export class FuncAnnotations extends AnyAnnotations implements IFuncAnnotations {
	protected _type: string = 'func';

	public func() {
		return Meta.addMetadata({
            type: this._type
        });
	}
}