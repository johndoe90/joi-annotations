///<reference path="references.ts" />

import * as Joi from 'joi';
import {annotations} from './index';


class Employee {
	@annotations.string.required()
	public firstname: string;

	@annotations.string.required()
	public lastname: string;
}

class Programmer extends Employee {

}

class Assistant extends Employee {

}

/*describe('', () => {

});*/