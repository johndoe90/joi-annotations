///<reference path="references.ts" />

import * as Joi from 'joi';
import {annotations} from './index';

@annotations.object.and('streetname', 'streetnumber')
class Address {
	@annotations.string.string()
	public streetname: string;

	@annotations.number.number()
	public streetnumber: number;
}

@annotations.object.and('firstname', 'lastname')
class Person {
	@annotations.string.string()
	public firstname: string;

	@annotations.string.string()
	public lastname: string;

	@annotations.object.required()
	@annotations.object.validate(Address)
	public address: Address;
}

class Employee extends Person {
	@annotations.string.valid('Programmer', 'Assistant')
	public job: string;
}

describe('employee', () => {
	beforeEach(() => {
		let address = new Address();
		address.streetname = '2nd Street';
		address.streetnumber = 123;

		let employee = new Employee();
		employee.firstname = 'Thomas';
		employee.lastname = 'Cook';
		employee.job = 'Assistant';
		employee.address = address;

		this.error = null;
		this.test = employee;
	});

	it('should be valid', () => {
		this.error = Joi.validate(this.test).error;

		expect(this.error).toBeNull();
	});

	it('should not be valid (invalid address)', () => {
		delete this.test.address.streetname;

		this.error = Joi.validate(this.test).error;

		expect(this.error).not.toBeNull();
	});

	it('should not be valid (lastname missing)', () => {
		delete this.test.lastname;

		this.error = Joi.validate(this.test).error;

		expect(this.error).not.toBeNull();
	});

	it('should not be valid (lastname is of wrong type)', () => {
		this.test.lastname = 234;

		this.error = Joi.validate(this.test).error;

		expect(this.error).not.toBeNull();
	});

	it('should not be valid (invalid job)', () => {
		this.test.job = 'Plumber';

		this.error = Joi.validate(this.test).error;

		expect(this.error).not.toBeNull();
	});
});