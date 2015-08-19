///<reference path="references.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var meta_1 = require('./meta');
var util_1 = require('./util');
var any_1 = require('./any');
var StringAnnotations = (function (_super) {
    __extends(StringAnnotations, _super);
    function StringAnnotations() {
        _super.apply(this, arguments);
        this._type = 'string';
    }
    StringAnnotations.prototype.string = function () {
        return meta_1.Meta.addMetadata({
            type: this._type
        });
    };
    StringAnnotations.prototype.insensitive = function () {
        return meta_1.Meta.addMetadata({
            type: this._type,
            validatorName: 'insensitive'
        });
    };
    StringAnnotations.prototype.min = function (value, encoding) {
        return meta_1.Meta.addMetadata({
            type: this._type,
            validatorName: 'min',
            validatorParameters: util_1.params(value, encoding)
        });
    };
    StringAnnotations.prototype.max = function (value, encoding) {
        return meta_1.Meta.addMetadata({
            type: this._type,
            validatorName: 'max',
            validatorParameters: util_1.params(value, encoding)
        });
    };
    StringAnnotations.prototype.creditCard = function () {
        return meta_1.Meta.addMetadata({
            type: this._type,
            validatorName: 'creditCard'
        });
    };
    StringAnnotations.prototype.length = function (limit, encoding) {
        return meta_1.Meta.addMetadata({
            type: this._type,
            validatorName: 'length',
            validatorParameters: util_1.params(limit, encoding)
        });
    };
    StringAnnotations.prototype.regex = function (pattern, name) {
        return meta_1.Meta.addMetadata({
            type: this._type,
            validatorName: 'regex',
            validatorParameters: util_1.params(pattern, name)
        });
    };
    StringAnnotations.prototype.replace = function (pattern, replacement) {
        return meta_1.Meta.addMetadata({
            type: this._type,
            validatorName: 'replace',
            validatorParameters: util_1.params(pattern, replacement)
        });
    };
    StringAnnotations.prototype.alphanum = function () {
        return meta_1.Meta.addMetadata({
            type: this._type,
            validatorName: 'alphanum'
        });
    };
    StringAnnotations.prototype.token = function () {
        return meta_1.Meta.addMetadata({
            type: this._type,
            validatorName: 'token'
        });
    };
    StringAnnotations.prototype.email = function (options) {
        return meta_1.Meta.addMetadata({
            type: this._type,
            validatorName: 'email',
            validatorParameters: util_1.params(options)
        });
    };
    StringAnnotations.prototype.ip = function (options) {
        return meta_1.Meta.addMetadata({
            type: this._type,
            validatorName: 'ip',
            validatorParameters: util_1.params(options)
        });
    };
    StringAnnotations.prototype.uri = function (options) {
        return meta_1.Meta.addMetadata({
            type: this._type,
            validatorName: 'uri',
            validatorParameters: util_1.params(options)
        });
    };
    StringAnnotations.prototype.guid = function () {
        return meta_1.Meta.addMetadata({
            type: this._type,
            validatorName: 'guid'
        });
    };
    StringAnnotations.prototype.hex = function () {
        return meta_1.Meta.addMetadata({
            type: this._type,
            validatorName: 'hex'
        });
    };
    StringAnnotations.prototype.hostname = function () {
        return meta_1.Meta.addMetadata({
            type: this._type,
            validatorName: 'hostname'
        });
    };
    StringAnnotations.prototype.lowercase = function () {
        return meta_1.Meta.addMetadata({
            type: this._type,
            validatorName: 'lowercase'
        });
    };
    StringAnnotations.prototype.uppercase = function () {
        return meta_1.Meta.addMetadata({
            type: this._type,
            validatorName: 'uppercase'
        });
    };
    StringAnnotations.prototype.trim = function () {
        return meta_1.Meta.addMetadata({
            type: this._type,
            validatorName: 'trim'
        });
    };
    StringAnnotations.prototype.isoDate = function () {
        return meta_1.Meta.addMetadata({
            type: this._type,
            validatorName: 'isoDate'
        });
    };
    return StringAnnotations;
})(any_1.AnyAnnotations);
exports.StringAnnotations = StringAnnotations;
