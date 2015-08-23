///<reference path="references.ts" />

import * as Joi from 'joi';
import {Meta} from './meta';
import {params} from './util';

export class AnyAnnotations {
	protected _type: string = 'any';

    public any() {
        return Meta.addMetadata({
            type: this._type
        });
    }

	public allow(...values: any[]) {
        return Meta.addMetadata({
            type: this._type,
            validatorName: 'allow',
            validatorParameters: [values]
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

    public valid(...value: any[]) {
        return Meta.addMetadata({
            type: this._type,
            validatorName: 'valid',
            validatorParameters: value
        });
    }

    public only(...value: any[]) {
        return this.valid(value);
    }

    public equal(...value: any[]) {
        return this.valid(value);
    }

    public invalid(...value: any[]) {
        return Meta.addMetadata({
            type: this._type,
            validatorName: 'invalid',
            validatorParameters: value
        });
    }

    public disallow(...value: any[]) {
        return this.invalid(value);
    }

    public not(...value: any[]) {
        return this.invalid(value);
    }

    public empty(schema: any) {
        return Meta.addMetadata({
            type: this._type,
            validatorName: 'empty',
            validatorParameters: [schema]
        });
    }

    public when(ref: string|Joi.Reference, options: Joi.WhenOptions) {
        return Meta.addMetadata({
            type: this._type,
            validatorName: 'when',
            validatorParameters: [ref, options]
        });
    }

    public default(value?: any, description?: string) {
        return Meta.addMetadata({
            type: this._type,
            validatorName: 'default',
            validatorParameters: params(value, description)
        });
    }
}