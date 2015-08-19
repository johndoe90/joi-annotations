///<reference path="references.ts" />

import {Meta} from './meta';

export interface IAnyAnnotations {	
	strip();
	required();
	optional();
	forbidden();
	meta(meta: {});	
	allow(value: any);
	unit(name: string);
	example(value: any);
	label(name: string);
	raw(isRaw: boolean);
	options(options: {});
	description(desc: string);
	strict(isStrict: boolean);
	tags(tags: string|string[]);
    not(...value: (any|any[])[]);
	notes(notes: string|string[]);
    only(...value: (any|any[])[]);
    valid(...value: (any|any[])[]);
    equal(...value: (any|any[])[]);
    invalid(...value: (any|any[])[]);
    disallow(...value: (any|any[])[]); 
}

export class AnyAnnotations implements IAnyAnnotations {
	protected _type: string = 'any';

    public any() {
        return Meta.addMetadata({
            type: this._type
        });
    }

	public allow(value: any) {
        return Meta.addMetadata({
            type: this._type,
            validatorName: 'allow',
            validatorParameters: [value]
        });
    }

    public required() {
        return Meta.addMetadata({
            type: this._type,
            validatorName: 'required'
        });
    }

    public optional() {
        return Meta.addMetadata({
            type: this._type,
            validatorName: 'optional'
        });
    }

    public forbidden() {
        return Meta.addMetadata({
            type: this._type,
            validatorName: 'forbidden'
        });
    }

    public strip() {
        return Meta.addMetadata({
            type: this._type,
            validatorName: 'strip'
        });
    }

    public description(desc: string) {
        return Meta.addMetadata({
            type: this._type,
            validatorName: 'description',
            validatorParameters: [desc]
        });
    }

    public notes(notes: string|string[]) {
        return Meta.addMetadata({
            type: this._type,
            validatorName: 'notes',
            validatorParameters: [notes]
        });
    }

    public tags(tags: string|string[]) {
        return Meta.addMetadata({
            type: this._type,
            validatorName: 'tags',
            validatorParameters: [tags]
        });
    }

    public meta(meta: {}) {
        return Meta.addMetadata({
            type: this._type,
            validatorName: 'meta',
            validatorParameters: [meta]
        });
    }

    public example(value: any) {
        return Meta.addMetadata({
            type: this._type,
            validatorName: 'example',
            validatorParameters: [value]
        });
    }

    public unit(name: string) {
        return Meta.addMetadata({
            type: this._type,
            validatorName: 'unit',
            validatorParameters: [name]
        });
    }

    public options(options: {}) {
        return Meta.addMetadata({
            type: this._type,
            validatorName: 'options',
            validatorParameters: [options]
        });
    }

    public strict(isStrict: boolean) {
        return Meta.addMetadata({
            type: this._type,
            validatorName: 'strict',
            validatorParameters: [isStrict]
        });
    }

    public label(name: string) {
        return Meta.addMetadata({
            type: this._type,
            validatorName: 'label',
            validatorParameters: [name]
        });
    }

    public raw(isRaw: boolean) {
        return Meta.addMetadata({
            type: this._type,
            validatorName: 'raw',
            validatorParameters: [isRaw]
        });
    }

    public valid(...value: (any|any[])[]) {
        return Meta.addMetadata({
            type: this._type,
            validatorName: 'valid',
            validatorParameters: value
        });
    }

    public only(...value: (any|any[])[]) {
        return this.valid(value);
    }

    public equal(...value: (any|any[])[]) {
        return this.valid(value);
    }

    public invalid(...value: (any|any[])[]) {
        return Meta.addMetadata({
            type: this._type,
            validatorName: 'invalid',
            validatorParameters: value
        });
    }

    public disallow(...value: (any|any[])[]) {
        return this.invalid(value);
    }

    public not(...value: (any|any[])[]) {
        return this.invalid(value);
    }
}