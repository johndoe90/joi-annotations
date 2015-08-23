///<reference path="references.ts" />

import * as Joi from 'joi';
import {Meta} from './meta';
import {params} from './util';
import {AnyAnnotations} from './any';

export class StringAnnotations extends AnyAnnotations {
	public _type: string = 'string';

    public string() {
        return Meta.addMetadata({
            type: this._type
        });
    }

	public insensitive() {
        return Meta.addMetadata({
            type: this._type,
            validatorName: 'insensitive'
        });
    }

    public min(value: number|Joi.Reference, encoding?: string): any {
        return Meta.addMetadata({
            type: this._type,
            validatorName: 'min',
            validatorParameters: params(value, encoding)
        });
    }

    public max(value: number|Joi.Reference, encoding?: string) {
        return Meta.addMetadata({
            type: this._type,
            validatorName: 'max',
            validatorParameters: params(value, encoding)
        });
    }

    public creditCard() {
        return Meta.addMetadata({
            type: this._type,
            validatorName: 'creditCard'
        });
    }

    public length(limit: number|Joi.Reference, encoding?: string) {
        return Meta.addMetadata({
            type: this._type,
            validatorName: 'length',
            validatorParameters: params(limit, encoding)
        });
    }

    public regex(pattern: RegExp, name?: string) {
        return Meta.addMetadata({
            type: this._type,
            validatorName: 'regex',
            validatorParameters: params(pattern, name)
        });
    }

    public replace(pattern: RegExp, replacement?: string) {
        return Meta.addMetadata({
            type: this._type,
            validatorName: 'replace',
            validatorParameters: params(pattern, replacement)
        });
    }

    public alphanum() {
        return Meta.addMetadata({
            type: this._type,
            validatorName: 'alphanum'
        });
    }

    public token() {
        return Meta.addMetadata({
            type: this._type,
            validatorName: 'token'
        });
    }

    public email(options?: {errorLevel?: number, tldWhitelist?: string[], minDomainAtoms?: number}) {
        return Meta.addMetadata({
            type: this._type,
            validatorName: 'email',
            validatorParameters: params(options)
        });
    }

    public ip(options?: {version?: string, cidr?: string}) {
        return Meta.addMetadata({
            type: this._type,
            validatorName: 'ip',
            validatorParameters: params(options)
        });
    }

    public uri(options?: {scheme: string|RegExp|(string|RegExp)[]}) {
        return Meta.addMetadata({
            type: this._type,
            validatorName: 'uri',
            validatorParameters: params(options)
        });
    }

    public guid() {
        return Meta.addMetadata({
            type: this._type,
            validatorName: 'guid'
        });
    }

    public hex() {
        return Meta.addMetadata({
            type: this._type,
            validatorName: 'hex'
        });
    }

    public hostname() {
        return Meta.addMetadata({
            type: this._type,
            validatorName: 'hostname'
        });
    }

    public lowercase() {
        return Meta.addMetadata({
            type: this._type,
            validatorName: 'lowercase'
        });
    }

    public uppercase() {
        return Meta.addMetadata({
            type: this._type,
            validatorName: 'uppercase'
        });
    }

    public trim() {
        return Meta.addMetadata({
            type: this._type,
            validatorName: 'trim'
        });
    }

    public isoDate() {
        return Meta.addMetadata({
            type: this._type,
            validatorName: 'isoDate'
        });
    }
}